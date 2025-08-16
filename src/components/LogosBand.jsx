export default function LogosBand(){
  const logos = [
    { src: '/img/partners/fuchs.png', alt: 'Fuchs' },
    { src: '/img/partners/aqana.png', alt: 'Aqana' },
    { src: '/img/partners/daga.png', alt: 'DAGA' },
    { src: '/img/partners/2g.png', alt: '2G Energy' },
    { src: '/img/partners/airclean.png', alt: 'AirClean' }
  ]
  return (
    <section className="band green" aria-label="Alianzas y partners">
      <div className="container logos-row">
        {logos.map((l, i)=>(
          <img key={i} src={l.src} alt={l.alt} className="ref-logo" />
        ))}
      </div>
    </section>
  )
}
