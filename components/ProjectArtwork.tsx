import type { ProjectId } from "@/data/projects";

type Props = { projectId: ProjectId; instance: "card" | "dialog" };

export function ProjectArtwork({ projectId, instance }: Props) {
  const prefix = `${projectId}-${instance}`;
  switch (projectId) {
    case "bhaibahini":
      return (
        <div className="project-visual mentorship" aria-hidden="true">
          <div className="visual-top">
            <span>PEOPLE, CONNECTED.</span>
            <span>01</span>
          </div>
          <div className="mentor-window">
            <div className="mini-nav">
              <b>
                <span className="mini-flower">✳</span> BhaiBahini
              </b>
              <span>Discover your next chapter ↗</span>
            </div>
            <div className="mentor-body">
              <span className="mini-kicker">GROW TOGETHER</span>
              <h3>
                A little guidance.
                <br />A world of possibility.
              </h3>
              <div className="mini-cta">Find your mentor &nbsp; ↗</div>
              <div className="mentor-avatars">
                <span>✳</span>
                <span>↗</span>
                <span>∞</span>
                <small>Connection starts here.</small>
              </div>
            </div>
            <div className="floating-note">
              <span>↗</span>
              <div>
                A path forward.
                <br />
                <b>Built around people.</b>
              </div>
            </div>
          </div>
          <span className="visual-caption">INTERFACE ILLUSTRATION</span>
        </div>
      );
    case "timecard":
      return (
        <div className="project-visual enterprise" aria-hidden="true">
          <div className="visual-top">
            <span>CLARITY AT WORK.</span>
            <span>02</span>
          </div>
          <div className="time-window">
            <aside>
              <b>
                t<span>⌁</span>
              </b>
              <i className="selected">▦</i>
              <i>◷</i>
              <i>≡</i>
              <i>⚙</i>
            </aside>
            <div className="time-body">
              <div className="time-top">
                <span>Workspace / Timecards</span>
                <span>BG</span>
              </div>
              <h3>Your week, at a glance.</h3>
              <div className="time-metrics">
                <div>
                  <span>Total hours</span>
                  <strong>
                    32<span>h</span>
                  </strong>
                </div>
                <div>
                  <span>Awaiting review</span>
                  <strong>02</strong>
                </div>
                <div>
                  <span>Status</span>
                  <strong className="status-pill">On track ↗</strong>
                </div>
              </div>
              <div className="time-table">
                <div>
                  <span>Project</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                </div>
                <div>
                  <b>
                    <i></i> Product design
                  </b>
                  <span>4:00</span>
                  <span>6:00</span>
                  <span>4:00</span>
                  <span>2:00</span>
                </div>
                <div>
                  <b>
                    <i></i> Development
                  </b>
                  <span>4:00</span>
                  <span>2:00</span>
                  <span>4:00</span>
                  <span>6:00</span>
                </div>
                <div>
                  <b>Total hours</b>
                  <span>8:00</span>
                  <span>8:00</span>
                  <span>8:00</span>
                  <span>8:00</span>
                </div>
              </div>
              <div className="time-submit">
                Ready for review <span>Submit timecard ↗</span>
              </div>
            </div>
          </div>
          <span className="visual-caption">
            ILLUSTRATIVE DATA · NO CLIENT INFORMATION
          </span>
        </div>
      );
    case "alpine":
      return (
        <div className="project-visual alpine" aria-hidden="true">
          <div className="visual-top">
            <span>MADE FOR EXPLORATION.</span>
            <span>03</span>
          </div>
          <div className="alpine-window">
            <div className="alpine-nav">
              <b>△ ALPINE CLUB</b>
              <span>Discover &nbsp; Journeys &nbsp; About</span>
              <span>↗</span>
            </div>
            <svg
              className="mountains"
              viewBox="0 0 700 400"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id={`${prefix}-sky`} x2="0" y2="1">
                  <stop stopColor="#9eaca5"></stop>
                  <stop offset="1" stopColor="#dad5bd"></stop>
                </linearGradient>
                <linearGradient id={`${prefix}-peak`} x2=".7" y2="1">
                  <stop stopColor="#d9d8cb"></stop>
                  <stop offset="1" stopColor="#536d68"></stop>
                </linearGradient>
              </defs>
              <path fill={`url(#${prefix}-sky)`} d="M0 0h700v400H0z"></path>
              <circle cx="530" cy="85" r="35" fill="#e4ddbb"></circle>
              <path
                fill="#839990"
                d="M-100 360 100 105l100 125L355 40l150 200L620 95l180 265z"
              ></path>
              <path
                fill={`url(#${prefix}-peak)`}
                d="m60 400 255-335L600 400Z"
              ></path>
              <path
                fill="#f0ede0"
                d="m315 65-90 119 61-26 29 20 27-44 70 48z"
              ></path>
              <path
                fill="#385853"
                d="m-80 400 180-145 140 145 226-145 285 145z"
              ></path>
              <path
                fill="#203e39"
                d="m-50 400 250-90 170 90 220-65 150 65z"
              ></path>
            </svg>
            <div className="alpine-copy">
              <span>THE HIMALAYAS ARE CALLING.</span>
              <h3>
                Go beyond
                <br />
                the ordinary.
              </h3>
              <span className="alpine-explore">
                Explore the journey &nbsp; ↗
              </span>
            </div>
          </div>
          <span className="visual-caption">
            EDITORIAL INTERPRETATION · ORIGINAL VECTOR ART
          </span>
        </div>
      );
    case "swift":
      return (
        <div className="project-visual swift" aria-hidden="true">
          <div className="visual-top">
            <span>A CHANGE OF SCENERY.</span>
            <span>04</span>
          </div>
          <div className="swift-type" aria-hidden="true">
            Go
            <br />
            <em>somewhere.</em>
          </div>
          <div className="phone">
            <div className="phone-notch"></div>
            <div className="phone-nav">
              swift<span>✳</span>
              <small>☰</small>
            </div>
            <span className="phone-hello">A new adventure awaits.</span>
            <h3>
              Where to
              <br />
              next?
            </h3>
            <div className="phone-search">⌕ &nbsp; Find your escape</div>
            <div className="phone-scene">
              <span>NEPAL</span>
              <div className="phone-mountain"></div>
              <div className="phone-destination">
                <b>
                  A little closer
                  <br />
                  to the mountains.
                </b>
                <span>↗</span>
              </div>
            </div>
            <div className="phone-bottom">
              ⌂ &nbsp; &nbsp; ⌕ &nbsp; &nbsp; ♡ &nbsp; &nbsp; ◉
            </div>
          </div>
          <span className="visual-caption">
            MOBILE UI CONCEPT · INTERFACE ILLUSTRATION
          </span>
        </div>
      );
  }
}
