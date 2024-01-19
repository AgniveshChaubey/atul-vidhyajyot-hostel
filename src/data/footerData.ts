import { FooterData } from "@/types/type";
import { homeData } from "./homeData"

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