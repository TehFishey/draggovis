import dragonBreeds from './breeds/DragonBreeds';
import drakeBreeds from './breeds/DrakeBreeds';
import pygmyBreeds from './breeds/PygmyBreeds';
import twoHeadedBreeds from './breeds/TwoHeadedBreeds';
import specialBreeds from './breeds/SpecialBreeds';
import hybridBreeds from './breeds/HybridBreeds';

import Breed from '../library/defines/Breed';

export default class BreedData {
    readonly dict: Map<string, Breed>;
    readonly arr: Array<Breed>;

    constructor() {
        let imports: Array<Array<Breed>> = [dragonBreeds, drakeBreeds, pygmyBreeds, twoHeadedBreeds, specialBreeds, hybridBreeds];
        this.arr = imports.flat();
        this.dict = new Map<string, Breed>();
        this.arr.forEach((breed: Breed) => {this.dict.set(breed.id, breed)});
        console.log(`Model: Defining breed data...`);
    }
};
