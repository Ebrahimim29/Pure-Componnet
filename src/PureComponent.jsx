import React, { createRef, PureComponent } from "react";

class PureCompo extends PureComponent{

    constructor(){
        super()
        this.state ={
            name: ""
        }
        this.counter = 0
        this.myInput=createRef()
    }
    
    handleChangeName =()=>{
        this.setState({
            // name : document.getElementById('myInput').value
            name : this.myInput.current.value
        })
    }

    componentDidMount(){
        this.myInput.current.focus()
        //به صورت خودکار بعد از رفرش کردن ، آماده تایپ در باکس می باشد
    }

    render(){
        // console.log("Pure Componnet"); 
        console.log(this.myInput);
               
        return(
            <div className="form-fa-group text-center mt-4 p-3">
                <h4 className="text-center text-dark">حدث کلمه</h4>
                {/* <input id="myInput" type="text" className="form-control"  */}
                <input ref={this.myInput} type="text" className="form-control" 
                autoComplete="off" />
                <button className="btn btn-warning my-3" 
                onClick={this.handleChangeName}>Click</button>
                <button className="btn btn-secondary my-3 mx-2" 
                // onClick={()=>document.getElementById('myInput').value=""}>Hidden</button>
                onClick={()=>this.myInput.current.value=""}>Hidden</button>
                <br />
                <span>{this.counter++}</span>

                {/* <h2 className="text-center mt-4">
                {"PureComponent: " + this.props.name}
                </h2> */}
            </div>
            
        )
    }
}

//روش 2 : کامپوننت نوع تابعی
// const PureCompo = (props)=>{
//     return(
//         <h2 className="text-center mt-4">
//             {"PureComponent: " + props.name}
//         </h2>
//     )
// }

// export default memo(PureCompo);
export default (PureCompo);