import { Component } from "react";
import Input from "react-bootstrap/form";
import "./screen.css";

//const Screen = ({ value }) => {
class Screen extends Component {

    updateInput(event){
        this.setState({inputValue : event.target.value});
        console.log('update: ' + this.state.inputValue);
    }

    render() {
        const { onChange } = this.props;
        return (
    
            <input 
                className="screen"
                id={this.props.id}
                onChange={onChange}
            />
        );
    }
}

export default Screen;