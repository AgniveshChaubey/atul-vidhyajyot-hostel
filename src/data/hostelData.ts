import { StaticImageData } from "next/image";
import {
    GreetingsType,
    // @ts-ignore
} from "./types/sections";

import { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen } from "./images";
import { f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12 } from "./images";
export const greetings: GreetingsType = {
    name: "Atul Vidhyajyot Hostel",
    greet: "Welcome to AVJ!",
    description:
        "Welcome to our unique haven in Vidhyanagar, where we redefine the concept of a hostel. More than just a residence, we are a close-knit family of 36 bright minds fostering a supportive and dynamic learning environment. Staying with us is not just about accommodation; it's an opportunity for personal and academic growth. Embracing a commitment to education, our hostel is not only free of charge but has seen numerous past residents rise to prominent positions. Our doors are open exclusively to worthy students who aspire to thrive in a community that values excellence and camaraderie.",
};

export const facilities: string[] = [
    "Free Accommodation",
    "2 Meals per day",
    "Biweekly Feast",
    "Hot Water",
    "Drinking RO Water",
    "Library/Reading Room",
    "Gym",
    "Clean Campus",
    "Parking Facility",
    "Weekly Mentoring Program",
    "Some Extra Perks..."
];

export const quickLinks: string[] = [
    "Home",
    "About",
    "Admission",
    "Rules",
    "Gallery",
    "Alumnus",
    "FAQs",
];

export const urlString = (str: string) => {
    if (str === "Home") return "";
    return str.toLowerCase().replace(/\s/g, "");
};

export const generalCarouselPhotos = [
    {
        src: "https://raw.githubusercontent.com/AgniveshChaubey/atul-vidhyajyot-hostel/master/public/g1.jpg",
        altText: "Slide 1",
        caption: ""
    },
    {
        src: "https://raw.githubusercontent.com/AgniveshChaubey/atul-vidhyajyot-hostel/master/public/g2.jpg",
        altText: "Slide 2",
        caption: ""
    },
    {
        src: "https://raw.githubusercontent.com/AgniveshChaubey/atul-vidhyajyot-hostel/master/public/g3.jpg",
        altText: "Slide 3",
        caption: ""
    },
    {
        src: "https://raw.githubusercontent.com/AgniveshChaubey/atul-vidhyajyot-hostel/master/public/g4.jpg",
        altText: "Slide 4",
        caption: ""
    },

];

export const functionCarouselPhotos = [
    {
        src: "https://raw.githubusercontent.com/AgniveshChaubey/atul-vidhyajyot-hostel/master/public/f1.jpg",
        altText: "Slide 1",
        caption: ""
    },
    {
        src: "https://raw.githubusercontent.com/AgniveshChaubey/atul-vidhyajyot-hostel/master/public/f2.jpg",
        altText: "Slide 2",
        caption: ""
    },
    {
        src: "https://raw.githubusercontent.com/AgniveshChaubey/atul-vidhyajyot-hostel/master/public/f3.jpg",
        altText: "Slide 3",
        caption: ""
    },
    {
        src: "https://raw.githubusercontent.com/AgniveshChaubey/atul-vidhyajyot-hostel/master/public/f4.jpg",
        altText: "Slide 4",
        caption: ""
    },
];

export type FAQItem = {
    question: string;
    answer: string;
};
export const faqData: FAQItem[] = [
    {
        question: "Is accomodation free in this hostel?",
        answer:
            "Absolutely, the accomodation is 100% free. You just have to pay for your meals.",
    },
    {
        question: "How can I book a room in your hostel?",
        answer:
            "you simply have to contact hostel's rector and provide your educational marksheet.",
    },
    {
        question: "What types of rooms are available?",
        answer: "Only single non-ac rooms are available with two beds per room.",
    },
    {
        question: "Is there any facilitiey of hot water in the hostel?",
        answer: "Yes, we do have supply of hot water 24/7.",
    },
    {
        question: "can we stay here and have our means outside?",
        answer: "No, if you stay here, you must have to take your means here.",
    },
    {
        question: "Are there common areas for socializing?",
        answer:
            "Yes, we have library, front gallery and terrace for socializing with each other.",
    },
    {
        question: "What are the check-in and check-out times?",
        answer:
            "There's no strict timing for check-in, but after 11:00 pm student must require permission of rector for checking-out.",
    },
    {
        question: "How is the security ensured in the hostel?",
        answer:
            "We only provide admission to honest candidates and in the span of 27 years, not a single case of mis-security has happened. So don't worry about that.",
    },
    {
        question: "Is smoking allowed in the hostel?",
        answer: "No, smoking is strictly prohibited in our hostel.",
    },
];

export const imageInfo: { id: number, src: StaticImageData, desc: string }[] = [
    {
        id: 1,
        src: one,
        desc: "Hostel's Front View"
    },
    {
        id: 2,
        src: two,
        desc: "Lobby"
    },
    {
        id: 3,
        src: three,
        desc: "Lobby"
    },
    {
        id: 4,
        src: four,
        desc: "Room"
    },
    {
        id: 5,
        src: five,
        desc: "Parking"
    },
    {
        id: 6,
        src: six,
        desc: "Office"
    },

    {
        id: 7,
        src: seven,
        desc: "Office"
    },
    {
        id: 8,
        src: eight,
        desc: "Reading Room"
    },
    {
        id: 9,
        src: nine,
        desc: "Mini Library"
    },
    {
        id: 10,
        src: ten,
        desc: "Mini Gym"
    },
    {
        id: 11,
        src: eleven,
        desc: "Common Hall"
    },
    {
        id: 12,
        src: twelve,
        desc: "RO Drinking Water"
    },
    {
        id: 13,
        src: thirteen,
        desc: "Canteen"
    },
    {
        id: 14,
        src: fourteen,
        desc: "Wash Basin"
    },
    {
        id: 15,
        src: fifteen,
        desc: "Bathroom"
    },
    {
        id: 16,
        src: sixteen,
        desc: "Backyard"
    },
    {
        id: 17,
        src: seventeen,
        desc: "Sideyard"
    },
    {
        id: 18,
        src: eighteen,
        desc: "Solar Plate"
    },
    {
        id: 19,
        src: nineteen,
        desc: "Terrace"
    },
    {
        id: 20,
        src: f1,
        desc: "Hyderabad Visit"
    },
    {
        id: 21,
        src: f2,
        desc: ""
    },
    {
        id: 22,
        src: f3,
        desc: ""
    },
    {
        id: 23,
        src: f4,
        desc: ""
    },
    {
        id: 24,
        src: f5,
        desc: ""
    },
    {
        id: 25,
        src: f6,
        desc: ""
    },
    {
        id: 26,
        src: f7,
        desc: ""
    },
    {
        id: 27,
        src: f8,
        desc: ""
    },
    {
        id: 28,
        src: f9,
        desc: ""
    },
    {
        id: 29,
        src: f10,
        desc: ""
    },
    {
        id: 30,
        src: f11,
        desc: ""
    },
    {
        id: 31,
        src: f12,
        desc: ""
    },
];

export const alumniInfo: { id: number, name: string, designation: string, contact?: string }[] = [
    {
        id: 1,
        name: "",
        designation: "aaa",
        contact: "1"
    },
    {
        id: 2,
        name: "",
        designation: "bbb",
        contact: "2"
    },
    {
        id: 3,
        name: "",
        designation: "ccc",
        contact: "3"
    },
];