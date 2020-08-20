import BreedData from './_BreedData';
import SpriteData from './_SpriteData';
import RuleData from './_RuleData';
import SwapData from './_SwapData';
import TemplateData from './_TemplateData';

export const Breeds = new BreedData();
export const Sprites = new SpriteData(Breeds);
export const Rules = new RuleData();
export const Swaps = new SwapData();
export const Templates = new TemplateData();
