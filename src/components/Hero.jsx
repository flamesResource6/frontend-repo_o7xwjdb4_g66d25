function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-emerald-950 to-emerald-950" />
      <div className="absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]" />

      {/* Grid accent */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-900/30 px-3 py-1 text-xs text-emerald-200/80">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Portal de inicio gubernamental
        </span>
        <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
          Integra Plataforma
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-emerald-100/80 text-lg">
          Un punto de entrada unificado para Nominas, Auditorías e Ingresos. Diseño sobrio, moderno y accesible.
        </p>
      </div>
    </section>
  )
}

export default Hero
