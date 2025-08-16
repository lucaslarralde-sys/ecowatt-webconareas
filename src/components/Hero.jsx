export default function Hero(){
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="/video/poster.jpg">
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="overlay strong">
        <div className="container hero-copy">
          <p className="kicker">Tratamiento de aguas y efluentes líquidos</p>
          <h1>Soluciones integrales con foco en desempeño ambiental</h1>
          <p className="lead">Diseño, operación y optimización de plantas. Reúso y eficiencia de recursos.</p>
          <div className="cta">
            <a className="btn primary" href="#areas">Conocer áreas</a>
            <a className="btn ghost" href="#contacto">Contactar</a>
          </div>
        </div>
      </div>
    </section>
  )
}
