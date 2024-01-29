import { Component } from "react";

class Image extends Component {
    render() {
        console.log("la source è:", this.props.Source, "la descrizione è:", this.props.Alt)
        return <img src={this.props.Source} alt={this.props.Alt} />
    }
}
export default Image