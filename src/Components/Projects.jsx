import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
// import img1 from "../Image/img1.png";
// import img2 from "../Image/img2.png";
import spadeImage from "../Image/spade-image.PNG";
import taskMangement from "../Image/task-management.PNG";
import img3 from "../Image/img3.png";
import img4 from "../Image/img4.png";

const Projects = () => {
  return (
    <Box id="projects" textAlign={"center"} mt="6rem">
      <Heading>Projects</Heading>
      <SimpleGrid
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        columns={{ base: "1", md: "2", xl: "2" }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "85%", md: "81%" }}
        // marginTop="70px"
        // marginBottom={"50px"}
        minH="200px" // Set a minimum height for each child
      >
        {data.map((el, ind) => {
          return <HelperProject key={Date.now() + ind} {...el} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

let data = [
  {
    image: `${spadeImage}`,
    title: "Spade",
    desc: "Spade is an advanced satellite imagery discovery and ordering platform that allows users to access both archived and tasking-based satellite data. Through this platform, users can request high-resolution imagery from multiple trusted providers including ICEYE, BlackSky, Umbra, and Satellogic. Spade simplifies the satellite data acquisition process by offering a seamless interface for selecting areas of interest and viewing upcoming satellite opportunities—indicating when a satellite will be available over a given latitude and longitude. This powerful tool is designed for users who need timely and precise geospatial data for various applications, from environmental monitoring to defense and infrastructure planning.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Redux", "Chakra-UI"],
    github: "https://github.com/spade.suhora.com",
    deploy: "https://spade.suhora.com/",
  },
  {
    image: `${taskMangement}`,
    desc: "The Task Management app is a productivity tool designed to help users efficiently organize and track their daily activities. Users can create tasks categorized by priority levels—high, medium, and low—and update their status as either pending or completed. The app also includes powerful editing capabilities, allowing tasks to be updated at any time. A dedicated dashboard provides a visual overview of task progress, showing real-time counts of completed and pending tasks. Additionally, users can sort tasks based on priority—either from high to low or low to high—making it easier to focus on what matters most",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Redux", "Chakra-UI"],
    github: "https://github.com/amanshrivastava1000/Task-management-app",
    deploy: "https://the-task-management.netlify.app/",
  },
  {
    image: `${img3}`,
    desc: "Explore our Expedia-inspired e-commerce platform, where you can effortlessly book accommodations at a wide range of hotels and access enticing vacation packages. Plan your dream getaway with ease and embark on unforgettable journeys, all from the comfort of your screen.",
    title: "Bagpacker (Clone-Of-Expedia)",
    techStack: ["HTML", "CSS", "JavaScript"],
    // github: "https://github.com/Harshitakatara34/ragged-tank-492.git",
    deploy: "https://golden-sorbet-745819.netlify.app/",
  },
  {
    image: `${img4}`,
    title: "Chicken (Clone-Of-Licious)",
    desc: "Chicken, your premier online marketplace for sourcing top-quality poultry and fish products at the most competitive prices. Our diverse range of offerings ensures that you can place orders conveniently and enjoy doorstep delivery of the freshest and finest options for your culinary delights.",
    techStack: ["HTML", "CSS", "JavaScript"],
    // github: "https://github.com/Harshitakatara34/defective-impulse-1904.git",
    deploy: "https://superb-haupia-a7c7f2.netlify.app/",
  },
];

export default Projects;
