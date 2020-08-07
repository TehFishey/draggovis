import React from 'react';

import DragonNode from '../../../library/model/DragonNode';
import ViewUtils from '../../_utilities/ImageSwaps';
import Sprite from '../../../library/defines/Sprite';

import './image.css';

interface Props {
    node : DragonNode,
    time : string,
    thumbnail? : boolean
}

interface State {
    errored : boolean
}

export default class DragonImage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            errored : false
        }
    }

    handleError = () => {
        this.setState({errored : true})
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if(prevState.errored && this.state.errored)
            this.setState({errored : false});
    }

    render () {
        return (
            <img 
                className = 'dragon-image'
                src = { (!this.state.errored) ?
                    `${ViewUtils.getImgForNode(this.props.node, this.props.time, this.props.thumbnail)}` :
                    `${(this.props.thumbnail) ? Sprite.unkThumbImgPath : Sprite.unkLargeImgPath}`
                }
                alt = 'dragon'
                style = {{objectFit : `none`, display: `block`}}
                onError = {this.handleError}
            />
        );
    }
}