import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export default function Footer() {
    const [count, setCount] = useState(0)

  return (
    <section id="footer" className="footer-section py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-8 text-center">
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
            </div>
            <div className="col-md-4 mb-3">
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
        </div>
        <div className="row justify-content-center">
            <h1 className="mb-4 display-5 fw-bold text-primary">Vite + React</h1>
              <div className="card shadow-lg border-0 rounded-4">
                <button className="btn btn-primary btn-lg mb-3" onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
        </div>  
      </div>
    </section>
  );
}