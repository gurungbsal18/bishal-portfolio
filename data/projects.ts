export type ProjectId = "bhaibahini" | "timecard" | "alpine" | "swift";

export type Project = {
  id: ProjectId;
  title: string;
  category: string;
  summary: string;
  label: string;
  lede: string;
  tags: string[];
  context: string;
  contribution: string[];
  lens: string;
  scope: string;
  image?: { src: string; alt: string; caption: string };
  link: { href: string; text: string } | null;
};

export const projects: Project[] = [
  {
    id: "bhaibahini",
    category: "PRODUCT DESIGN · UX ENGINEERING",
    summary: "Making mentorship feel more human.",
    title: "BhaiBahini",
    label: "MENTORSHIP PLATFORM",
    lede: "Connecting a multi-role product through thoughtful, consistent user journeys.",
    tags: [
      "Role-based UX",
      "Figma prototyping",
      "Design handoff",
      "Responsive UI",
    ],
    context:
      "A mentorship platform serving mentors, mentees and administrators. The work spans different roles and the supporting journeys that connect them.",
    contribution: [
      "Designed mentor and mentee journeys, including onboarding flows.",
      "Worked on administration, feedback and trust-and-safety screens.",
      "Prepared design handoffs and collaborated on responsive UI improvements.",
    ],
    lens: "Keeping each role’s next step understandable while maintaining a coherent interface across the platform.",
    scope:
      "The CV documents UX design and collaboration on this project at XylonTech. Public usage figures and measured business outcomes have not been supplied.",
    link: null,
  },
  {
    id: "timecard",
    category: "ENTERPRISE UX · INTERFACE DESIGN",
    summary: "Bringing order to everyday workflows.",
    title: "Timecard & enterprise apps",
    label: "ENTERPRISE WORKFLOWS",
    lede: "Making operational interfaces easier to navigate, review and use.",
    tags: [
      "Enterprise UX",
      "Timesheets",
      "Review workflows",
      "Interface consistency",
    ],
    context:
      "Enterprise business applications involving timecards, timesheets and review workflows. Related private client work includes learning management, performance evaluation, invoicing and hotel management systems.",
    contribution: [
      "Contributed UX and interface work for timesheet and review workflows.",
      "Partnered with frontend engineers and QA on usability and responsive fixes.",
      "Supported consistent interface patterns across workflow-based applications.",
    ],
    lens: "Making dense, task-oriented interfaces legible, with a clear relationship between information, actions and review states.",
    scope:
      "Client identities, production screens and business metrics are not presented. All names, hours and statuses in the visual are illustrative.",
    link: null,
  },
  {
    id: "alpine",
    image: {
      src: "/assets/project-images/Alpine-website.webp",
      alt: "Alpine Club of Himalaya website shown on a laptop and phone, with mountain imagery and trekking navigation.",
      caption: "Alpine Club of Himalaya · Desktop and mobile website",
    },
    category: "TRAVEL · WEB EXPERIENCE",
    summary: "Giving adventure a clear starting point.",
    title: "Alpine Club of Himalaya",
    label: "TRAVEL WEB EXPERIENCE",
    lede: "Helping people find their way into a travel experience.",
    tags: [
      "UI/UX design",
      "Travel",
      "Content-driven journeys",
      "Visual design",
    ],
    context:
      "A travel website experience for trekking and tour offerings, also featured in Bishal’s public portfolio.",
    contribution: [
      "Worked on travel-related user interfaces and visual design.",
      "Supported website presentation for trekking and tour content.",
      "Worked on content-driven user journeys as a UI/UX Designer from February 2019 to June 2022.",
    ],
    lens: "Balancing the inspiration of travel with clear navigation and a readable presentation of destinations and offerings.",
    scope:
      "Project image supplied by Bishal, showing the desktop and mobile website presentation. No conversion or booking results are claimed.",
    link: {
      href: "https://alpineclubofhimalaya.com/",
      text: "Visit Alpine Club of Himalaya",
    },
  },
  {
    id: "swift",
    image: {
      src: "/assets/project-images/swift-holidays.png",
      alt: "Swift Holidays mobile UI concept showing bus search, departure listings, seat selection, payment choices and profile screens.",
      caption: "Swift Holidays · Mobile app UI concept",
    },
    category: "MOBILE · UI CONCEPT",
    summary: "Exploring travel, one screen at a time.",
    title: "Swift Holidays",
    label: "MOBILE UI CONCEPT",
    lede: "A travel experience explored through mobile interface design.",
    tags: ["Mobile UI", "Figma mockup", "Travel concept"],
    context:
      "Swift Holidays is documented in the CV as a mobile app UI concept and Figma mockup.",
    contribution: [
      "Created a mobile app UI concept.",
      "Explored the interface through a Figma mockup.",
    ],
    lens: "A mobile canvas for travel search, departure listings, seat selection and payment choices, as shown in the supplied UI concept image.",
    scope:
      "The supplied project image shows a mobile UI concept. A launched app, engineering implementation, user testing or measured outcomes are not claimed.",
    link: null,
  },
];
