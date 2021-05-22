import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
            
        }
    }

    favouriteCounter = () => {
        this.setState(
            {
                counter: this.state.counter + 1
            }
        )
    }

    prop3Function=()=>{
        this.props.prop2Function();
        
    }

    render() {
        return (
            <div>
                {/* <h2>{this.props.title}</h2>
                <img onClick={this.favouriteCounter} src={this.props.imgSrc} alt={this.props.imgAlt} title={this.props.imgTitle}></img>
                <p>{this.props.description}</p>
                <p>favourit❤️:{this.state.counter}</p> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                        <Card.Img onClick={this.favouriteCounter}  src={this.props.imgSrc}/>
                        <Card.Text>
                        {this.props.description}
                         </Card.Text>
                         <Card.Text>
                         favourit❤️:{this.state.counter}
                         </Card.Text>
                         <Button onClick={this.prop3Function}  variant="primary">VOTE </Button>
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>


            </div>
        )
    }
}

export default HornedBeasts;