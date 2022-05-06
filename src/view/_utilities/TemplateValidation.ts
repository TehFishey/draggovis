import Breed from "../../library/defines/Breed";
import HybridBreeds from "../../defines/breeds/HybridBreeds";
import Sprite from "../../library/defines/Sprite";
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

    /**
     * Returns filtered set of menu options for a react-select menu, with each entry corresponding
     * to a validated Breed object from Defines. If gender is defined, returns only breeds that are always
     * valid for that gender. If validation is false, returns all breed objects.
     * @param ids Set of valid Sprite Ids for select menu. Defaults to all.
     * @param pool Pool to select Sprites from. Defaults to Sprites.dict.
     */
    setBreedOptions(gender?: Gender, validate: boolean=true) : Array<menuOption> {
        let validBreedIds: Array<string> = [];

        [...Breeds.dict.keys()].forEach((breedId: string) => {
            if(!validate)
                validBreedIds.push(breedId);
            
            else if (!this.isGenLocked(breedId) && (
                    (gender === Gender.Male && this.canBeMale(Breeds.dict.get(breedId)!)) ||
                    (gender === Gender.Female && this.canBeFemale(Breeds.dict.get(breedId)!)) ||
                    ((gender === undefined) && (this.canBeMale(Breeds.dict.get(breedId)!)) && (this.canBeFemale(Breeds.dict.get(breedId)!))))
                )
                validBreedIds.push(breedId);
        });

        return MenuOptions.breedOptions(validBreedIds);
    },

    /**
     * Returns filtered set of menu options for a react-select menu, with each entry corresponding
     * to a sprite associated with the given breed. If gender is defined, returns only sprites that are
     * valid for that gender. If validation is false, returns all sprites associated with breed.
     * @param ids Set of valid Sprite Ids for select menu. Defaults to all.
     * @param pool Pool to select Sprites from. Defaults to Sprites.dict.
     */
    setSpriteOptions(breed: Breed, gender?: Gender, validate: boolean=true) : Array<menuOption> {
        let validSpriteIds: Array<string> = [];
        let pool: Map<string, Sprite> = breed.sprites;

        [...pool.keys()].forEach((spriteId: string) => {
            if(!validate) validSpriteIds.push(spriteId);

            else if (this.isDefault(pool.get(spriteId)!) && (
                    (gender === Gender.Male && this.canBeMale(pool.get(spriteId)!)) ||
                    (gender === Gender.Female && this.canBeFemale(pool.get(spriteId)!)) ||
                    (gender === undefined))
                )
                validSpriteIds.push(spriteId);
        });

        if (gender === undefined) return MenuOptions.spritePairOptions(validSpriteIds);
        return MenuOptions.spriteOptions(validSpriteIds, pool);
    },

    /**
     * Checks if a breed or dimorphic sprite is valid for female dragons. 
     * @param item breed or sprite to check.
     */
    canBeFemale(item: Breed | Sprite) : boolean {
        if(item instanceof Breed)
            return (item.genders.split('-')[0].includes('f') && item.genders.split('-')[1].includes('f'));
        else
            return !(item.id.slice(-2).includes('-m'));
    },
    
    /**
     * Checks if a breed or dimorphic sprite is valid for male dragons. 
     * @param item breed or sprite to check.
     */
    canBeMale(item: Breed | Sprite) : boolean {
        if(item instanceof Breed)
            return (item.genders.split('-')[0].includes('m') && item.genders.split('-')[1].includes('m'));
        else
            return !(item.id.slice(-2).includes('-f'));
    },

    /**
     * Checks if a breed can exist for all generations.
     * @param breedId id of breed to check.
     */
    isGenLocked(breedId: string) : boolean {
        return (genLockedBreeds.includes(breedId))
    },

    /**
     * Checks if a sprite is a default selection option.
     * @param sprite sprite to check.
     */
    isDefault(sprite: Sprite) : boolean {
        return(sprite.isDefault)
    }
}