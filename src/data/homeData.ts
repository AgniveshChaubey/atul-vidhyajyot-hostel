import { HomeData } from "@/types/type";
import hostelImg from "@/public/images/hostelHomepage.jpg";

export const homeData: HomeData = {
    greetings: {
        greet: "Welcome to AVJ, our unique haven in Vidhyanagar, where we redefine the concept of a hostel. More than just a residence, we are a close-knit family of 36 bright minds fostering a supportive and dynamic learning environment. Staying with us is not just about accommodation; it's an opportunity for personal and academic growth. Embracing a commitment to education, our hostel is not only free of charge but has seen numerous past residents rise to prominent positions. Our doors are open exclusively to worthy students who aspire to thrive in a community that values excellence and camaraderie.",
        hostelImg: hostelImg
    },
    gallery: {
        title: "Gallery",
        generalCarouselPhotos: [
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

        ],
        functionCarouselPhotos: [
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
        ]
    },
    location: {
        title: "Location",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.568690535363!2d72.91913507475674!3d22.557824133512703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e0d3761116d%3A0x226f9e786735dc9b!2sAtul%20VidhyaJyot!5e0!3m2!1sen!2sin!4v1703742994116!5m2!1sen!2sin"
    },
    facilities: {
        title: "Facilities",
        facilityList: [
            "Free Accommodation",
            "2 Meals a day",
            "Biweekly Feast",
            "Hot Water",
            "RO Water",
            "Reading Room",
            "Gym",
            "Clean Campus",
            "Parking Facility",
            "CCTV Camera",
            "Mentorhips",
            "Some Extra Perks..."
        ]
    },
    explore: {
        title: "Explore more...",
        links: [
            "Home",
            "About",
            "Admission",
            "Rules",
            "Gallery",
            "Alumnus",
            "FAQs",
        ]
    }

}