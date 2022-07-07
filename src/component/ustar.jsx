// import React, { StrictMode } from "react";

// function Starcount() {
//     let arr = [3,2,3,3,4,2,5];
//     let len = arr.length;
//     let sum = 0;
//     let a = [];
//     for (let i = 0; i < len; i++) {
//         sum = sum + arr[i];
//     }

//     a = arr.map((val) => {
//         return val + ",";
//     })

//     let average = sum / len;

//     var str = "";
//     for (let j = 1; j <= average; j++) {
//         str = str + "*";
//     }
//     if (!Number.isInteger(average)) {
//      str=str+"-";   
//     }

   
//         return (
//             <>


//                 <p> the rating of {len} employee is : {a}</p>
//                 <p>the average star rating of {len} employee is: {average}</p>

//                 <h2 style={{color:"red"}}>Rating of Star<br />{str}</h2>
//             </>

//         );
// }
// export default Starcount;