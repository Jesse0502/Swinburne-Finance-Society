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
      role: "President",
      year: 2025,
      description: "",
      image: null,
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
      role: "Vice President",
      year: 2025,
      description:
        "William is a penultimate year finance and engineering dual degree student, interested in Investment Banking M&A, and Private Equity. He has experience in early stage corporate finance in Singapore, and owns a tutoring business. Outside of work and academics, William is an internationally competitive martial artist, and enjoys travel and skiing.",
      image: null,
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
      name: "Jasmeet Singh",
      role: "Web Developer",
      year: 2025,
      description:
        "Jasmeet Singh is a Master of IT student with a strong foundation in software development and a passion for technology. With a successful freelancing career working with over 20 international clients. His interests extend to cloud computing and emerging technologies. Outside of tech, Jasmeet enjoys making music as a creative outlet and loves bike riding.",
      image: "./jasmeet-singh.jpg",
      socialMedia: [
        {
          platform: "LinkedIn",
          username: "jasmeet-singh-0502",
          link: "https://linkedin.com/in/jasmeet-singh-0502",
        },
        {
          platform: "Instagram",
          username: "jesse_0502",
          link: "https://instagram.com/jesse_0502",
        },
      ],
    },
    {
      name: "Aman Rattan",
      role: "Marketing Lead",
      year: 2025,
      description: "",
      image: null,
      socialMedia: [],
    },
  ],
  2024: [
    {
      name: "Noah Hefford",
      role: "President",
      year: 2024,
      description: "2024 president description...",
      image: "./noah-hefford.jpg",
      socialMedia: [
        {
          platform: "LinkedIn",
          username: "prev-president",
          link: "https://linkedin.com/in/prev-president",
        },
      ],
    },
    // More 2024 members...
  ],
  // Add more years as needed
};
