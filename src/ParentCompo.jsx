import React, { Component, createRef, PureComponent } from "react";
import PureCompo from "./PureComponent";
import Fcomponent from "./Fcomponent";

class ParentCompo extends Component {

    constructor(){
        super()
        // this.componnentRef = createRef();
        this.myInput = createRef();
    }

    componentDidMount(){
        this.myInput.current.focus();
    }


    // handleChangeCompoName =()=>{
    //     this.componnentRef.current.handleChangeName();
    // }

//    constructor(){
//     super()
//     this.state={
//         name : "Mohammad"
//     }
//    }
//    componentDidMount(){
//     setInterval(() => {
//         this.setState({
//             name : "Mohammad"+new Date()
//         })
//     }, 1000);
//    }
   render(){
    // console.log("----------parent-----------");
    // console.log(this.componnentRef);
    
    return(
        <div>
            {/* روش 1: برای کامپوننت نوع کلاسی روش زیر می باشد */}
            {/* <PureCompo name={this.state.name}/> */}
            {/* <PureCompo ref={this.componnentRef}/> */}
            {/* <button className="btn btn-info" onClick={this.handleChangeCompoName}>Test</button> */}
            <Fcomponent ref={this.myInput}/>            
        </div>
    )
   }
    
}

export default ParentCompo;
