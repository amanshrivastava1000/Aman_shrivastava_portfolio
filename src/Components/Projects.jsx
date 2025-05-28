import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import spadeImage from "../Image/spade-image.PNG";
import taskMangement from "../Image/task-management-2.PNG";
import dgStudio from "../Image/dg-studio.PNG";
import pixelApp from "../Image/pixel-app.PNG";

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
    techStack: ["Reactjs", "JavaScript", "Redux", "Chakra-UI"],
    github: "",
    deploy: "https://spade.suhora.com/",
  },
  {
    image: `${dgStudio}`,
    desc: " Built a full-featured web application for car sale, purchase, and denting-painting services, enabling users to interact with brand-specific pricing and service options.Designed and implemented an admin portal to manage car listings, including uploading photos and updating records, which dynamically reflect on the main platform frontend Integrated a contact section allowing customers to directly reach out with queries, enhancing user engagement and support accessibility",
    title: "DG car studio",
    techStack: ["Reactjs", "JavaScript", "Redux", "Chakra-UI"],
    github: "",
    deploy: "https://dgcarstudio.com/",
  },
  {
    image: `${taskMangement}`,
    desc: "The Task Management app is a productivity tool designed to help users efficiently organize and track their daily activities. Users can create tasks categorized by priority levels—high, medium, and low—and update their status as either pending or completed. The app also includes powerful editing capabilities, allowing tasks to be updated at any time. A dedicated dashboard provides a visual overview of task progress, showing real-time counts of completed and pending tasks. Additionally, users can sort tasks based on priority—either from high to low or low to high—making it easier to focus on what matters most",
    title: "Task Management",
    techStack: ["Reactjs", "JavaScript", "Redux", "Chakra-UI"],
    github: "https://github.com/amanshrivastava1000/Task-management-app",
    deploy: "https://the-task-management.netlify.app/",
  },

  {
    image: `${pixelApp}`,
    title: "Pixel Wallpaper (Mobile App)",
    desc: "Developed a React Native mobile app that enables users to search and download high-quality wallpapers directly to their device gallery.Integrated the Pixabay API to fetch dynamic wallpaper content based on user search queries.Implemented a smooth, responsive UI optimized for mobile experience with efficient image handling and download functionality.",
    techStack: ["React Native", "Expo Cli", "JavaScript"],
    github: "https://github.com/amanshrivastava1000/wallpaper-app-react-native",
    deploy: "",
  },
];

export default Projects;
