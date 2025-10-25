import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Expertise() {
  return (
    <section id="expertise" className="expertise-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">Unsere Expertise</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Webentwicklung</h3>
            <p>
              Wir bieten maßgeschneiderte Webentwicklungslösungen, die auf den neuesten Technologien basieren, um sicherzustellen, dass Ihre Website schnell, sicher und benutzerfreundlich ist.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Digitales Marketing</h3>
            <p>
              Unser Team hilft Ihnen dabei, Ihre Online-Präsenz zu stärken und Ihre Zielgruppe effektiv zu erreichen durch SEO, Social Media Marketing und Content-Erstellung.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Beratung & Strategie</h3>
            <p>
              Wir bieten umfassende Beratungsdienste, um Ihnen zu helfen, Ihre Geschäftsstrategie zu optimieren und nachhaltiges Wachstum zu fördern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}