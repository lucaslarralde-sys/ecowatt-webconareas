export default function Areas(){
  const items = [
    { title: 'Efluentes industriales', text: 'Diseño y operación de plantas (MBR, UASB, MBBR, IFAS), oxidación avanzada, recuperación y reúso de agua.'},
    { title: 'Efluentes domésticos', text: 'Soluciones para urbanizaciones y municipios: sistemas compactos, MBR y monitoreo de parámetros.'},
    { title: 'Aguas de proceso', text: 'Remoción de contaminantes, optimización de consumo, calidad para procesos críticos y recirculación.'},
    { title: 'Energía & emisiones', text: 'Aprovechamiento de biogás, eficiencia energética y control de emisiones en líneas de tratamiento.'},
  ]
  return (
    <section id="areas" className="section">
      <div className="grid cards4">
        {items.map((it, i)=>(
          <article key={i} className="card">
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
