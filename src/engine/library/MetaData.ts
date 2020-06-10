export default class MetaData {
    updated: boolean;
    failedValidation: boolean;
    validationWarning: Array<string>;


    constructor() {
        this.updated = true;
        this.failedValidation = false;
        this.validationWarning = [];
    }
};