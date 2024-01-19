import { StaticImageData } from "next/image"

export interface AboutData {
    header: string,
    briefInfo: string[],
    details: string[]
}

export interface AdmissionData {
    pageHeader: string,
    details: string[],
    alert: {
        text: string, data: string[]
    },
    form: { formHead: string, formLink: string }
}

export interface AlumniData {
    alumniHeader: string,
    headerText: string,
    info: {
        id: number,
        name: string,
        designation: string,
        contact?: string
    }[]
}

export interface FaqData {
    faqHeader: string,
    headerText: string,
    faqData: {
        question: string;
        answer: string;
    }[]
}

export interface FooterData {
    contact: {
        title: string,
        mobile: string,
        email: string
    },
    quickLinks: {
        title: string,
        links: string[]
    }
}

export interface GalleryData {
    galleryHeader: string,
    headerText: string,
    images: {
        hostelImg: Image[],
        functionImg: Image[]
    }
}

interface Image {
    id: number,
    src: StaticImageData,
    desc: string
}

export interface HomeData {
    greetings: {
        greet: string,
        hostelImg: StaticImageData,
    },
    gallery: {
        title: string,
        generalCarouselPhotos: CarouselImage[],
        functionCarouselPhotos: CarouselImage[],

    },
    location: {
        title: string,
        mapUrl: string
    },
    facilities: {
        title: string,
        facilityList: string[]
    }, explore: {
        title: string,
        links: string[]
    }

}

interface CarouselImage {
    src: string,
    altText: string,
    caption: string
}

export interface RulesData {
    pageHeader: string,
    headerText: string,
    note: string,
    rules: {
        gujarati: string[],
        english: string[]
    }

}
