import { Menu } from 'lucide-react'

function Header() {
  return (
    <header className="relative z-10 w-full border-b border-emerald-900/20 bg-emerald-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-700 ring-1 ring-white/10 flex items-center justify-center text-white font-bold">IN</div>
          <div>
            <p className="text-sm text-emerald-100/80">Plataforma Institucional</p>
            <h1 className="text-lg font-semibold text-white tracking-tight">Integra</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-emerald-100/80">
          <a href="#sistemas" className="hover:text-white transition-colors">Sistemas</a>
          <a href="#acerca" className="hover:text-white transition-colors">Acerca</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-emerald-100/80 hover:text-white">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}

export default Header
