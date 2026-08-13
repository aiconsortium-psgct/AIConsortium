import React from 'react';
import './AISpectrumLink.css';

const AISpectrumLink: React.FC = () => {
  return (
    <div className="aispectrum-link">
      <a href="/aispectrum" title="AI Spectrum Conference">
        International Conference on The AI Spectrum: 2025 <span className="arrow-icon">→</span>
      </a>
    </div>
  );
};

export default AISpectrumLink;