import BreedData from './_BreedData';
import PortraitData from './_PortraitData';
import RuleData from './_RuleData';
import SwapData from './_SwapData';

export const Breeds = new BreedData();
export const Portraits = new PortraitData(Breeds);
export const Rules = new RuleData();
export const Swaps = new SwapData();