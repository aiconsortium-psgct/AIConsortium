import Karpagam from '../assets/Images/Karpagam.png';
import Prakasan from '../assets/Images/Prakasan.png';
import Indumathi from '../assets/Images/Indumathi.png';
import SathiyaPriya from '../assets/Images/Sathiyapriya.png';
import NirmalaVarghese from '../assets/Images/Nirmala.png';
import Subramanian from '../assets/Images/Subramaniam.png';
import Niresh from '../assets/Images/NIresh.png';
import Brindha from '../assets/Images/Brindha.png';
import Karthick from '../assets/Images/Karthik Vijayakumar.png';
import PraveenKumar from '../assets/Images/Praveen.png';
import Bhama from '../assets/Images/Bhama.png';
import Sivaraj from '../assets/Images/Sivaraj.png';
import Natarajan from '../assets/Images/Natarajan.png';
import Surjit from '../assets/Images/Surjit.png';
import Jayaprasanth from '../assets/Images/Jayaprasanth.png';
import SenthilPrabha from '../assets/Images/Senthilprabha.png';
import Shanmugam from '../assets/Images/Shanmugam.png';
import Thiilairajan from '../assets/Images/Thillairajan.png';
import Rajesh from '../assets/Images/Rajesh.png';
import Suresh from '../assets/Images/Suresh.png';
import Murugan from '../assets/Images/Murugan.png';
import Sridevi from '../assets/Images/Sridevi.png';
import Kathirvel from '../assets/Images/Kathirvel.png';
import Maruthamani from '../assets/Images/Maruthamani.png';
import Dhanalakshmi from '../assets/Images/Dhanalakshmi.png';
import SaiSundaraKrishnan from '../assets/Images/Sai SUndar.png';
import Prabhavathi from '../assets/Images/Prabavathi.png';
import Kalpana from '../assets/Images/Kalpana.png';
import MPrakash from '../assets/Images/MPrakash.jpg' //need to ask
import Vinothkumar from '../assets/Images/Vinoth Kumar.png';
import Anisha from '../assets/Images/ANisha.png';
import JPrakash from '../assets/Images/Prakash.jpg';
import Abirami from '../assets/Images/Abirami.png';
import Ramesh from '../assets/Images/Ramesh.png';
import ArulJothi from '../assets/Images/Aruljothi.png';
import Dharani from '../assets/Images/Dharani.jpg';
import Sivaranjini from '../assets/Images/Sivaranjani.png';
import Thirumahal from '../assets/Images/Thirumahal.png';
import Sangeetha from '../assets/Images/Sangeetha.png';
import GopikaRani from '../assets/Images/Gopikarani.png';
import Rekha from '../assets/Images/Rekha.png';
import Vijayalakshmi from '../assets/Images/Vijiyalakashmi.png';
import Veerakumar from '../assets/Images/Veerakumar.jpg';
import PrincipalImage from '../assets/Images/principal.png';
import Member01 from '../assets/Images/1.png';
import Member02 from '../assets/Images/2.png';
import Member03 from '../assets/Images/3.png';
import Member04 from '../assets/Images/4.png';
import Member05 from '../assets/Images/5.png';
import Member06 from '../assets/Images/6.png';
import Member07 from '../assets/Images/7.png';
import Member08 from '../assets/Images/8.png';
import Member09 from '../assets/Images/9.png';
import Member10 from '../assets/Images/10.png';
import Member11 from '../assets/Images/11.png';
import Member12 from '../assets/Images/12.png';
import Member13 from '../assets/Images/13.png';
import Member14 from '../assets/Images/14.png';
import Member15 from '../assets/Images/15.png';
import Member16 from '../assets/Images/16.png';
import Member17 from '../assets/Images/17.png';
import Member18 from '../assets/Images/18.png';
import Member19 from '../assets/Images/19.png';
import Member20 from '../assets/Images/20.png';
import Member21 from '../assets/Images/21.png';
import Member22 from '../assets/Images/22.png';
import Member23 from '../assets/Images/23.png';


export interface Team{
    name: string,
    designation: string,
    role: string,
    image: string,
    shortDetails: string,
    fullDetails: string,
    achievements: string[],
    contact: {
        email: string,
        linkedin: string | null
    },
    department?: string,
    year: number
}

export const teamDetails : Team[] = [
  {
    name: "Dr.K.Prakasan",
    designation: "",
    role: "Patron",
    image: Prakasan,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Principal, PSGCT",
    year: 2025
  },
  {
    name: "Dr.G.R Karpagam",
    designation: "Professor",
    role: "Director",
    image: Karpagam,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Dr. D.Indumathi",
    designation: "Associate Professor",
    role: "Program Managers",
    image: Indumathi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Dr. K.Sathyapriya",
    designation: "Associate Professor",
    role: "Program Managers",
    image: SathiyaPriya,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Dr. Nirmala Varghese",
    designation: "Associate Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: NirmalaVarghese,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Apparel & Fashion Design",
    year: 2025
  },
  {
    name: "Mr. Subramanian S S",
    designation: "Assistant Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Subramanian,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Applied Science",
    year: 2025
  },
  {
    name: "Dr. J. Niresh",
    designation: "Assistant Professor (Sr.G)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Niresh,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Automobile",
    year: 2025
  },
  {
    name: "Dr. D Brindha",
    designation: "Assistant Professor (Sl.G)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Brindha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Biomedical Engineering",
    year: 2025
  },
  {
    name: "Mr. G. Karthik Vijayakumar",
    designation: "Assistant Professor (Sr.G)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Karthick,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Biotechnology",
    year: 2025
  },
  {
    name: "Dr S Praveenkumar",
    designation: "Associate Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: PraveenKumar,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Civil Engineering",
    year: 2025
  },
  {
    name: "Dr. S. Bhama",
    designation: "Assistant Professor (Sl.G)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Bhama,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Computer Application",
    year: 2025
  },
  {
    name: "Dr.D.Sivaraj",
    designation: "Assistant Professor (Sl.G)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Sivaraj,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "ECE",
    year: 2025
  },
  {
    name: "Dr. A. Natarajan",
    designation: "Professor(CAS)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Natarajan,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "EEE",
    year: 2025
  },
  {
    name: "Dr. R. Surjit",
    designation: "Assistant Professor (Sl.G)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Surjit,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Fashion Technology",
    year: 2025
  },
  {
    name: "Dr. D. Jayaprasanth",
    designation: "Associate Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Jayaprasanth,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "ICE",
    year: 2025
  },
  {
    name: "Dr. R. Senthil Prabha",
    designation: "Assistant Professor (Sl.G)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: SenthilPrabha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Information Technology",
    year: 2025
  },
  {
    name: "Dr. C. Shanmugam",
    designation: "Assistant Professor (Sl.G)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Shanmugam,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Mechanical Engineering",
    year: 2025
  },
  {
    name: "Dr. K Thillairajan",
    designation: "Associate Professor (CAS)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Thiilairajan,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Metallurgical Engineering",
    year: 2025
  },
  {
    name: "Mr. R. Rajesh",
    designation: "Assistant Professor (Sl.G)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Rajesh,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Production Engineering",
    year: 2025
  },
  {
    name: "Dr. M.Suresh",
    designation: "Associate Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Suresh,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "RAE",
    year: 2025
  },
  {
    name: "Dr. R. Murugan",
    designation: "Professor (CAS)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Murugan,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Textile Technology",
    year: 2025
  },
  {
    name: "Dr B Sridevi",
    designation: "Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Sridevi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Mathematics",
    year: 2025
  },
  {
    name: "Dr. P. Kathirvel",
    designation: "Assistant Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Kathirvel,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Physics",
    year: 2025
  },
  {
    name: "Dr D Maruthamani",
    designation: "Assistant Professor (Sl.G)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Maruthamani,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Chemistry",
    year: 2025
  },
  {
    name: "Dr D.Dhanalakshmi",
    designation: "Assistant Professor (Sl.G)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Dhanalakshmi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Applied science",
    year: 2025
  },
  {
    name: "Dr G Sai Sundara Krishnan",
    designation: "Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: SaiSundaraKrishnan,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "AMCS",
    year: 2025
  },
  {
    name: "Dr J Prabhavathi",
    designation: "Assistant Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Prabhavathi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "English",
    year: 2025
  },
  {
    name: "Dr.M.Kalpana",
    designation: "Associate Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Kalpana,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Humanities",
    year: 2025
  },
  {
    name: "Mr.M.Prakash",
    designation: "Librarian",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: MPrakash,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Library",
    year: 2025
  },
  {
    name: "Dr.B.Vinothkumar",
    designation: "Professor",
    role: "IT Infrastructure and Networking Technical Lead",
    image: Vinothkumar,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "IT",
    year: 2025
  },
  {
    name: "Mr.J.Prakash",
    designation: "Assistant Professor (Sr.G)",
    role: "Community Outreach and Operations Managers",
    image: JPrakash,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
    {
    name: "Ms.C D Anisha",
    designation: "Assistant Professor",
    role: "Community Outreach and Operations Managers",
    image: Anisha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Ms.S.K Abirami",
    designation: "Assistant Professor",
    role: "Community Outreach and Operations Managers",
    image: Abirami,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Mr.A C Ramesh",
    designation: "Assistant Professor (Sl.G)",
    role: "AI Product Development (Technical Leads)",
    image: Ramesh,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Dr.S.Arul Jothi",
    designation: "Assistant Professor (Sr.G)",
    role: "AI Product Development (Technical Leads)",
    image: ArulJothi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Dr.S.Sivaranjini",
    designation: "Assistant Professor (Sr.G)",
    role: "AI Product Development (Technical Leads)",
    image: Sivaranjini,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
    {
    name: "Ms.Dharani",
    designation: "Assistant Professor",
    role: "AI Product Development (Technical Leads)",
    image: Dharani,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Ms.R.Thirumahal",
    designation: "Assistant Professor (Sl.G)",
    role: "Curriculum Design",
    image: Thirumahal,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Dr B.Sangeetha",
    designation: "Assistant Professor (Sl.G)",
    role: "Curriculum Design",
    image: Sangeetha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "IT",
    year: 2025
  },
  {
    name: "Dr.N G Gopikarani",
    designation: "Assistant Professor (Sl.G)",
    role: "Student Ambassadors Management",
    image: GopikaRani,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Dr.R.Rekha",
    designation: "Associate Professor",
    role: "Student Ambassadors Management",
    image: Rekha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "IT",
    year: 2025
  },
  {
    name: "Dr. D.Indumathi",
    designation: "Associate Professor",
    role: "AI Alumni Council",
    image: Indumathi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Dr.S.Vijayalakshmi",
    designation: "Assistant Professor (Sl.G)",
    role: "AI Alumni Council",
    image: Vijayalakshmi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Mr.Veerakumar",
    designation: "Assistant Professor",
    role: "AI Alumni Council",
    image: Veerakumar,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2025
  },
  {
    name: "Dr. G. Thilagavathi",
    designation: "",
    role: "Patron",
    image: PrincipalImage,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Principal, PSGCT",
    year: 2026
  },
  {
    name: "Dr.G.R Karpagam",
    designation: "Professor",
    role: "Director",
    image: Karpagam,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Dr. D.Indumathi",
    designation: "Associate Professor",
    role: "Program Managers",
    image: Indumathi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Dr. K.Sathyapriya",
    designation: "Associate Professor",
    role: "Program Managers",
    image: SathiyaPriya,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Dr.B.Vinothkumar",
    designation: "Professor",
    role: "IT Infrastructure and Networking Technical Lead",
    image: Vinothkumar,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "IT",
    year: 2026
  },
  {
    name: "Mr.J.Prakash",
    designation: "Assistant Professor (Sr.G)",
    role: "Community Outreach and Operations Managers",
    image: JPrakash,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Ms.S.K Abirami",
    designation: "Assistant Professor",
    role: "Community Outreach and Operations Managers",
    image: Abirami,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Mr.A C Ramesh",
    designation: "Assistant Professor (Sl.G)",
    role: "AI Product Development (Technical Leads)",
    image: Ramesh,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Dr.S.Arul Jothi",
    designation: "Assistant Professor (Sr.G)",
    role: "AI Product Development (Technical Leads)",
    image: ArulJothi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Dr.S.Sivaranjini",
    designation: "Assistant Professor (Sr.G)",
    role: "AI Product Development (Technical Leads)",
    image: Sivaranjini,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Ms.R.Thirumahal",
    designation: "Assistant Professor (Sl.G)",
    role: "Curriculum Design",
    image: Thirumahal,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Dr B.Sangeetha",
    designation: "Assistant Professor (Sl.G)",
    role: "Curriculum Design",
    image: Sangeetha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "IT",
    year: 2026
  },
  {
    name: "Dr.N G Gopikarani",
    designation: "Assistant Professor (Sl.G)",
    role: "Student Ambassadors Management",
    image: GopikaRani,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Dr.R.Rekha",
    designation: "Associate Professor",
    role: "Student Ambassadors Management",
    image: Rekha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "IT",
    year: 2026
  },
  {
    name: "Dr.S.Vijayalakshmi",
    designation: "Assistant Professor (Sl.G)",
    role: "AI Alumni Council",
    image: Vijayalakshmi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Dr. D.Indumathi",
    designation: "Associate Professor",
    role: "AI Alumni Council",
    image: Indumathi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Mr.Veerakumar",
    designation: "Assistant Professor",
    role: "AI Alumni Council",
    image: Veerakumar,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
    year: 2026
  },
  {
    name: "Ms. Nagasudha C M",
    designation: "Assistant Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member01,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "CSE",
    year: 2026,
  },
  {
    name: "Dr. R. Surjit",
    designation: "Assistant Professor (Selection Grade)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member02,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Fashion Technology",
    year: 2026,
  },
  {
    name: "M. Sindhu",
    designation: "Assistant Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member03,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "RAE",
    year: 2026,
  },
  {
    name: "Dr. R. Rajesh",
    designation: "Assistant Professor (Selection Grade)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member04,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Production Engineering",
    year: 2026,
  },
  {
    name: "Dr. S. Bhama",
    designation: "Assistant Professor (Selection Grade)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member05,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Computer Applications",
    year: 2026,
  },
  {
    name: "Dr. A. Mohan",
    designation: "Assistant Professor (Senior Grade)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member06,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Mechanical",
    year: 2026,
  },
  {
    name: "Dr. B. Padmapriya",
    designation: "Associate Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member07,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Biomedical",
    year: 2026,
  },
  {
    name: "Dr. Nirmala Varghese",
    designation: "Associate Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member08,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Apparel & Fashion Design",
    year: 2026,
  },
  {
    name: "Dr. S. D. Gopal Ram",
    designation: "Assistant Professor (Senior Grade)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member09,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Physics",
    year: 2026,
  },
  {
    name: "Dr. D. Maruthamani",
    designation: "Assistant Professor (Selection Grade)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member10,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Chemistry",
    year: 2026,
  },
  {
    name: "Dr. J. Niresh",
    designation: "Assistant Professor (Senior Grade)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member11,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Automobile Engineering",
    year: 2026,
  },
  {
    name: "Dr. D. Jayaprasanth",
    designation: "Associate Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member12,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "I&CE",
    year: 2026,
  },
  {
    name: "Mr. V. Venkataramanan",
    designation: "Assistant Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member13,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Biotechnology",
    year: 2026,
  },
  {
    name: "Dr. M. Kalpana",
    designation: "Associate Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member14,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Humanities",
    year: 2026,
  },
  {
    name: "Dr. R. Rekha",
    designation: "Associate Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member15,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "IT",
    year: 2026,
  },
  {
    name: "Dr. Deepak Kumar Satapathy",
    designation: "Assistant Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member16,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Metallurgical Engineering",
    year: 2026,
  },
  {
    name: "Dr. B. Sathya",
    designation: "Assistant Professor (Sl. Gr.)",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member17,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "EEE",
    year: 2026,
  },
  {
    name: "Dr. J. Prabhavathi",
    designation: "Assistant Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member18,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "English",
    year: 2026,
  },
  {
    name: "Dr. G. Venkatraman",
    designation: "Assistant Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member19,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Civil",
    year: 2026,
  },
  {
    name: "Dr. A. Muthulakshmi",
    designation: "Assistant Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member20,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Mathematics",
    year: 2026,
  },
  {
    name: "Mr. Rishan Vikram",
    designation: "Assistant Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member21,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Textile Technology",
    year: 2026,
  },
  {
    name: "Dr. B. Malar",
    designation: "Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member22,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "AMCS",
    year: 2026,
  },
  {
    name: "Dr. R. Venkateswari",
    designation: "Associate Professor",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Member23,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "ECE",
    year: 2026,
  }

];
