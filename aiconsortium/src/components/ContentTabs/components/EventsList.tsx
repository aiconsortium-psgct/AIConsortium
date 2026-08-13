import { useState, useMemo } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { EventData } from '../../../data/events';

interface EventProps{
  events: EventData[];
}

const getEventYear = (event: EventData): string => {
  if (!event.start) return 'Other';
  const date = new Date(event.start);
  if (!isNaN(date.getFullYear())) {
    return date.getFullYear().toString();
  }
  const match = event.start.match(/\d{4}/);
  return match ? match[0] : 'Other';
};

// Accept events prop but use the imported events as fallback
const EventsList = ({ events }: EventProps) => {
  const navigate = useNavigate();

  const displayEvents = events || [];

  // Derive unique years sorted descending (most recent first) + 'All'
  const years = useMemo(() => {
    const yearsSet = new Set<string>();
    displayEvents.forEach(e => {
      const year = getEventYear(e);
      if (year && year !== 'Other') {
        yearsSet.add(year);
      }
    });
    const sortedYears = Array.from(yearsSet).sort((a, b) => Number(b) - Number(a));
    return [...sortedYears, 'All'];
  }, [displayEvents]);

  // Default to the most recent year
  const [selectedYear, setSelectedYear] = useState<string>(() => years[0] || 'All');

  // Filter events based on selected year
  const filteredEvents = useMemo(() => {
    if (selectedYear === 'All') return displayEvents;
    return displayEvents.filter(e => getEventYear(e) === selectedYear);
  }, [displayEvents, selectedYear]);

  if (!displayEvents || displayEvents.length === 0) {
    return <p className="events-intro">No upcoming events at the moment.</p>;
  }

  // Format date nicely without time
  const formatEventDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Navigate to event details page with debugging
  const onEventClick = (eventId: string) => {
    console.log("Navigating to event from homepage with ID:", eventId);
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="events-wrapper">
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

      {filteredEvents.length === 0 ? (
        <p className="events-intro">No events found for {selectedYear}.</p>
      ) : (
        <div className="events-list">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="event-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {event.image && (
                <div
                  className="event-image-container"
                  onClick={() => onEventClick(event.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={event.image} alt={event.title} className="event-image" />
                </div>
              )}
              <div className="event-details">
                <div className="event-meta">
                  <Calendar className="meta-icon" /> {formatEventDate(event.start)}
                  {event.location && <span className="event-location"> • {event.location}</span>}
                </div>
                <h3 className="event-title">{event.title}</h3>
                {event.description && <p className="event-ddescription">{event.description}</p>}
                <button
                  className="learn-more"
                  onClick={() => onEventClick(event.id)}
                  data-event-id={event.id}
                >
                  Learn More <ChevronRight className="small-icon" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;