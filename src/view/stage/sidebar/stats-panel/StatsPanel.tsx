import React from 'react';
import Tree from '../../../../library/model/Tree';
import DragonNode from '../../../../library/model/DragonNode';

import './stats-panel.css';

interface Props {
    tree : Tree
}

interface State {
    total : number,
    caveborn : number,
    tBreeds : Map<string, number>,
    cbBreeds : Map<string, number>
}

export default class StatsPanel extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            total : 0,
            caveborn : 0,
            tBreeds : new Map(),
            cbBreeds : new Map()
        }
    }

    calcLineageStats() {
        let total : number = 0;
        let caveborn : number = 0;
        let tBreeds : Map<string, number> = new Map();
        let cbBreeds : Map<string, number> = new Map();

        this.props.tree.forEach((n: DragonNode | null) => {
            if(n != null) {
                total += 1;
                if(tBreeds.has(n.breed.label)) tBreeds.set(n.breed.label, tBreeds.get(n.breed.label)!+1)
                else tBreeds.set(n.breed.label, 1);
                if(!n.hasParents()) {
                    caveborn += 1;
                    if(cbBreeds.has(n.breed.label)) cbBreeds.set(n.breed.label, cbBreeds.get(n.breed.label)!+1)
                    else cbBreeds.set(n.breed.label, 1);
                }
            }
        });

        this.setState({
            total : total,
            caveborn : caveborn,
            tBreeds : tBreeds,
            cbBreeds : cbBreeds
        })
    }

    displayLineageStats() : JSX.Element {
        let out: Array<JSX.Element> = [];

        out.push();
        this.state.tBreeds.forEach((count: number, key: string) => {
            let cbCount : number = (this.state.cbBreeds.has(key)) ? this.state.cbBreeds.get(key)! : 0;

            out.push(<div>{key}s: {count}<br/>Caveborn: {cbCount}</div>);
        })

        return(<div className='stats-breeds'>{out}</div>);
    }

    componentDidMount() {
        this.calcLineageStats();
    }

    render () {
        return (
            <div className='stats-panel'>
                <div className='modal-title'>Lineage Contents</div>
                <label>Total Dragons: {this.state.total}</label>
                <label>Caveborn Dragons: {this.state.caveborn}</label>
                {this.displayLineageStats()}
            </div>
        );
    }
}