import { useState, useRef, useMemo } from "react";
import "./team.css";
import TeamMember from "../../components/TeamMember/TeamMember";
import { teamDetails } from "../../data/team";

const ROTATING_ROLE = "Domain Specific Academic Advisors and Innovation Mentors";

const roleDisplayLabels: Record<string, string> = {
  "Patron": "Patron",
  "Director": "Director",
  "Program Managers": "The Orchestrators",
  "Domain Specific Academic Advisors and Innovation Mentors": "Mentors & Innovators",
  "IT Infrastructure and Networking Technical Lead": "The Backbone Builders",
  "Community Outreach and Operations Managers": "Community Champions",
  "AI Product Development (Technical Leads)": "Builders & Architects",
  "Curriculum Design": "Curriculum Crafters",
  "Student Ambassadors Management": "Campus Voices",
  "AI Alumni Council": "The Alumni Circle",
  "All": "All"
};

const AIConsortium = () => {
  // Get unique roles from team data
  const allRoles = ["All", ...Array.from(new Set(teamDetails.map(member => member.role)))].filter(Boolean);

  // Derive available years dynamically from members
  const availableYears = useMemo(() => {
    const years = Array.from(
      new Set(
        teamDetails
          .filter(member => member.year)
          .map(member => member.year)
      )
    ).sort((a, b) => b - a);
    return years.length > 0 ? years : [2026, 2025];
  }, []);

  // State to track selected role and selected year
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedYear, setSelectedYear] = useState<number>(() => availableYears[0]);

  // Filtered team members based on selected role and selected year
  const filteredMembers = useMemo(() => {
    return teamDetails.filter(member => {
      // Role filter check
      const matchesRole = selectedRole === "All" || member.role === selectedRole;

      // Year filter check: member's year must match selectedYear
      const matchesYear = !member.year || member.year === selectedYear;

      return matchesRole && matchesYear;
    });
  }, [selectedRole, selectedYear]);

  // References to the tab containers for scrolling
  const roleTabsContainerRef = useRef<HTMLDivElement>(null);
  const yearTabsContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll navigation for role tabs
  const scrollRoleTabs = (direction: 'left' | 'right') => {
    if (roleTabsContainerRef.current) {
      const scrollAmount = 200;
      const currentScroll = roleTabsContainerRef.current.scrollLeft;
      roleTabsContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll navigation for year tabs
  const scrollYearTabs = (direction: 'left' | 'right') => {
    if (yearTabsContainerRef.current) {
      const scrollAmount = 200;
      const currentScroll = yearTabsContainerRef.current.scrollLeft;
      yearTabsContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  /*
   * Microcopy Alternatives for Scroll Arrow Tooltips / ARIA Labels:
   * Role tabs left:
   *  - "Rewind the roster" (Active)
   *  - "Slide back to leaders"
   *  - "Previous team roles"
   * Role tabs right:
   *  - "Meet more of the team" (Active)
   *  - "Explore next categories"
   *  - "Discover more members"
   * Year tabs left:
   *  - "Rewind year archive" (Active)
   *  - "Back in time"
   *  - "View previous cohorts"
   * Year tabs right:
   *  - "Advance year archive" (Active)
   *  - "Fast-forward to present"
   *  - "View newer cohorts"
   */

  return (
    <div className="team-container">
      {/* Team Members Section */}
      <section className="team-members-section">
        <h2 className="team-section-title">Meet Our Team</h2>

        {/* Role Tab Navigation with Arrows */}
        <div className="team-tabs-navigation">
          <button
            className="team-tabs-arrow team-tabs-arrow-left"
            onClick={() => scrollRoleTabs('left')}
            aria-label="Rewind the roster"
            title="Rewind the roster"
          >
            &lt;
          </button>

          <div className="team-tabs-container" ref={roleTabsContainerRef}>
            <div className="team-tabs">
              {allRoles.map(role => (
                <button
                  key={role}
                  className={`team-tab ${selectedRole === role ? 'active' : ''}`}
                  onClick={() => setSelectedRole(role)}
                >
                  {selectedYear === 2026 ? (roleDisplayLabels[role] || role) : role}
                </button>
              ))}
            </div>
          </div>

          <button
            className="team-tabs-arrow team-tabs-arrow-right"
            onClick={() => scrollRoleTabs('right')}
            aria-label="Meet more of the team"
            title="Meet more of the team"
          >
            &gt;
          </button>
        </div>

        {/* Year Archive Tab Navigation with Arrows */}
        {availableYears.length > 0 && (
          <div className="team-tabs-navigation year-tabs-navigation" style={{ marginTop: '1rem' }}>
            <button
              className="team-tabs-arrow team-tabs-arrow-left"
              onClick={() => scrollYearTabs('left')}
              aria-label="Rewind year archive"
              title="Rewind year archive"
            >
              &lt;
            </button>

            <div className="team-tabs-container" ref={yearTabsContainerRef}>
              <div className="team-tabs">
                {availableYears.map(year => (
                  <button
                    key={year}
                    className={`team-tab ${selectedYear === year ? 'active' : ''}`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="team-tabs-arrow team-tabs-arrow-right"
              onClick={() => scrollYearTabs('right')}
              aria-label="Advance year archive"
              title="Advance year archive"
            >
              &gt;
            </button>
          </div>
        )}

        <div className="team-members-grid">
          {filteredMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              designation={member.designation}
              image={member.image}
              shortDetails={member.shortDetails}
              fullDetails={member.fullDetails}
              achievements={member.achievements}
              contact={member.contact ? {
                email: member.contact.email,
                linkedin: member.contact.linkedin || undefined
              } : undefined}
              department={member.department}
              showViewDetails={false} // Don't show view details button in team page
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIConsortium;