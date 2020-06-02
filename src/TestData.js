import PortraitFactory from "./engine/utilities/PortraitFactory"

let testPortrait = PortraitFactory.mfPortraits("aeon");

//portraitObject: process.env.PUBLIC_URL + 'portraits/' + 'testDrag.png',

export default {
    name: "Leafy Sea Dragon",
    gender: "Male",
    breedObject: undefined,
    portraitObject: testPortrait.mId,
    father: {
        name: "Leafy Dad",
        gender: "Male",
        breedObject: undefined,
        portraitObject: testPortrait.mId
    },
    mother: {
        name: "Leafy Mom",
        gender: "Female",
        breedObject: undefined,
        portraitObject: testPortrait.fId,
        father: {
            name: "Leafy Grandad",
            gender: "Male",
            breedObject: undefined,
            portraitObject: testPortrait.mId
        },
        mother: {
            name: "Leafy Grandma",
            gender: "Female",
            breedObject: undefined,
            portraitObject: testPortrait.fId
        }
    }
}