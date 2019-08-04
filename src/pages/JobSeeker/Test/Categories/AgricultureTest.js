import React from 'react';
//component
import Quiz from 'components/Quiz';

//data
const test_agriculture = {
    "name": "Agriculture Test",
    "questions": [
        {
            "question": "The hybrid mango developed from the cross of Neelum and Alphonso is - ",
            "options": [
                "Amrapali",
                "Dasheri",
                "Ratna",
                "Badami"
            ],
            "answer": 3
        },
        {
            "question": "Mauritius, Poovan, Lal Velchi are varieties of - ",
            "options": [
                "Tomato",
                "Banana",
                "Litchi",
                "Carrot"
            ],
            "answer": 2
        },
        {
            "question": "White bud in maize is caused due to the deficiency of -",
            "options": [
                "Zink",
                "Amonium",
                "Iron",
                "Sulphur"
            ],
            "answer": 1
        },
        {
            "question": "COJ-64 and CO7717 are early maturing varieties of - ",
            "options": [
                "Cotton",
                "Sugarcane",
                "Jule",
                "Maize"
            ],
            "answer": 2
        },
        {
            "question": "Black soils is ideal for cultivation of cotton as - ",
            "options": [
                "its colour is black",
                "it can retain moisture",
                "it is made up of lava",
                "it is found on plateau regions"
            ],
            "answer": 2
        },
        {
            "question": "What is the ideal minimum temperature for the growth of sugarcane ? ",
            "options": [
                "10°C",
                "20°C",
                "30°C",
                "40°C"
            ],
            "answer": 2
        },
        {
            "question": "Which one of the following most appropriately describes the nature of Green Revolution of late sixties of 20th century ?",
            "options": [
                "Intensive cultivation of green vegetable",
                "Intensive agriculture district programme",
                "High-yielding varieties programme",
                "Seed-Fertilizer-Water technology"
            ],
            "answer": 4
        },
        {
            "question": "Cotton was produced first by the?",
            "options": [
                "Egyptians",
                "Harappans",
                "Mesopotamians",
                "Sumerians"
            ],
            "answer": 1
        },
        {
            "question": "Nicotiana Rustica is a variety of - ",
            "options": [
                "Coffee",
                "Tobacco",
                "Sugarcane",
                "Coconut"
            ],
            "answer": 2
        },
        {
            "question": "Leaf Curl disease in Okra(Lady finger) is caused by - ",
            "options": [
                "White fly",
                "Fungus",
                "Bacteria",
                "Virus"
            ],
            "answer": 1
        },
        {
            "question": "Generally Orobanche weed is found in - ",
            "options": [
                "tobacco field",
                "gram field",
                "rice field",
                "wheat field"
            ],
            "answer": 1
        },
        {
            "question": "How many factors are identified for influencing plant growth till now ?",
            "options": [
                "55",
                "60",
                "52",
                "50"
            ],
            "answer": 3
        },
        {
            "question": "How does the moisture stress affect the cell",
            "options": [
                "Affect cell division",
                "Affect cell expansion",
                "Cell mortality rate is affected",
                "No effect on cell"
            ],
            "answer": 1
        },
        {
            "question": "At the vegetative growth stage, flowering is stopped in food-grain crops, known as-",
            "options": [
                "sigmoid growth curve",
                "determinate growth",
                "indeterminate growth",
                "grand growth period"
            ],
            "answer": 2
        },
        {
            "question": "Which one of the following can be assessed by using the equation, A= Economic Production / Biomass Production ?",
            "options": [
                "Panicle emergence rate",
                "Rate of flowering",
                "Harvest Index",
                "Leaf production rate"
            ],
            "answer": 3
        },
        {
            "question": "How much radiation energy percentage radiating on plant is used in photosynthesis ?",
            "options": [
                "0-50%-210%",
                "0-42%-1•66%",
                "0-25%-0-30%",
                "0-16%-0-24%"
            ],
            "answer": 2
        },
        {
            "question": "The crop with yarns of sunnhemp is prepared in-",
            "options": [
                "12-15 weeks",
                "15-17 weeks",
                "10-12 weeks",
                "8-10 weeks"
            ],
            "answer": 1
        },
        {
            "question": "Which is not an inorganic matter in the following ?",
            "options": [
                "Magnesium",
                "Iron",
                "Fat",
                "Iodine"
            ],
            "answer": 3
        },
        {
            "question": "Which is the highest digestible protein non-leguminous crop among the following",
            "options": [
                "Napier",
                "Maize silage",
                "Maize",
                "Iowar"
            ],
            "answer": 4
        },
        {
            "question": "Which disease occurs, when more sorghum is consumed ",
            "options": [
                "Rickets",
                "Scurvy",
                "Nightblindness",
                "Pellagra"
            ],
            "answer": 4
        },
        {
            "question": "Which Sorghum variety is notmulticut ?",
            "options": [
                "Pusa Chari-2",
                "M.P. Chari-2",
                "M.P. Chari",
                "U.P. Chari-1"
            ],
            "answer": 4
        }
    ]
}

export default function AgricultureTest() {
    return(
        <>
            <Quiz {...test_agriculture} />
        </>
    )
}