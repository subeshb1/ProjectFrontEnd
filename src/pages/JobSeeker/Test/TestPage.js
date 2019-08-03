import React from 'react';

//component
import { CategoryContainer } from 'components/';


const categoryItems = {
    title1: "SELECT A",
    title2: "TEST",
    jobs: [
        { title: "Agriculture Test", imageName: "agriculture", link: "/jobseeker/test/agriculture" },
        { title: "Ayurved Test", imageName: "ayurved", link: "/jobseeker/test/ayurved" },
        { title: "Computer and IT Test", imageName: "computer and IT", link: "/jobseeker/test/computer-and-IT" },
        { title: "Education Test", imageName: "education", link: "/jobseeker/test/education" },
        { title: "Engineering Test", imageName: "engineering", link: "/jobseeker/test/engineering" },
        { title: "Health Test", imageName: "health", link: "/jobseeker/test/health" },
        { title: "Law Test", imageName: "law", link: "/jobseeker/test/law" },
        { title: "Management Test", imageName: "management", link: "/jobseeker/test/management" },
        { title: "Nursing Test", imageName: "nursing", link: "/jobseeker/test/nursing" },
        { title: "Pharmacist Test", imageName: "pharmacist", link: "/jobseeker/test/pharmacist" },
        { title: "Science Test", imageName: "science", link: "/jobseeker/test/science" }
    ]
};

export default function TestComponent() {

    return (
        <CategoryContainer {...categoryItems} />
        
    );
}