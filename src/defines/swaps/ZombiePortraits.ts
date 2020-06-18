import Portrait from '../../library/defines/Portrait';
import { DragonType, DragonSubType } from '../../library/defines/Breed';

import PortraitFactory from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';

let zombiePortraits: Array<Portrait> = [
    PortraitFactory.customPortrait('zombie-western', "Dragon", true, ConditionFactory.checkTypes(DragonType.Dragon, DragonSubType.Western, "Undead Dragon")),
    PortraitFactory.customPortrait('zombie-eastern', "Eastern", true, ConditionFactory.checkTypes(DragonType.Dragon, DragonSubType.Eastern, "Undead Eastern Dragon")),
    PortraitFactory.customPortrait('zombie-wingless', "Wingless", true, ConditionFactory.checkTypes(DragonType.Dragon, DragonSubType.Wingless, "Undead Wingless Dragon")),
    PortraitFactory.customPortrait('zombie-wyrm', "Wyrm", true, ConditionFactory.checkTypes(DragonType.Dragon, DragonSubType.Wyrm, "Undead Wyrm")),
    PortraitFactory.customPortrait('zombie-wyvern', "Wyvern", true, ConditionFactory.checkTypes(DragonType.Dragon, DragonSubType.Wyvern, "Undead Wyvern")),
    PortraitFactory.customPortrait('zombie-amphiptere', "Amphiptere", true, ConditionFactory.checkTypes(DragonType.Dragon, DragonSubType.Amphiptere, "Undead Amphiptere")),
    PortraitFactory.customPortrait('zombie-sea-serpent', "Sea Serpent", true, ConditionFactory.checkTypes(DragonType.Dragon, DragonSubType.SeaSerpent, "Undead Sea Serpent")),
    PortraitFactory.customPortrait('zombie-Lindwyrm', "Lindwyrm", true, ConditionFactory.checkTypes(DragonType.Dragon, DragonSubType.Lindwyrm, "Undead Lindwyrm")),

    PortraitFactory.customPortrait('zombie-drake', "Drake", true, ConditionFactory.checkTypes(DragonType.Drake, DragonSubType.Western, "Undead Drake")),

    PortraitFactory.customPortrait('zombie-two-headed', "Two-Headed Dragon", true, ConditionFactory.checkTypes(DragonType.TwoHeaded, DragonSubType.Western, "Undead Two-Headed Dragon")),
    PortraitFactory.customPortrait('zombie-two-headed-eastern', "Two-Headed Eastern Dragon", true, ConditionFactory.checkTypes(DragonType.TwoHeaded, DragonSubType.Eastern, "Undead Two-Headed Eastern Dragon")),
    PortraitFactory.customPortrait('zombie-two-headed-lindwyrm', "Two-Headed Lindwyrm", true, ConditionFactory.checkTypes(DragonType.TwoHeaded, DragonSubType.Lindwyrm, "Undead Two-Headed Lindwyrm")),
    PortraitFactory.customPortrait('zombie-two-headed-sea-serpent', "Two-Headed Sea Serpent", true, ConditionFactory.checkTypes(DragonType.TwoHeaded, DragonSubType.SeaSerpent, "Undead Two-Headed Serpent")),

    PortraitFactory.customPortrait('zombie-pygmy', "Pygmy Dragon", true, ConditionFactory.checkTypes(DragonType.Pygmy, DragonSubType.Western, "Undead Pygmy Dragon")),
    PortraitFactory.customPortrait('zombie-pygmy-eastern', "Eastern Pygmy", true, ConditionFactory.checkTypes(DragonType.Pygmy, DragonSubType.Eastern, "Undead Eastern Pygmy")),
    PortraitFactory.customPortrait('zombie-pygmy-Lindwyrm', "Pygmy Lindwyrm", true, ConditionFactory.checkTypes(DragonType.Pygmy, DragonSubType.Lindwyrm, "Undead Pygmy Lindwyrm")),
    PortraitFactory.customPortrait('zombie-pygmy-wyrm', "Pygmy Wyrm", true, ConditionFactory.checkTypes(DragonType.Pygmy, DragonSubType.Wyrm, "Undead Pygmy Wyrm")),
    PortraitFactory.customPortrait('zombie-pygmy-wyvern', "Pygmy Wyvern", true, ConditionFactory.checkTypes(DragonType.Pygmy, DragonSubType.Wyvern, "Undead Pygmy Wyvern")),
]

export default zombiePortraits;