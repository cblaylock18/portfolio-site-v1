import elPeritoMoreno from "../../assets/PersonalImages/Patagonia/elperitomoreno.jpg";
import guanacos from "../../assets/PersonalImages/Patagonia/guanacos.jpg";
import patagoniaLogo from "../../assets/PersonalImages/Patagonia/patagonialogo.jpg";
import torresDelPaine from "../../assets/PersonalImages/Patagonia/torresdelpaine.jpg";

const about = [
    {
        id: 1,
        category: "Travel",
        title: "Patagonia",
        details:
            "In January 2024, I journeyed to Patagonia in Chile and Argentina. I visited Torres del Paine National Park, El Perito Moreno Glacier, and El Chaltén, marveled at Andean condors and guanacos, and savored wild calafate berries along with some unforgettable cuisine. It was truly an adventure to remember.",
        imgs: [
            { src: elPeritoMoreno, id: 1, alt: "El Perito Moreno Glacier" },
            {
                src: torresDelPaine,
                id: 2,
                alt: "Torres del Paine National Park",
            },
            { src: guanacos, id: 3, alt: "Guanacos in their natural habitat" },
            { src: patagoniaLogo, id: 4, alt: "Patagonia logo" },
        ],
    },
    {
        id: 2,
        category: "Travel",
        title: "Southwest Adventure",
        details:
            "In April 2024, I spent an exhilarating week in Utah and Arizona with a group of friends. We explored Arches, Zion, Canyonlands, Bryce Canyon, Capitol Reef, the Grand Canyon, and even a cactus garden in Sagaro. It was an adventure-packed trip with plenty of moving parts, but an absolute blast.",
        imgs: [
            { src: elPeritoMoreno, id: 1, alt: "Arches National Park" },
            { src: guanacos, id: 2, alt: "Zion National Park" },
        ],
    },
    {
        id: 3,
        category: "Travel",
        title: "Autumn in Lincoln, NH",
        details:
            "In November 2024, I took a trip to Lincoln, New Hampshire to experience the vibrant fall colors before the leaves fell. It was an awesome, brisk adventure filled with hiking and the serene beauty of autumn.",
        imgs: [
            { src: elPeritoMoreno, id: 1, alt: "Fall colors in Lincoln, NH" },
        ],
    },
    {
        id: 4,
        category: "Hobbies",
        title: "Dungeons & Dragons Campaign",
        details:
            "I've been the Dungeon Master for my D&D group for nearly a year and a half. With only a few sessions left in our current campaign, it's been a rewarding creative outlet that challenges my storytelling and leadership skills.",
        imgs: [{ src: elPeritoMoreno, id: 1, alt: "D&D campaign session" }],
    },
    {
        id: 5,
        category: "Hobbies",
        title: "Pickleball",
        details:
            "My significant other and I love playing pickleball with friends. It's a fun, energetic game that keeps us active and brings people together.",
        imgs: [{ src: elPeritoMoreno, id: 1, alt: "Playing pickleball" }],
    },
    {
        id: 6,
        category: "Hobbies",
        title: "Gaming",
        details:
            "I enjoy a wide range of games—from immersive video games like Elden Ring to classic board and card games. Gaming is a great way to relax and connect with friends.",
        imgs: [{ src: elPeritoMoreno, id: 1, alt: "Gaming setup" }],
    },
    {
        id: 7,
        category: "Hobbies",
        title: "Gardening & Fishkeeping",
        details:
            "I have a passion for gardening and nurturing potted plants, and I also care for a fish tank filled with shrimp, snails, and chili rasboras. This hobby connects me with nature and brings a calming balance to my daily life.",
        imgs: [
            { src: elPeritoMoreno, id: 1, alt: "Gardening or fish tank scene" },
        ],
    },
];

export { about };
