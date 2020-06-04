export default class Portrait {
    constructor(id, label, isDefault, condition) {
        this.id = id || "undefined-portrait";
        this.label = label || "Undefined Portrait";
        this.imagePath = "art/" + this.id + ".png";
        this.thumbPath = "thumbs/" + this.id + ".png";
        this.isDefault = isDefault || true;
        this.validate = condition || function(dragon) {
            return true;
        }
    }
};