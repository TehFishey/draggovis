import Portrait from '../../library/defines/Portrait';
import { DragonType, DragonSubType } from '../../library/defines/Breed';
import { TimeRange } from '../../library/defines/Time';


import PortraitFactory, { TimeSwapDefine } from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';
import GravePortraits from './GravePortraits'

let graveSwap : TimeSwapDefine = {
    range: new TimeRange('06:00:00', '23:59:00'), 
    portraits: GravePortraits
}

let zombiePortraits: Array<Portrait> = [
    PortraitFactory.customPortrait('zombie-western-u', "Dragon", true, ConditionFactory.checkType(DragonType.Dragon, DragonSubType.Western, "Undead Dragon"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-eastern-u', "Eastern", true, ConditionFactory.checkType(DragonType.Dragon, DragonSubType.Eastern, "Undead Eastern Dragon"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-wingless-u', "Wingless", true, ConditionFactory.checkType(DragonType.Dragon, DragonSubType.Wingless, "Undead Wingless Dragon"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-wyrm-u', "Wyrm", true, ConditionFactory.checkType(DragonType.Dragon, DragonSubType.Wyrm, "Undead Wyrm"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-wyvern-u', "Wyvern", true, ConditionFactory.checkType(DragonType.Dragon, DragonSubType.Wyvern, "Undead Wyvern"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-amphiptere-u', "Amphiptere", true, ConditionFactory.checkType(DragonType.Dragon, DragonSubType.Amphiptere, "Undead Amphiptere"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-serpent-u', "Sea Serpent", true, ConditionFactory.checkType(DragonType.Dragon, DragonSubType.SeaSerpent, "Undead Sea Serpent"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-lindwyrm-u', "Lindwyrm", true, ConditionFactory.checkType(DragonType.Dragon, DragonSubType.Lindwyrm, "Undead Lindwyrm"), [graveSwap]),

    PortraitFactory.customPortrait('zombie-drake-u', "Drake", true, ConditionFactory.checkType(DragonType.Drake, DragonSubType.Western, "Undead Drake"), [graveSwap]),

    PortraitFactory.customPortrait('zombie-th-u', "Two-Headed Dragon", true, ConditionFactory.checkType(DragonType.TwoHeaded, DragonSubType.Western, "Undead Two-Headed Dragon"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-th-eastern-u', "Two-Headed Eastern Dragon", true, ConditionFactory.checkType(DragonType.TwoHeaded, DragonSubType.Eastern, "Undead Two-Headed Eastern Dragon"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-th-lindwyrm-u', "Two-Headed Lindwyrm", true, ConditionFactory.checkType(DragonType.TwoHeaded, DragonSubType.Lindwyrm, "Undead Two-Headed Lindwyrm"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-th-serpent-u', "Two-Headed Sea Serpent", true, ConditionFactory.checkType(DragonType.TwoHeaded, DragonSubType.SeaSerpent, "Undead Two-Headed Serpent"), [graveSwap]),

    PortraitFactory.customPortrait('zombie-pygmy-u', "Pygmy Dragon", true, ConditionFactory.checkType(DragonType.Pygmy, DragonSubType.Western, "Undead Pygmy Dragon"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-pygmy-eastern-u', "Eastern Pygmy", true, ConditionFactory.checkType(DragonType.Pygmy, DragonSubType.Eastern, "Undead Eastern Pygmy"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-pygmy-lindwyrm-u', "Pygmy Lindwyrm", true, ConditionFactory.checkType(DragonType.Pygmy, DragonSubType.Lindwyrm, "Undead Pygmy Lindwyrm"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-pygmy-wyrm-u', "Pygmy Wyrm", true, ConditionFactory.checkType(DragonType.Pygmy, DragonSubType.Wyrm, "Undead Pygmy Wyrm"), [graveSwap]),
    PortraitFactory.customPortrait('zombie-pygmy-wyvern-u', "Pygmy Wyvern", true, ConditionFactory.checkType(DragonType.Pygmy, DragonSubType.Wyvern, "Undead Pygmy Wyvern"), [graveSwap]),
]

export default zombiePortraits;