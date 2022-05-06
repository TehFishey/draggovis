import Model from "../model/Model";
import DragDropOperator from "./operators/DragDropOperator";
import EditPanelOperator from "./operators/EditPanelOperator";
import ImportPanelOperator from "./operators/ImportPanelOperator";
import TemplatePanelOperator from "./operators/TemplatePanelOperator";
import Templates from "./_Templates";

export default class Controller {
    readonly target : Model;
    readonly templates : Templates
    readonly dragDrop : DragDropOperator;
    readonly editPanel : EditPanelOperator;
    readonly importPanel : ImportPanelOperator;
    readonly templatePanel : TemplatePanelOperator;
    
    constructor(target : Model) {
        this.target = target;
        this.templates = new Templates();
        
        this.dragDrop = new DragDropOperator(target);
        this.editPanel = new EditPanelOperator(target);
        this.importPanel = new ImportPanelOperator(target);
        this.templatePanel = new TemplatePanelOperator(target);
    }
}