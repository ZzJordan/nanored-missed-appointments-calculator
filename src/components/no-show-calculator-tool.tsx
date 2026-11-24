'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import type { Language } from '@/lib/translations'
import { NO_SHOW_EXAMPLES, checkNoShow, formatEuros, formatNumber, parseNumber, type NoShowExample, type NoShowFields, type NoShowInput } from '@/lib/tools/calculators'
import { trackEvent } from '@/lib/analytics'
import { NumberField } from './calc-field'

/**
 * Calculadora del coste de las citas perdidas. Todo lo pone el usuario; los ejemplos por sector solo rellenan
 * el formulario y se marcan como ejemplo. Sin tasas de referencia ni promesas de reducción. Nada sale del navegador.
 */
const copy = {
  es: {
    exampleLabel: 'Rellenar con un ejemplo (opcional)',
    exampleNone: 'Sin ejemplo: pongo mis datos',
    examples: { dental: 'Ejemplo: clínica dental', fisio: 'Ejemplo: fisioterapia', veterinaria: 'Ejemplo: veterinaria', peluqueria: 'Ejemplo: peluquería' } satisfies Record<NoShowExample, string>,
    exampleNotice: 'Son valores de ejemplo para ver cómo funciona, no datos reales ni medias del sector. Cámbialos por los de tu negocio.',
    fields: {
      appointmentsPerWeek: ['Citas a la semana', 'Las que das en una semana normal, contando todos los profesionales.', 'citas'],
      noShowRate: ['Porcentaje de ausencias', 'De cada 100 citas, cuántas no vienen sin avisar. Míralo en tu agenda de las últimas semanas.', '%'],
      revenuePerAppointment: ['Ingreso medio por cita', 'Lo que factura de media una cita, sin IVA.', '€'],
      weeksPerYear: ['Semanas que trabajas al año', 'Descuenta vacaciones y cierres.', 'sem.'],
      recoveryRate: ['Porcentaje que crees que podrías recuperar', 'Tu propia estimación de cuántas de esas ausencias evitarías o rellenarías avisando antes. Si no lo sabes, déjalo vacío.', '%'],
    } satisfies Record<NoShowFields, [string, string, string]>,
    resultTitle: 'Lo que te cuestan las citas perdidas',
    waiting: 'Rellena los cuatro primeros datos para ver el resultado.',
    perMonth: 'Al mes',
    perYear: 'Al año',
    missed: 'citas perdidas',
    lost: 'que dejas de facturar',
    how: (a: string, r: string, w: string, m: string, rev: string, lost: string) => `Cálculo: ${a} citas × ${r} % × ${w} semanas = ${m} citas perdidas al año; × ${rev} = ${lost} al año. Al mes es la doceava parte.`,
    recoveryTitle: (r: string) => `Si recuperases el ${r} % de esas citas`,
    recovered: 'citas recuperadas',
    recoveredMoney: 'que volverías a facturar',
    recoveryNote: 'Es el resultado de aplicar tu porcentaje: no es una previsión ni una promesa.',
    noRecovery: 'Si quieres ver un escenario de recuperación, pon tu propio porcentaje en el último campo.',
    privacy: 'Los datos que escribes no salen de tu navegador.',
  },
  en: {
    exampleLabel: 'Fill in with an example (optional)',
    exampleNone: 'No example: I will use my own figures',
    examples: { dental: 'Example: dental clinic', fisio: 'Example: physiotherapy', veterinaria: 'Example: vet', peluqueria: 'Example: hair salon' } satisfies Record<NoShowExample, string>,
    exampleNotice: 'These are example values to show how it works, not real data or sector averages. Replace them with your own business figures.',
    fields: {
      appointmentsPerWeek: ['Appointments per week', 'The ones you have in a normal week, counting every practitioner.', 'appts'],
      noShowRate: ['No-show rate', 'Out of every 100 appointments, how many do not turn up without warning. Check your diary for the last few weeks.', '%'],
      revenuePerAppointment: ['Average revenue per appointment', 'What an appointment brings in on average, excluding VAT.', '€'],
      weeksPerYear: ['Weeks you work per year', 'Leave out holidays and closures.', 'wks'],
      recoveryRate: ['Share you think you could recover', 'Your own estimate of how many of those no-shows you would avoid or refill by reminding people earlier. If you do not know, leave it empty.', '%'],
    } satisfies Record<NoShowFields, [string, string, string]>,
    resultTitle: 'What missed appointments cost you',
    waiting: 'Fill in the first four fields to see the result.',
    perMonth: 'Per month',
    perYear: 'Per year',
    missed: 'missed appointments',
    lost: 'in lost revenue',
    how: (a: string, r: string, w: string, m: string, rev: string, lost: string) => `Calculation: ${a} appointments × ${r}% × ${w} weeks = ${m} missed appointments a year; × ${rev} = ${lost} a year. Per month is one twelfth.`,
    recoveryTitle: (r: string) => `If you recovered ${r}% of those appointments`,
    recovered: 'appointments recovered',
    recoveredMoney: 'in revenue regained',
    recoveryNote: 'This is simply your percentage applied: it is not a forecast or a promise.',
    noRecovery: 'To see a recovery scenario, enter your own percentage in the last field.',
    privacy: 'The figures you type never leave your browser.',
  },
} as const

const EMPTY: NoShowInput = { appointmentsPerWeek: '', noShowRate: '', revenuePerAppointment: '', weeksPerYear: '', recoveryRate: '' }
const FIELDS: NoShowFields[] = ['appointmentsPerWeek', 'noShowRate', 'revenuePerAppointment', 'weeksPerYear', 'recoveryRate']

export function NoShowCalculatorTool({ language }: { language: Language }) {
  const t = copy[language]
  const id = useId()
  const [values, setValues] = useState<NoShowInput>(EMPTY)
  const [touched, setTouched] = useState<Partial<Record<NoShowFields, boolean>>>({})
  const [example, setExample] = useState<NoShowExample | ''>('')
  const { errors, result } = useMemo(() => checkNoShow(values), [values])
  const tracked = useRef(false)

  useEffect(() => {
    if (result && !tracked.current) { tracked.current = true; trackEvent('tool_action', { tool: 'citas_perdidas', action: 'calculate' }) }
  }, [result])

  const set = (k: NoShowFields, v: string) => { setValues((prev) => ({ ...prev, [k]: v })); if (k !== 'recoveryRate') setExample('') }
  const loadExample = (key: NoShowExample | '') => {
    setExample(key)
    if (!key) return
    setValues((prev) => ({ ...prev, ...NO_SHOW_EXAMPLES[key] }))
    trackEvent('tool_action', { tool: 'citas_perdidas', action: 'load_example' })
  }
  const eur = (n: number) => formatEuros(n, language)
  const num = (n: number) => formatNumber(n, language)

  return (
    <div className="tool-panel">
      <form className="grid gap-5" onSubmit={(e) => e.preventDefault()} noValidate>
        <div>
          <label className="lead-label" htmlFor={`${id}-example`}>{t.exampleLabel}</label>
          <select id={`${id}-example`} className="lead-input" value={example} onChange={(e) => loadExample(e.target.value as NoShowExample | '')}>
            <option value="">{t.exampleNone}</option>
            {(Object.keys(NO_SHOW_EXAMPLES) as NoShowExample[]).map((k) => <option key={k} value={k}>{t.examples[k]}</option>)}
          </select>
          {example ? <p className="tool-warning mt-3" role="status">{t.exampleNotice}</p> : null}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {FIELDS.map((k) => (
            <NumberField
              key={k} id={`${id}-${k}`} label={t.fields[k][0]} hint={t.fields[k][1]} unit={t.fields[k][2]} language={language}
              value={values[k]} onChange={(v) => set(k, v)} onBlur={() => setTouched((p) => ({ ...p, [k]: true }))}
              error={errors[k]} showError={Boolean(touched[k] || values[k].trim())} optional={k === 'recoveryRate'}
            />
          ))}
        </div>
        <p className="tool-hint">{t.privacy}</p>
      </form>

      <section className="tool-result" aria-labelledby={`${id}-result`} aria-live="polite">
        <h3 id={`${id}-result`} className="tool-subtitle">{t.resultTitle}</h3>
        {!result ? <p className="tool-hint">{t.waiting}</p> : (
          <>
            <dl className="tool-figures">
              <div><dt>{t.perMonth}</dt><dd><strong>{eur(result.lostPerMonth)}</strong> {t.lost}<br />{num(result.missedPerMonth)} {t.missed}</dd></div>
              <div><dt>{t.perYear}</dt><dd><strong>{eur(result.lostPerYear)}</strong> {t.lost}<br />{num(result.missedPerYear)} {t.missed}</dd></div>
            </dl>
            <p className="tool-hint">{t.how(values.appointmentsPerWeek.trim(), values.noShowRate.trim(), values.weeksPerYear.trim(), num(result.missedPerYear), formatEuros(parseNumber(values.revenuePerAppointment) ?? 0, language, 2), eur(result.lostPerYear))}</p>
            {result.recovery ? (
              <div className="mt-6">
                <h4 className="tool-subtitle">{t.recoveryTitle(num(result.recovery.rate))}</h4>
                <dl className="tool-figures">
                  <div><dt>{t.perMonth}</dt><dd><strong>{eur(result.recovery.perMonth)}</strong> {t.recoveredMoney}<br />{num(result.recovery.appointmentsPerMonth)} {t.recovered}</dd></div>
                  <div><dt>{t.perYear}</dt><dd><strong>{eur(result.recovery.perYear)}</strong> {t.recoveredMoney}<br />{num(result.recovery.appointmentsPerYear)} {t.recovered}</dd></div>
                </dl>
                <p className="tool-hint">{t.recoveryNote}</p>
              </div>
            ) : <p className="tool-hint mt-4">{t.noRecovery}</p>}
          </>
        )}
      </section>
    </div>
  )
}
