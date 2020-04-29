import dragonBreeds from './breeds/DragonBreeds';
import drakeBreeds from './breeds/DrakeBreeds';
import pygmyBreeds from './breeds/PygmyBreeds';
import twoHeadBreeds from './breeds/TwoHeadBreeds';
import specialBreeds from './breeds/SpecialBreeds';
import hybridBreeds from './breeds/HybridBreeds';

export default function DragonData() {
    let imports = [dragonBreeds, drakeBreeds, pygmyBreeds, twoHeadBreeds, specialBreeds, hybridBreeds].flat();
    let data = {};

    // Return a map-like object of "breed-id" : {Dragon Model Object}
    imports.forEach((item)=>{data[item.breedId] = item});
    return data;
};
