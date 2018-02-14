import React from "react";

interface Hello1 { 
    compiler: string,
    framework: string,
};

// export interface HelloProps { compiler: string; framework: string; }

export default class Hello extends React.Component<Hello1> {
    render(){
        return (
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        );
    };
};
