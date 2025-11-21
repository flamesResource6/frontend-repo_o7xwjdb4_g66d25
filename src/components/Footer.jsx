function Footer() {
  return (
    <footer id="contacto" className="bg-emerald-950/80 border-t border-emerald-800/30">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-sm text-emerald-100/80">Gobierno Municipal • Plataforma Integra</p>
          <p className="text-xs text-emerald-100/60">© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
        <div className="flex gap-4 text-emerald-100/80 text-sm">
          <a href="#acerca" className="hover:text-white">Aviso de Privacidad</a>
          <span className="opacity-30">•</span>
          <a href="#acerca" className="hover:text-white">Términos</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
