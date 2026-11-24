// Textos de la página (ES/EN). Generados a partir de los de nanoredlabs.com.
export interface PageContent {
  metaTitle: string; metaDescription: string; eyebrow: string; h1: string; answer: string; toolTitle: string; howToTitle: string
  howToSteps: [string, string][]
  sections: { title: string; paragraphs?: string[]; list?: string[] }[]
  limitsTitle: string; limits: string[]; faqTitle: string; faqs: [string, string][]
}

export const content: Record<'es' | 'en', PageContent> = {
  "es": {
    "metaTitle": "Calculadora de citas perdidas: cuánto te cuestan | NanoRed Labs",
    "metaDescription": "Calcula gratis cuántas citas pierdes por ausencias sin avisar y cuánto dinero supone al mes y al año. Con tus datos, en tu navegador y sin registrarte.",
    "eyebrow": "Herramienta gratuita · Sin registro",
    "h1": "Calculadora de citas perdidas",
    "answer": "Esta calculadora gratuita de NanoRed Labs (Málaga) te dice cuántas citas pierdes por clientes o pacientes que no se presentan y cuánto dinero dejas de facturar al mes y al año. Se calcula con tus propios datos (citas a la semana, porcentaje de ausencias, ingreso medio por cita y semanas de trabajo) y, si quieres, con el porcentaje que creas que podrías recuperar. No usa cifras de estudios ni promete reducciones, y funciona en tu navegador: los datos no se envían a ningún servidor.",
    "toolTitle": "Calcula lo que te cuestan las ausencias",
    "howToTitle": "Cómo se usa",
    "howToSteps": [
      [
        "Mira tu agenda",
        "Cuenta las citas de una semana normal y cuántas de las últimas semanas no se presentaron sin avisar. Con eso tienes tu porcentaje de ausencias."
      ],
      [
        "Escribe tus datos",
        "Citas a la semana, porcentaje de ausencias, ingreso medio por cita (sin IVA) y semanas que trabajas al año. Si solo quieres ver cómo funciona, elige un ejemplo de sector y cámbialo después."
      ],
      [
        "Lee el resultado",
        "Verás las citas perdidas y el dinero que dejas de facturar al mes y al año, con el cálculo a la vista para que puedas comprobarlo."
      ],
      [
        "Prueba un escenario (opcional)",
        "Si crees que avisando antes podrías recuperar parte de esas citas, pon tu propio porcentaje y verás qué supondría. Es tu estimación, no una promesa."
      ]
    ],
    "sections": [
      {
        "title": "Cómo se calcula",
        "paragraphs": [
          "Citas perdidas al año = citas a la semana × porcentaje de ausencias × semanas de trabajo al año. Dinero perdido al año = citas perdidas × ingreso medio por cita. Las cifras mensuales son la doceava parte.",
          "Es una cuenta simple a propósito: no incluye el tiempo del profesional que se queda parado ni el coste de volver a llenar el hueco, ni descuenta las citas que sí se recolocan. Si en tu negocio el hueco se rellena casi siempre, la pérdida real será menor; si el profesional cobra igual aunque no venga nadie, será mayor."
        ]
      },
      {
        "title": "De dónde sacar tus datos",
        "list": [
          "Agenda o programa de citas: casi todos permiten marcar «no presentado». Si no lo usas, apúntalo durante tres o cuatro semanas.",
          "Cuenta solo las ausencias sin aviso o avisadas tan tarde que no pudiste dar el hueco a nadie.",
          "Ingreso medio por cita: lo facturado en un mes dividido entre las citas atendidas ese mes.",
          "Semanas al año: 52 menos vacaciones, cierres y festivos largos."
        ]
      },
      {
        "title": "Qué suele ayudar a reducir las ausencias",
        "list": [
          "Un recordatorio el día antes en el canal que el cliente lee (normalmente WhatsApp), con una forma fácil de confirmar o cambiar.",
          "Que cambiar la cita sea más fácil que no ir: responder al mensaje en vez de tener que llamar en horario.",
          "Una lista de clientes que quieren adelantar su cita, para ofrecer los huecos que se liberan.",
          "Cuánto ayuda cada medida depende de tu negocio y de tus clientes: mídelo con tu propia agenda antes y después."
        ]
      }
    ],
    "limitsTitle": "Lo que conviene saber",
    "limits": [
      "El resultado es tan bueno como los datos que pongas: con un porcentaje de ausencias estimado a ojo, el resultado también será una estimación.",
      "Los ejemplos por sector son valores inventados para enseñar cómo funciona: no son medias del sector ni datos de ningún estudio.",
      "No incluye costes indirectos (tiempo parado, material preparado, clientes que no vuelven) ni las citas que consigues recolocar.",
      "El escenario de recuperación aplica el porcentaje que tú pones; no es una previsión de lo que conseguirá ninguna herramienta."
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      [
        "¿Cómo calculo cuánto me cuestan las citas perdidas?",
        "Multiplica tus citas a la semana por el porcentaje de ausencias y por las semanas que trabajas al año: son las citas perdidas. Multiplica ese número por lo que factura de media una cita y tendrás el dinero que dejas de ingresar al año. La calculadora lo hace por ti y lo divide por meses."
      ],
      [
        "¿Qué porcentaje de ausencias es normal?",
        "Depende mucho del sector, de la zona, de cuánto tiempo antes se reserva y de si hay recordatorios. Por eso la calculadora no da un valor «normal»: lo útil es medir el tuyo en tu agenda durante unas semanas."
      ],
      [
        "¿Los ejemplos de clínica dental, fisio, veterinaria y peluquería son datos reales?",
        "No. Son valores de ejemplo para enseñar cómo funciona la calculadora y van marcados como tales. No son medias de esos sectores ni salen de ningún estudio. Cámbialos por los tuyos."
      ],
      [
        "¿Cuánto puedo reducir las ausencias con recordatorios?",
        "No damos una cifra porque depende de cada negocio y de sus clientes. Por eso el porcentaje de recuperación lo pones tú: la calculadora solo te enseña qué supondría. La forma fiable de saberlo es medir tu agenda antes y después de empezar a recordar las citas."
      ],
      [
        "¿Se guardan o se envían mis datos?",
        "No. El cálculo se hace con JavaScript en tu navegador. Lo que escribes no se envía a ningún servidor ni se guarda; la analítica de la web solo registra que se ha usado la calculadora, nunca tus cifras."
      ],
      [
        "¿Sirve para cualquier negocio con citas?",
        "Sí: clínicas, dentistas, fisioterapia, veterinarias, psicología, peluquerías, estética, reparación de vehículos, academias o asesorías. Basta con que trabajes con citas y sepas cuántas se pierden."
      ],
      [
        "¿Debo poner el ingreso con o sin IVA?",
        "Sin IVA, porque el IVA no es dinero tuyo. Si prefieres ver el margen en lugar de la facturación, pon lo que te queda de media por cita después de los costes directos."
      ]
    ]
  },
  "en": {
    "metaTitle": "Missed appointments calculator: what no-shows cost | NanoRed Labs",
    "metaDescription": "Work out for free how many appointments you lose to no-shows and how much revenue that means per month and per year. Your figures, in your browser, no sign-up.",
    "eyebrow": "Free tool · No sign-up",
    "h1": "Missed appointments calculator",
    "answer": "This free calculator by NanoRed Labs (Málaga, Spain) tells you how many appointments you lose to customers or patients who do not turn up, and how much revenue that costs you per month and per year. It uses your own figures (appointments per week, no-show rate, average revenue per appointment and working weeks) and, if you like, the share you think you could recover. It uses no study figures and promises no reductions, and it runs in your browser: your data is never sent to a server.",
    "toolTitle": "Work out what no-shows cost you",
    "howToTitle": "How to use it",
    "howToSteps": [
      [
        "Check your diary",
        "Count the appointments in a normal week and how many in recent weeks did not turn up without warning. That gives you your no-show rate."
      ],
      [
        "Enter your figures",
        "Appointments per week, no-show rate, average revenue per appointment (excluding VAT) and weeks you work per year. If you just want to see how it works, pick a sector example and change it afterwards."
      ],
      [
        "Read the result",
        "You will see the missed appointments and the revenue lost per month and per year, with the calculation shown so you can check it."
      ],
      [
        "Try a scenario (optional)",
        "If you think earlier reminders could recover some of those appointments, enter your own percentage to see what it would mean. It is your estimate, not a promise."
      ]
    ],
    "sections": [
      {
        "title": "How it is calculated",
        "paragraphs": [
          "Missed appointments per year = appointments per week × no-show rate × working weeks per year. Revenue lost per year = missed appointments × average revenue per appointment. Monthly figures are one twelfth.",
          "It is deliberately simple: it does not include the practitioner’s idle time or the cost of refilling the slot, and it does not subtract appointments you manage to rebook. If the slot is almost always refilled in your business, the real loss will be lower; if staff are paid whether or not anyone turns up, it will be higher."
        ]
      },
      {
        "title": "Where to get your figures",
        "list": [
          "Your diary or booking software: most let you mark “no-show”. If yours does not, note it down for three or four weeks.",
          "Only count no-shows without notice, or with notice so late you could not offer the slot to anyone.",
          "Average revenue per appointment: a month’s revenue divided by the appointments attended that month.",
          "Weeks per year: 52 minus holidays, closures and long bank holidays."
        ]
      },
      {
        "title": "What tends to help reduce no-shows",
        "list": [
          "A reminder the day before on the channel the customer actually reads (usually WhatsApp), with an easy way to confirm or change.",
          "Making it easier to rearrange than to not turn up: replying to the message instead of having to call during opening hours.",
          "A list of customers who want an earlier appointment, so freed-up slots can be offered.",
          "How much each measure helps depends on your business and your customers: measure it in your own diary before and after."
        ]
      }
    ],
    "limitsTitle": "Good to know",
    "limits": [
      "The result is only as good as the figures you enter: with a rough guess at the no-show rate, the result is also an estimate.",
      "The sector examples are made-up values to show how it works: they are not sector averages or data from any study.",
      "It does not include indirect costs (idle time, materials prepared, customers who do not come back) or appointments you rebook.",
      "The recovery scenario applies the percentage you enter; it is not a forecast of what any tool will achieve."
    ],
    "faqTitle": "Frequently asked questions",
    "faqs": [
      [
        "How do I calculate what missed appointments cost me?",
        "Multiply your appointments per week by the no-show rate and by the weeks you work per year: those are your missed appointments. Multiply that by your average revenue per appointment to get the revenue lost per year. The calculator does it for you and splits it by month."
      ],
      [
        "What is a normal no-show rate?",
        "It varies a lot by sector, area, how far ahead people book and whether there are reminders. That is why the calculator does not give a “normal” value: what is useful is measuring yours in your diary for a few weeks."
      ],
      [
        "Are the dental, physio, vet and salon examples real data?",
        "No. They are example values to show how the calculator works and are labelled as such. They are not averages for those sectors and do not come from any study. Replace them with your own."
      ],
      [
        "How much can reminders reduce no-shows?",
        "We do not give a figure because it depends on each business and its customers. That is why you enter the recovery percentage yourself: the calculator only shows what it would mean. The reliable way to know is to measure your diary before and after you start sending reminders."
      ],
      [
        "Is my data stored or sent anywhere?",
        "No. The calculation runs with JavaScript in your browser. What you type is not sent to any server or stored; the website analytics only records that the calculator was used, never your figures."
      ],
      [
        "Does it work for any appointment-based business?",
        "Yes: clinics, dentists, physiotherapy, vets, therapists, hair salons, beauty, garages, academies or advisers. All you need is to work with appointments and know how many are missed."
      ],
      [
        "Should I enter revenue with or without VAT?",
        "Without VAT, because VAT is not your money. If you would rather see margin than revenue, enter what you keep on average per appointment after direct costs."
      ]
    ]
  }
}

export const meta = {
  "site": "https://nanoredlabs.com",
  "repo": "https://github.com/ZzJordan/nanored-missed-appointments-calculator",
  "urls": {
    "es": "https://nanoredlabs.com/herramientas/calculadora-citas-perdidas",
    "en": "https://nanoredlabs.com/en/tools/missed-appointments-calculator"
  },
  "disclaimer": {
    "es": "NanoRed Labs (también escrito «Nano Red Labs») es el negocio de Jordan Moyano en Málaga. No tiene relación con Nano RED Biotechnology ni con otras empresas de nombre parecido.",
    "en": "NanoRed Labs (also written “Nano Red Labs”) is Jordan Moyano’s business in Málaga. It is not related to Nano RED Biotechnology or to other companies with a similar name."
  }
}
