import React from "react";
import Data from "./data.json";
import ReactDOM from "react-dom";

const Datadisplay = ()=>{
    return(
        <div>
            {Data.map(post => (
                <div>
                    <h1>{post.id}</h1>
                    <h1>{post.Name}</h1>
                    <h1>{post.title}</h1>
                    <h1>{post.Salary}</h1>
                    <img src={post.img}></img>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}
export default Datadisplay



// const Datadisplay = () => {
//     return (
//         <div>
//             {Data.map(post => (
//                 <div>
//                     <h1>{post.id}</h1>
//                     <h1>{post.Name}</h1>
//                     <h1>{post.title}</h1>
//                     <h1>{post.Salary}</h1>
//                     <img src={post.img}></img>
//                     <hr></hr>
//                 </div>

//             ))}
//         </div>
//     );
// }

// export default Datadisplay