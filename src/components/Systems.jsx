import { FileSpreadsheet, ShieldCheck, Wallet, ArrowRight } from 'lucide-react'

const systems = [
  {
    name: 'Integra Nóminas',
    description: 'Gestión integral de pagos, incidencias y reportes del personal.',
    icon: FileSpreadsheet,
    href: '#nominas'
  },
  {
    name: 'Integra Auditorías',
    description: 'Planeación, ejecución y seguimiento de auditorías con trazabilidad.',
    icon: ShieldCheck,
    href: '#auditorias'
  },
  {
    name: 'Integra Ingresos',
    description: 'Control y recaudación con indicadores y conciliaciones.',
    icon: Wallet,
    href: '#ingresos'
  }
]

function Systems() {
  return (
    <section id="sistemas" className="relative bg-emerald-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">Sistemas</h3>
        <p className="mt-2 text-emerald-100/70 max-w-2xl">Seleccione el módulo para ingresar. Puede integrarse con autenticación institucional.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s) => (
            <a key={s.name} href={s.href} className="group relative rounded-xl border border-emerald-800/30 bg-emerald-900/30 p-6 hover:bg-emerald-900/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600/20 ring-1 ring-emerald-400/20 text-emerald-300">
                  <s.icon size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold tracking-tight">{s.name}</h4>
                  <p className="mt-1 text-sm text-emerald-100/70">{s.description}</p>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-emerald-300 group-hover:gap-3 transition-all">
                <span>Entrar</span>
                <ArrowRight size={16} />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 group-hover:ring-emerald-400/20" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Systems
