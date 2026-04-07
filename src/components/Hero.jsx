export default function Hero() {
  return (
    <>
      <style>{`
        .hero-section {
          width: 100%;
          background-color: #303b6e;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          padding: 3rem 5% 2.5rem;
          box-sizing: border-box;
        }

        .hero-overlap {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          width: 100%;
        }

        .hero-graphic {
          flex: 1 1 55%;
          max-width: 55%;
          display: block;
          width: 100%;
          height: auto;
        }

        .hero-map {
          flex: 1 1 40%;
          max-width: 40%;
          display: block;
          width: 100%;
          height: auto;
        }

        .hero-p {
          margin: 0;
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #ffffff;
          font-size: 1.25rem;
          line-height: 1.4;
          white-space: normal;
          max-width: 40rem;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          border-radius: 0.75rem;
          box-shadow: 0px 0px 6.2px #8c8c8c52;
          background: #ffffff;
          cursor: pointer;
          text-decoration: none;
        }

        .hero-btn-text {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #303b6e;
          font-size: 1rem;
          line-height: 1.3;
          white-space: nowrap;
        }

        .hero-btn-icon {
          width: 1.25rem;
          height: 1.25rem;
          flex-shrink: 0;
        }

        /* ── Tablet ── */
        @media (max-width: 64rem) {
          .hero-section { padding: 2.5rem 5% 2rem; gap: 0.875rem; }
          .hero-overlap { gap: 1.5rem; }
          .hero-p { font-size: 1.125rem; }
        }

        /* ── Mobile large ── */
        @media (max-width: 48rem) {
          .hero-section { padding: 2rem 5% 1.75rem; }
          .hero-overlap { gap: 1rem; }
          .hero-p { font-size: 1rem; }
          .hero-btn-text { font-size: 0.9375rem; }
        }

        /* ── Mobile small ── */
        @media (max-width: 37.5rem) {
          .hero-section { padding: 1.75rem 5% 1.5rem; gap: 0.75rem; }
          .hero-overlap {
            flex-direction: row;
            align-items: center;
            gap: 0.75rem;
          }
          .hero-graphic {
            flex: 1 1 60%;
            max-width: 60%;
          }
          .hero-map {
            flex: 1 1 36%;
            max-width: 36%;
          }
          .hero-p { font-size: 0.875rem; }
          .hero-btn { padding: 0.5rem 0.875rem; }
          .hero-btn-text { font-size: 0.875rem; }
          .hero-btn-icon { width: 1rem; height: 1rem; }
        }
      `}</style>

      <div className="hero-section">
        <div className="hero-overlap">
          <img
            className="hero-graphic"
            src="/img/1_Text 1.svg"
            alt="Africa Digital ID Hackathon title"
          />
          <img className="hero-map" src="/img/1_Map 1.svg" alt="Africa map" />
        </div>
        <p className="hero-p">Build digital identity solutions for Africa</p>
        <a href="#ideathon-journey" className="hero-btn">
          <span className="hero-btn-text">More Details</span>
          <img
            className="hero-btn-icon"
            src="/img/arrow-right-alt.svg"
            alt="arrow right"
          />
        </a>
      </div>
    </>
  );
}
