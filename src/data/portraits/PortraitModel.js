export default class PortraitModel {
    constructor(portraitId, breedId, imagePath, isDefault, condition) {
        this.portraitId = portraitId || "undefined-portrait";
        this.breedId = breedId || "undefined-breed";
        this.imagePath = imagePath || "undefined-path";
        this.isDefault = isDefault || true;
        this.condition = condition || function(dragonObject) {
            return true;
        }
    }
};