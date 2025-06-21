import React,{useState, useCallback} from 'react'

function Card({id , name , info , imageUrl , price, removeCard}){

    const[readmore , setReadmore] = useState(true);

    const description = readmore ? info : `${info.substring(0 , 200)}....`;
                        //   readmore ? info

    function readHandler(){
        setReadmore(!readmore)
    }

    

    return(
        <div className="card">
            <img src={imageUrl} className="image" alt=""></img>
            <div className="tour-details">
                <h4 className="tour-name">{name}</h4>
                <h4 className="tour-price">{price}</h4>
            </div>

            <div className="description">{description}

                <span className='read-more' onClick={readHandler}>
                    {readmore ? `Show Less`: `Read More`}</span>
            </div>


            <button className="btn-red bg-black text-white" onClick={() => removeCard(id)}>
                Not Interested
            </button>


        </div>
    );
}


export default Card