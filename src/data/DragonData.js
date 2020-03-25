import dragonBreeds from './DragonBreeds';
import drakeBreeds from './DrakeBreeds';
import pygmyBreeds from './PygmyBreeds';
import twoHeadBreeds from './TwoHeadBreeds';
import specialBreeds from './SpecialBreeds';
import hybridBreeds from './HybridBreeds';

export default function DragonData() {
    let imports = [dragonBreeds, drakeBreeds, pygmyBreeds, twoHeadBreeds, specialBreeds, hybridBreeds].flat();
    let data = {};

    // Return a map-like object of "breed-name" : {Dragon Model Object}
    imports.forEach((item)=>{data[item.breed] = item});
    return data;
};
