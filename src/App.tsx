import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">Assignment-02</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero" id="about">
          <h1>Aplicación Web con Vite + AWS</h1>
          <p>
            Esta aplicación estática fue desarrollada con Vite y React,
            desplegada en AWS S3 y distribuida mediante CloudFront.
          </p>
          <div className="ctaRow">
            <a className="btn" href="#features">Ver características</a>
            <a className="btn secondary" href="#contact">Contacto</a>
          </div>
        </section>

        <section className="grid" id="features">
          <div className="card">
            <h3>Vite Build</h3>
            <p>El proyecto genera una carpeta <code>dist/</code> lista para producción.</p>
          </div>
          <div className="card">
            <h3>Doppler</h3>
            <p>Gestión segura de secretos integrados con GitHub.</p>
          </div>
          <div className="card">
            <h3>AWS</h3>
            <p>Hosting en S3 y distribución global con CloudFront.</p>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Información</h2>
          <p><b>Estudiante:</b> Tu Nombre Aquí</p>
          <p><b>Curso:</b> Arquitectura de Sistemas II</p>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Assignment-02</span>
      </footer>
    </div>
  );
}
