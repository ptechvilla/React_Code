import react from 'react'
import { Route, Switch} from "react-router-dom";
import Time from './clock'
import Hooks from './Hooks'


function Routing(){
    return (
        <>
         {/* <h1 style={{color:"green" , fontSize:"100px",fontFamily:"Times new roman",textShadow:"5px 5px 5px red", textAlign:"center", marginTop:"200px"}}>Prashant Sahu</h1>  */}
          
          <Switch>
               <Route exact path="/"  component={Time}/>
               <Route exact path="/hooks" component={Hooks} />

          </Switch>
        
        </>
    );
}
export default Routing;