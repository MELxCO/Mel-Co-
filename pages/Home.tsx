import React, { useEffect, useState, useRef } from 'react';
import Button from '../components/Button';
import { SERVICES, CASE_STUDIES, TESTIMONIALS, FAQ_ITEMS } from '../constants';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

const Home: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pageHeight, setPageHeight] = useState(6000); 
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll and page height
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setPageHeight(containerRef.current.scrollHeight);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const drawPoint = scrollY + (windowHeight * 0.75); 
      setScrollProgress(drawPoint);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateDimensions);
    
    // Initial calc
    setTimeout(updateDimensions, 200); 
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Updated Path Definition to include FAQ loop
  const pathDefinition = `
    M 50,0 
    L 50,120
    C 50,250 85,350 50,550
    C 15,750 50,850 50,1100
    L 50,1400
    
    /* Loop at Services Title (~1500px) */
    C 50,1450 60,1450 60,1480
    S 50,1510 50,1550
    L 50,2600

    /* Zigzag/Pulse at Agency Stats (~2800px) */
    L 48,2850 L 52,2900 L 48,2950 L 50,3000
    L 50,3400

    /* Loop at Portfolio (~3500px) */
    C 50,3450 40,3450 40,3480
    S 50,3510 50,3550
    L 50,4500

    /* NEW: Curve for FAQ Section */
    C 50,4600 70,4700 50,4800
    L 50,${pageHeight}
  `;

  // Micro-interaction Anchors
  const anchors = [
    { id: 'start', y: 120, label: 'Départ' },
    { id: 'slalom-1', y: 550, label: 'Agence' },
    { id: 'slalom-2', y: 1100, label: 'Com' },
    { id: 'services', y: 1480, label: 'Savoir-faire' },
    { id: 'stats', y: 2900, label: 'Chiffres' },
    { id: 'portfolio', y: 3480, label: 'Portfolio' },
    { id: 'faq', y: 4650, label: 'Questions' },
    { id: 'contact', y: pageHeight - 300, label: 'Contact' },
  ];

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div ref={containerRef} className="w-full relative bg-brand-secondary overflow-hidden">
      
      {/* --- THE GLOBAL CONNECTING THREAD --- */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none" style={{ height: pageHeight }}>
         <svg 
            className="w-full h-full" 
            viewBox={`0 0 100 ${pageHeight}`} 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path 
              d={pathDefinition}
              fill="none"
              stroke="#ff009f"
              strokeWidth="2.5" 
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              style={{
                strokeDasharray: pageHeight * 1.5,
                strokeDashoffset: Math.max(0, (pageHeight * 1.5) - scrollProgress),
                transition: 'stroke-dashoffset 0.1s linear'
              }}
            />
         </svg>

         {/* --- MICRO INTERACTION ANCHORS --- */}
         {anchors.map((anchor) => {
            const isReached = scrollProgress > anchor.y;
            return (
              <div 
                key={anchor.id}
                className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center transition-all duration-500"
                style={{ top: `${anchor.y}px` }}
              >
                <div className={`w-4 h-4 rounded-full border-2 border-brand-primary bg-brand-secondary transition-all duration-500 ${isReached ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                <div className={`absolute w-10 h-10 rounded-full border border-brand-primary/40 transition-all duration-700 ${isReached ? 'scale-100 opacity-100 animate-ping' : 'scale-0 opacity-0'}`}></div>
              </div>
            );
         })}
      </div>

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen relative flex flex-col items-center justify-center px-4 md:px-12 pt-32 pb-20">
        <div className="relative z-10 w-full max-w-[1920px] mx-auto flex flex-col justify-center">
            
            <div className="mb-12 text-center animate-fade-in relative z-20" style={{animationDelay: '0.2s'}}>
                <span className="inline-block py-2 px-4 rounded-full border border-brand-dark/30 text-xs font-bold uppercase tracking-[0.2em] text-brand-dark backdrop-blur-sm bg-brand-secondary/80">
                    Paris — Île-de-France
                </span>
            </div>

            {/* Main Title Stack - Centered */}
            <div className="flex flex-col w-full relative">
                
                {/* AGENCE */}
                <div className="relative text-center animate-fade-in translate-y-4 opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                  <h1 className="text-[13vw] md:text-[10vw] leading-[0.85] font-title text-brand-dark tracking-tighter mix-blend-multiply">
                      AGENCE
                  </h1>
                </div>
                
                {/* 'de' */}
                <div className="flex items-center justify-center my-[-1vw] md:my-[-2vw] relative z-20 animate-fade-in opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                    <div className="relative px-2">
                      <span className="font-accent text-brand-primary text-5xl md:text-8xl -rotate-12 transform origin-center block pt-4 drop-shadow-md">de</span>
                    </div>
                </div>

                {/* COMMUNICATION */}
                <div className="relative text-center animate-fade-in translate-y-[-4px] opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                  <h1 className="text-[13vw] md:text-[10vw] leading-[0.85] font-title text-brand-dark text-outline tracking-tighter mix-blend-multiply">
                      COMMUNICATION
                  </h1>
                </div>
            </div>

            <div className="mt-24 max-w-2xl mx-auto text-center relative z-20 animate-fade-in opacity-0 px-6" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
               <p className="font-body text-xl md:text-2xl text-brand-dark font-bold leading-relaxed">
                  Nous sculptons l'identité des marques ambitieuses. <br className="hidden md:block" />
                  <span className="text-brand-primary">Stratégie • Branding • Expérience</span>
               </p>
            </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="relative py-32">
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 mb-20 text-center relative z-10">
           <div className="inline-block relative">
              <span className="bg-brand-secondary px-6 py-2 font-accent text-4xl text-brand-dark relative z-20 rounded-full border border-brand-dark/10 shadow-sm">
                Notre Savoir-Faire
              </span>
           </div>
        </div>

        {SERVICES.map((service, index) => (
          <div key={service.id} className="relative py-12 md:py-24 group">
            <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-0">
              
              <div className={`px-4 md:px-24 flex flex-col justify-center ${index % 2 === 0 ? 'md:order-1 md:text-right md:items-end' : 'md:order-2 md:text-left md:items-start'}`}>
                <div className="inline-flex items-center gap-4 mb-6">
                   {index % 2 === 0 && <span className="font-title text-6xl text-brand-primary opacity-50">0{index + 1}</span>}
                   <h2 className="font-title text-4xl md:text-6xl text-brand-dark leading-[0.9]">{service.title}</h2>
                   {index % 2 !== 0 && <span className="font-title text-6xl text-brand-primary opacity-50">0{index + 1}</span>}
                </div>
                
                <p className="text-xl text-brand-dark/80 mb-8 font-light leading-relaxed max-w-xl">
                  {service.fullDescription}
                </p>
                
                <ul className="mb-10 flex flex-wrap gap-4 md:justify-end">
                   <li className="px-4 py-2 border border-brand-dark rounded-full text-sm font-bold uppercase hover:bg-brand-dark hover:text-white transition-colors cursor-default">
                      {service.slug}
                   </li>
                </ul>
                
                <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white" withArrow>
                   Découvrir
                </Button>
              </div>

              <div className={`px-4 md:px-24 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                 <div className="relative aspect-video overflow-hidden border-2 border-brand-light shadow-[8px_8px_0px_0px_#ff009f] transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[4px_4px_0px_0px_#ff009f] bg-brand-secondary">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                 </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- AGENCY NUMBERS --- */}
      <section id="agency" className="bg-brand-primary text-white py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            <div className="group p-8 border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm rounded-lg">
               <span className="block font-title text-7xl mb-2 group-hover:scale-110 transition-transform duration-300">10+</span>
               <span className="font-accent text-2xl opacity-90">Années d'expérience</span>
            </div>
            <div className="group p-8 border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm rounded-lg">
               <span className="block font-title text-7xl mb-2 group-hover:scale-110 transition-transform duration-300">150</span>
               <span className="font-accent text-2xl opacity-90">Projets Réalisés</span>
            </div>
            <div className="group p-8 border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm rounded-lg">
               <span className="block font-title text-7xl mb-2 group-hover:scale-110 transition-transform duration-300">100%</span>
               <span className="font-accent text-2xl opacity-90">Indépendants</span>
            </div>
         </div>
      </section>

      {/* --- SELECTED WORKS --- */}
      <section id="cases" className="relative py-32">
         <div className="max-w-[1920px] mx-auto px-4 md:px-12 relative z-10">
            <div className="text-center mb-20 relative">
                <span className="font-accent text-brand-dark text-4xl block mb-2">Portfolio</span>
                <h2 className="font-title text-5xl md:text-7xl text-white text-outline shadow-brand-dark drop-shadow-sm bg-brand-secondary inline-block px-4">
                    NOS RÉALISATIONS
                </h2>
            </div>

            <div className="space-y-32">
               {CASE_STUDIES.map((study, idx) => (
                  <div key={study.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
                     <div className={`relative ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="aspect-[16/10] overflow-hidden border-2 border-brand-dark bg-brand-light relative z-10 shadow-lg">
                           <img 
                              src={study.image} 
                              alt={study.title} 
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                           />
                        </div>
                     </div>
                     
                     <div className={`bg-white/80 backdrop-blur-md p-8 border border-white shadow-xl ${idx % 2 === 1 ? 'md:order-1 md:text-right' : 'md:text-left'} transition-all duration-500 hover:shadow-2xl relative z-20`}>
                        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">{study.category}</span>
                        <h3 className="font-title text-4xl text-brand-dark mb-6 leading-none">{study.title}</h3>
                        <p className="text-brand-dark/70 mb-8 leading-relaxed font-medium">{study.description}</p>
                        <Button variant="outline" size="sm" withArrow>Voir le cas</Button>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="text-center mt-24">
               <Button variant="primary" size="lg" className="shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">Voir tous les projets</Button>
            </div>
         </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 bg-brand-light border-y-2 border-brand-primary">
         <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h2 className="font-title text-4xl text-center mb-16 text-brand-dark">Ce qu'ils disent de nous</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="bg-brand-secondary p-8 text-center relative group hover:-translate-y-2 transition-transform duration-300 border border-brand-primary/20">
                     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-title text-xl border-4 border-brand-light shadow-md">
                        {t.author.charAt(0)}
                     </div>
                     <div className="pt-6">
                        <div className="flex justify-center text-brand-light mb-4 gap-1">
                           {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fffefb" />)}
                        </div>
                        <p className="font-body text-brand-dark italic mb-6 leading-relaxed">"{t.content}"</p>
                        <p className="font-bold text-brand-dark uppercase text-sm">{t.author}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- FAQ SECTION (NEW FOR GEO) --- */}
      <section id="faq" className="py-24 relative z-10">
         <div className="max-w-3xl mx-auto px-4">
           <h2 className="font-title text-4xl text-center mb-12 text-brand-dark">Questions Fréquentes</h2>
           <div className="space-y-4">
             {FAQ_ITEMS.map((item, index) => (
               <div key={index} className="border border-brand-primary/30 bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden">
                 <button 
                   onClick={() => setOpenFaq(openFaq === index ? null : index)}
                   className="w-full flex justify-between items-center p-6 text-left font-bold text-brand-dark hover:bg-white transition-colors"
                 >
                   <span>{item.question}</span>
                   {openFaq === index ? <ChevronUp className="text-brand-primary" /> : <ChevronDown className="text-brand-dark/50" />}
                 </button>
                 <div 
                   className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                 >
                   <p className="p-6 pt-0 text-brand-dark/80 leading-relaxed">
                     {item.answer}
                   </p>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section id="contact" className="relative py-32 overflow-hidden text-center">
         <div className="absolute inset-0 bg-brand-primary opacity-90"></div>
         
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="font-accent text-white text-4xl mb-4 block animate-bounce">Un projet ?</span>
            <h2 className="font-title text-6xl md:text-9xl text-white mb-8">
               LET'S TALK
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
               <div className="bg-white p-1 transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
                  <a href="mailto:hello@melandco.fr" className="block bg-brand-secondary text-brand-dark font-title text-2xl px-12 py-6 border-2 border-brand-dark hover:bg-brand-dark hover:text-white transition-all">
                     hello@melandco.fr
                  </a>
               </div>
               <div className="bg-white p-1 transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
                  <a href="tel:+33100000000" className="block bg-brand-dark text-white font-title text-2xl px-12 py-6 border-2 border-brand-dark hover:bg-white hover:text-brand-dark transition-all">
                     +33 1 00 00 00 00
                  </a>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;