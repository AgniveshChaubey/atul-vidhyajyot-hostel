import { AdmissionData } from "@/types/type";

export const admissionData: AdmissionData = {
    pageHeader: "Admission Process",
    details: [
        "Admission to this hostel is entirely merit-based. We accommodate only 36 students, and the admission process hinges entirely on the students' academic results. The higher the results, the greater the chance of selection. Generally, marks above 70% are considered favorable.",
        "Following the evaluation of academic results, successful candidates are required to contact the Rector for the next steps. The Rector conducts an interview to assess the student's suitability, and admission decisions are made accordingly. It is mandatory for students to bring their parents during the admission process."
    ],
    alert: {
        text: "Requied documents at the time of admission are:",
        data: [
            "Passport size photo (two copies)",
            "Photo ID proof",
            "Latest markesheet"
        ]
    },
    form: {
        formHead: "Students are required to complete the Google Form below: ",
        formLink: "https://docs.google.com/forms/d/1dvWwuGcoq6HRr_PZlhz_CJ4_aHxRz7FMXvh60APKrdA/viewform?embedded=true"
    }
}
