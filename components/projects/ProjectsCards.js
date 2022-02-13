import React from "react";
import H3Heading from "../heading/H3Heading";
import BodyText from "../bodytext/BodyText";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Project = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto !important;
  width: 85%;
`;

const ProjectImage = styled.div`
  transition: var(--transformation);

  &:hover {
    transform: var(--skew-animation);
    opacity: 0.92;
  }
`;

const Projects = () => {
  const projectsCard = [
    {
      id: 1,
      image: "/images/ili.jpg",
      title: "‘ili, skincare",
      link: "https://keen-kirch-bf42aa.netlify.app/",
      description:
        "This is the latest project I’ve done which was for the semester project, in the first semester of the 2nd year. ",
    },
    {
      id: 2,
      image: "/images/portfolio.jpg",
      title: "My first portfolio",
      link: "https://sharp-hermann-17c8a0.netlify.app/",
      description:
        "This was one of the most fun project I’ve done so far. Last exam in the 1st year and was able to be very creative and do someting that represents me to the fullest.",
    },
    {
      id: 3,
      image: "/images/happytravel2.jpg",
      title: "HappyTravel",
      link: "https://compassionate-allen-d47a37.netlify.app/",
      description:
        "Wanted to make a clean and minimalistic design for this exam from the 1st year. Thought it was important you create something that was easy on the eye to read, and to also make the picture in focus. ",
    },
    {
      id: 4,
      image: "/images/givingtree.jpg",
      title: "Giving Tree",
      link: "https://elastic-nightingale-265b77.netlify.app/",
      description:
        "This small project is the Interaction Design course we did in the 1st year. Even if it’s not responsive I’m still happy about some of the design elements and for coding it.",
    },
    {
      id: 5,
      image: "/images/pokemon.jpg",
      title: "Pokemon",
      link: "https://cranky-benz-dc8db0.netlify.app/",
      description:
        "First small project I did for the javaScript course assignment and was & still are proud of doing, mostly because it impressed my old teacher a lot and that made me very happy.",
    },
  ];

  return (
    <projectsContainer>
      {projectsCard.map(({ image, title, description, id, link }) => (
        <Project key={id}>
          <ProjectImage>
            <Link href={link} passHref>
              <a>
                <Image src={image} alt={title} width="1100px" height="720px" />
              </a>
            </Link>
          </ProjectImage>
          <H3Heading className="projects__heading">{title}</H3Heading>
          <BodyText className="projects__bodytext">{description}</BodyText>
        </Project>
      ))}
    </projectsContainer>
  );
};

export default Projects;
