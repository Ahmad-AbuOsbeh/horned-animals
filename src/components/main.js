import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornedData from './hornedData.json';

class Main extends React.Component{
    render(){
        return(
           <>
           {
               hornedData.map(item=>{
                   return(
                       <HornedBeasts 
                       title={item.title}
                       imgSrc={item.image_url}
                       description={item.description}

                       />
                   )
               })
           }
           </>  
          
        )
    }
}

export default Main;