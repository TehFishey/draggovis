import BreedData from './BreedData';
import PortraitData from './PortraitData';

export const Breeds = new BreedData();
export const Portraits = new PortraitData(Breeds);