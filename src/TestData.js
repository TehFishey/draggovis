import BreedData from './engine/data/BreedData';

const breedData = BreedData();
let breed = breedData['aeon-wyvern'];
let mPortrait = breed.portraits['aeon-m']
let fPortrait = breed.portraits['aeon-f']

//portraitObject: process.env.PUBLIC_URL + 'portraits/' + 'testDrag.png',

export default {
    name: "Leafy Sea Dragon",
    gender: "Male",
    breedObject: breed,
    portraitObject: mPortrait,
    father: {
        name: "Leafy Dad",
        gender: "Male",
        breedObject: breed,
        portraitObject: mPortrait
    },
    mother: {
        name: "Leafy Mom",
        gender: "Female",
        breedObject: breed,
        portraitObject: fPortrait,
        father: {
            name: "Leafy Grandad",
            gender: "Male",
            breedObject: breed,
            portraitObject: mPortrait
        },
        mother: {
            name: "Leafy Grandma",
            gender: "Female",
            breedObject: breed,
            portraitObject: fPortrait
        }
    }
}