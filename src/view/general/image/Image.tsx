import React from 'react';

import DragonNode from '../../../library/controller/DragonNode';
import ViewUtils from '../../_utilities/Utilities';
import Portrait from '../../../library/defines/Portrait';

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
                    `${ViewUtils.getImagePath(this.props.node, this.props.time, this.props.thumbnail)}` :
                    `${Portrait.unkThumbImgPath}`
                }
                alt = 'dragon'
                style = {{objectFit : `none`, display: `block`}}
                onError = {this.handleError}
            />
        );
    }
}