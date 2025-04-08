import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#4A4A4A]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#D77A61]/20 bg-[#F5F0E6]/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif font-bold text-[#D77A61]">Coroneo</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-[#D77A61] transition-colors">
              Inicio
            </Link>
            <Link href="#sobre-coroneo" className="text-sm font-medium hover:text-[#D77A61] transition-colors">
              Sobre Coroneo
            </Link>
            <Link href="#artesanos" className="text-sm font-medium hover:text-[#D77A61] transition-colors">
              Artesanos
            </Link>
            <Link href="#productos" className="text-sm font-medium hover:text-[#D77A61] transition-colors">
              Productos
            </Link>
            <Link href="#visitanos" className="text-sm font-medium hover:text-[#D77A61] transition-colors">
              Visítanos
            </Link>
            <Link href="#sobre-mi" className="text-sm font-medium hover:text-[#D77A61] transition-colors">
              Sobre Mí
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex border-[#D77A61] text-[#D77A61] hover:bg-[#D77A61] hover:text-white"
          >
            Contacto
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="altura.webp/?height=800&width=1600"
              alt="Artesano tejiendo"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E6]/30 to-[#F5F0E6]"></div>
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl space-y-6 animate-fade-in">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#4A4A4A]">
                Donde la tradición se teje en cada hilo
              </h1>
              <p className="text-lg md:text-xl text-[#4A4A4A]/80 max-w-2xl">
                Descubre la artesanía viva de Coroneo, donde generaciones de artesanos han perfeccionado el arte de
                tejer historias con lana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-[#D77A61] hover:bg-[#D77A61]/90 text-white">Conoce a nuestros artesanos</Button>
                <Button variant="outline" className="border-[#76877D] text-[#76877D] hover:bg-[#76877D]/10">
                  Descubre nuestra historia
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Coroneo */}
        <section id="sobre-coroneo" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-[#F5F0E6] px-3 py-1 text-sm text-[#D77A61] font-medium">
                  Nuestra Historia
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A4A]">
                  Un legado de tradición y artesanía
                </h2>
                <p className="text-[#4A4A4A]/80">
                  Coroneo, ubicado en el sureste de Guanajuato, es reconocido por su rica tradición textil que se
                  remonta a generaciones. Nuestros artesanos han preservado técnicas ancestrales, combinándolas con
                  innovación para crear piezas únicas que cuentan historias.
                </p>
                <p className="text-[#4A4A4A]/80">
                  La lana, obtenida de ovejas criadas localmente, se transforma en hermosos sarapes, cobijas y prendas
                  que reflejan la identidad cultural de nuestra comunidad y el espíritu creativo de nuestro pueblo.
                </p>
                <Button variant="outline" className="border-[#D77A61] text-[#D77A61] hover:bg-[#D77A61]/10">
                  Leer más sobre nuestra historia
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="coroneo-guanajuato.jpg?height=400&width=600"
                  alt="Paisaje de Coroneo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Artesanos */}
        <section id="artesanos" className="py-16 md:py-24 bg-[#F5F0E6]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#D77A61] font-medium">
                Nuestros Maestros
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A4A]">
                Artesanos que mantienen viva la tradición
              </h2>
              <p className="text-[#4A4A4A]/80">
                Conoce a las manos expertas detrás de cada pieza, artesanos que han dedicado su vida a perfeccionar el
                arte del tejido.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Artesano 1 */}
              <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Artesano trabajando"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#4A4A4A] group-hover:text-[#D77A61] transition-colors">
                    Doña María Hernández
                  </h3>
                  <p className="text-sm text-[#4A4A4A]/70">
                    Con más de 50 años tejiendo, Doña María es maestra en la técnica tradicional de sarapes con patrones
                    geométricos.
                  </p>
                  <Button variant="link" className="p-0 text-[#445E93] hover:text-[#445E93]/80">
                    Conocer su historia →
                  </Button>
                </div>
              </div>

              {/* Artesano 2 */}
              <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Artesano trabajando"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#4A4A4A] group-hover:text-[#D77A61] transition-colors">
                    Don José Ramírez
                  </h3>
                  <p className="text-sm text-[#4A4A4A]/70">
                    Especialista en telar de pedal, Don José crea cobijas de lana con diseños que combinan tradición e
                    innovación.
                  </p>
                  <Button variant="link" className="p-0 text-[#445E93] hover:text-[#445E93]/80">
                    Conocer su historia →
                  </Button>
                </div>
              </div>

              {/* Artesano 3 */}
              <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Artesano trabajando"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#4A4A4A] group-hover:text-[#D77A61] transition-colors">
                    Carmen Sánchez
                  </h3>
                  <p className="text-sm text-[#4A4A4A]/70">
                    Joven artesana que fusiona técnicas tradicionales con diseños contemporáneos, creando piezas únicas.
                  </p>
                  <Button variant="link" className="p-0 text-[#445E93] hover:text-[#445E93]/80">
                    Conocer su historia →
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-[#76877D] hover:bg-[#76877D]/90 text-white">Ver todos los artesanos</Button>
            </div>
          </div>
        </section>

        {/* Productos */}
        <section id="productos" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-[#F5F0E6] px-3 py-1 text-sm text-[#D77A61] font-medium">
                Nuestras Creaciones
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A4A]">
                Productos tejidos con tradición
              </h2>
              <p className="text-[#4A4A4A]/80">
                Cada pieza cuenta una historia, tejida con técnicas transmitidas de generación en generación.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="relative rounded-lg overflow-hidden shadow-lg h-[500px] group">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Sarapes coloridos"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">Sarapes</h3>
                  <p className="text-white/90 mb-4">
                    Prendas tradicionales con patrones geométricos y colores vibrantes que reflejan nuestra identidad
                    cultural.
                  </p>
                  <Button className="w-fit bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40">
                    Descubrir sarapes
                  </Button>
                </div>
              </div>

              <div className="grid grid-rows-2 gap-8">
                <div className="relative rounded-lg overflow-hidden shadow-lg h-[230px] group">
                  <Image
                    src="/placeholder.svg?height=230&width=500"
                    alt="Cobijas de lana"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="font-serif text-xl font-bold text-white mb-1">Cobijas</h3>
                    <p className="text-white/90 text-sm mb-3">Cálidas y duraderas, tejidas con lana natural.</p>
                    <Button
                      size="sm"
                      className="w-fit bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40"
                    >
                      Ver cobijas
                    </Button>
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-lg h-[230px] group">
                  <Image
                    src="/placeholder.svg?height=230&width=500"
                    alt="Accesorios de lana"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="font-serif text-xl font-bold text-white mb-1">Accesorios</h3>
                    <p className="text-white/90 text-sm mb-3">Bolsas, tapetes y decoración para el hogar.</p>
                    <Button
                      size="sm"
                      className="w-fit bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40"
                    >
                      Explorar accesorios
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-[#D77A61] hover:bg-[#D77A61]/90 text-white">Ver catálogo completo</Button>
            </div>
          </div>
        </section>

        {/* Proceso de Tejido */}
        <section className="py-16 md:py-24 bg-[#F5F0E6]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Proceso de hilado"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md mt-8">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Teñido natural"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Tejido en telar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md mt-8">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Producto terminado"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#D77A61] font-medium">
                  Nuestro Proceso
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A4A]">
                  Del vellón al tejido: un arte ancestral
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D77A61] text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-[#4A4A4A]">Selección de la lana</h3>
                      <p className="text-[#4A4A4A]/80">
                        Escogemos cuidadosamente la mejor lana de ovejas criadas localmente.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D77A61] text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-[#4A4A4A]">Hilado tradicional</h3>
                      <p className="text-[#4A4A4A]/80">
                        Transformamos la lana en hilo mediante técnicas manuales ancestrales.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D77A61] text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-[#4A4A4A]">Teñido natural</h3>
                      <p className="text-[#4A4A4A]/80">
                        Utilizamos tintes naturales extraídos de plantas, flores y minerales locales.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D77A61] text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-[#4A4A4A]">Tejido en telar</h3>
                      <p className="text-[#4A4A4A]/80">
                        Cada pieza es tejida a mano en telares tradicionales, algunos con más de 100 años.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="bg-[#76877D] hover:bg-[#76877D]/90 text-white">Ver demostración en video</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Visítanos */}
        <section id="visitanos" className="py-16 md:py-24 bg-[#445E93] text-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white font-medium">
                  Visítanos
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Vive la experiencia Coroneo</h2>
                <p className="text-white/80">
                  Te invitamos a conocer nuestro pueblo, interactuar con los artesanos y aprender sobre el proceso de
                  tejido tradicional.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#D77A61] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Ubicación</h3>
                      <p className="text-white/80">
                        Coroneo, Guanajuato, México. A 2 horas de la Ciudad de México y 1 hora de Querétaro.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-[#D77A61] flex-shrink-0 mt-1"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Mejor época para visitar</h3>
                      <p className="text-white/80">
                        Todo el año, pero especialmente durante la Feria Artesanal en noviembre y la Fiesta Patronal en
                        mayo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-[#D77A61] flex-shrink-0 mt-1"
                    >
                      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <path d="M9 9h.01" />
                      <path d="M15 9h.01" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Experiencias</h3>
                      <p className="text-white/80">
                        Talleres de tejido, visitas guiadas a talleres artesanales y degustación de gastronomía local.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-white text-[#445E93] hover:bg-white/90">Planea tu visita</Button>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mapa de Coroneo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40">
                    Ver en Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Mí */}
        <section id="sobre-mi" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Foto del desarrollador"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-[#F5F0E6] px-3 py-1 text-sm text-[#D77A61] font-medium">
                  Sobre Mí
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A4A]">
                  Desarrollador web apasionado por preservar tradiciones
                </h2>
                <p className="text-[#4A4A4A]/80">
                  Hola, soy [Tu Nombre], desarrollador web especializado en crear experiencias digitales que conectan
                  tradiciones con el mundo moderno.
                </p>
                <p className="text-[#4A4A4A]/80">
                  Este proyecto fue creado con Next.js, Tailwind CSS y una pasión por mostrar la belleza artesanal de
                  Coroneo al mundo.
                </p>

                <div className="pt-2 space-y-3">
                  <h3 className="font-medium text-lg text-[#4A4A4A]">Mi stack tecnológico:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#F5F0E6] text-[#4A4A4A] rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-[#F5F0E6] text-[#4A4A4A] rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-[#F5F0E6] text-[#4A4A4A] rounded-full text-sm">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-[#F5F0E6] text-[#4A4A4A] rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-[#F5F0E6] text-[#4A4A4A] rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-[#F5F0E6] text-[#4A4A4A] rounded-full text-sm">Vercel</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-[#445E93] text-[#445E93] hover:bg-[#445E93]/10">
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-[#445E93] text-[#445E93] hover:bg-[#445E93]/10">
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href="mailto:your.email@example.com">
                    <Button variant="outline" className="border-[#445E93] text-[#445E93] hover:bg-[#445E93]/10">
                      <Mail className="h-5 w-5 mr-2" />
                      Email
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-[#D77A61] text-white">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Descubre la magia de Coroneo</h2>
              <p className="text-white/90 text-lg">
                Sumérgete en nuestra tradición artesanal y lleva contigo un pedazo de nuestra historia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button className="bg-white text-[#D77A61] hover:bg-white/90">Explorar productos</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contactar artesanos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4A4A4A] text-white/80 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-white">Coroneo</h3>
              <p className="text-sm">
                Donde la tradición se teje en cada hilo, preservando nuestra herencia cultural a través del arte textil.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-white">Enlaces rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#inicio" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#sobre-coroneo" className="hover:text-white transition-colors">
                    Sobre Coroneo
                  </Link>
                </li>
                <li>
                  <Link href="#artesanos" className="hover:text-white transition-colors">
                    Artesanos
                  </Link>
                </li>
                <li>
                  <Link href="#productos" className="hover:text-white transition-colors">
                    Productos
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-white">Visítanos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#visitanos" className="hover:text-white transition-colors">
                    Cómo llegar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Talleres
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Alojamiento
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-white">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#D77A61]" />
                  <span>info@coroneo.example.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#D77A61]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+52 (123) 456-7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#D77A61]" />
                  <span>Coroneo, Guanajuato, México</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Coroneo Artesanal. Todos los derechos reservados.
            </p>
            <p className="text-xs mt-2 md:mt-0">
              Diseñado con ❤️ por{" "}
              <Link href="#sobre-mi" className="text-[#D77A61] hover:underline">
                Tu Nombre
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
