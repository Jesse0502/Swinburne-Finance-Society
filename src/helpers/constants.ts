export const themeColor = "";
export const darkPrimeColor = "#083e6a";
export const whitePrimeColor = "#083e6a";

export interface SocialMedia {
  platform: string; // e.g., "Instagram", "LinkedIn"
  username: string;
  link: string;
}

export interface CommitteeMember {
  name: string;
  role: string;
  year: number;
  description?: string;
  image?: string | null;
  socialMedia?: SocialMedia[];
}

export const committeeMembers: { [year: number]: CommitteeMember[] } = {
  2025: [
    {
      name: "Farhan Ehmud",
      role: "Co-President",
      year: 2025,
      description: `Farhan is a penultimate-year Business student pursuing a double major in Analytics and Finance. He is passionate about leveraging analytics in finance, particularly for risk analysis in equity markets. His career aspirations lie in Portfolio Optimization and Quantitative Finance. Currently, he is helping develop a machine learning model at a startup called Weekly. He enjoys Calisthenics, Formula 1 and is an experienced guitarist.
      <br/>
      <b>Favourite firm</b> - SIG and Goldman Sachs
      <br/>
      <b>Favourite investor</b> - Naval Ravikant`,
      image: "./farhan-ehmud.jpg",
      socialMedia: [
        {
          platform: "LinkedIn",
          username: "farhan-ehmud",
          link: "https://linkedin.com/in/farhan-ehmud",
        },
        {
          platform: "Instagram",
          username: "farhan.ehmud",
          link: "https://instagram.com/farhan.ehmud",
        },
      ],
    },
    {
      name: "William Keehne",
      role: "Co-President/Treasurer",
      year: 2025,
      description:
        "William is a penultimate year finance and engineering dual degree student, interested in Investment Banking M&A, and Private Equity. He has experience in early stage corporate finance in Singapore, and owns a tutoring business. Outside of work and academics, William is an internationally competitive martial artist, and enjoys travel and skiing.",
      image: "./WilliamKeehne.jpg",
      socialMedia: [
        {
          platform: "LinkedIn",
          username: "william-keehne",
          link: "https://linkedin.com/in/william-keehne",
        },
        {
          platform: "Instagram",
          username: "william-keehne",
          link: "https://instagram.com/william-keehne",
        },
      ],
    },
    {
      name: "Taylor Pham",
      role: "Co-President/Secratary",
      year: 2025,
      description:
        "Taylor is a penultimate student pursuing a double degree in Finance and Business Analytics, interested in Equity Research and Sales & Trading. She has experience interning in the Corporate Banking Department at one of the Big 4 Banks in Vietnam. Besides Finance, Taylor enjoys music, cars and electric guitars.",
      image: "./taylor-pham.jpg",
      socialMedia: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/tayl0rphxm?igsh=MXRkNWh4cWozY2RjZA%3D%3D&utm_source=qr",
          username: "tayl0rphxm",
        },
        {
          platform: "Linkedin",
          link: "https://www.linkedin.com/in/taylor-pham-80010b26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          username: "Linkedin",
        },
      ],
    },
    {
      name: "Jasmeet Singh",
      role: "Web Developer",
      year: 2025,
      description:
        "Jasmeet is a Masters student specializing in Cloud Engineering & Software development. With a successful freelancing career working with over 20 international clients. His interests extend to cloud computing and emerging technologies. Outside of tech, Jasmeet enjoys making music as a creative outlet and loves bike riding.",
      image: "./jasmeet-singh.jpg",
      socialMedia: [
        {
          platform: "LinkedIn",
          username: "jasmeet-singh-0502",
          link: "https://www.linkedin.com/in/jasmeet-singh-3b5b91185",
        },
        {
          platform: "Instagram",
          username: "jesse_0502",
          link: "https://instagram.com/jesse_0502",
        },
      ],
    },
    {
      name: "Amandeep Kaur",
      role: "Marketing Director",
      year: 2025,
      description: `Aman, the Marketing Director of Swinburne Finance Club, is a passionate networker who loves exploring new opportunities and connecting with people. Currently studying Business Analytics with a minor in Space Technology and FinTech, she brings analytical thinking and creativity to finance. As a Finalist at the International Business Institution, IMT Business School, Dubai, and a former School Council Member, she gained valuable leadership insights. With experience in sales, event coordination, and content creation, she plays a key role in expanding the club’s reach. A true asset to the club, Aman’s strategic marketing skills drive engagement in our club. A plant lover and avid reader, her current favorite book is The Immortals of Meluha.`,
      image: "./amandeep-kaur.jpg",
      socialMedia: [
        {
          platform: "Instagram",
          username: "Okayyyyaman",
          link: "https://instagram.com/Okayyyyaman",
        },
        {
          platform: "Linkedin",
          username: "Linkedin",
          link: "https://www.linkedin.com/in/amandeep-kaur-gurmeet-singh-109434284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      name: "Aditya Jain",
      role: "Events Director",
      year: 2025,
      description: `Aditya is a third-year Accounting and Finance student at Swinburne University with a strong interest in investment banking and accounting. As Events Director of the Swinburne Finance Society, he is committed to creating engaging events that help students connect with the finance industry. Outside of university, he enjoys playing guitar and watching football.`,
      image: "Aditya_Jain.png",
      socialMedia: [
        {
          platform: "Instagram",
          username: "Okayyyyaman",
          link: "https://instagram.com/Okayyyyaman",
        },
        {
          platform: "Linkedin",
          username: "Linkedin",
          link: "https://www.linkedin.com/in/amandeep-kaur-gurmeet-singh-109434284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      name: "Hourt Rachana",
      role: "SFS Capital Director",
      year: 2025,
      description: `Third-year Finance student and a member of Swinburne Finance Society. I speak both Khmer, English and currently studying Chinese. 

I have a strong passion for markets, data analysis, investing, and financial technology.

I’m always seeking opportunities to learn, grow, and challenge myself—whether through competitions, internships, volunteers, or projects.`,
      image: "Hourt_Rachana.jpg",
      socialMedia: [
        {
          platform: "Instagram",
          username: "",
          link: "",
        },
        {
          platform: "Linkedin",
          username: "Linkedin",
          link: "https://www.linkedin.com/in/rachana-hourt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      name: "Amrit Loyal",
      role: "Partnerships director",
      year: 2025,
      description: ``,
      image: "",
      socialMedia: [
        {
          platform: "Instagram",
          username: "",
          link: "",
        },
        {
          platform: "Linkedin",
          username: "Linkedin",
          link: "",
        },
      ],
    },
  ],
  2024: [
    {
      name: "Noah Hefford",
      role: "Founder & President",
      year: 2024,
      description: "",
      image: "./noah_hefford.jpg",
      socialMedia: [
        {
          platform: "LinkedIn",
          username: "Linkedin",
          link: "https://www.linkedin.com/in/noah-hefford?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      name: "Jenna (Arlo) Fehring",
      role: "Founder & Secretary",
      year: 2024,
      description: "",
      image: "",
      socialMedia: [],
    },
    {
      name: "Mursal Rezai",
      role: "Treasurer",
      year: 2024,
      description: "",
      image: "",
      socialMedia: [],
    },
    {
      name: "Taylor Pham",
      role: "Events lead",
      year: 2024,
      description: "",
      image: "./taylor-pham.jpg",
      socialMedia: [
        {
          platform: "Instagram",
          link: "https://www.instagram.com/tayl0rphxm?igsh=MXRkNWh4cWozY2RjZA%3D%3D&utm_source=qr",
          username: "tayl0rphxm",
        },
        {
          platform: "Linkedin",
          link: "https://www.linkedin.com/in/taylor-pham-80010b26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          username: "Linkedin",
        },
      ],
    },
    {
      name: "Farhan Ehmud",
      role: "General Commitee",
      year: 2024,
      description: "",
      image: "./farhan-ehmud.jpg",
      socialMedia: [
        {
          platform: "LinkedIn",
          username: "farhan-ehmud",
          link: "https://linkedin.com/in/farhan-ehmud",
        },
        {
          platform: "Instagram",
          username: "farhan.ehmud",
          link: "https://instagram.com/farhan.ehmud",
        },
      ],
    },
    {
      name: "Rachel Ooi",
      role: "Events lead",
      year: 2024,
      description: "",
      image: "",
      socialMedia: [],
    },
    // More 2024 members...
  ],
  // Add more years as needed
};

export interface EventInterface {
  type: "Event" | "AGM"; // Use union type for specific event types
  title: string;
  description: string;
  link: string;
  image: string;
  location: string;
  dateTime: Date | string;
  ticketLink: string | null; // Nullable for events without tickets
}

export const AllEvents: EventInterface[] = [
  {
    type: "Event",
    title: "Networking Night 2025",
    description: `Step into the world of finance with Swinburne Finance Society’s Networking Night 2025! Meet industry professionals from top firms like KPMG, PwC, CPA Australia, and more.

A night of insights, connections, and career opportunities awaits!!!`,
    link: "https://www.instagram.com/p/DJQq3mVvTn1/",
    image: "./events/networking-night-2025.jpg",
    location: "AMDC, Swinburne",
    dateTime: new Date("2025-05-15T17:30:00"),
    ticketLink: null,
  },
  {
    type: "Event",
    title: "Induction Night",
    description: `SFS Induction Night – Kickstarting the New Semester

Join us for SFS’s Induction Night, where we:
- Reintroduce ourselves as Swinburne Finance Society
- Explore exciting finance career and other opportunities
- Connect with like-minded peers and industry-driven individuals`,
    link: "https://www.instagram.com/p/DG_GeA3vk3q/",
    image: "./events/induction-night.jpg",
    location: "The Node",
    dateTime: new Date("2025-03-12T18:00:00"),
    ticketLink: null,
  },

  {
    type: "AGM",
    title: "Annual General Meeting",
    description:
      "Hello! We are thrilled to announce that our AGM will be taking place next week alongside the @swin_entrepreneurshipclub ! We look forward to seeing you for free food, networking and voting in the 2025 committees for these two clubs - see you there!",
    link: "https://www.instagram.com/p/C_14fRHz5Sb/",
    image: "./events/AGM2024.jpg",
    location: "BA201",
    dateTime: new Date("2024-10-24T17:30:00"),
    ticketLink: null,
  },
  {
    type: "Event",
    title: "Social Night",
    description:
      "Welcome back to campus! 🎉 Join us for an exciting Social Night, where the Swinburne Entrepreneur Club, Swinburne Finance Club, and Swinburne Engineering Student Society come together for a stellar networking experience. Meet, mingle, and make connections.🥳🤝",
    link: "https://www.instagram.com/p/C_14fRHz5Sb/",
    image: "./events/social-night.jpg",
    location: "The Node",
    dateTime: new Date("2024-09-18T17:30:00"),
    ticketLink: null,
  },
  {
    type: "Event",
    title: "Movie Night",
    description:
      "Join us for an exciting Movie Night on May 3rd! Come along for a relaxing social event with a film that will inspire and entertain. Whether you’re a movie buff, a finance enthusiast, enthusiastic entrepreneur or just looking for a fun evening, this event is for you!",
    link: "https://www.instagram.com/p/C6GIzmrOpYZ/",
    image: "./events/movie-night.jpg",
    location: "BA302",
    dateTime: new Date("2023-05-03T18:30:00"),
    ticketLink: null,
  },
];
