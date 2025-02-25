import elPeritoMoreno from "../../assets/PersonalImages/Patagonia/elperitomoreno.jpg";
import guanacos from "../../assets/PersonalImages/Patagonia/guanacos.jpg";
import patagoniaLogo from "../../assets/PersonalImages/Patagonia/patagonialogo.jpg";
import torresDelPaine from "../../assets/PersonalImages/Patagonia/torresdelpaine.jpg";
import sw1 from "../../assets/PersonalImages/Southwest/sw1.jpg";
import sw2 from "../../assets/PersonalImages/Southwest/sw2.jpg";
import sw3 from "../../assets/PersonalImages/Southwest/sw3.jpg";
import sw4 from "../../assets/PersonalImages/Southwest/sw4.jpg";
import sw5 from "../../assets/PersonalImages/Southwest/sw5.jpg";
import babblingBrook from "../../assets/PersonalImages/LincolnNH/babblingBrook.jpg";
import autumnLeaves from "../../assets/PersonalImages/LincolnNH/mountainViewAutumnLeaves.jpg";
import mtWashington from "../../assets/PersonalImages/LincolnNH/mtWashington.jpg";
import slotCanyon from "../../assets/PersonalImages/LincolnNH/slotCanyon.jpg";
import dice from "../../assets/PersonalImages/DnD/dice.jpg";
import campaignCity from "../../assets/PersonalImages/DnD/Jupiter.webp";
import pickleball from "../../assets/PersonalImages/Pickleball/pickleball.jpg";
import balatro from "../../assets/PersonalImages/Gaming/balatro.jpg";
import godOfWar from "../../assets/PersonalImages/Gaming/godofwar.jpg";
import hades from "../../assets/PersonalImages/Gaming/hades.avif";
import garden from "../../assets/PersonalImages/Gardening&Fishtank/garden.jpg";
import fish from "../../assets/PersonalImages/Gardening&Fishtank/fish.jpg";

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
            { src: sw1, id: 1, alt: "Chris and S.O. at Arches" },
            { src: sw2, id: 2, alt: "Bryce Canyon" },
            { src: sw3, id: 3, alt: "Snowy Utah Lake" },
            { src: sw4, id: 4, alt: "Horseshoe Bend" },
            { src: sw5, id: 5, alt: "Arches National Park" },
        ],
    },
    {
        id: 3,
        category: "Travel",
        title: "Autumn in Lincoln, NH",
        details:
            "In November 2024, I took a trip to Lincoln, New Hampshire to experience the vibrant fall colors before the leaves fell. It was an awesome, brisk adventure filled with hiking and the serene beauty of autumn.",
        imgs: [
            { src: babblingBrook, id: 1, alt: "Babbling brook" },
            { src: autumnLeaves, id: 2, alt: "Autumn leaves" },
            { src: mtWashington, id: 3, alt: "Mt. Washington" },
            { src: slotCanyon, id: 4, alt: "Slot canyon" },
        ],
    },
    {
        id: 4,
        category: "Hobbies",
        title: "Dungeons & Dragons Campaign",
        details:
            "I've been the Dungeon Master for my D&D group for nearly a year and a half. With only a few sessions left in our current campaign, it's been a rewarding creative outlet that challenges my storytelling and leadership skills.",
        imgs: [
            { src: dice, id: 1, alt: "D&D dice" },
            { src: campaignCity, id: 2, alt: "D&D campaign image" },
        ],
    },
    {
        id: 5,
        category: "Hobbies",
        title: "Pickleball",
        details:
            "My significant other and I love playing pickleball with friends. It's a fun, energetic game that keeps us active and brings people together.",
        imgs: [{ src: pickleball, id: 1, alt: "Pickleball courts" }],
    },
    {
        id: 6,
        category: "Hobbies",
        title: "Gaming",
        details:
            "I enjoy a wide range of games—from immersive video games like Elden Ring to classic board and card games. Gaming is a great way to relax and connect with friends.",
        imgs: [
            { src: balatro, id: 1, alt: "Balatro" },
            { src: godOfWar, id: 2, alt: "God of War: Ragnarok" },
            { src: hades, id: 3, alt: "Hades" },
        ],
    },
    {
        id: 7,
        category: "Hobbies",
        title: "Gardening & Fishkeeping",
        details:
            "I have a passion for gardening and nurturing potted plants, and I also care for a fish tank filled with shrimp, snails, and chili rasboras. This hobby connects me with nature and brings a calming balance to my daily life.",
        imgs: [
            { src: garden, id: 1, alt: "Garden bed" },
            { src: fish, id: 2, alt: "Fishtank" },
        ],
    },
];

export { about };
