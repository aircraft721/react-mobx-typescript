import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Mob extends React.Component {
    @observable count = 0;

    handleInc = () => {
        this.count++;
    };

    handleDec = () => {
        this.count--;
    };

    render(){
        return (
            <div>
                Counter: { this.count } <br />
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDec}>-</button>
            </div>
        );
    }
}

export default Mob;