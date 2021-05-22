import React from 'react';
import HornedBeasts from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import hornedDataApp from './hornedData.json';

class Main extends React.Component {

   constructor(props){
       super(props);

       this.state={
        //    hornes:'All',
           filteredDataJSON:hornedDataApp,
       }
       
   }

    prop1Function = (selectedData, selectedData2, selectedData3) => {
        this.props.functionProp(selectedData, selectedData2, selectedData3);


    }
    
    changeRenederedData=(event)=>{
    //    event.preventDefault();

    //    this.setState({
    //       hornes:event.target.value,
    //    });
        let hornes=event.target.value;
       console.log('event.target.value', event.target.value);
    //    console.log('this.state.hornes',this.state.hornes);

       let newArr=this.props.hornedDataMain.filter(n=>{
           if (hornes=='All') {
               return n
           }else if (hornes==n.horns) {
            console.log('filteredDataJSON from if',this.state.filteredDataJSON);
               return n;
           } 
       });
       this.setState({
        filteredDataJSON:newArr,
     });
     console.log('filteredDataJSON from func',this.state.filteredDataJSON);
      console.log('newArr',newArr);
    }

     


    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Hornes Number</Form.Label>
                        <Form.Control as="select" name="hornes" onChange={this.changeRenederedData} >
                            <option value='All'>All</option>
                            <option value='1' >1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>wow</option>
                            </Form.Control>
                    </Form.Group>

                
                </Form>

                    <CardColumns>
                        {
                            this.state.filteredDataJSON.map(item => {
                                return (
                                    <>

                                        <HornedBeasts
                                            title={item.title}
                                            imgSrc={item.image_url}
                                            description={item.description}
                                            prop2Function={() => this.prop1Function(item.title, item.image_url, item.description)} />



                                    </>
                                )
                            })
                        }
                    </CardColumns>
            </>

        )
    }

}

export default Main;