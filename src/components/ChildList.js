import React from 'react';

const ChildList = ({item}) => {
    return (  
        <div>
            <ul style={{listStyleType:"none", margin : "4px"}}>
                        {item.map((i)=>(
                            <button key={i.id} style={{margin :"3px"}} className="btn btn-success">
                                <li >{i.name}</li>
                            </button>    
                        ))}                          
            </ul> 
        </div>
    );
}
 
export default ChildList;
