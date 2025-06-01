import { createFileRoute } from "@tanstack/react-router";
import { AboutPageContainer, MainParagraph } from "../styles/about.styled";
export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <AboutPageContainer>
      <MainParagraph>
        Hi, I’m Utku, a Frontend Developer with over 10 years of experience
        crafting responsive, accessible, and visually engaging web applications.
        I specialize in technologies like React, JavaScript, TypeScript, and
        modern UI libraries such as Material UI and Tailwind CSS. My focus is on
        building clean, maintainable code and creating seamless user experiences
        across all devices. Over the past decade, I’ve worked on a wide range of
        projects—from internal tools to customer-facing platforms—always aiming
        for high performance, usability, and design consistency. I enjoy
        collaborating with cross-functional teams and constantly learning new
        technologies to keep my skills sharp. I’m passionate about frontend
        development and take pride in turning complex problems into simple,
        elegant solutions.
      </MainParagraph>
    </AboutPageContainer>
  );
}
