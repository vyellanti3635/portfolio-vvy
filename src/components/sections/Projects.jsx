import { Section } from '../ui/Section';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import './Projects.css';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="SELECTED PROJECTS"
      title="Things I've shipped on the side."
    >
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
