import React from 'react';
import './App.css';
import Header from './components/header/Header';

function App() {
  
  // Datos de ejemplo para los servicios
  const services = [
    {
      title: "Tratamientos Faciales",
      description: "Hidratación profunda y limpieza para realzar tu brillo natural.",
      icon: "✨"
    },
    {
      title: "Masajes Relajantes",
      description: "Desconecta del estrés con nuestros masajes de aromaterapia.",
      icon: "🌿"
    },
    {
      title: "Manicura Spa",
      description: "Cuidado delicado para tus manos con los mejores esmaltes.",
      icon: "💅"
    }
  ];

  return (
    <div className="App">
      
      {/* Navegación */}
      <Header/>

      {/* Hero Section (Portada) */}
      <section className="hero">
        <div className="container">
          <h1>Tu refugio de belleza natural</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 30px', fontSize: '1.1rem' }}>
            En <strong>Mamá Beauty Care</strong>, cuidamos de ti con la delicadeza que mereces. 
            Descubre tratamientos diseñados para resaltar tu esencia.
          </p>
          <button className="btn-primary">Ver Servicios</button>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="services-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Nuestros Servicios</h2>
          <div className="grid">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <h3>Mamá Beauty Care</h3>
          <p>Donde la belleza se encuentra con la paz.</p>
          <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Mamá Beauty Care. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
