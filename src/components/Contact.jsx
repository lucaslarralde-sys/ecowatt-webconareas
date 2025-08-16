export default function Contact(){
  return (
    <section id="contacto" className="section">
      <div className="grid contact-grid">
        <div>
          <h3>Contacto</h3>
          <p>Contanos sobre tu proyecto y te respondemos a la brevedad.</p>
          <ul className="contact-list">
            <li><strong>Email:</strong> info@ecowatt.example</li>
            <li><strong>Teléfono:</strong> +54 (000) 000-0000</li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="row">
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
          </div>
          <textarea rows="5" placeholder="Mensaje"></textarea>
          <button className="btn primary" type="submit">Enviar consulta</button>
        </form>
      </div>
    </section>
  )
}
