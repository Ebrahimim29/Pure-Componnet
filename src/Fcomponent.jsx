import React, { forwardRef, useEffect, useRef, useState } from 'react'

let counter = 0

//روش 2: ساخت کامپوننت نوع تابعی و استفاده از پیور کامپوننت در آن 
const Fcomponent =(prop , ref)=>{

    const [name , setName] = useState("")

    // const myInput = useRef(); //به عنوان هوک می باشد

    const handleChangeName =()=>{
        setName(ref.current.value)      
    }

    // useEffect(() => {
    //     ref.current.focus();
               
    // }, []);

    return(
        <div className="form-fa-group text-center mt-4 p-3">
            <h4 className="text-center text-dark">حدث کلمه</h4>
            <input ref={ref} type="text" className="form-control" 
            autoComplete="off" />
            <button className="btn btn-warning my-3" 
            onClick={handleChangeName}>Click</button>
            <button className="btn btn-secondary my-3 mx-2" 
            onClick={()=>ref.current.value=""}>Hidden</button>
            <br />
            <span>{counter++}</span>        
        </div>
    )
}

export default forwardRef(Fcomponent);