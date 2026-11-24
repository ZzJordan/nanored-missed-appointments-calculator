import { describe, expect, it } from 'vitest'
import { checkNoShow, noShowCost, parseNumber } from '@/lib/tools/calculators'

describe('calculadora de citas perdidas', () => {
  it('interpreta decimales con coma o punto', () => {
    expect(parseNumber('12,5')).toBe(12.5)
    expect(parseNumber('12.5')).toBe(12.5)
    expect(parseNumber('abc')).toBeNull()
  })
  it('calcula citas y dinero perdidos con la fórmula visible', () => {
    const r = noShowCost({ appointmentsPerWeek: 50, noShowRate: 10, revenuePerAppointment: 40, weeksPerYear: 46, recoveryRate: null })
    expect(r.missedPerYear).toBeCloseTo(5 * 46)
    expect(r.lostPerYear).toBeCloseTo(5 * 46 * 40)
    expect(r.lostPerMonth).toBeCloseTo((5 * 46 * 40) / 12)
  })
  it('valida los campos y explica el error', () => {
    const { errors, result } = checkNoShow({ appointmentsPerWeek: '', noShowRate: '120', revenuePerAppointment: '-3', weeksPerYear: '60', recoveryRate: '' })
    expect(result).toBeNull()
    expect(errors.appointmentsPerWeek).toBe('required')
    expect(errors.noShowRate).toBe('over_100')
    expect(errors.revenuePerAppointment).toBe('negative')
    expect(errors.weeksPerYear).toBe('over_53')
  })
})
