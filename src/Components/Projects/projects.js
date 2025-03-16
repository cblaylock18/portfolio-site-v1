import shoppingCart from "../../assets/ProjectImages/shopping-cart-app.png";
import memoryCard from "../../assets/ProjectImages/memory-card.png";
import battleship from "../../assets/ProjectImages/battleship.png";
import landingPage from "../../assets/ProjectImages/homepage.png";
import toDoTracker from "../../assets/ProjectImages/to-do-tracker.png";
import ticTacToe from "../../assets/ProjectImages/tic-tac-toe.png";
import inventory from "../../assets/ProjectImages/inventory.png";

const projects = [
    {
        id: 1,
        title: "Shopping Cart",
        liveDemo: "https://mock-shopping-cart-eta.vercel.app/",
        githubRepo: "https://github.com/cblaylock18/mock-shopping-cart",
        imageSrc: shoppingCart,
        shortDesc: "React, React Router, CSS Modules, Vitest, CRUD",
        description:
            "A React-based shopping cart application that allows users to browse items, add them to their cart, adjust quantities, and view their total. This project was built to practice React fundamentals, state management, and routing.",
    },
    {
        id: 2,
        title: "Inventory App",
        liveDemo:
            "https://inventory-application-production-8a5f.up.railway.app/",
        githubRepo: "https://github.com/cblaylock18/inventory-application",
        imageSrc: inventory,
        shortDesc: "Node, Express, PostgreSQL, EJS, express-validator, CRUD",
        description:
            "A robust inventory management app for foster animals built with Node.js, Express, and PostgreSQL. It features comprehensive CRUD functionality, dynamic filtering, and admin password protection, all deployed on Railway with private networking.",
    },
    {
        id: 3,
        title: "Pokémon Memory Card",
        liveDemo: "https://memory-card-taupe-three.vercel.app/",
        githubRepo: "https://github.com/cblaylock18/memory-card",
        imageSrc: memoryCard,
        shortDesc: "React, RESTful API",
        description:
            "A memory game built with React. Players click through Pokémon cards and score points by selecting different Pokémon without repeating any previously chosen card. This project was built to practice React fundamentals, state management, and dynamic data fetching (PokéAPI).",
    },
    {
        id: 4,
        title: "Battleship",
        liveDemo: "https://cblaylock18.github.io/battleship/",
        githubRepo: "https://github.com/cblaylock18/battleship",
        imageSrc: battleship,
        shortDesc: "JavaScript, DOM Manipulation, Jest, TDD",
        description:
            "A classic Battleship game built with vanilla JavaScript. This project was developed to practice core JavaScript fundamentals, DOM manipulation, and test-driven development (TDD) with Jest.",
    },
    {
        id: 5,
        title: "Landing Page",
        liveDemo: "https://cblaylock18.github.io/homepage-practice/",
        githubRepo: "https://github.com/cblaylock18/homepage-practice",
        imageSrc: landingPage,
        shortDesc: "a11y, Grid, Flexbox, media-query, font-face, clip-path",
        description:
            "A responsive homepage built using Advanced HTML/CSS techniques. This project showcases modern HTML5 and CSS3 techniques—including custom fonts with @font-face, diagonal backgrounds via clip-path, CSS Grid, Flexbox, and media queries—to create an engaging, adaptive layout for mobile, tablet, and desktop screens.",
    },
    {
        id: 6,
        title: "To-Do Tracker",
        liveDemo: "https://cblaylock18.github.io/to-do-list/",
        githubRepo: "https://github.com/cblaylock18/to-do-list",
        imageSrc: toDoTracker,
        shortDesc: "CRUD, HTML, CSS, JavaScript, LocalStorage",
        description:
            "A responsive To-Do List App built with HTML, CSS, and JavaScript. It leverages DOM manipulation and localStorage to manage projects and tasks with live updates and priority sorting.",
    },
    {
        id: 7,
        title: "Tic-Tac-Toe",
        liveDemo: "https://cblaylock18.github.io/tic-tac-toe/",
        githubRepo: "https://github.com/cblaylock18/tic-tac-toe",
        imageSrc: ticTacToe,
        shortDesc: "HTML, CSS, JavaScript",
        description:
            "A classic Tic-Tac-Toe game built as part of The Odin Project curriculum to practice modular JavaScript, DOM manipulation, and game logic. Players take turns marking a 3x3 grid, with the game dynamically detecting wins and ties. This was one of my first JS heavy apps, and I'm still very proud of it.",
    },
];

export { projects };
