import { StaticImageData } from "next/image";

// images
import fast from "@/assets/fast.jpeg";
import robust from '@/assets/robust.webp';
import scalable from '@/assets/scalable.jpg';
import maintainable from '@/assets/maintainable.jpeg';

interface Quality {
  title: string
  content: string,
  image?: StaticImageData
}

const qualities: Quality[] = [
  {
    title: "Fast",
    content: "I build blazing fast backend systems using Node.js, Express.js, and MongoDB.",
    image: fast
  },
  {
    title: "Robust",
    content: "I have experience in building robust backend systems using Node.js, Express.js, and MongoDB.",
    image: robust
  },
  {
    title: "Scalable",
    content: "I have experience in building RESTful APIs, GraphQL APIs, and Realtime APIs.",
    image: scalable
  },
  {
    title: "Maintainable",
    content: "I write clean, maintainable, and scalable code using best practices.",
    image: maintainable
  }
]

export default qualities;