import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { XIcon } from '../components/icons/XIcon';
import AmbitLogo from '../images/logos/ambit.png';
import BarepapersLogo from '../images/logos/barepapers.svg';
import BimLogo from '../images/logos/bim.png';
import CDGOLogo from '../images/logos/cdgo.png';
import EvercastLogo from '../images/logos/evercast.svg';
import Howdy from '../images/logos/howdy.png';
import JarockiMeLogo from '../images/logos/jarocki.svg';
import MonitoLogo from '../images/logos/monito.svg';
import Consultly from '../images/logos/consultly.svg';
import MobileVikingsLogo from '../images/logos/mv.png';
import ParabolLogo from '../images/logos/parabol.svg';
import TastyCloudLogo from '../images/logos/tastycloud.png';
import YearProgressLogo from '../images/logos/yearprogress.svg';
import Minimal from '../images/logos/minimal.svg';
import ChupLogo from '../images/logos/chuplogo.svg';
import SystericLogo from '../images/logos/systericlogo.svg';
import SkilvulLogo from '../images/logos/skilvullogo.svg';
import AccentureLogo from '../images/logos/accenturelogo.svg';
import PILogo from '../images/logos/pilogo.svg';
import BNSPLogo from '../images/logos/bnsplogo.svg';
import KampusMerdekaLogo from '../images/logos/kampusmerdekalogo.svg';
import CiscoLogo from '../images/logos/ciscologo.svg';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';

export const Name = 'Aufa Ikrimah';

export const About = (
  <>
    {`I enjoy creating new things, especially in software engineering and art. I greatly enjoy discovering new things in both of them.`}
  </>
);
export const AboutExtended = `I live in Wrocław, Poland, having grown up in the small town of Góra in the western part of the country. I have a bachelor's degree in Control Systems Engineering and Robotics from the Wrocław University of Technology. I like programming, books, plants, mountain biking, whisky, and traveling the world with my wife, Kasia. The cosmos fascinates me, and I take great delight in gazing at the stars.`;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: 'Consultly',
    techStack: ['Side Project', 'TypeScript', 'Next.js', 'WebRTC'],
    description: 'A platform to build and grow your online business.',
    logo: Consultly,
    link: {
      label: 'consultly.com',
      href: 'https://consultly.com',
    },
  },
  {
    title: 'Monito',
    techStack: ['Side Project', 'TypeScript', 'Next.js', 'Browser Extension'],
    description: 'Browser extension that records everything happening in a web application.',
    logo: MonitoLogo,
    link: {
      label: 'monito.dev',
      href: 'https://monito.dev',
    },
  },
  {
    title: 'Jarocki.me',
    techStack: ['Side Project', 'Next.js', 'MDX'],
    description: 'My personal website you are currently on, built with Next.js.',
    logo: JarockiMeLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/BartoszJarocki/web-jarocki-me',
    },
  },
  {
    title: 'Minimal',
    techStack: ['Side Project', 'Next.js', 'Puppeteer'],
    description: 'Minimalist calendars, habit trackers and planners generator.',
    logo: Minimal,
    link: {
      label: 'useminimal.com',
      href: 'https://useminimal.com',
    },
  },
  {
    title: 'Barepapers',
    techStack: ['Side Project', 'Next.js', 'Puppeteer'],
    description: 'Generates beautiful wallpapers using random shapes and gradients.',
    logo: BarepapersLogo,
    link: {
      label: 'barepapers.com',
      href: 'https://barepapers.com',
    },
  },
  {
    title: 'Year progress',
    techStack: ['Side Project', 'TypeScript', 'Next.js'],
    description: 'Tracks current year progress and displays a countdown.',
    logo: YearProgressLogo,
    link: {
      label: 'getyearprogress.com',
      href: 'https://getyearprogress.com',
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: 'Parabol',
    techStack: ['Full Stack Developer', 'TypeScript', 'React', 'Node.js', 'GraphQL'],
    description: 'The Agile meeting co-pilot that delivers better meetings with less effort.',
    logo: ParabolLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/ParabolInc/parabol',
    },
  },
  {
    title: 'Evercast',
    techStack: [
      'Lead Frontend Developer',
      'From scratch',
      'TypeScript',
      'React',
      'Node.js',
      'GraphQL',
    ],
    description:
      'Creative collaboration platform that combines video conferencing and HD media streaming.',
    logo: EvercastLogo,
    link: {
      label: 'evercast.us',
      href: 'https://www.evercast.us/',
    },
  },
  {
    title: 'Mobile Vikings',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Android application for leading virtual mobile operator in Poland.',
    logo: MobileVikingsLogo,
    link: {
      label: 'mobilevikings.pl',
      href: 'https://mobilevikings.pl/',
    },
  },
  {
    title: 'Howdy',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Howdy is a place for you to join communities you care about.',
    logo: Howdy,
    link: {
      label: 'play.google.com',
      href: 'https://play.google.com/store/apps/details?id=com.howdyhub.howdy',
    },
  },
  {
    title: 'Tastycloud',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Android application for managing and displaying restaurant menus in kiosk mode.',
    logo: TastyCloudLogo,
    link: {
      label: 'tastycloud.fr',
      href: 'https://www.tastycloud.fr/',
    },
  },
  {
    title: 'Ambit',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Android application that helps with sharing your contact details.',
    logo: AmbitLogo,
  },
  {
    title: 'Bim',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Android application that helps with booking a table in a restaurants.',
    logo: BimLogo,
  },
  {
    title: 'Canal Digital GO',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Video streaming mobile application for Canal Digital subscribers.',
    logo: CDGOLogo,
  },
];

export const SocialMedia = [
  { name: 'Twitter', link: 'https://x.com/__awaaa21', icon: XIcon },
  { name: 'Instagram', link: 'https://www.instagram.com/aufaikrimaa/', icon: InstagramIcon },
  { name: 'Github', link: 'https://github.com/aufaikrimaa', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/aufaikrimah/', icon: LinkedInIcon },
] as const;

export const Work = [
  {
    company: 'Systeric',
    title: 'Product Engineer',
    logo: SystericLogo,
    start: '2024',
    end: 'Present',
  },
  {
    company: 'Chup Online Sdn Bhd',
    title: 'Frontend Developer',
    logo: ChupLogo,
    start: '2024',
    end: '2025',
  },
] as const;

export const Courses = [
  {
    company: 'Skilvul',
    title: 'Freelance+ by Skilvul',
    logo: SkilvulLogo,
    start: 'Aug - Sep',
    end: '2024',
  },
  {
    company: 'Accenture',
    title: ' Developer and Technology Virtual Intern',
    logo: AccentureLogo,
    start: 'April 2024',
    end: 'June 2024',
  },
  {
    company: 'Perempuan Inovasi',
    title: 'Full Stack Web Developer',
    logo: PILogo,
    start: 'Sep 2023',
    end: 'Feb 2024',
  },
  {
    company: 'Skilvul',
    title: 'Web Development (Gold)',
    logo: SkilvulLogo,
    start: 'Jun - Sep',
    end: '2023',
  },
  {
    company: 'BNSP',
    title: 'Software Development (Certification)',
    logo: BNSPLogo,
    start: 'Aug',
    end: '2023',
  },
  {
    company: 'Kampus Merdeka',
    title: 'Wirausaha Merdeka (SIWIRA INOTEK)',
    logo: KampusMerdekaLogo,
    start: 'Sep 2022',
    end: 'Jan 2023',
  },
  {
    company: 'Cisco Networking Academy',
    title: 'PCAP: Programming Essentials in Python (Certification)',
    logo: CiscoLogo,
    start: 'Jun - Aug',
    end: '2025',
  },
] as const;

export const CompaniesLinks = [
  {
    name: 'VisionMedia',
    link: 'https://www.visionmedia.com/',
  },
  {
    name: 'DKMS',
    link: 'https://www.dkms.org/en',
  },
  {
    name: 'AAA',
    link: 'https://www.aaa.com/',
  },
  {
    name: 'PolskaPress',
    link: 'https://polskapress.pl/pl',
  },
  {
    name: 'Canal Digital',
    link: 'https://www.canaldigital.no/',
  },
] as const;

export const Books = [
  {
    name: 'Shoe Dog: A Memoir by the Creator of Nike by Phil Knight',
    link: 'https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike-ebook/dp/B0176M1A44',
  },
  {
    name: 'The Black Swan: The Impact of the Highly Improbable by Nassim Nicholas Taleb',
    link: 'https://amzn.to/2NwihaS',
  },
  {
    name: 'Antifragile: Things That Gain from Disorder by Nassim Nicholas Taleb',
    link: 'https://amzn.to/3aIG805',
  },
  {
    name: 'Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets by Nassim Nicholas Taleb',
    link: 'https://amzn.to/3kbvaD9',
  },
  {
    name: 'Daily stoic by Ryan Holiday',
    link: 'https://amzn.to/3n8ATuC',
  },
  {
    name: 'A Guide to the Good Life: The Ancient Art of Stoic Joy by William B. Irvine',
    link: 'https://amzn.to/3iuL1ud',
  },
  {
    name: 'Atomic Habits by James Clear',
    link: 'https://amzn.to/3iqimpZ',
  },
] as const;

export const VideosWorthWatching = [
  {
    name: 'Steve Jobs 2005 Stanford Commencement Address',
    link: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
  },
  {
    name: 'Falcon Heavy & Starman',
    link: 'https://www.youtube.com/watch?v=A0FZIwabctw',
  },
] as const;

export const Podcasts = [
  {
    name: 'Lex Fridman Podcast',
    link: 'https://www.youtube.com/@lexfridman',
  },
  {
    name: 'Huberman Lab',
    link: 'https://www.youtube.com/@hubermanlab',
  },
  {
    name: 'Joe Rogan',
    link: 'https://www.youtube.com/@joerogan',
  },
  {
    name: 'The Tim Ferriss Show',
    link: 'https://www.youtube.com/channel/UCznv7Vf9nBdJYvBagFdAHWw',
  },
  {
    name: 'Build your SaaS',
    link: 'https://saas.transistor.fm/',
  },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  {
    name: 'Andrew Wilkinson',
    link: 'https://twitter.com/awilkinson',
  },
  {
    name: 'Oliur',
    link: 'https://twitter.com/UltraLinx',
  },
  {
    name: 'Jack Butcher',
    link: 'https://twitter.com/jackbutcher',
  },
  {
    name: 'Sahil Lavingia',
    link: 'https://twitter.com/shl',
  },
  {
    name: 'James Clear',
    link: 'https://twitter.com/JamesClear',
  },
  {
    name: 'Naval',
    link: 'https://twitter.com/naval',
  },
  {
    name: 'Paul Graham',
    link: 'https://twitter.com/paulg',
  },
  {
    name: "John O'Nolan",
    link: 'https://twitter.com/JohnONolan',
  },
  {
    name: 'Jon Yongfook',
    link: 'https://twitter.com/yongfook',
  },
  {
    name: 'Joel Gascoigne',
    link: 'https://twitter.com/joelgascoigne',
  },
  {
    name: 'Pieter Levels',
    link: 'https://twitter.com/levelsio',
  },
] as const;

export const Blogs = [
  {
    name: 'Wait but why',
    link: 'https://waitbutwhy.com/',
  },
  {
    name: 'Paul Graham',
    link: 'http://www.paulgraham.com/',
  },
  {
    name: 'Joel Hooks',
    link: 'https://joelhooks.com',
  },
  {
    name: 'David Perell',
    link: 'https://www.perell.com/',
  },
  {
    name: 'Dan Abramov',
    link: 'https://overreacted.io',
  },
  {
    name: 'Lee Robinson',
    link: 'https://leerob.io',
  },
  {
    name: 'Naval Ravikant',
    link: 'https://nav.al/',
  },
] as const;

export const Quotes = [
  {
    content: 'We have two lives, and the second begins when we realize we only have one.',
    author: '― Confucius',
  },
  {
    content: 'The man who moves a mountain begins by carrying away small stones.',
    author: '― Confucius',
  },
  {
    content:
      'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.',
    author: '― Confucius',
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: '― Mark Twain',
  },
  {
    content:
      "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    author: '― Mark Twain',
  },
  {
    content:
      'Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.',
    author: '― Laozi',
  },
  {
    content: 'If you are going through hell, keep going.',
    author: '― Winston S. Churchill',
  },
  {
    content: 'Attitude is a little thing that makes a big difference.',
    author: '― Winston S. Churchill',
  },
  {
    content:
      'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
    author: '― Johann Wolfgang von Goethe',
  },
  {
    content: 'It is not death that a man should fear, but he should fear never beginning to live.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'If it is not right do not do it; if it is not true do not say it.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'The happiness of your life depends upon the quality of your thoughts.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'There is no easy way from the earth to the stars',
    author: '― Seneca',
  },
  {
    content: 'We suffer more often in imagination than in reality',
    author: '― Seneca',
  },
] as const;

export const Tools = {
  Workstation: [
    {
      title: 'Lenovo ThinkPad T470s i7 gen 6',
      description:
        'A reliable business laptop with a 6th-gen Intel i7 processor. Not the newest, but perfect for coding, writing, and everyday tasks while I keep learning and building projects.',
      href: 'https://www.lenovo.com/us/en/laptops/thinkpad/t-series/ThinkPad-T470s/p/22TP2TT470S',
    },
    {
      title: 'External Keyboard & Mouse',
      description:
        'I pair the laptop with a basic wireless keyboard and mouse for a more comfortable typing experience when working at my desk.',
      href: '',
    },
  ],
  Software: [
    {
      title: 'Cursor',
      description: `An AI-powered code editor that helps me write and refactor code faster. It’s like having a coding buddy that suggests improvements and saves time on repetitive tasks.`,
      href: 'https://cursor.sh/',
    },
    {
      title: 'Figma',
      description: `I'm not a designer but it allows me to quickly mock up interfaces and play with my ideas. One day I'll learn how to use it properly.`,
      href: 'https://www.figma.com/',
    },
    {
      title: 'Notion',
      description: `I use it for everything. I have a separate workspace for each of my projects and I use it to keep track of my tasks, notes, and ideas.`,
      href: 'https://www.notion.so/',
    },
    {
      title: 'Google Calendar',
      description: 'I use time blocking here to plan my day and keep track of my schedule.',
      href: 'https://calendar.google.com/',
    },
  ],
} as const;
