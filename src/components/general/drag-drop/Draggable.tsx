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
    dragData: string
    dropEffect: DropEffect
}

interface State {}

export default class Draggable extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {}
    }

    startDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("drag-data", this.props.dragData)
        e.dataTransfer.effectAllowed = this.props.dropEffect;
    }

    render () {
        return (
            <div className='drag-area' draggable onDragStart={this.startDrag}>
                {this.props.children}
            </div>
        );
    }
}