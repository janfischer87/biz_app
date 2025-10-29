import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Expertise() {
  return (
    <section id="expertise" className="expertise-section py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
              <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Approaches</span></h1>
          </div>
          <div className="container">
              <div className="row gx-5 justify-content-center">
                  <div className="col-sm">
                      <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                          <div className="card-body p-0">
                              <div className="d-flex align-items-center">
                                  <div className="p-5">
                                      <h2 className="fw-bolder">Data-centric</h2>
                                      <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                  </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm">
                      <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                          <div className="card-body p-0">
                              <div className="d-flex align-items-center">
                                  <div className="p-5">
                                      <h2 className="fw-bolder">People-centric</h2>
                                      <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                  </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>    
          </div>
      </div>
    </section>
  );
}