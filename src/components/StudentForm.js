import React, { useEffect, useState } from "react";

function StudentForm(props) {
    const [name, setName] = useState(props.nameValue);
    const [email, setEmail] = useState(props.emailValue);
    const [rollNo, setRollNo] = useState(props.rollNoValue);

    useEffect(() => {
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    }, [props.nameValue, props.emailValue, props.rollNoValue])
    const arr = [name, email, rollNo];

    const handleClick = () => {
        props.getState(arr); 
    }

    return (
        <div style={{maxWidth: "40%", margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event) => setName(event.target.value)} className="form-control my-2" placeholder="Name" />
            <input defaultValue={props.emailValue} onChange={(event) => setEmail(event.target.value)} className="form-control my-2" placeholder="Email" />
            <input defaultValue={props.rollNoValue} onChange={(event) => setRollNo(event.target.value)} className="form-control my-2" placeholder="Roll No" />
            <button onClick={handleClick} className="btn btn-success my-2 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default StudentForm;