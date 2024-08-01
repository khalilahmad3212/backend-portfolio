import { StaticImageData } from 'next/image';
import project1 from '../assets/projects/project-1.png';
import project2 from '../assets/projects/project-2.png';
import project3 from '../assets/projects/insure-landing-page.png';
import project4 from '../assets/projects/social-proof-section.png';
import project5 from '../assets/projects/sibau-client.webp';
import project6 from '../assets/projects/dashboard.webp';
interface Project {
  title: string
  description: string
  img: StaticImageData | string
  link: string
}
const projectsData: Project[] =
  [
    {
      title: "Project 1",
      description: "This is a project 1",
      img: project1,
      link: "https://www.google.com"
    },
    {
      title: "Project 2",
      description: "This is a project 2",
      img: project2,
      link: "https://www.google.com"
    },
    {
      title: "Project 3",
      description: "This is a project 3",
      img: project4,
      link: "https://www.google.com"
    },
    {
      title: "Project 4",
      description: "This is a project 4",
      img: project3,
      link: "https://www.google.com"
    },
    {
      title: "Project 5",
      description: "This is a project 5",
      img: project5,
      link: "https://www.google.com"
    },
    {
      title: "Project 6",
      description: "This is a project 6",
      img: project6,
      link: "https://www.google.com"
    }
  ]

export default projectsData;