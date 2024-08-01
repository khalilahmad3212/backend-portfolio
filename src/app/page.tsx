import Heading from "@/components/Heading";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

import Buttons from "@/components/Buttons";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
      <Footer />
    </main>
  );
}
