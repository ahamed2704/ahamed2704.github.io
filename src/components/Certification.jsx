import "./Certification.css";

function Certification({ setActiveSection }) {

    const certifications = [

        {
            title: "3DEXPERIENCE Mechanical Designer Professional",

            organization: "Dassault Systèmes",

            description:
                "Professional certification demonstrating proficiency in CATIA V5 and the 3DEXPERIENCE platform for mechanical product design."
        },

        {
            title: "CATIA, DELMIA, SIMULIA",

            organization: "APSSDC",

            description:
                "Completed comprehensive training in CATIA V5 covering Part Design, Assembly Design and Drafting."
        }

    ];

    return (

        <section className="certification-page">

            <button
                className="back-btn"
                onClick={() => setActiveSection(null)}
            >
                ← Dashboard
            </button>

            <p className="section-title">
                PROFESSIONAL CERTIFICATIONS
            </p>

            <h1>Professional Certifications</h1>

            <p className="section-description">

                Industry certifications demonstrating competency
                in CAD design, product development and engineering software.

            </p>

            <div className="certificate-grid">

                {certifications.map((certificate, index) => (

                    <div
                        className="certificate-card"
                        key={index}
                    >

                        <div className="certificate-top">

                            🏆

                        </div>

                        <h2>

                            {certificate.title}

                        </h2>

                        <h3>

                            {certificate.organization}

                        </h3>

                        <p>

                            {certificate.description}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Certification;