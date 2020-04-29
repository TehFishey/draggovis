import DragonPortraits from "./data/portraits/DragonPortraits"

let testPortrait = DragonPortraits[0];

//portraitObject: process.env.PUBLIC_URL + 'portraits/' + 'testDrag.png',

export default {
    name: "Leafy Sea Dragon",
    gender: "Male",
    breedObject: undefined,
    portraitObject: testPortrait,
    father: {
        name: "Leafy Dad",
        gender: "Male",
        breedObject: undefined,
        portraitObject: testPortrait
    },
    mother: {
        name: "Leafy Mom",
        gender: "Female",
        breedObject: undefined,
        portraitObject: testPortrait,
        father: {
            name: "Leafy Grandad",
            gender: "Male",
            breedObject: undefined,
            portraitObject: testPortrait
        },
        mother: {
            name: "Leafy Grandma",
            gender: "Female",
            breedObject: undefined,
            portraitObject: testPortrait
        }
    }
}