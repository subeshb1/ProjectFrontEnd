import React from 'react';

//component
import { CategoryContainer } from 'components/';


const categoryItems = {
    title1: "SELECT A",
    title2: "TEST",
    jobs: [
        { title: "Agriculture Test", imageName: "agriculture", link: "test/agriculture" },
        { title: "Ayurved Test", imageName: "ayurved", link: "test/ayurved" },
        { title: "Computer and IT Test", imageName: "computer and IT", link: "test/computer-and-IT" },
        { title: "Education Test", imageName: "education", link: "test/education" },
        { title: "Engineering Test", imageName: "engineering", link: "test/engineering" },
        { title: "Health Test", imageName: "health", link: "test/health" },
        { title: "Law Test", imageName: "law", link: "test/law" },
        { title: "Management Test", imageName: "management", link: "test/management" },
        { title: "Nursing Test", imageName: "nursing", link: "test/nursing" },
        { title: "Pharmacist Test", imageName: "pharmacist", link: "test/pharmacist" },
        { title: "Science Test", imageName: "science", link: "test/science" }
    ]
};

export default function SkillTest() {

    return (
        <CategoryContainer {...categoryItems} />
    );
}