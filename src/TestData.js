import {Breeds} from './engine/data/Model';
import DragonNode from './engine/library/DragonNode';


let breed = Breeds.dict.get('aeon-wyvern');
console.log(breed.portraits);
let mPortrait = breed.portraits.get('aeon-m')
let fPortrait = breed.portraits.get('aeon-f')

let rootNode = new DragonNode("Male", breed, mPortrait);
rootNode.name = "Leafy Sea Dragon";
rootNode.father = new DragonNode("Male", breed, mPortrait);
rootNode.father.name = "Leafy Dad";
rootNode.mother = new DragonNode("Female", breed, fPortrait);
rootNode.mother.name = "Leafy Mom";
rootNode.mother.father = new DragonNode("Male", breed, mPortrait);
rootNode.mother.father.name = "Leafy Grandad";
rootNode.mother.mother = new DragonNode("Female", breed, fPortrait);
rootNode.mother.mother.name = "Leafy Grandma";

export default rootNode;




//portrait: process.env.PUBLIC_URL + 'portraits/' + 'testDrag.png',
/*
export default {
    name: "Leafy Sea Dragon",
    gender: "Male",
    breed: breed,
    portrait: mPortrait,
    father: {
        name: "Leafy Dad",
        gender: "Male",
        breed: breed,
        portrait: mPortrait,
        meta: {
            updated: false,
            failedValidation: false,
            validationMessage: ''
        }
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
            portrait: mPortrait,
            meta: {
                updated: false,
                failedValidation: false,
                validationMessage: ''
            }
        },
        mother: {
            name: "Leafy Grandma",
            gender: "Female",
            breed: breed,
            portrait: fPortrait,
            meta: {
                updated: false,
                failedValidation: false,
                validationMessage: ''
            }
        },
        meta: {
            updated: false,
            failedValidation: false,
            validationMessage: ''
        }
    },
    meta: {
        updated: false,
        failedValidation: false,
        validationMessage: ''
    }
 
}
   */