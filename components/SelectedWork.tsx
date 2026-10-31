"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { projects, type ProjectId } from "@/data/projects";
import { ProjectArtwork } from "./ProjectArtwork";

export function SelectedWork() {
  const [activeId, setActiveId] = useState<ProjectId | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const activeProject = projects.find((project) => project.id === activeId);

  useEffect(() => {
    const element = dialog.current;
    if (!activeId || !element) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    element.scrollTop = 0;
    closeButton.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (element.open) element.close();
    };
  }, [activeId]);

  function openStory(id: ProjectId, event: MouseEvent<HTMLButtonElement>) {
    trigger.current = event.currentTarget;
    setActiveId(id);
  }

  function onClose() {
    setActiveId(null);
    trigger.current?.focus({ preventScroll: true });
  }

  function onBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    ) {
      dialog.current?.close();
    }
  }

  return (
    <>
      <section
        id="work"
        className="work section wrap"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2 id="work-title">
              From complexity
              <br />
              to <em>clarity.</em>
            </h2>
          </div>
          <p>
            A selection of product, enterprise and travel experiences — across
            design and implementation.
          </p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className="project"
              aria-label={`Read ${project.title} project story`}
              aria-haspopup="dialog"
              onClick={(event) => openStory(project.id, event)}
            >
              <ProjectArtwork projectId={project.id} instance="card" />
              <div className="project-info">
                <div>
                  <div className="project-meta">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="work-note">
          <span>SELECTED PROJECT STORIES</span>
          <p>
            Visuals are portfolio illustrations, not screenshots of shipped
            products. Open a project for verified scope and context.
          </p>
        </div>
      </section>
      <dialog
        ref={dialog}
        id="project-dialog"
        aria-labelledby="dialog-title"
        onClose={onClose}
        onClick={onBackdropClick}
      >
        <div className="dialog-top">
          <span>SELECTED WORK / PROJECT STORY</span>
          <button
            ref={closeButton}
            className="close-dialog"
            type="button"
            aria-label="Close project story"
            onClick={() => dialog.current?.close()}
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        {activeProject ? (
          <article className="story">
            <span className="eyebrow">{activeProject.label}</span>
            <h2 id="dialog-title">{activeProject.title}</h2>
            <p className="story-lede">{activeProject.lede}</p>
            <div className="story-tags">
              {activeProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="story-art">
              <ProjectArtwork projectId={activeProject.id} instance="dialog" />
            </div>
            <section className="story-section">
              <h3>The context</h3>
              <p>{activeProject.context}</p>
            </section>
            <section className="story-section">
              <h3>My contribution</h3>
              <ul>
                {activeProject.contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="story-section">
              <h3>The design lens</h3>
              <p>{activeProject.lens}</p>
            </section>
            <div className="story-note">{activeProject.scope}</div>
            <div className="story-links">
              {activeProject.link ? (
                <a
                  className="text-link"
                  href={activeProject.link.href}
                  target="_blank"
                  rel="noopener"
                >
                  {activeProject.link.text} ↗
                </a>
              ) : null}
              <a
                className="text-link"
                href={`mailto:gurungbsal18@gmail.com?subject=${encodeURIComponent("Let’s talk about " + activeProject.title)}`}
              >
                Discuss this project ↗
              </a>
            </div>
          </article>
        ) : null}
      </dialog>
    </>
  );
}
