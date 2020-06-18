import Portrait from "../../library/defines/Portrait";

let zombieDrakes = new Map<String,Portrait>();
let portrait = new Portrait('zombie-drake', "Drake", false);

let drakes: Array<string> = [
    "day-glory-drake",
    "glaucus-drake",
    "greater-spotted-drake",
    "howler-drake",
    "morphodrake",
    "night-glory-drake",
    "ochredrake",
    "tarantula-hawk-drake",
    "tatterdrake",
    "vremya-drake"
]

drakes.forEach((breedId: string)=>{
    zombieDrakes.set(breedId, portrait);
})

export {zombieDrakes as zDrakes, portrait as zDrakePortrait};

