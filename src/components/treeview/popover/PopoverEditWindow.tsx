import React from 'react';
import DVSelect from "./PopoverSelectMenu";
import './popover-edit-window.css';

import Tree from '../../../engine/library/Tree';
import DragonNode from '../../../engine/library/DragonNode';
import {Breeds} from '../../../engine/data/Model';

import Controller from '../../../engine/controller/Controller'

const breedData = Breeds.dict;

interface Props {
    tree: Tree,
    node: DragonNode,
    updateTree: Function
}
  
interface State {
    name: string,
    validateBreeds: boolean,
    validatePortraits: boolean
}

export default class EditWindow extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
  
        this.state = {
            name : this.props.node.name,
            validateBreeds : true,
            validatePortraits : true
        }

    }

    altImgPath = `${process.env.PUBLIC_URL} portraits/unknown_large.png`;

    getImgPath() : string {
        let path : string = `${process.env.PUBLIC_URL} portraits/`;
        if (this.props.node.portrait !== undefined)
            return path += this.props.node.portrait.imagePath;
        else
            return this.altImgPath;

    }

    getNameLabel() : string {
        return (this.props.node.name !== "") ? this.props.node.name : "Unnamed Dragon";
    }

    onImgError = (e:any)=> {
        e.target.onerror = null; 
        e.target.src="image_path_here"
    }

    
    typeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({name: e.target.value})
    }

    updateBreed = (breedId: string) => {
        this.props.updateTree(
            Controller.editWindow.updateBreed(this.props.node.index, breedId)
        );
    }

    updateName = () => {
        this.props.updateTree(
            Controller.editWindow.updateName(this.props.node.index, this.state.name)
        );
    }

    updatePortrait = (portraitId: string) => {
        this.props.updateTree(
            Controller.editWindow.updatePortrait(this.props.node.index, portraitId)
        );
    }

    createParents = () => {
        this.props.updateTree(
            Controller.editWindow.createParents(this.props.node.index)
        );
    }

    removeParents = () => {
        this.props.updateTree(
            Controller.editWindow.removeParents(this.props.node.index)
        );
    }

    render() {
        return (
            <div>
                <div className='popover-title'>
                    <h3>{this.getNameLabel()}</h3>
                </div>
                <div className='popover-body'>
                    <div className="grid-wrapper">
                        <div className="box a">
                            <img 
                                src={this.getImgPath()} 
                                alt={`${this.getNameLabel()}'s Portrait`} 
                            />
                        </div>
                        <div className="box b">
                            <div>
                                Name: <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.typeName}
                                    onBlur={this.updateName}
                                />
                                <div>Gender: {this.props.node.gender}</div>
                                <div>
                                    <DVSelect 
                                        selectionPool={breedData}
                                        currentSelection={this.props.node.breed}
                                        defaultLabel = {'Select Breed'}
                                        validationObject = {(this.state.validateBreeds) ? this.props.node : undefined}
                                        validationFactors = {[
                                            this.props.node.gender,
                                            ((this.props.node.father() !== undefined) ? this.props.node.father()!.breed : null),
                                            ((this.props.node.mother() !== undefined) ? this.props.node.mother()!.breed : null)
                                        ]}
                                        onChange={this.updateBreed}
                                    />
                                </div>
                                <div>
                                    <DVSelect 
                                        selectionPool={this.props.node.breed.portraits}
                                        currentSelection={this.props.node.portrait}
                                        defaultLabel = {'Select Portrait'}
                                        validationObject = {(this.state.validatePortraits) ? this.props.node : undefined}
                                        validationFactors = {[
                                            this.props.node.breed,
                                            this.props.node.gender,
                                            ((this.props.node.father() !== undefined) ? this.props.node.father()!.portrait : null),
                                            ((this.props.node.mother() !== undefined) ? this.props.node.mother()!.portrait : null)
                                        ]}
                                        onChange={this.updatePortrait}
                                    />
                                </div>
                            </div>
                            <div className="box c"></div>
                            <div className="box d">
                                <button 
                                    className="newParents"
                                    onClick={this.createParents}>
                                    Add Parents
                                </button>
                                <button 
                                    className="removeParents"
                                    onClick={this.removeParents}>
                                    Remove Parents
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}