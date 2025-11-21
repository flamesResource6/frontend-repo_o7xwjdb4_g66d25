import Header from './components/Header'
import Hero from './components/Hero'
import Systems from './components/Systems'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 relative">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-700/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-600/10 blur-3xl" />
      </div>

      <Header />
      <main>
        <Hero />
        <Systems />

        {/* About */}
        <section id="acerca" className="relative bg-emerald-950">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-white">Principios de diseño</h3>
              <ul className="mt-4 space-y-3 text-emerald-100/80">
                <li>• Sobriedad institucional con enfoque en accesibilidad</li>
                <li>• Paleta verde gubernamental con alto contraste</li>
                <li>• Componentes claros y navegación directa</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-800/30 bg-emerald-900/30 p-6 text-emerald-100/80">
              Este portal funciona como índice para los sistemas clave de la institución. Puede conectarse con autenticación, directorio activo y paneles de control.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
