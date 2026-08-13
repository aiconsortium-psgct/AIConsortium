import React, { useRef } from 'react';
import './VisionMission.css';
import { Lightbulb, Compass } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const VisionMission: React.FC = () => {
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const isVisionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });

  return (
    <section className="vision-mission-section">
      <div className="container">
        <div className="vision-mission-grid">
          <motion.div
            ref={visionRef}
            className="vision-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="card-header">
              <Lightbulb className="card-icon" />
              <h2 className="card-title">Our Vision</h2>
            </div>
            <p className="card-content">
              We're here to pave the way in artificial intelligence with a focus on doing things the right way.
              By putting safe, responsible AI at the heart of our work, we aim to create technology that truly brightens people's lives.
            </p>
          </motion.div>

          <motion.div
            ref={missionRef}
            className="mission-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="card-header">
              <Compass className="card-icon" />
              <h2 className="card-title">Our Mission</h2>
            </div>
            <p className="card-content">
              We create a welcoming space where people can learn together and build AI tools that make a real difference.
              We empower individuals and teams to innovate, always guided by strong ethics and a commitment to helping our communities thrive.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
