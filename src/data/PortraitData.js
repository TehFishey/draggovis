import dragonPortraits from './portraits/DragonPortraits';

export default function DragonData() {
    let imports = [dragonPortraits].flat();
    let data = {};

    // Return a map-like object of "breed-id" : {Dragon Model Object}
    imports.forEach((item)=>{data[item.breedId] = item});
    return data;
};
