import React from "react";

class Homework1 extends React.Component {
    constructor(props) {
        console.log(props)
        super();
        this.state = {
            s1: props.p1
        }
        this.s2 = 201;
    }

    componentDidMount() {
        let out1 = this.state.s1;
        out1 += 5;
        this.setState({ s1: out1 })

        let out2 = this.s2;
        out2 += 5;
        this.s2 = out2;
    }


    buttonHandler = () => {
        let out1 = this.state.s1;
        out1 += 50;
        this.setState({ s1: out1 })

        let out2 = this.s2;
        out2 += 50;
        this.s2 = out2;
    }

    render() {
        return (
            <>
                <button onClick={this.buttonHandler}>push</button>
                <div>{this.state.s1}</div>
                <div>{this.s2}</div>
            </>
        )
    }
}

export default Homework1;