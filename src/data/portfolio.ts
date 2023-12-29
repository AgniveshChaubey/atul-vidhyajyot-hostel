import {
    GreetingsType,
    // @ts-ignore
} from "./types/sections";

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
    "Library/Reading Room",
    "Gym",
    "Clean Campus",
    "Parking Facility",
    "Weekly Mentoring Program"
];

export const quickLinks: string[] = [
    "Home",
    "About us",
    "Facilities",
    "Admission Process",
    "Rules",
    "Gallery",
    "FAQs",
];

export const urlString = (str: string) => {
    if (str === "Home") return "";
    return str.toLowerCase().replace(/\s/g, "");
};

export const generalPhotos = [
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsE5POIO5c7G0wgVks4lML7KJTlyQo3u1uR9qkd1DkTl-HzP7v2JI0J_6VAo9pylhq30&usqp=CAU",
        altText: "Slide 1",
    },
    {
        src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        altText: "Slide 2",
    },
    {
        src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        altText: "Slide 3",
    },
];

export const functionPhotos = [
    {
        src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        altText: "Slide 4",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsE5POIO5c7G0wgVks4lML7KJTlyQo3u1uR9qkd1DkTl-HzP7v2JI0J_6VAo9pylhq30&usqp=CAU",
        altText: "Slide 5",
    },
    {
        src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        altText: "Slide 6",
    },
];

export type FAQItem = {
    question: string;
    answer: string;
};
export const faqData: FAQItem[] = [
    {
        question: "Is accomodation free in this hostel?",
        answer: "Absolutely, the accomodation is 100% free. You just have to pay for your meals."
    },
    {
        question: "How can I book a room in your hostel?",
        answer: "you simply have to contact hostel's rector and provide your educational marksheet."
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
        answer: "No, if you stay here, you must have to take your means here."
    },
    {
        question: "Are there common areas for socializing?",
        answer: "Yes, we have library, front gallery and terrace for socializing with each other.",
    },
    {
        question: "What are the check-in and check-out times?",
        answer: "There's no strict timing for check-in, but after 11:00 PM student must require permission of rector for checking-out.",
    },
    {
        question: "How is the security ensured in the hostel?",
        answer: "We only provide admission to honest candidates and in the span of 27 years, not a single case of mis-security has happened. So don't worry about that.",
    },
    {
        question: "Is smoking allowed in the hostel?",
        answer: "No, smoking is strictly prohibited in our hostel.",
    },

];
