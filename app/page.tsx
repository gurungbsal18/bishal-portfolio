import { Header } from "@/components/Header";
import { SelectedWork } from "@/components/SelectedWork";
import { CopyEmail } from "@/components/CopyEmail";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-eyebrow">
            <span className="status-dot"></span> LEAD UX ENGINEER
            <span className="eyebrow-location">KATHMANDU, NEPAL</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">
                Thoughtful design.
                <br />
                Carefully <em>built.</em>
              </h1>
              <p>
                I bridge product design and frontend engineering to turn complex
                workflows into clear, considered experiences.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  Explore my work <span>↘</span>
                </a>
                <a
                  className="text-link"
                  href="/assets/Bishal_Gurung_CV.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  View résumé <span>↗</span>
                </a>
              </div>
            </div>
            <div className="bridge-art" aria-hidden="true">
              <div className="art-grid"></div>
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
              <div className="orbit orbit-three"></div>
              <div className="bridge-line"></div>
              <div className="art-card design-card">
                <span className="art-card-label">01 / THINK</span>
                <div className="design-symbol">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <strong>
                  Design with
                  <br />
                  intention.
                </strong>
                <div className="art-small">Understand → simplify</div>
              </div>
              <div className="art-card code-card">
                <span className="art-card-label">02 / MAKE</span>
                <div className="code-symbol">&lt; / &gt;</div>
                <strong>
                  Build with
                  <br />
                  care.
                </strong>
                <div className="art-small">Prototype → experience</div>
              </div>
              <span className="art-spark">✳</span>
              <span className="art-coordinate">
                DESIGN &nbsp; ↔ &nbsp; CODE
              </span>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Product thinking. Frontend craft.</span>
            <a href="#work">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
            <span className="hero-index">PORTFOLIO — 2026</span>
          </div>
        </section>
        <SelectedWork />
        <section id="about" className="about section">
          <div className="wrap about-grid">
            <div>
              <span className="eyebrow">02 / THE PERSON BEHIND THE PIXELS</span>
              <h2>
                A designer’s eye.
                <br />
                An engineer’s
                <br />
                <em>mindset.</em>
              </h2>
              <a
                className="text-link"
                href="/assets/Bishal_Gurung_CV.pdf"
                target="_blank"
                rel="noopener"
              >
                Get to know my background <span>↗</span>
              </a>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                I’m Bishal, a Lead UX Engineer based in Kathmandu, Nepal. I work
                in the space where product thinking becomes something people can
                use.
              </p>
              <p>
                My path began in graphic and web design in 2011. Today, I
                combine UX design, high-fidelity prototyping and frontend
                development — connecting the details of an interface to the
                bigger picture of a product.
              </p>
              <p>
                At XylonTech, I work from requirements and user journeys through
                Figma prototypes, design handoffs and implementation reviews, in
                collaboration with engineers and QA.
              </p>
              <div className="principles">
                <span>Understand the problem.</span>
                <span>Make the complex clear.</span>
                <span>Care about the details.</span>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="experience section wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / THE JOURNEY</span>
              <h2>
                Built on
                <br />
                <em>experience.</em>
              </h2>
            </div>
            <p>
              From visual foundations to product interfaces and UX engineering
              leadership.
            </p>
          </div>
          <div className="timeline">
            <article className="job current">
              <div className="job-date">
                JUN 2022 — PRESENT<span className="current-label">CURRENT</span>
              </div>
              <div className="job-body">
                <h3>
                  Lead UX Engineer <span>at XylonTech</span>
                </h3>
                <p>
                  Leading UX engineering and UI/UX execution across mentorship
                  platforms and enterprise applications. Partnering with
                  frontend engineers and QA on responsive experiences and
                  interface consistency.
                </p>
                <div className="job-progression">
                  <span>Senior UX Engineer · Feb 2025</span>
                  <span>Lead UX Engineer · Jun 2026</span>
                </div>
              </div>
            </article>
            <article className="job">
              <div className="job-date">FEB 2021 — JUN 2022</div>
              <div className="job-body">
                <h3>
                  UI/UX Designer <span>at Adventure Master Trek</span>
                </h3>
                <p>
                  Website interfaces and travel experiences with a focus on
                  navigation, responsive layouts and visual presentation.
                </p>
              </div>
            </article>
            <article className="job">
              <div className="job-date">FEB 2019 — JUN 2022</div>
              <div className="job-body">
                <h3>
                  UI/UX Designer <span>at Alpine Club of Himalaya</span>
                </h3>
                <p>
                  Travel interfaces and content-driven journeys for trekking and
                  tour offerings.
                </p>
              </div>
            </article>
            <details className="earlier">
              <summary>
                Earlier chapters{" "}
                <span>
                  2011 — 2021 <b>＋</b>
                </span>
              </summary>
              <div>
                <article className="job">
                  <div className="job-date">JUL — DEC 2021</div>
                  <div className="job-body">
                    <h3>
                      Graphic / Web Designer <span>at Sarvanam Software</span>
                    </h3>
                    <p>
                      Interfaces and graphics for school and hotel management
                      systems, plus a driving school website.
                    </p>
                  </div>
                </article>
                <article className="job">
                  <div className="job-date">MAY 2016 — MAR 2020</div>
                  <div className="job-body">
                    <h3>
                      Graphic / Web Designer
                      <span>at Geetanjali School / College</span>
                    </h3>
                    <p>
                      Visual and website materials supporting institutional
                      communication.
                    </p>
                  </div>
                </article>
                <article className="job">
                  <div className="job-date">DEC 2011 — DEC 2019</div>
                  <div className="job-body">
                    <h3>
                      Graphic / Web Designer <span>at Argon Pvt Ltd</span>
                    </h3>
                    <p>
                      Web graphics and digital assets, building a foundation in
                      layout, typography and interface design.
                    </p>
                  </div>
                </article>
              </div>
            </details>
          </div>
        </section>
        <section className="skills section wrap" aria-labelledby="skills-title">
          <div className="skills-intro">
            <span className="eyebrow">04 / TOOLS OF THE TRADE</span>
            <h2 id="skills-title">
              One connected
              <br />
              <em>practice.</em>
            </h2>
          </div>
          <div className="skill-groups">
            <article>
              <span className="skill-number">01</span>
              <h3>Product & UX</h3>
              <p>
                Information architecture · User flows · Wireframes · Figma
                prototyping · Design systems · UI reviews
              </p>
            </article>
            <article>
              <span className="skill-number">02</span>
              <h3>Frontend engineering</h3>
              <p>
                React · Next.js · TypeScript · JavaScript · HTML · CSS / SCSS ·
                Tailwind CSS · Bootstrap
              </p>
            </article>
            <article>
              <span className="skill-number">03</span>
              <h3>Creative & collaboration</h3>
              <p>
                Photoshop · Illustrator · Developer handoff · Responsive design
                · UI quality assurance · Agile delivery
              </p>
            </article>
          </div>
        </section>
        <section id="contact" className="contact section wrap">
          <span className="eyebrow">05 / YOUR NEXT CHAPTER</span>
          <div className="contact-heading">
            <h2>
              Good work starts
              <br />
              with a <em>conversation.</em>
            </h2>
            <a
              className="contact-orb"
              href="mailto:gurungbsal18@gmail.com"
              aria-label="Email Bishal Gurung"
            >
              ↗
            </a>
          </div>
          <div className="contact-bottom">
            <div>
              <p>Have a product challenge or a project in mind?</p>
              <a className="email" href="mailto:gurungbsal18@gmail.com">
                gurungbsal18@gmail.com
              </a>
            </div>
            <CopyEmail />
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <a className="footer-name" href="#">
          Bishal Gurung <span>© 2026</span>
        </a>
        <span>Thoughtfully designed. Carefully built.</span>
        <div>
          <a
            href="https://www.linkedin.com/in/gurung18/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn ↗
          </a>
          <a href="/assets/Bishal_Gurung_CV.pdf" target="_blank" rel="noopener">
            Résumé ↗
          </a>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
