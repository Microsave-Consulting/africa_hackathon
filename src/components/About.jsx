// export default function About() {
//   return (
//     <>
//       <style>{`
//         .about-section {
//           width: 100%;
//           background-color: #f7f9fb;
//           padding: 3rem 0;
//         }

//         .about-inner {
//           width: 100%;
//           padding: 0 5%;
//           box-sizing: border-box;
//         }

//         /* ── Heading ── */
//         .about-heading {
//           display: flex;
//           flex-direction: column;
//           gap: 0.5rem;
//           margin-bottom: 2rem;
//         }

//         .about-pill {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0.625rem 1rem;
//           background-color: #fff7ec;
//           border-radius: 59px;
//           border: 1px solid #eab05c;
//           width: fit-content;
//         }

//         .about-pill-text {
//           font-family: "Roboto-Regular", Helvetica, sans-serif;
//           font-weight: 400;
//           color: #000000;
//           font-size: 0.875rem;
//           white-space: nowrap;
//         }

//         .about-title {
//           font-family: "Roboto-SemiBold", Helvetica, sans-serif;
//           font-weight: 600;
//           color: #000000;
//           font-size: 1.75rem;
//           line-height: 1.2;
//           margin: 0;
//         }

//         /* ── Body text ── */
//         .about-body {
//           font-family: "Roboto-Regular", Helvetica, sans-serif;
//           font-weight: 400;
//           color: #000000;
//           font-size: 1rem;
//           line-height: 1.6;
//           margin: 0 0 2rem 0;
//         }

//         /* ── Two-column card row ── */
//         .about-grid {
//           display: grid;
//           grid-template-columns: repeat(2, minmax(0, 1fr));
//           gap: 1.5rem;
//         }

//         /* ── Card base ── */
//         .about-card {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//           padding: 1.5rem;
//           background-color: #ffffff;
//           border-radius: 0.75rem;
//           border: 1px solid #f2f2f2;
//           box-sizing: border-box;
//         }

//         /* ── Card header ── */
//         .about-card-header {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.75rem;
//         }

//         .about-icon {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0.5rem 0.5625rem;
//           background-color: #eab05c;
//           border-radius: 32px;
//           overflow: hidden;
//           flex-shrink: 0;
//         }

//         .about-icon img {
//           width: 1.5rem;
//           height: 1.5rem;
//           object-fit: contain;
//         }

//         .about-card-title {
//           font-family: "Roboto-SemiBold", Helvetica, sans-serif;
//           font-weight: 600;
//           color: #000000;
//           font-size: 1.25rem;
//           margin: 0;
//         }

//         /* ── Participate list ── */
//         .about-list {
//           display: flex;
//           flex-direction: column;
//           gap: 0.375rem;
//         }

//         .about-list-item {
//           display: flex;
//           align-items: flex-start;
//           gap: 0.75rem;
//         }

//         .about-list-item img {
//           width: 1.5rem;
//           height: 1.5rem;
//           flex-shrink: 0;
//         }

//         .about-list-text {
//           font-family: "Roboto-Regular", Helvetica, sans-serif;
//           font-weight: 400;
//           color: #000000;
//           font-size: 1rem;
//           line-height: 1.325;
//           flex: 1;
//           min-width: 0;
//           word-break: break-word;
//           margin: 0;
//         }

//         /* ── Organisers card content ── */
//         .about-org-body {
//           display: flex;
//           flex-direction: column;
//           gap: 1.75rem;
//         }

//         .about-org-desc {
//           font-family: "Roboto-Regular", Helvetica, sans-serif;
//           font-weight: 400;
//           color: #000000;
//           font-size: 1rem;
//           line-height: 1.6;
//           margin: 0;
//         }

//         .about-logos {
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           justify-content: flex-start;
//           gap: 1.5rem;
//           flex-wrap: nowrap;
//           max-width: 100%;
//           overflow: hidden;
//         }

//         .about-logo {
//           height: 5.625rem;
//           width: auto;
//           max-height: 5.625rem;
//           max-width: 40%;
//           object-fit: contain;
//         }

//         .about-logo-msc {
//           max-height: 4.6875rem;
//         }

//         /* ── Responsive ── */
//         @media (max-width: 64rem) {
//           .about-grid { grid-template-columns: 1fr; }
//         }

//         @media (max-width: 48rem) {
//           .about-title { font-size: 1.375rem; }
//         }

//         @media (max-width: 37.5rem) {
//           .about-section { padding: 2rem 0; }
//           .about-title { font-size: 1.25rem; }
//           .about-card { padding: 1.25rem; }
//         }
//       `}</style>

//       <div className="about-section">
//         <div className="about-inner">
//           {/* Heading */}
//           <div className="about-heading">
//             <div className="about-pill">
//               <span className="about-pill-text">Overview</span>
//             </div>
//             <p className="about-title">Unlock the power of the SevisPass</p>
//           </div>

//           {/* Body text */}
//           <p className="about-body">
//             Are you passionate about the potential of technology to drive
//             positive social and economic change? Are you a university student,
//             startup, or innovator based in Papua New Guinea? Do you believe that
//             the SevisPass holds the key to unlock a brighter future for the
//             country? If that is the case, then this ideathon is for you.
//             <br />
//             <br />
//             The National Digital ID Ideathon will be hosted by the Department of
//             Information and Communications Technology (DICT) in collaboration
//             with MSC (MicroSave Consulting) and will be held as part of the
//             Third Digital Transformation Summit 2025 (DTS25).
//             <br />
//             <br />
//             The ideathon will be launched for university students and
//             professionals to develop use cases of the SevisPass in various
//             sectors, including agriculture, healthcare, finance, transportation,
//             education, and public administration.
//             <br />
//             <br />
//             Today, Papua New Guinea is on the cusp of a digital transformation.
//             The national digital ID, SevisPass, is set to transform how
//             citizens, businesses, and government agencies access and deliver
//             digital services. Join us in this transformative moment to shape the
//             country's future.
//           </p>

//           {/* Two-column cards */}
//           <div className="about-grid">
//             {/* Who Can Participate */}
//             <div className="about-card">
//               <div className="about-card-header">
//                 <div className="about-icon">
//                   <img src="/img/wcp.svg" alt="participate icon" />
//                 </div>
//                 <p className="about-card-title">Who Can Participate</p>
//               </div>
//               <div className="about-list">
//                 {[
//                   "Individual innovators",
//                   "At least form a team of 3 to 5 members.",
//                   "University students from PNG institutions",
//                   "Startup teams and private sector companies",
//                   "Each team must have at least one female member",
//                   "Cross-Sector Teams across universities, companies, and disciplines",
//                 ].map((item, i) => (
//                   <div className="about-list-item" key={i}>
//                     <img src="/img/play-arrow.svg" alt="arrow" />
//                     <p className="about-list-text">{item}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Organisers */}
//             <div className="about-card">
//               <div className="about-card-header">
//                 <img
//                   src="/img/org.svg"
//                   alt="organisers icon"
//                   style={{ width: "1.5rem", height: "1.5rem" }}
//                 />
//                 <p className="about-card-title">Organisers</p>
//               </div>
//               <div className="about-org-body">
//                 <p className="about-org-desc">
//                   Department of ICT, Government of Papua New Guinea, in
//                   collaboration with Microsave Consulting.
//                 </p>
//                 <div className="about-logos">
//                   <img
//                     src="/img/dict.svg"
//                     className="about-logo"
//                     alt="DICT logo"
//                   />
//                   <img
//                     src="/img/msc-logo.svg"
//                     className="about-logo about-logo-msc"
//                     alt="MicroSave Consulting logo"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default function About() {
  return (
    <>
      <style>{`
        .about-section {
          width: 100%;
          background-color: #ffffff;
          padding: 3rem 0;
        }

        .about-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        /* ── Heading ── */
        .about-heading {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .about-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.625rem 1rem;
          background-color: #fff7ec;
          border-radius: 59px;
          border: 1px solid #eab05c;
          width: fit-content;
        }

        .about-title {
           font-family: "Roboto-SemiBold", Helvetica, sans-serif;
           font-weight: 600;
           color: #000000;
           font-size: 1.75rem;
           line-height: 1.2;
           margin: 0;
         }

        .about-pill-text {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 0.875rem;
          white-space: nowrap;
        }

        /* ── Body text ── */
        .about-body {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0 0 2rem 0;
        }

        .about-body strong {
          font-family: "Roboto-Bold", Helvetica, sans-serif;
          font-weight: 700;
        }

        /* ── Two-column card row ── */
        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
        }

        /* ── Card base ── */
        .about-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          border: 1px solid #f2f2f2;
          box-sizing: border-box;
        }

        /* ── Card header ── */
        .about-card-header {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }

        .about-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0.5625rem;
          background-color: #eab05c;
          border-radius: 32px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .about-icon img {
          width: 1.5rem;
          height: 1.5rem;
          object-fit: contain;
        }

        .about-card-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.25rem;
          margin: 0;
        }

        /* ── Participate list ── */
        .about-list {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .about-list-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .about-list-item img {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .about-list-text {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.325;
          flex: 1;
          min-width: 0;
          word-break: break-word;
          margin: 0;
        }

        .about-list-text strong {
          font-family: "Roboto-Bold", Helvetica, sans-serif;
          font-weight: 700;
        }

        /* ── Partners card content ── */
        .about-org-body {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .about-org-desc {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .about-logos {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 1.5rem;
          flex-wrap: nowrap;
          max-width: 100%;
          overflow: hidden;
        }

        .about-logo {
          height: 3.75rem;
          width: auto;
          max-height: 3.75rem;
          max-width: 33%;
          object-fit: contain;
        }

        .about-logo-msc {
          max-height: 3.25rem;
        }

        /* ── Responsive ── */
        @media (max-width: 64rem) {
          .about-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 48rem) {
          .about-body { font-size: 0.9375rem; }
        }

        @media (max-width: 37.5rem) {
          .about-section { padding: 2rem 0; }
          .about-card { padding: 1.25rem; }
          .about-logos { flex-wrap: wrap; gap: 1rem; }
          .about-logo { max-width: 45%; }
        }
      `}</style>

      <div className="about-section">
        <div className="about-inner">
          {/* Heading */}
          <div className="about-heading">
           
            <p className="about-title">Overview</p>
          </div>

          {/* Body text */}
          <p className="about-body">
            The Africa Digital ID Hackathon returns in 2026! We are back after
            our successful first edition, which was concluded at the ID4Africa
            annual general meeting in Addis Ababa in May 2025.
            
            
            This second chapter of Africa Digital ID Hackathon is the result of
            a collaboration between{" "}
            <strong>
              Carnegie Mellon University Africa's Upanzi DPI Network
            </strong>{" "}
            and <strong>MSC (MicroSave Consulting).</strong>
            <br />
            <br />
            The pan-African Digital ID hackathon 2026 has a dual focus. It will
            build local capacity as well as identify and develop locally
            contextualized digital ID use cases across sectors, such as
            healthcare, education, agriculture, and public service delivery.
           
            The Africa Digital ID Hackathon 2026 follows a comprehensive,
            four-phase approach designed to maximize learning, innovation, and
            real-world impact.
          </p>

          {/* Two-column cards */}
          <div className="about-grid">
            {/* Who Can Participate */}
            <div className="about-card">
              <div className="about-card-header">
                <div className="about-icon">
                  <img src="/img/wcp.svg" alt="participate icon" />
                </div>
                <p className="about-card-title">Who Can Participate</p>
              </div>
              <div className="about-list">
                {[
                  {
                    label: null,
                    text: "University students studying in Africa",
                  },
                  { label: "Team size:", text: "2–5 members" },
                  {
                    label: "Academic level:",
                    text: "Undergraduate, graduate, or doctoral students",
                  },
                  {
                    label: "Gender inclusion requirement:",
                    text: "At least one female participant per team",
                  },
                  {
                    label: "Refugee inclusion:",
                    text: "Open to refugees and asylum-seekers enrolled at any accredited university in Africa",
                  },
                ].map((item, i) => (
                  <div className="about-list-item" key={i}>
                    <img src="/img/play-arrow.svg" alt="arrow" />
                    <p className="about-list-text">
                      {item.label && <strong>{item.label} </strong>}
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners and Supporters */}
            <div className="about-card">
              <div className="about-card-header">
                <div className="about-icon">
                  <img src="/img/org.svg" alt="partners icon" />
                </div>
                <p className="about-card-title">Partners and supporters</p>
              </div>
              <div className="about-org-body">
                <p className="about-org-desc">
                  MSC (MicroSave Consulting) and CMU Africa's Upanzi DPI
                  Network, are organizing the 2nd Africa Digital ID Hackathon
                </p>
                <div className="about-logos">
                  <img
                    src="/img/1_MSC logo.svg"
                    className="about-logo about-logo-msc"
                    alt="MicroSave Consulting logo"
                  />
                  <img
                    src="/img/1_Upanzi logo.svg"
                    className="about-logo"
                    alt="Upanzi DPI Network logo"
                  />
                  <img
                    src="/img/1_ID4Africa logo.svg"
                    className="about-logo"
                    alt="ID4Africa logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}