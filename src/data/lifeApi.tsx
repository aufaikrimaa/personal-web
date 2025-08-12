import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { XIcon } from '../components/icons/XIcon';
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
export const AboutExtended = `I live in Magelang, Central Java, a city located on the northern coast of Java Island. I hold an associate degree in Information Systems from Universitas Bina Sarana Informatika. I like programming, reading books, exploring arts, photography, and videography, as well as discovering culinary spots.`;

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
    name: 'Software Engineering - The Soft Parts by Addy Osmani',
    link: 'https://addyosmani.com/blog/software-engineering-soft-parts/',
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
] as const;

export const Podcasts = [
  {
    name: 'Makna Talks',
    link: 'https://open.spotify.com/show/1PGN4ilb4aoWKkB7FNSLsx?si=4ada37ce8f2f452a',
  },
  {
    name: 'Andreas Bordes',
    link: 'https://open.spotify.com/show/7vRGphUOaEtbpc1DhPZWDK?si=64b8ad0e30ea4281',
  },
  {
    name: 'Endgame with Gita Wirjawan',
    link: 'https://open.spotify.com/show/72q1XjiuFViF2tx7IbQ5X5?si=d415a4a215a94b30',
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
