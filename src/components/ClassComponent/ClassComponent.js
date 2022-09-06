import './styles.css'
import { Component } from 'react';

class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            name: "porfa...",
        }
    }

    updateName = () => {
        this.setState({
            name: 'Te dije que no!'
        })
    }
    render(){
        return(
            <>
            <div onClick={this.updateName}>No clickear</div>
            <div>{this.state.name}</div>
            </>
        )
    }
}

export default ClassComponent;