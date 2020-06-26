import React from 'react';
import './gen-counter.css';
import { SettingsConsumer } from '../../Settings';


interface Props {
    gens: number
}

interface State {
    show: boolean,
}

export default class GenerationCounter extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            show: true,
            
        }
    }

    buildGenCount() : JSX.Element {
        let out: Array<JSX.Element> = []
        
        for(let i = 1; i <= this.props.gens; i++) {
            out.push(<div className='gen-marker'> {i} </div>)
        }

        return(<div className='gen-counter'>{out}</div>);
    }

    render () {
        return (
            <SettingsConsumer>
                {value => { return (<>{(value.showGen) ? this.buildGenCount() : <div className='gen-counter'/>}</>)}}
            </SettingsConsumer>
        );
    }
}