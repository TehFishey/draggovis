export default class MetaData {
    invalidData: boolean;
    warnings: Map<string, string>;


    constructor() {
        this.invalidData = false;
        this.warnings = new Map<string,string>();
    }
};