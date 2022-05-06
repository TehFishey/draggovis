import Sprite from '../../library/defines/Sprite';
import { DragonType, DragonSubType } from '../../library/defines/Breed';
import TimeRange from '../../library/defines/TimeRange';

import SpriteFactory, { TimeSwapDefine } from '../_utilities/SpriteFactory';
import ConditionBuilder from '../_utilities/ConditionBuilder';
import {deadSprites} from './GraveSprites'

// All zonbies are gravestones between 6am and midnight.
let graveSwap : TimeSwapDefine = {
    range: new TimeRange('06:00:00', '23:59:00'), 
    sprites: deadSprites
}

let zombieCondition = ConditionBuilder.alwaysTrue('Undead Dragon');

let zombieSprites: Array<Sprite> = [
    SpriteFactory.customSprite('zombie-western-u', "Dragon", true, ConditionBuilder.checkType(DragonType.Dragon, DragonSubType.Western, "Undead Dragon"), [graveSwap]),
    SpriteFactory.customSprite('zombie-eastern-u', "Eastern", true, ConditionBuilder.checkType(DragonType.Dragon, DragonSubType.Eastern, "Undead Eastern Dragon"), [graveSwap]),
    SpriteFactory.customSprite('zombie-wingless-u', "Wingless", true, ConditionBuilder.checkType(DragonType.Dragon, DragonSubType.Wingless, "Undead Wingless Dragon"), [graveSwap]),
    SpriteFactory.customSprite('zombie-wyrm-u', "Wyrm", true, ConditionBuilder.checkType(DragonType.Dragon, DragonSubType.Wyrm, "Undead Wyrm"), [graveSwap]),
    SpriteFactory.customSprite('zombie-wyvern-u', "Wyvern", true, ConditionBuilder.checkType(DragonType.Dragon, DragonSubType.Wyvern, "Undead Wyvern"), [graveSwap]),
    SpriteFactory.customSprite('zombie-amphiptere-u', "Amphiptere", true, ConditionBuilder.checkType(DragonType.Dragon, DragonSubType.Amphiptere, "Undead Amphiptere"), [graveSwap]),
    SpriteFactory.customSprite('zombie-serpent-u', "Sea Serpent", true, ConditionBuilder.checkType(DragonType.Dragon, DragonSubType.SeaSerpent, "Undead Sea Serpent"), [graveSwap]),
    SpriteFactory.customSprite('zombie-lindwyrm-u', "Lindwyrm", true, ConditionBuilder.checkType(DragonType.Dragon, DragonSubType.Lindwyrm, "Undead Lindwyrm"), [graveSwap]),

    SpriteFactory.customSprite('zombie-drake-u', "Drake", true, ConditionBuilder.checkType(DragonType.Drake, DragonSubType.Western, "Undead Drake"), [graveSwap]),

    SpriteFactory.customSprite('zombie-th-u', "Two-Headed Dragon", true, ConditionBuilder.checkType(DragonType.TwoHeaded, DragonSubType.Western, "Undead Two-Headed Dragon"), [graveSwap]),
    SpriteFactory.customSprite('zombie-th-eastern-u', "Two-Headed Eastern Dragon", true, ConditionBuilder.checkType(DragonType.TwoHeaded, DragonSubType.Eastern, "Undead Two-Headed Eastern Dragon"), [graveSwap]),
    SpriteFactory.customSprite('zombie-th-lindwyrm-u', "Two-Headed Lindwyrm", true, ConditionBuilder.checkType(DragonType.TwoHeaded, DragonSubType.Lindwyrm, "Undead Two-Headed Lindwyrm"), [graveSwap]),
    SpriteFactory.customSprite('zombie-th-serpent-u', "Two-Headed Sea Serpent", true, ConditionBuilder.checkType(DragonType.TwoHeaded, DragonSubType.SeaSerpent, "Undead Two-Headed Serpent"), [graveSwap]),

    SpriteFactory.customSprite('zombie-pygmy-u', "Pygmy Dragon", true, ConditionBuilder.checkType(DragonType.Pygmy, DragonSubType.Western, "Undead Pygmy Dragon"), [graveSwap]),
    SpriteFactory.customSprite('zombie-pygmy-eastern-u', "Eastern Pygmy", true, ConditionBuilder.checkType(DragonType.Pygmy, DragonSubType.Eastern, "Undead Eastern Pygmy"), [graveSwap]),
    SpriteFactory.customSprite('zombie-pygmy-lindwyrm-u', "Pygmy Lindwyrm", true, ConditionBuilder.checkType(DragonType.Pygmy, DragonSubType.Lindwyrm, "Undead Pygmy Lindwyrm"), [graveSwap]),
    SpriteFactory.customSprite('zombie-pygmy-wyrm-u', "Pygmy Wyrm", true, ConditionBuilder.checkType(DragonType.Pygmy, DragonSubType.Wyrm, "Undead Pygmy Wyrm"), [graveSwap]),
    SpriteFactory.customSprite('zombie-pygmy-wyvern-u', "Pygmy Wyvern", true, ConditionBuilder.checkType(DragonType.Pygmy, DragonSubType.Wyvern, "Undead Pygmy Wyvern"), [graveSwap]),
]

export {zombieSprites, zombieCondition};