import newsExplorerImg from "../assets/NewsExplorer.png";
import wtwrImg from "../assets/wtwr.png";
import aroundTheUSImg from "../assets/AroundTheUS.png";
import triplePeaksCoffeeImg from "../assets/InsideCoffeeShop.png";
import dayTripprImg from "../assets/DayTrippr.png";

const projects = [
  {
    title: "DayTrippr Sighteeing Roadtrips",
    description:
      "Built an interactive MVP. A data-driven travel planner that maps out iconic U.S. Landmarks based on popularity, photos, and reviews",
    tech: ["React", "Mapbox", "JSON Data"],
    image: dayTripprImg,
    link: "https://daytrippr.netlify.app/",
  },
  {
    title: "News Explorer App",
    description:
      "The idea of the project is to make a call to a public news API, which responds with news articles relevant to a topic chosen by the user from the last week. Users can save articles they like, try various different topics, and collect their favorite news on one page.",
    tech: ["React", "Redux", "Tailwind CSS"],
    image: newsExplorerImg,
    link: "https://valtsan.github.io/News-Explorer/",
  },
  {
    title: "WTWR (What to Wear?): Back End",
    description:
      "The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.",
    tech: [
      "Javascript",
      "React",
      "Node.js & Express ",
      "MongoDB",
      "HTML",
      "CSS",
    ],
    image: wtwrImg,
    link: "https://github.com/ValTsan/se_project_express",
  },
  {
    title: "WTWR (What to Wear?): Front End",
    description:
      "The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.",
    tech: [
      "Javascript",
      "React",
      "Node.js & Express ",
      "MongoDB",
      "HTML",
      "CSS",
    ],
    image: wtwrImg,
    link: "https://www.what2wear-project.jumpingcrab.com",
  },
  {
    title: "Around the U.S. App",
    description:
      "Around The U.S. is a responsive web project designed to display various elements correctly across popular screen sizes. This project is part of a learning exercise aimed at enhancing skills in responsive design and front-end development. It is recommended to invest more time in completing this project, as it presents more complexity than previous exercises.",
    tech: ["HTML", "CSS"],
    image: aroundTheUSImg,
    link: "https://valtsan.github.io/se_project_aroundtheus/",
  },
  {
    title: "Triple Peaks Coffee Shop",
    description:
      "This is the second project of the Software Engineering program at TripleTen. It was created using HTML and CSS, based on the design brief.",
    tech: ["HTML", "CSS"],
    image: triplePeaksCoffeeImg,
    link: "https://github.com/ValTsan/se_project_coffeeshop",
  },
];

export default projects;
