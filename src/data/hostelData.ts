import { StaticImageData } from "next/image";
import {
    GreetingsType,
    // @ts-ignore
} from "./types/sections";

import one from "@/public/images/general/1-front.jpg";
import two from "@/public/images/general/2-lobby.jpg";
import three from "@/public/images/general/3-lobby.jpg";
import four from "@/public/images/general/4-room.jpg";
import five from "@/public/images/general/5-parking.jpg";
import six from "@/public/images/general/6-office.jpg";
import seven from "@/public/images/general/7-office.jpg";
import eight from "@/public/images/general/8-reading-room.jpg";
import nine from "@/public/images/general/9-mini-library.jpg";
import ten from "@/public/images/general/10-mini-gym.jpg";
import eleven from "@/public/images/general/11-common-hall.jpg";
import twelve from "@/public/images/general/12-RO-water.jpg";
import thirteen from "@/public/images/general/13-canteen.jpg";
import fourteen from "@/public/images/general/14-wash-basin.jpg";
import fifteen from "@/public/images/general/15-bathroom.jpg";
import sixteen from "@/public/images/general/16-backyard.jpg";
import seventeen from "@/public/images/general/17-sideyard.jpg";
import eighteen from "@/public/images/general/18-terrace.jpg";
import nineteen from "@/public/images/general/19-terrace.jpg";



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
    "About us",
    "Admission Process",
    "Rules",
    "Gallery",
    "Alumnus",
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
    }
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

export const hostelRules: string[] = [
    "Every student of this hostel must adhere to the rules of this hostel.",
    "Everyone must take bath before 7:30 am in the morning.",
    "Without rector's permission, no one is allowed to go outside before 6:00 am in the morning and after 11:00 pm in the evening.",
    "Indulging in any form of addiction is prohibited and if caught indulging will be expelled from the hostel.",
    "Mandatory to accompany the guardian during the admission process.",
    "Cleaning of the rooms allotted by the hostel and communal cleaning of the hostel every Sunday",
    "Do not allow family, friends or other persons to enter the hostel without the permission of the Rector.",
    "Leave will not be granted from the hostel except for a valid reason.",
    "Every student staying in the hostel will compulsorily eat in the canteen of the hostel.",
    "Canteen fees should be deposited 3 months in advance. And there will be no cut in any kind of meal.",
    "If the admission is canceled after depositing the canteen money, then the canteen money will not be refunded.",
    "Any political party or social strike, will not be allowed to participate in public activities. Student body establishment or activities shall be avoided. There was no stay in the hostel for anything except studies.",
    "Every student must compulsorily attend the prayer at 6:45 pm",
    "Compulsorily attend meditation program every Sunday from 10:45 to 12:00 noon.",
    "If any student is caught misbehaving, misbehaving in the educational institution, that student will be permanently expelled from the hostel.",
    "Compulsory reading is to be done from 9:00 pm to 11:00 pm.",
    "The Rector's decision in all matters shall be final and shall not be challenged or objected to.",
    "If any of the above rules are violated by the student, the fine imposed by the Rector shall be upheld. If the fine is not upheld, he will be expelled from the hostel."
];

export const hostelRulesGuj: string[] = [
    "કોલેજ મા અભ્યાસ કરવા ઈચ્છતા નબળી પરિસ્થિતિ ધરાવતા અને તેજસ્વી વિદ્યાર્થીઓને જ પ્રવેશ આપવામાાં આવશે.",
    "છાત્રાલયમા રહેતા દરેક વિદ્યાર્થીઓ એ છાત્રાલય ના નિયમો અને સુચનાઓનુ પાલન કરવનુ રહેશે.",
    "સવારે 7:30 પહેલા સ્નાનક્રિયા કરવાની રહેશે.",
    "સવારે 6 વાગ્યા પહેલા અને સાાંજે 8 વાગ્યા પછી રેક્ટર ની પરવાનગી વગર બહાર જઈ શકાશે નહીં.",
    "કોઈ પણ પ્રકારના વ્યસન કરવાની મનાઈ છે અને જો વ્યસન કરતા પકડાશે તો છાત્રાલય ની બહાર કાઢી મુકવામા આવશે.",
    "પ્રવેશ પ્રક્રિયા દરમિયાન વાલીની સાથે હોવું આવશ્યક છે.",
    "હોસ્ટેલ દ્વારા ફાળવવામાં આવેલ રૂમની સફાઈ તથા દર રવિવારે છાત્રાલય સામુહિક સફાઈમાં ફરજિયાત ભાગ લેવો પડશે.",
    "રેક્ટરની પરવાનગી વગર કુટુંબીજનો તથા મિત્રો કે અન્ય વ્યક્તિઓને છાત્રાલયમા પ્રવેશ કરાવવો નહી.",
    "યોગ્ય કારણ સિવાય છાત્રાયલય માંથી રજા મળશે નહિ.",
    "છાત્રાલયમાં રહેનાર દરેક વિદ્યાર્થીઓએ ફરજિયાત પણે છાત્રાલયમાં જમવાનું રહશે.",
    "ભોજનાલયના રૂપિયા ત્રણ મહિના અગાઉ જમા કરવાના રહેશે તથા કોઈ પણ પ્રકારની જમવા કટ(cut) મળશે નહિ.",
    "કોઈપણ પ્રકારના ઇલેક્ટ્રિક સાધન નો ઉપયોગ છાત્રાલયમાં કરાશે નહિ.",
    "કોઈપણ રાજકીય પક્ષ કે સામાજિક હડતાલ, જાહેર પ્રવૃત્તિમાં ભાગ લઇ શકશે નહિ. ફક્ત અભ્યાસ સિવાય કોઈ પણ અન્ય બાબત માટે છાત્રાલયમાં વાસ નથી.",
    "દરેક વિદ્યાર્થીઓએ સાંજે 6:45 વાગે પ્રાર્થનામાં ફરજિયાત પણે હાજર રહેવાનું રહેશે.",
    "દર રવિવારે ધ્યાન ના પ્રોગ્રામ માં ફરજિયાત પણે હાજર રહેવું પડશે.",
    "કોઈ વિદ્યાર્થી શિક્ષણ સંસ્થામાં ગેરરીતિ, તોફાનમસ્તી કરતા પકડશે તો તે વિદ્યાર્થી ને કાયમ માટે છાત્રાલયમાંથી બહાર મુકવામાં આવશે.",
    "સાંજે 9 થી 11 વાગ્યા સુધી ફરજિયાત વાંચન કરવાનું રહેશે.",
    "તમામ બાબતોમાં રેક્ટરનો નિર્ણય આખરી રહેશે. તેની સામે કોઈ અવરોધ કે વાંધો લઈ શકાય નહીં.",
    "ઉપરોક્ત દરેક નીયમ નો વિદ્યાર્થી દ્વારા ભંગ કરવામાં આવશે તો રેકટર દ્વારા કરવામાં આવેલ દંડ માન્ય રાખવાનો રહેશે. જો દંડ માન્ય નહીં રાખે તો છાત્રાલયમાંથી બહાર કાઢી મુકવામાં આવશે.",
]