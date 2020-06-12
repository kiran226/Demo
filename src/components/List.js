import React from 'react'
import ChildList from './ChildList'

const List=({laptops,item,laptopVariants})=> {
    return (
        <div>
            <ul>
                {laptops.map((l)=>(
                    <li style={{listStyleType: "none", margin : "10px"}} >
                        <button onClick={laptopVariants} className="btn btn-info" key={l.id}>
                            {l.model}
                        </button>
                        <ChildList item={item}/> 
                    </li>         
                    ))}                  
            </ul>
        </div>
    )
}

export default List