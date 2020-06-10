import BreedData from './BreedData';
import PortraitData from './PortraitData';
import RuleData from './RuleData';

export const Breeds = new BreedData();
export const Portraits = new PortraitData(Breeds);
export const Rules = new RuleData();