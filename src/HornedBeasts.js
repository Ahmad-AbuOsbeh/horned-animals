import React from 'react';

class HornedBeasts extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgSrc} alt={this.props.imgAlt} title={this.props.imgTitle}></img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts;