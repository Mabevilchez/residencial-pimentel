"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Building2, Home, Layers, BedDouble, Waves, UtensilsCrossed, MapPin, Car, Check, Instagram, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { PROJECT, FLATS, DUPLEXES, NAV_LINKS } from "@/lib/data";

const WHATSAPP_URL = `https://wa.me/${PROJECT.whatsapp}?text=${encodeURIComponent(PROJECT.whatsappMessage)}`;

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-sand/30" : "bg-transparent"}`}>
        <div className="container-narrow">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex flex-col leading-none">
              <span className={`font-serif text-lg font-light tracking-wide transition-colors ${scrolled ? "text-navy" : "text-white"}`}>Residencial</span>
              <span className={`font-serif text-lg font-light tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-ocean" : "text-sand"}`}>Pimentel</span>
            </a>
            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}><a href={link.href} className={`font-sans text-sm font-medium tracking-wide transition-colors hover:text-ocean ${scrolled ? "text-charcoal" : "text-white/90"}`}>{link.label}</a></li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-medium font-sans tracking-wide transition-all ${scrolled ? "bg-ocean text-white hover:bg-blue-600" : "bg-white/20 text-white hover:bg-white/30"}`}>Solicitar info</a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 ${scrolled ? "text-charcoal" : "text-white"}`} aria-label="Menú">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center gap-8 px-8 lg:hidden">
          <a href="#" onClick={() => setMobileOpen(false)} className="font-serif text-3xl font-light text-white">Residencial <span className="text-sand">Pimentel</span></a>
          <div className="w-8 border-t border-sand/40" />
          <ul className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}><a href={link.href} onClick={() => setMobileOpen(false)} className="font-sans text-lg font-light text-white/80 hover:text-sand transition-colors">{link.label}</a></li>
            ))}
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="mt-4 px-8 py-3 bg-ocean text-white font-sans text-sm font-medium">Solicitar información</a>
        </div>
      )}
    </>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1726017803924-d074395b1216?q=80&w=1920&auto=format&fit=crop" alt="Costa de Pimentel al atardecer" fill priority quality={90} className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70" />
      </div>
      <div className="relative z-10 container-narrow w-full flex flex-col items-start justify-center pt-32 pb-24">
        <p className="text-xs tracking-[0.3em] uppercase font-sans font-medium text-sand/80 mb-8">{PROJECT.eyebrow}</p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none font-light text-white mb-4 max-w-3xl">
          Where Life Meets<br /><span className="italic text-sand">the Ocean.</span>
        </h1>
        <p className="font-serif text-2xl md:text-3xl font-light text-white/70 mb-6 italic">Vive Pimentel</p>
        <div className="w-12 border-t border-sand/50 mb-8" />
        <p className="font-sans text-base md:text-lg font-light text-white/80 max-w-xl mb-10 leading-relaxed">Departamentos en primera línea frente al mar, diseñados para disfrutar en familia y crear momentos inolvidables.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="#flats" className="btn-primary">Conoce los departamentos</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Hablar por WhatsApp</a>
        </div>
        <p className="font-sans text-xs text-white/50 tracking-widest uppercase">Solo 30 departamentos &nbsp;·&nbsp; 27 flats &nbsp;·&nbsp; 3 dúplex</p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={20} className="text-white/40" />
      </div>
    </section>
  );
}

function ProjectOverview() {
  const facts = [
    { icon: Layers, label: "9 pisos" }, { icon: Home, label: "27 flats" },
    { icon: Building2, label: "3 dúplex" }, { icon: BedDouble, label: "Desde 3 dormitorios" },
    { icon: Waves, label: "Vistas al mar" }, { icon: UtensilsCrossed, label: "Centro gastronómico" },
  ];
  return (
    <section id="proyecto" className="section-pad bg-warm-white">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=85" alt="Render exterior Residencial Pimentel" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-sand/60 hidden md:block" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-6">El Proyecto</p>
            <h2 className="headline-lg text-charcoal mb-3">Residencial Pimentel</h2>
            <p className="font-serif text-xl md:text-2xl text-ocean font-light italic mb-8">Primera línea frente al mar</p>
            <div className="w-10 border-t border-sand mb-8" />
            <p className="font-sans text-base text-charcoal/75 leading-relaxed mb-12 max-w-lg">Un proyecto residencial de nueve pisos ubicado en el Malécón de Pimentel. Sus departamentos han sido cuidadosamente diseñados para maximizar la experiencia de vivir frente al mar.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-7">
              {facts.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-charcoal/20">
                    <Icon size={18} strokeWidth={1.25} className="text-charcoal/60" />
                  </div>
                  <span className="font-sans text-sm text-charcoal/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const reasons = [
    { number: "01", title: "Ubicación privilegiada", text: "En la primera fila del Malécón de Pimentel, a pocos pasos de la playa, el muelle histórico y los principales puntos de interés.", aspect: "aspect-[3/4]", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=85", alt: "Playa Pimentel" },
    { number: "02", title: "Vistas directas al mar y al muelle", text: "El proyecto integra el océano a la vida cotidiana, con vistas desde el dormitorio principal, la sala y los espacios exteriores.", aspect: "aspect-[4/5]", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=85", alt: "Vistas al mar" },
    { number: "03", title: "Inversión inteligente", text: "Una propiedad en una zona de alta plusvalía, a solo 15 minutos de Chiclayo, dentro de un entorno tranquilo y exclusivo.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85", alt: "Frente del mar", aspect: "aspect-[3/4]" },
  ];
  return (
    <section className="section-pad bg-beige/40">
      <div className="container-narrow">
        <div className="mb-16"><p className="eyebrow mb-5">Ventajas del proyecto</p><h2 className="headline-lg text-charcoal max-w-xl">¿Por qué Residencial Pimentel?</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {reasons.map((r, i) => (
            <div key={r.number} className={`flex flex-col gap-6 ${i === 1 ? "md:-mb-12" : ""}`}>
              <div className={`relative w-full overflow-hidden ${r.aspect}`}><Image src={r.image} alt={r.alt} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /></div>
              <div><p className="font-sans text-xs tracking-[0.2em] text-ocean mb-3">{r.number} · {r.title}</p><p className="font-sans text-sm text-charcoal/70 leading-relaxed">{r.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageBreak() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-start overflow-hidden">
      <div className="absolute inset-0"><Image src="https://images.unsplash.com/photo-1625175006425-d61920aa8794?q=80&w=1920&auto=format&fit=crop" alt="Costa de Pimentel" fill className="object-cover" sizes="100vw" /></div>
      <div className="relative z-10 px-6 pt-12 pb-24"><h2 className="font-serif text-4xl md:text-6xl font-light text-white max-w-4xl">Donde cada día empieza y<br className="hidden md:block" /> termina con el mar.</h2></div>
    </section>
  );
}

function LocationSection() {
  const apie = [{time:"1 min",label:"de la playa"},{time:"3 min",label:"del mar"},{time:"3 min",label:"del Club Casino de Pimentel"},{time:"5 min",label:"de farmacias y supermercados"},{time:"5 min",label:"de restaurantes y bares"}];
  const enauto = [{time:"15 min",label:"de Chiclayo"},{time:"20 min",label:"del aeropuerto"}];
  return (
    <section id="ubicacion" className="section-pad bg-warm-white">
      <div className="container-narrow">
        <div className="mb-12"><p className="eyebrow mb-5">Ubicación estratégica</p><h2 className="headline-lg text-charcoal mb-4">Todo cerca. El mar aún más.</h2><p className="font-sans text-charcoal/70">Situado en el Malécón de Pimentel, nuestro proyecto ofrece acceso inmediato a playas, entretenimiento y servicios.</p></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[4/3] bg-beige border border-sand overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-4 h-4 bg-ocean rounded-full mx-auto mb-3 ring-4 ring-ocean/20" />
              <p className="font-serif text-navy text-lg font-light">Residencial Pimentel</p>
              <p className="font-sans text-xs text-charcoal/60 mt-1">Malécón de Pimentel</p>
              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {["Malécón","Playa","Muelle histórico","Club Casino","Restaurantes","Ruta Chiclayo","Aeropuerto"].map(l => (<span key={l} className="text-xs bg-ocean/10 text-ocean px-2 py-1 font-sans">{l}</span>))}
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <p className="eyebrow mb-5">A pie</p>
              <ul className="space-y-4">{apie.map((item) => (<li key={item.label} className="flex items-baseline gap-4 border-b border-sand/40 pb-4"><span className="font-serif text-ocean text-xl font-light flex-shrink-0">{item.time}</span><span className="font-sans text-charcoal/70">{item.label}</span></li>))}</ul>
            </div>
            <div>
              <p className="eyebrow mb-5 flex items-center gap-2"><Car size={14} /> En auto</p>
              <ul className="space-y-4">{enauto.map((item) => (<li key={item.label} className="flex items-baseline gap-4 border-b border-sand/40 pb-4"><span className="font-serif text-ocean text-xl font-light flex-shrink-0">{item.time}</span><span className="font-sans text-charcoal/70">{item.label}</span></li>))}</ul>
            </div>
            <a href="https://maps.google.com/?q=Malecon+Pimentel+Peru" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-sm text-ocean border-b border-ocean pb-1 hover:opacity-70 transition-opacity"><MapPin size={14} /> Ver en Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LifestyleSection() {
  return (
    <section className="section-pad bg-beige/30">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1"><p className="eyebrow mb-6">Estilo de vida</p><h2 className="headline-lg text-charcoal mb-8">Diseñado para que el mar sea parte de tu hogar.</h2><div className="w-10 border-t border-sand mb-8" /><p className="font-sans text-base text-charcoal/70 leading-relaxed">Cada espacio ha sido pensado para maximizar tus vistas al océano y facilitar una vida abierta, conectada con la naturaleza.</p></div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden"><Image src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&q=85" alt="Interior con vista al mar" fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" /></div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden"><Image src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=85" alt="Cocina moderna" fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" /></div>
              <div className="relative aspect-square overflow-hidden"><Image src="https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&q=85" alt="Balcón frente al mar" fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlatsSection() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const flat = FLATS[active];
  return (
    <section id="flats" className="section-pad bg-warm-white">
      <div className="container-narrow">
        <div className="mb-12"><p className="eyebrow mb-5">Unidades residenciales</p><h2 className="headline-lg text-charcoal mb-2">Nuestros Flats</h2><p className="font-serif text-xl text-ocean font-light italic">Amplios y luminosos</p></div>
        <div className="flex gap-2 mb-10">{FLATS.map((f, i) => (<button key={f.id} onClick={() => setActive(i)} className={`px-6 py-2.5 font-sans text-sm font-medium transition-all ${i === active ? "bg-navy text-white" : "bg-beige text-charcoal hover:bg-sand/30"}`}>{f.title}</button>))}</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <button onClick={() => setLightbox(true)} className="relative w-full text-left cursor-zoom-in">
            <div className="w-full aspect-[4/3] bg-beige flex items-center justify-center border border-sand">
              <div className="text-center p-8"><div className="w-16 h-16 border border-sand/60 flex items-center justify-center mx-auto mb-4"><Home size={24} strokeWidth={1} className="text-charcoal/30" /></div><p className="font-sans text-sm text-charcoal/40">Haz clic para ver render</p></div>
            </div>
          </button>
          <div>
            <div className="flex items-baseline gap-4 mb-6"><h3 className="font-serif text-3xl text-charcoal font-light">{flat.title}</h3><span className="font-sans text-lg text-ocean">{flat.area}</span></div>
            <div className="w-8 border-t border-sand mb-8" />
            <ul className="space-y-3 mb-10">{flat.features.map((feature) => (<li key={feature} className="flex items-start gap-3"><Check size={14} className="text-ocean flex-shrink-0 mt-1" /><span className="font-sans text-sm text-charcoal/70">{feature}</span></li>))}</ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Consultar disponibilidad</a>
          </div>
        </div>
        {lightbox && (<div className="fixed inset-0 z-50 bg-navy/90 flex items-center justify-center p-8" onClick={() => setLightbox(false)}><div className="bg-beige p-12 max-w-2xl w-full text-center"><p className="font-sans text-sm text-charcoal/60 mb-4">RENDER MODELO</p><div className="aspect-[4/3] bg-charcoal/10 flex items-center justify-center mb-6"><p className="font-sans text-charcoal/40">Render disponible próximamente</p></div><button onClick={() => setLightbox(false)} className="font-sans text-sm text-charcoal/50 hover:text-charcoal">Cerrar</button></div></div>)}
      </div>
    </section>
  );
}

function DuplexIntro() {
  const highlights = ["Terraza privada","Vista panorámica al mar","Zona de parrilla","Dos niveles","Cuarto y baño de servicio","Lavandería"];
  return (
    <section id="duplex" className="relative section-pad bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-20"><Image src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1400&q=80" alt="Terraza frente al mar" fill className="object-cover" /></div>
      <div className="relative z-10 container-narrow">
        <div className="max-w-3xl">
          <p className="eyebrow text-sand/70 mb-6">Unidades exclusivas</p>
          <h2 className="headline-lg text-white mb-4">Nuestros dúplex</h2>
          <p className="font-serif text-2xl text-sand font-light italic mb-8">Más espacio para vivir frente al mar.</p>
          <div className="w-10 border-t border-sand/40 mb-8" />
          <p className="font-sans text-base text-white/70 leading-relaxed mb-12 max-w-xl">Solo tres dúplex con amplias terrazas privadas, vistas panorámicas al océano y espacios creados para compartir momentos especiales en familia.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{highlights.map((h) => (<div key={h} className="flex items-center gap-3 border border-white/20 px-4 py-3"><Check size={14} className="text-sand flex-shrink-0" /><span className="font-sans text-sm text-white/80">{h}</span></div>))}</div>
        </div>
      </div>
    </section>
  );
}

function DuplexModels() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const duplex = DUPLEXES[active];
  return (
    <section className="section-pad bg-beige/30">
      <div className="container-narrow">
        <div className="flex gap-2 mb-10 flex-wrap">{DUPLEXES.map((d, i) => (<button key={d.id} onClick={() => setActive(i)} className={`px-6 py-2.5 font-sans text-sm font-medium transition-all ${i === active ? "bg-navy text-white" : "bg-beige text-charcoal hover:bg-sand/30"}`}>{d.title}</button>))}</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <button onClick={() => setLightbox(true)} className="relative w-full text-left cursor-zoom-in">
            <div className="w-full aspect-[4/3] bg-beige flex items-center justify-center border border-sand">
              <div className="text-center p-8"><div className="w-16 h-16 border border-sand/60 flex items-center justify-center mx-auto mb-4"><Building2 size={24} strokeWidth={1} className="text-charcoal/30" /></div><p className="font-sans text-sm text-charcoal/40">Haz clic para ver render</p></div>
            </div>
          </button>
          <div>
            <div className="flex items-baseline gap-4 mb-6"><h3 className="font-serif text-3xl text-charcoal font-light">{duplex.title}</h3><span className="font-sans text-lg text-ocean">{duplex.area}</span></div>
            <div className="w-8 border-t border-sand mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div><p className="font-sans text-xs tracking-widest uppercase text-charcoal/50 mb-4">Primer piso</p><ul className="space-y-2">{duplex.primerPiso.map((f: string) => (<li key={f} className="flex items-start gap-3"><Check size={12} className="text-ocean flex-shrink-0 mt-1" /><span className="font-sans text-sm text-charcoal/70">{f}</span></li>))}</ul></div>
              <div><p className="font-sans text-xs tracking-widest uppercase text-charcoal/50 mb-4">Segundo piso</p><ul className="space-y-2">{duplex.segundoPiso.map((f: string) => (<li key={f} className="flex items-start gap-3"><Check size={12} className="text-ocean flex-shrink-0 mt-1" /><span className="font-sans text-sm text-charcoal/70">{f}</span></li>))}</ul></div>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary bg-navy hover:bg-ocean">Solicitar información</a>
          </div>
        </div>
        {lightbox && (<div className="fixed inset-0 z-50 bg-navy/90 flex items-center justify-center p-8" onClick={() => setLightbox(false)}><div className="bg-beige p-12 max-w-2xl w-full text-center"><p className="font-sans text-sm text-charcoal/60 mb-4">RENDER MODELO</p><div className="aspect-[4/3] bg-charcoal/10 flex items-center justify-center mb-6"><p className="font-sans text-charcoal/40">Render disponible próximamente</p></div><button onClick={() => setLightbox(false)} className="font-sans text-sm text-charcoal/50 hover:text-charcoal">Cerrar</button></div></div>)}
      </div>
    </section>
  );
}

function TerracesSection() {
  return (
    <section className="section-pad bg-warm-white">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div><p className="eyebrow mb-6">Solo en los dúplex</p><h2 className="headline-lg text-charcoal mb-8">Tu propia terraza frente al mar.</h2><div className="w-10 border-t border-sand mb-8" /><p className="font-sans text-base text-charcoal/70 leading-relaxed">Las terrazas privadas de los dúplex son espacios privilegiados diseñados para disfrutar del atardecer, compartir comidas especiales y crear recuerdos inolvidables frente al océano.</p></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden"><Image src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&q=85" alt="Terraza frente al mar" fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" /></div>
            <div className="relative aspect-[3/4] overflow-hidden mt-8"><Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=85" alt="Vista panorámica desde terraza" fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonAreas() {
  const areas = [
    {title:"Lobby y acceso",text:"Ingreso de diseño elegante con acabados en materiales naturales.",image:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"},
    {title:"SUM",text:"Salón de usos múltiples para reuniones y celebraciones privadas.",image:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"},
    {title:"Bar-Lounge",text:"Espacio social íntimo con vistas al Malécón.",image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"},
    {title:"Coworking",text:"Área de trabajo equipada para el profesional moderno.",image:"https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&q=80"},
  ];
  return (
    <section id="areas-comunes" className="section-pad bg-beige/20">
      <div className="container-narrow">
        <div className="mb-16"><p className="eyebrow mb-5">Áreas comunes</p><h2 className="headline-lg text-charcoal">Espacios para vivir al máximo.</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {areas.map((area) => (<div key={area.title} className="group"><div className="relative aspect-[3/4] overflow-hidden mb-4"><Image src={area.image} alt={area.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 25vw" /></div><p className="font-sans text-sm font-medium text-charcoal mb-2">{area.title}</p><p className="font-sans text-xs text-charcoal/60">{area.text}</p></div>))}</div>
        <div className="border border-sand p-8 bg-warm-white"><div className="flex items-start gap-4"><UtensilsCrossed size={24} strokeWidth={1.25} className="text-ocean flex-shrink-0 mt-1" /><div><h3 className="font-serif text-xl text-charcoal mb-2">Centro gastronómico</h3><p className="font-sans text-sm text-charcoal/70">Áreas de servicio diseñadas para que disfrutes de una variada oferta culinaria en el mismo proyecto, desde cafeterías hasta restaurantes especializados.</p></div></div></div>
      </div>
    </section>
  );
}

function InvestmentCTA() {
  return (
    <section className="section-pad bg-warm-white border-t border-b border-sand/40">
      <div className="container-narrow text-center">
        <p className="eyebrow mb-8 mx-auto">Preventa exclusiva</p>
        <h2 className="headline-lg text-charcoal mb-8 max-w-3xl mx-auto">Una inversión con el mar como horizonte.</h2>
        <div className="w-10 border-t border-sand mb-8 mx-auto" />
        <p className="font-sans text-base text-charcoal/70 leading-relaxed max-w-2xl mx-auto mb-12">Residencial Pimentel combina ubicación, exclusividad y una propuesta arquitectónica diseñada para maximizar tu inversión en el futuro.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">{["Primera línea frente al mar","A 15 minutos de Chiclayo","Solo 30 departamentos"].map((b) => (<div key={b} className="flex items-center justify-center gap-2"><Check size={18} className="text-ocean flex-shrink-0" /><span className="font-sans text-sm text-charcoal/70">{b}</span></div>))}</div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">Recibir información de preventa</a>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name:"", phone:"", email:"", tipo:"", mensaje:"", consent:false });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) { alert("Por favor acepta ser contactado."); return; }
    setSubmitted(true);
  };
  return (
    <section id="contacto" className="section-pad bg-navy">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div><p className="eyebrow text-sand/70 mb-6">Comienza ahora</p><h2 className="headline-lg text-white mb-6">Tu vida junto al mar empieza aquí.</h2><div className="w-10 border-t border-sand/40 mb-8" /><p className="font-sans text-base text-white/70 leading-relaxed mb-8">Completa el formulario y nos pondremos en contacto contigo con toda la información sobre la preventa, financiamiento y disponibilidad de unidades.</p><div className="space-y-4"><div className="flex items-start gap-3"><Phone size={16} className="text-sand flex-shrink-0 mt-1" /><div><p className="font-sans text-sm font-medium text-white mb-1">Llamar por teléfono</p><p className="font-sans text-sm text-white/70">{PROJECT.whatsappDisplay}</p></div></div><div className="flex items-start gap-3"><MessageCircle size={16} className="text-sand flex-shrink-0 mt-1" /><div><p className="font-sans text-sm font-medium text-white mb-1">Escribir por WhatsApp</p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-sand hover:text-white transition-colors">Enviar mensaje</a></div></div><div className="flex items-start gap-3"><Instagram size={16} className="text-sand flex-shrink-0 mt-1" /><div><p className="font-sans text-sm font-medium text-white mb-1">Seguir en Instagram</p><a href={`https://instagram.com/${PROJECT.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-sand hover:text-white transition-colors">{PROJECT.instagram}</a></div></div></div></div>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div><label className="font-sans text-xs text-white/60 block mb-1.5 tracking-wide uppercase">Nombre y apellido *</label><input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full bg-white/10 border border-white/20 px-4 py-3 font-sans text-white placeholder:text-white/40 focus:outline-none focus:border-sand" placeholder="Juan Pérez" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="font-sans text-xs text-white/60 block mb-1.5 tracking-wide uppercase">Teléfono *</label><input type="tel" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full bg-white/10 border border-white/20 px-4 py-3 font-sans text-white placeholder:text-white/40 focus:outline-none focus:border-sand" placeholder="+51 999 999 999" /></div>
                <div><label className="font-sans text-xs text-white/60 block mb-1.5 tracking-wide uppercase">Correo *</label><input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full bg-white/10 border border-white/20 px-4 py-3 font-sans text-white placeholder:text-white/40 focus:outline-none focus:border-sand" placeholder="juan@email.com" /></div>
              </div>
              <div><label className="font-sans text-xs text-white/60 block mb-1.5 tracking-wide uppercase">Tipo de departamento</label><select value={form.tipo} onChange={(e) => setForm({...form, tipo: e.target.value})} className="w-full bg-white/10 border border-white/20 px-4 py-3 font-sans text-white focus:outline-none focus:border-sand"><option value="">Selecciona una opción</option><option value="flat">Flat</option><option value="duplex">Dúplex</option><option value="ambos">Ambos</option></select></div>
              <div><label className="font-sans text-xs text-white/60 block mb-1.5 tracking-wide uppercase">Mensaje (opcional)</label><textarea value={form.mensaje} onChange={(e) => setForm({...form, mensaje: e.target.value})} className="w-full bg-white/10 border border-white/20 px-4 py-3 font-sans text-white placeholder:text-white/40 focus:outline-none focus:border-sand resize-none h-24" placeholder="Cuéntanos qué te interesa..." /></div>
              <div className="flex items-start gap-3"><input type="checkbox" id="consent" checked={form.consent} onChange={(e) => setForm({...form, consent: e.target.checked})} className="mt-1 accent-sand" /><label htmlFor="consent" className="font-sans text-xs text-white/70">Acepto ser contactado por Residencial Pimentel para recibir información de preventa, promociones y actualizaciones del proyecto.</label></div>
              <button type="submit" className="w-full btn-primary bg-sand text-navy hover:bg-white hover:text-navy py-4 text-base">Solicitar información</button>
            </form>
          ) : (
            <div className="bg-white/10 border border-sand/30 p-10 text-center"><Check size={40} className="text-sand mx-auto mb-6" /><h3 className="font-serif text-2xl text-white mb-4">¡Gracias por tu interés!</h3><p className="font-sans text-white/70">Pronto nos pondremos en contacto contigo con toda la información sobre Residencial Pimentel.</p></div>
          )}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  const links = [{label:"El Proyecto",href:"#proyecto"},{label:"Departamentos",href:"#flats"},{label:"Ubicación",href:"#ubicacion"},{label:"Contacto",href:"#contacto"},{label:"Política de privacidad",href:"#"}];
  return (
    <footer className="bg-charcoal py-16">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div><p className="font-serif text-2xl text-white font-light mb-1">Residencial Pimentel</p><p className="font-serif text-sm text-sand italic mb-6">{PROJECT.tagline}</p><p className="font-sans text-xs text-white/40">{PROJECT.address}</p></div>
          <div><p className="font-sans text-xs tracking-widest uppercase text-white/40 mb-5">Navegación</p><ul className="space-y-3">{links.map((l) => (<li key={l.href}><a href={l.href} className="font-sans text-sm text-white/70 hover:text-white transition-colors">{l.label}</a></li>))}</ul></div>
          <div><p className="font-sans text-xs tracking-widest uppercase text-white/40 mb-5">Contacto</p><div className="space-y-3"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm text-white/70 hover:text-white transition-colors"><MessageCircle size={14} /> WhatsApp</a><a href={`https://instagram.com/${PROJECT.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm text-white/70 hover:text-white transition-colors"><Instagram size={14} /> {PROJECT.instagram}</a></div></div>
        </div>
        <div className="border-t border-white/10 pt-8"><p className="font-sans text-xs text-white/30 leading-relaxed">Las imágenes, acabados, mobiliario y elementos decorativos son referenciales y pueden estar sujetos a cambios en función de las decisiones de diseño final. Residencial Pimentel es un proyecto de Costiera Realty.</p></div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1da851] flex items-center justify-center rounded-full shadow-lg transition-all">
      <MessageCircle size={26} className="text-white" strokeWidth={2} />
    </a>
  );
}

export default function LandingPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProjectOverview />
        <WhySection />
        <ImageBreak />
        <LocationSection />
        <LifestyleSection />
        <FlatsSection />
        <DuplexIntro />
        <DuplexModels />
        <TerracesSection />
        <CommonAreas />
        <InvestmentCTA />
        <ContactForm />
      </main>
      <FooterSection />
      <FloatingWhatsApp />
    </>
  );
}
