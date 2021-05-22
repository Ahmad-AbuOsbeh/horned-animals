// import './App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
import React from 'react';
import hornedDataApp from './components/hornedData.json';
import SelectedBeast from './components/SelectedBeast ';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      
        hornedData:hornedDataApp,
        SelectedBeastContentFromState: '',
        SelectedBeastContentFromState2: '',
        SelectedBeastContentFromState3: '',
        show:false



    }
}
// modalShowFunction=()=>{
         
// }
handleClose = () => {
  this.setState({ show: false })
}

    changingStateDataFunction=(selectedData,selectedData2,selectedData3)=>{

    //  let newArr= HornedBeasts.find(element=> element.horns===2)

      this.setState(
        {
          SelectedBeastContentFromState: selectedData,
          SelectedBeastContentFromState2:selectedData2,
          SelectedBeastContentFromState3:selectedData3,
          show:true
        }
      )
      // this.modalShowFunction()
      

    }


 

  render(){
    return (
      <>
         <Header></Header>
         <Main hornedDataMain={this.state.hornedData} functionProp={this.changingStateDataFunction} ></Main>
         
         <SelectedBeast SelectedBeastContent={this.state.SelectedBeastContentFromState} SelectedBeastContent2={this.state.SelectedBeastContentFromState2} SelectedBeastContent3={this.state.SelectedBeastContentFromState3} modalShowFunction={this.state.show} handleClose={this.handleClose} > </SelectedBeast>
         <Footer></Footer>
      </>
    
    )
    }
 
}

export default App;
