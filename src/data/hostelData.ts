import {
    GreetingsType,
    // @ts-ignore
} from "./types/";

// export const greetings: GreetingsType = {
//     name: "Atul Vidhyajyot Hostel",
//     greet: "Welcome to AVJ!",
//     description:
//         "Welcome to our unique haven in Vidhyanagar, where we redefine the concept of a hostel. More than just a residence, we are a close-knit family of 36 bright minds fostering a supportive and dynamic learning environment. Staying with us is not just about accommodation; it's an opportunity for personal and academic growth. Embracing a commitment to education, our hostel is not only free of charge but has seen numerous past residents rise to prominent positions. Our doors are open exclusively to worthy students who aspire to thrive in a community that values excellence and camaraderie.",
// };

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