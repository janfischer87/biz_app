import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">Kontaktieren Sie uns</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Ihr Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-Mail</label>
                <input type="email" className="form-control" id="email" placeholder="Ihre E-Mail" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Nachricht</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Ihre Nachricht"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Senden</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}