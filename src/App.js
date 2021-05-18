// import './App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
import React from 'react';
import hornedDataApp from './components/hornedData.json';
import SelectedBeast from './components/SelectedBeast ';


class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      
        hornedData:hornedDataApp,
        SelectedBeastContentFromState:'hello from states and props'

    }
}

    changingStateDataFunction=()=>{

      this.setState=(
        {
          SelectedBeastContentFromState:this.state.SelectedBeastContentFromState+"yes i did changing data"
        }
      )
    }

 

  render(){
    return (
      <>
         <Header></Header>
         <Main hornedDataMain={this.state.hornedData} functionProp={this.changingStateDataFunction}></Main>
         <SelectedBeast SelectedBeastContent={this.state.SelectedBeastContentFromState}> </SelectedBeast>
         <Footer></Footer>
      </>
    
    )
    }
 
}

export default App;
