// image
import images from "../assets/index";

export const dummyData = {
  sections: {
    about: [
      {
        id: "1",
        media: "Youtube",
        link: "https://www.youtube.com/@AodiRS",
      },
      {
        id: "2",
        media: "GitHub",
        link: "https://github.com/Idoarizs/aodisaputra",
      },
      {
        id: "3",
        media: "LinkedIn",
        link: "https://www.linkedin.com/in/aodisaputra/",
      },
      {
        id: "4",
        media: "Behance",
        link: "https://www.behance.net/dyyputr",
      },
      {
        id: "5",
        media: "Pinterest",
        link: "https://id.pinterest.com/dyyputr/",
      },
    ],
    portfolio: [
      {
        id: "1",
        image: images.t3cai.src,
        title: "T3C Computer Parts Classification",
        description:
          "I build it using Tensorflow with deep learning method especially CNN algorithm and some other tools, for the dataset I download it from kaggle as the machine learning data source.",
      },
      {
        id: "2",
        image: images.aigen.src,
        title: "OpenAI Image Generator",
        description:
          "It's my first time project that integrating an API which from OpenAI to make a website that little bit similar to other AI website that generates an image based on user input.",
      },
      {
        id: "3",
        image: images.atapsore.src,
        title: "Atap Sore Profile",
        description:
          "Atap Sore is a cafe that locate in my Campus, so I make it to profile website as a project from my lecture.",
      },
      {
        id: "4",
        image: images.dbank.src,
        title: "DBank Profile",
        description:
          "Re-Design UI from tutorial that I've learned, the project can be used as Profile Company webiste like Financial Company.",
      },
      {
        id: "5",
        image: images.jokegen.src,
        title: "Joke Generator",
        description:
          "Joke Generator personal website which fetching the data from free public API without any authentication to access it.",
      },
      {
        id: "6",
        image: images.minulyocake.src,
        title: "Minulyo Cake Profile",
        description:
          "I'm using fully laravel to make this website, this app provide basic CRUD features like adding, updating, deleting, and getting product catalog from MySQL database which has some cardinality between the table.",
      },
      {
        id: "7",
        image: images.nookiresto.src,
        title: "Nooki Resto Profile",
        description:
          "This profile website can be used to promoting and do a reservation with product catalog filter to make the user easily find their choices.",
      },
      {
        id: "8",
        image: images.vagentcards.src,
        title: "Vagent Card List",
        description:
          "This web app good for somenoe that want to know about details Valorant Agents",
      },
    ],
    experience: [
      {
        id: "1",
        image: images.icons.inextjs,
        title: "NextJS",
        description:
          "I've used NextJS to make a website that needs SEO friendly implementation because It's SSR and directory based routing.",
      },
      {
        id: "2",
        image: images.icons.ireactjs,
        title: "ReactJS",
        description:
          "With this library I can easily to make a UI component with DRY principle, and state management. ",
      },
      {
        id: "3",
        image: images.icons.iexpressjs,
        title: "ExpressJS",
        description:
          "I build my API using this with group routing and middlewares implementation.",
      },
      {
        id: "4",
        image: images.icons.imysql,
        title: "MySQL",
        description:
          "I'm using MySQL because It's structured data storage with cardinality supports and easy to learn too.",
      },
      {
        id: "5",
        image: images.icons.ifigma,
        title: "Figma",
        description:
          "Figma gave me utility to create UI design with rich features like autolayout to make responsive design.",
      },
      {
        id: "6",
        image: images.icons.iaftereffects,
        title: "After Effect",
        description:
          "I used this app because It's rich features like null object, parenting, camera movement and much more.",
      },
    ],
  },
};
