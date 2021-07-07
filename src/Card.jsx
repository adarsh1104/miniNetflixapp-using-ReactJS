import React from 'react';
import Image from './Image';

function Card(Props)
        {
            // console.log(Props);
              return (<div className= "cards">
                <div className="card">
                     {/* <img src={Props.imgsrc} alt="mypic" className="card_img"></img> */}
                     <Image imgsrc={Props.imgsrc}></Image>


                <div className="card__info">
                    <span className="card__category"> {Props.title}</span>
                    <h3 className="card__title"> {Props.sname}</h3>
                    <a href={Props.link} target="_blank">
                    <button> Watch Now</button>
                    </a>
                    
                </div>

                </div>
                </div>);

                
        }

        export default Card;
