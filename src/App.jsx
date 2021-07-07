import React from 'react';
        import Card from './Card';
        import Sdata from './Sdata';

        const App = ()=>(
            <>

                <h1 className='heading_style'> List of My 6 favourite Netflix Series  </h1>
                
                
              {/* {Sdata.map(ncard())}; */}
              {/* {Sdata.map(function ncard(val){
                return (
                 <Card 
                 imgsrc= {val.imgsrc}
                 title= {val.title}
                 sname={val.sname}
                 link={val.link}
                 />
                ); */}


              {/* })}; */}

                 {Sdata.map((val,index)=>{
                 console.log(index);
                 return (
                  <Card 
                  key={val.id}
                  imgsrc= {val.imgsrc}
                  title= {val.title}
                  sname={val.sname}
                  link={val.link}
                  />
                 );


               })};
              
             </>
        );

        export default App;