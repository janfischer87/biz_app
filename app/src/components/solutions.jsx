import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Solutions() {
  return (
    <section id="solutions" className="solutions-section py-5">
      <div className="container">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Unsere Leistungen</span></h1>
        <div className="row">
          <div className="col-md-4">
            <h3>E-Commerce</h3>
            <p>
              Wir entwickeln leistungsstarke E-Commerce-Plattformen, die nahtlose Einkaufserlebnisse bieten und den Umsatz steigern.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Mobile Apps</h3>
            <p>
              Unser Team erstellt benutzerfreundliche mobile Anwendungen, die auf verschiedenen Plattformen funktionieren und Ihre Reichweite erweitern.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Cloud-Lösungen</h3>
            <p>
              Wir bieten skalierbare Cloud-Lösungen, die Flexibilität und Effizienz für Ihr Unternehmen gewährleisten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}