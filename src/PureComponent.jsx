import React, { Component , memo, PureComponent } from "react";

// class PureCompo extends PureComponent{

//     render(){
//         console.log("Pure Componnet");        
//         return(
//             <h2 className="text-center mt-4">
//                 {"PureComponent: " + this.props.name}
//             </h2>
//         )
//     }
// }

//روش 2 : کامپوننت نوع تابعی
const PureCompo = (props)=>{
    return(
        <h2 className="text-center mt-4">
            {"PureComponent: " + props.name}
        </h2>
    )
}

export default memo(PureCompo);