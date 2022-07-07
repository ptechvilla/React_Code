// // import Msg from './home';
import './index.css';
import React from 'react';

// import { useState } from 'react';
// // import './App.css';
// //import Info from './Info';

// function Navbar() {
//   return (
//     <>
//       <div class="nav">
//         <ul>
//           <li>home</li>
//           <li>about</li>
//           <li>info</li>
//           <li>Contact</li>
//           <li>Help</li>
//         </ul>
//       </div>
//     </>
//   );
// }



// function Time() {
//   let time = new Date().toLocaleTimeString();

//   const[ctime, settime] = useState(time);

//  let updatetime=()=> {
//   let time = new Date().toLocaleTimeString();
//     settime(time);
//   }

//   setInterval(updatetime, 1000);

//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2 style={{color:"red"}}>It is {ctime}.</h2>
//     </div>
//   );
// }



// export { Navbar, Time };


//   //export default App;



//import Info from './info';
//import Star from './ustar';
//import Demo from './component/demo';
//import Parent from './component/parent';
//import Lists from './component/listrendering';
//import Style from './component/styles';
//import Starcount from './component/ustar';
//import Icons from './component/Icons';
//import Forms from './component/Forms';
//import Hooks from './component/Hooks'
//import Header from'./components/Header'
//import AddContact from './components/AddContact'
//import ContactCard from './components/ContactCard'
//import ContactList from './components/ContactList'
//import Pokeman from './component/pokeman'
import News from './component/news'


function App(){
  return (
    <>
   {/* <Demo/>
   <Lists/> */}
   {/* <Parent/> */}
   {/* <Style/> */}
   {/* <Starcount/> */}
   {/* <Icons/> */}
   {/* <Forms /> */}
       {/* <Hooks /> */}
       {/* <Header/>
       <AddContact/> */}
       {/* <ContactCard/>
       <ContactList/> */}
       {/* <Pokeman/> */}
       <News/>

    </>
  );
}

export default App;
