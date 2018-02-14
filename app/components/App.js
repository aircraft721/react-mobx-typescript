import React, {Component} from 'react';
import Hello from './Hello.tsx';
import Mob from './Mob';

export default class App extends Component {
    render(){
        return (
            <div>
                <p>Test</p>
                <Hello compiler="typescript213" framework="react" />
                <Mob />
            </div>
        )
    }
}