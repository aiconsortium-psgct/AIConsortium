import React, { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Publication } from '../../../data/publications';
import { useNavigate } from 'react-router-dom';

interface PublicationsListProps {
  publications: Publication[];
}

const getPublicationYear = (pub: Publication): string => {
  return pub.year ? String(pub.year) : 'Other';
};

const PublicationsList: React.FC<PublicationsListProps> = ({
  publications,
}) => {
  const navigate = useNavigate();
  const displayPublications = publications || [];

  // Derive unique years sorted descending (most recent first) + 'All'
  const years = useMemo(() => {
    const yearsSet = new Set<string>();
    displayPublications.forEach(p => {
      const year = getPublicationYear(p);
      if (year && year !== 'Other') {
        yearsSet.add(year);
      }
    });
    const sortedYears = Array.from(yearsSet).sort((a, b) => Number(b) - Number(a));
    return [...sortedYears, 'All'];
  }, [displayPublications]);

  // Default to the most recent year
  const [selectedYear, setSelectedYear] = useState<string>(() => years[0] || 'All');

  // Filter publications based on selected year
  const filteredPublications = useMemo(() => {
    if (selectedYear === 'All') return displayPublications;
    return displayPublications.filter(p => getPublicationYear(p) === selectedYear);
  }, [displayPublications, selectedYear]);

  const handlePublicationClick = (publicationId: string) => {
    navigate(`/publications/${publicationId}`);
  };

  return (
    <div className="publications-wrapper">
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

      {filteredPublications.length === 0 ? (
        <p className="publications-intro">No publications found for {selectedYear}.</p>
      ) : (
        <div className="publications-list">
          {filteredPublications.map((publication, index) => (
            <motion.div
              key={publication.id}
              className="publication-card"
              onClick={() => handlePublicationClick(publication.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="publication-details">
                <div className="publication-meta">
                  {publication.journal} • {publication.year}
                </div>
                <h3 className="publication-title">{publication.title}</h3>
                <p className="publication-authors">
                  {typeof publication.authors === 'string'
                    ? publication.authors
                    : publication.authors.map(author => author.name).join(', ')}
                </p>

                {/* Quality indicators box */}
                <div className="publication-quality-indicators">
                  <div className="quality-indicator">
                    <span className="indicator-label">Indexing:</span>
                    <span className="indicator-value">{publication.indexing || 'N/A'}</span>
                  </div>
                  <div className="quality-indicator">
                    <span className="indicator-label">Quartile:</span>
                    <span className="indicator-value">{publication.quartile || 'N/A'}</span>
                  </div>
                  <div className="quality-indicator">
                    <span className="indicator-label">Impact Factor:</span>
                    <span className="indicator-value">{publication.impactFactor || 'N/A'}</span>
                  </div>
                </div>

                <button
                  className="learn-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePublicationClick(publication.id);
                  }}
                >
                  Read more <ArrowRight className="small-icon" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PublicationsList;
