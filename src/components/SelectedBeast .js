import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import HornedBeasts from './HornedBeasts';



class SelectedBeast extends React.Component {



    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         show:this.props.modalShowFunction
    //     }

    // }
    // handlemodal = () => {
        
    //     this.setState({ show: true })


    // }


    // handlemodal()

    // handleClose = () => {
    //     this.setState({ show: false })
    // }

    render(){
        //    <HornedBeasts controllingShowModal={this.handlemodal}></HornedBeasts>
        return (
            <>

               

                {/* <Button variant="primary" onClick={this.handlemodal}>
                    Launch modal
                </Button> */}
                <Modal show={this.props.modalShowFunction}>

                    <Modal.Header>
                        {this.props.SelectedBeastContent}
                    </Modal.Header>
                    {/* <Modal.Img src={this.props.SelectedBeastContent2} alt=''></Modal.Img> */}
                    <Modal.Body>
                        <img src={this.props.SelectedBeastContent2} alt='' style={{width:"450px", height:"400px"}}></img>
                    </Modal.Body>

                    <Modal.Footer>
                        {this.props.SelectedBeastContent3}

                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>
                
            </>
        )

    }
}








//     render() {
//         return (
//             <>

//                 <p>{this.props.SelectedBeastContent}</p>
//                 <img src={this.props.SelectedBeastContent2} alt='' />
//                 <p>{this.props.SelectedBeastContent3}</p>




//     }
// }

export default SelectedBeast;