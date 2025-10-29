import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import rheinturm from '../assets/rheinturm_640_ohne.png';

export default function Halo() {

    return (
        <section id="halo" className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Data &middot; Information &middot; Knowledge &middot; Innovation</div></div>
                                <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Enable the innovation, through power of knowledge!</span></h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="topics.html">Huh? What?</a>
                                    <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="solutions.html">But, How?</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                    <img className="profile-img" src={rheinturm} alt="..." />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}