import React from 'react';

export enum DropEffect {
    All = 'all',
    Move = 'move',
    Copy = 'copy',
    Link = 'link',
    CopyOrMove = 'copyMove',
    CopyOrLink = 'copyLink',
    LinkOrMove = 'linkMove',
    None = 'none'
}

interface Props {
    onDrop: (dragData: string) => any
    dropEffect : DropEffect
}

interface State {}

export default class Droppable extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {}
    }

    dragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = this.props.dropEffect;
    }

    dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.dropEffect = this.props.dropEffect;
    }

    startDrop = (e: React.DragEvent<HTMLDivElement>) => {
        let data = e.dataTransfer.getData("drag-data");
        if (data != null) {
            this.props.onDrop(data);
        }
    }

    render () {
        return (
            <div className='drop-area' onDragOver={this.dragOver} onDragEnter={this.dragEnter} onDrop={this.startDrop}>
                {this.props.children}
            </div>
        );
    }
}