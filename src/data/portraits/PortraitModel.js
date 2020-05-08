export default class PortraitModel {
    constructor(id, name, isDefault, condition) {
        this.id = id || "undefined-portrait";
        this.name = name || "Undefined Portrait";
        this.imagePath = "art/" + this.id + ".png";
        this.thumbPath = "thumbs/" + this.id + ".png";
        this.isDefault = isDefault || true;
        this.condition = condition || function(dragonObject) {
            return true;
        }
    }
};