import React,{useState} from 'react';
// import List from './List';


const Cameras =(props)=>{
    const [cameras,setCameras]= useState([]);
    const [item,setItem]= useState([])
    const cameraBrands=()=>{
        setCameras([
            {model :"nikon", id: 1},
            {model :"canon", id: 2},
            {model :"sony", id:3},
        ])
    }
    const cameraVariants=(l)=>{
        if(l.model===l[0]){
            setItem([
                {name :"nikon1", id: "n1"},
                {name :"nikon2", id: "n2"},
                {name :"nikon3", id: "n3"},
            ])
        }
        else if((l.model!==l[0] || l.model===l[2]) ){
            setItem([
                {name:"canon1", id:"c1"},
                {name:"canon2", id:"c2"},
                {name:"canon3", id:"c3"},
            ])
        }
        else{
            setItem([
                {name:"sony1", id:"s1"},
                {name:"sony2", id:"s2"},
                {name:"sony3", id:"s3"},
            ])
        }
    }
    return(
        <div style={{textAlign:"left",margin: "6px", padding : "4px"}}>
            <button onClick={cameraBrands} className="btn btn-success">Cameras</button>
            {/* <List cameras={cameras} item={item} cameraVariants={cameraVariants}/>      */}

                <ul>
                    {cameras.map((c)=>(
                        <li style={{listStyleType: "none", margin : "10px"}} key={c.id}>
                            <button onClick={cameraVariants} className="btn btn-info">
                                {c.model}
                            </button>
                                <ul style={{listStyleType:"none", margin : "6px"}}>
                                        {item.map((i)=>(
                                            <button style={{margin :"3px"}} className="btn btn-success">
                                            <li key={i.id}>{i.name}</li>
                                            </button>    
                                        ))}                          
                                </ul>       
                        </li>
                    ))}
                </ul>     
        </div>
    )
}

export default Cameras;