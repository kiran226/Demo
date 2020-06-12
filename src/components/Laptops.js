import React, { useState } from 'react';
import List from './List';

const Laptops =(props)=>{
    const [laptops,setLaptops] = useState([]);
    const [item,setItem]= useState([]);

    const laptopBrands=()=>{
        setLaptops([
            {model :"dell", id: 1},
            {model :"asus", id: 2},
            {model :"hp", id:3}
        ])
    }

    const laptopVariants=(l)=>{
        if(l.model===l[0]){
            setItem([
                {name :"dell1", id: "d1"},
                {name :"dell2", id: "d2"},
                {name :"dell3", id: "d3"}
            ])
        }
         if(l.model!==l[0] && l.model!==l[2]){
            setItem([
                {name:"asus1", id:"a1"},
                {name:"asus2", id:"a2"},
                {name:"asus3", id:"a3"}
            ])
        }
        else if(l.model!==l[0] && l.model!==l[1] ){
            setItem([
                {name:"hp1", id:"h1"},
                {name:"hp2", id:"h2"},
                {name:"hp3", id:"h3"}
            ])
        }
    }

    return(
        <div style={{textAlign:"left",margin: "2px", padding : "4px"}}>
            <button onClick={laptopBrands} className="btn btn-success">Laptops</button>
            <List laptops={laptops} item={item} laptopVariants={laptopVariants}/>     
        </div>
    )
}
export default Laptops;
