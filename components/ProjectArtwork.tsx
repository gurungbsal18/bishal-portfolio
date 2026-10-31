import Image from "next/image";
import { projects, type ProjectId } from "@/data/projects";

type Props = { projectId: ProjectId; instance: "card" | "dialog" };

export function ProjectArtwork({ projectId, instance }: Props) {
  const project = projects.find((item) => item.id === projectId);
  if (project?.image) {
    return (
      <figure className="project-image">
        <div className="project-visual project-screenshot">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1600}
            height={1200}
            unoptimized
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
        {instance === "dialog" ? (
          <figcaption>{project.image.caption}</figcaption>
        ) : null}
      </figure>
    );
  }
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
    default:
      return null;
  }
}
