import dragonBreeds from './breeds/DragonBreeds';
import drakeBreeds from './breeds/DrakeBreeds';
import pygmyBreeds from './breeds/PygmyBreeds';
import twoHeadedBreeds from './breeds/TwoHeadedBreeds';
import specialBreeds from './breeds/SpecialBreeds';
import hybridBreeds from './breeds/HybridBreeds';
import Breed from '../library/Breed';

export default function DragonData() {
    let importData: Array<Array<Breed>> = [dragonBreeds, drakeBreeds, pygmyBreeds, twoHeadedBreeds, specialBreeds, hybridBreeds];
    let imports: Array<Breed> = importData.flat();
    let data: any = {};

    // Return a map-like object of "breed-id" : {Breed Model Object}
    imports.forEach((item: Breed)=>{data[item.id] = item});
    return data;
};
