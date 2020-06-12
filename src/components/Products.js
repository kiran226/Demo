import React,{Component} from 'react'
import Laptops from './Laptops';
import Cameras from './Cameras';
import TVs from './TVs';

 class Products extends Component{
     constructor(props) {
         super(props)
         this.state = {
              show : false
         }
     }
     showProducts=()=>{
         this.setState({
             show :! this.state.show
         })
     }
     render(){
         return(
                <div style={{textAlign:"left"}}>
                        <button onClick={this.showProducts} 
                            className="btn text-black" style={{backgroundColor:"lightblue", padding:"8px", margin :"10px"}} >
                                Products    
                        </button> 
                    { this.state.show
                        &&  
                     <section>
                        <Laptops />
                        <Cameras/>
                        <TVs/>
                       
                    </section> 
                    }   
                </div> 
         )
     }   
 }  
export default Products;

