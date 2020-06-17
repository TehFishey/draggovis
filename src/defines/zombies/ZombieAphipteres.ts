import Portrait from "../../library/Portrait";

let zombieAphipteres = new Map<String,Portrait>();
let portrait = new Portrait('zombie-amphiptere', "Amphiptere", false);

let aphipteres: Array<string> = [
    "aeria-gloris-dragon",
    "garland-dragon",
    "lacula-dragon",
    "skywing-dragon",
    "sunsong-amphiptere",
    "two-finned bluna",
    "wintertide-dragon"
]

aphipteres.forEach((breedId: string)=>{
    zombieAphipteres.set(breedId, portrait);
})

export {zombieAphipteres as zAphipteres, portrait as zAphipterePortrait};

