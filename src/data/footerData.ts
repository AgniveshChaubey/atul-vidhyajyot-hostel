import { homeData } from "./homeData"


interface FooterData {
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

export const footerData: FooterData = {
    contact: {
        title: "Contact us!",
        mobile: "Mobile No. +91 7621847331 (Siddhrajsinh Solanki)",
        email: "Email: Siddharajsinhsolanki988@gmail.com"
    },
    quickLinks: {
        title: "Quick Links",
        links: homeData.explore.links
    }
}