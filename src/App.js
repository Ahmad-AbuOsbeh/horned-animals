// import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer.js';
import React from 'react';

class App extends React.Component{
  render(){
    return (
      <body>
         <Header></Header>
         <Main></Main>
         <Footer></Footer>
      </body>
    
    )
    }
 
}

export default App;
