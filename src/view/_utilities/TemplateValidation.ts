import Breed from "../../library/defines/Breed";
import HybridBreeds from "../../defines/breeds/HybridBreeds";
import Portrait from "../../library/defines/Portrait";
import { Gender } from "../../library/defines/Dragon";
import { menuOption } from "../general/select/Select";
import { Breeds } from "../../defines/Defines";

import MenuOptions from "./MenuOptions";

const genLockedBreeds: Array<string> = HybridBreeds.map((breed: Breed) => {return breed.id}).concat('guardian-of-nature');

/**
 * Helper functions intended for use by React components. Manage input validation for 
 * hypothetical Dragon objects, which do not have associated DragonNodes (and thus cannot 
 * be checked against standard validation functions.).
 */
export default {

    setBreedOptions(gender?: Gender, validate: boolean=true) : Array<menuOption> {
        let validBreedIds: Array<string> = [];

        [...Breeds.dict.keys()].forEach((breedId: string) => {
            if(!validate)
                validBreedIds.push(breedId);
            
            else if (!this.isGenLocked(breedId) && (
                gender === Gender.Male && this.canBeMale(Breeds.dict.get(breedId)!) ||
                gender === Gender.Female && this.canBeFemale(Breeds.dict.get(breedId)!) ||
                (gender === undefined) && (this.canBeMale(Breeds.dict.get(breedId)!)) && (this.canBeFemale(Breeds.dict.get(breedId)!))))
                validBreedIds.push(breedId);
        });

        return MenuOptions.breedOptions(validBreedIds);
    },

    setPortraitOptions(breed: Breed, gender?: Gender, validate: boolean=true) : Array<menuOption> {
        let validPortraitIds: Array<string> = [];
        let pool: Map<string, Portrait> = breed.portraits;

        [...pool.keys()].forEach((portraitId: string) => {
            if(!validate) validPortraitIds.push(portraitId);

            else if (this.isDefault(pool.get(portraitId)!) && (
                gender === Gender.Male && this.canBeMale(pool.get(portraitId)!) ||
                gender === Gender.Female && this.canBeFemale(pool.get(portraitId)!) ||
                gender === undefined))
                validPortraitIds.push(portraitId);
        });

        if (gender === undefined) return MenuOptions.portraitPairOptions(validPortraitIds);
        return MenuOptions.portraitOptions(validPortraitIds, pool);
    },

    canBeFemale(item: Breed | Portrait) : boolean {
        if(item instanceof Breed)
            return (item.genders.split('-')[0].includes('f') && item.genders.split('-')[1].includes('f'));
        else
            return !(item.id.slice(-2).includes('-m'));
    },
    
    canBeMale(item: Breed | Portrait) : boolean {
        if(item instanceof Breed)
            return (item.genders.split('-')[0].includes('m') && item.genders.split('-')[1].includes('m'));
        else
            return !(item.id.slice(-2).includes('-f'));
    },

    isGenLocked(breedId: string) : boolean {
        return (genLockedBreeds.includes(breedId))
    },

    isDefault(portrait: Portrait) : boolean {
        return(portrait.isDefault)
    }
}