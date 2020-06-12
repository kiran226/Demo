import React,{useState} from 'react';

const TVs =(props)=>{
    const [tvs,setTvs]=useState([]);
    const [item,setItem]= useState([])
    const handleTV=()=>{
        setTvs([
            {model :"Samsung", id: 1},
            {model :"LG", id: 2},
            {model :"VU", id:3},
        ])
    }
    const handleT=(l)=>{
        if(l.model===l[0]){
            setItem([
                {name :"samsung1", id: "s1"},
                {name :"samsung2", id: "s2"},
                {name :"samsung3", id: "s3"},
            ])
        }
        else if((l.model!==l[0] || l.model===l[2]) ){
            setItem([
                {name:"lg1", id:"l1"},
                {name:"lg2", id:"l2"},
                {name:"lg3", id:"l3"},
            ])
        }
        else{
            setItem([
                {name:"vu1", id:"v"},
                {name:"vu2", id:"v2"},
                {name:"vu3", id:"v3"},
            ])
        }
    }

    return(
        <div style={{textAlign:"left",margin: "6px", padding : "4px"}}>
            <button onClick={handleTV} className="btn btn-success">TVs</button>
                <ul>
                    {tvs.map((c)=>(
                        <li style={{listStyleType: "none", margin : "10px"}} key={c.id}>
                            <button onClick={handleT} className="btn btn-info">
                                {c.model}
                            </button>
                                <ul style={{listStyleType:"none", margin : "6px"}}>
                                        {item.map((t)=>(
                                            <button style={{margin :"3px"}} className="btn btn-success">
                                            <li key={t.id}>{t.name}</li>
                                            </button>    
                                        ))}                          
                                </ul>       
                        </li>
                    ))}
                </ul>      
        </div>
    )
}

export default TVs;