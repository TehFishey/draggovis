import BreedData from './engine/data/BreedData';

const breedData = BreedData();
let breed = breedData['aeon-wyvern'];
let mPortrait = breed.portraits['aeon-m']
let fPortrait = breed.portraits['aeon-f']

//portrait: process.env.PUBLIC_URL + 'portraits/' + 'testDrag.png',

export default {
    name: "Leafy Sea Dragon",
    gender: "Male",
    breed: breed,
    portrait: mPortrait,
    father: {
        name: "Leafy Dad",
        gender: "Male",
        breed: breed,
        portrait: mPortrait
    },
    mother: {
        name: "Leafy Mom",
        gender: "Female",
        breed: breed,
        portrait: fPortrait,
        father: {
            name: "Leafy Grandad",
            gender: "Male",
            breed: breed,
            portrait: mPortrait
        },
        mother: {
            name: "Leafy Grandma",
            gender: "Female",
            breed: breed,
            portrait: fPortrait
        }
    }
}