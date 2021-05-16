import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component{
    render(){
        return(
            <main>
                <section>
                    <HornedBeasts title={'UniWhal'}></HornedBeasts>
                    <HornedBeasts imgSrc={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} imgAlt={'alt name1'} imgTitle={' image title1'}></HornedBeasts>
                    <HornedBeasts description={'A unicorn and a narwhal nuzzling their horns'}></HornedBeasts>
                </section>
            
                <section>
                    <HornedBeasts title={'Rhino Family'}></HornedBeasts>
                    <HornedBeasts imgSrc={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'} imgAlt={'alt name2'} imgTitle={' image title2'}></HornedBeasts>
                    <HornedBeasts description={'Mother (or father) rhino with two babies'}></HornedBeasts>
                </section>
            
            </main>
                
            
              
            
          
        )
    }
}

export default Main;