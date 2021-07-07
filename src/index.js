import React from 'react';
        import ReactDOM from 'react-dom';
        import Sdata from './Sdata';
        import './index.css'
        import App from './App';
        console.log(Sdata[0]);
       
        // function ncard(val){

        //     return (
        //         <Card 
        //         imgsrc= {val.imgsrc}
        //         title= {val.title}
        //         sname={val.sname}
        //         link={val.link}
        //         />

        //     );
        

        ReactDOM.render(<App/>, document.getElementById('root')
         );
