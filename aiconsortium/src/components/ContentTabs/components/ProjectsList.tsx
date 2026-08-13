import React, { useState, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { UIProject } from '../../../data/projects';
import { useNavigate } from 'react-router-dom';

export interface ProjectsListProps {
  projects: UIProject[];
}

const getProjectYear = (project: UIProject): string => {
  if (project.year) return project.year;
  const dateStr = project.completedDate || project.sactionedDate;
  if (!dateStr) return 'Other';
  const match = dateStr.match(/\d{4}/);
  if (match) return match[0];
  const date = new Date(dateStr);
  return !isNaN(date.getFullYear()) ? date.getFullYear().toString() : 'Other';
};

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  const navigate = useNavigate();

  const displayProjects = projects || [];

  // Derive unique years sorted descending (most recent first) + 'All'
  const years = useMemo(() => {
    const yearsSet = new Set<string>();
    displayProjects.forEach(p => {
      const year = getProjectYear(p);
      if (year && year !== 'Other') {
        yearsSet.add(year);
      }
    });
    const sortedYears = Array.from(yearsSet).sort((a, b) => Number(b) - Number(a));
    return [...sortedYears, 'All'];
  }, [displayProjects]);

  // Default to the most recent year
  const [selectedYear, setSelectedYear] = useState<string>(() => years[0] || 'All');

  // Filter projects based on selected year
  const filteredProjects = useMemo(() => {
    if (selectedYear === 'All') return displayProjects;
    return displayProjects.filter(p => getProjectYear(p) === selectedYear);
  }, [displayProjects, selectedYear]);

  const handleLearnMore = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/projects/${projectId}`);
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="projects-wrapper">
      {years.length > 0 && (
        <div className="tabs-container" style={{ marginBottom: '1.25rem', justifyContent: 'flex-start' }}>
          <div className="tabs">
            {years.map(year => (
              <button
                key={year}
                className={`tab ${selectedYear === year ? 'active' : ''}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}

      {filteredProjects.length === 0 ? (
        <p className="projects-intro">No projects found for {selectedYear}.</p>
      ) : (
        <div className="projects-list">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-details">
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">{project.description}</p>
                <button
                  className="learn-more"
                  onClick={(e) => handleLearnMore(project.id, e)}
                  aria-label={`Learn more about ${project.title}`}
                >
                  Learn more <ChevronRight className="small-icon" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
