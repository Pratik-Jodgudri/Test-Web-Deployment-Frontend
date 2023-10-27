import React, { useEffect, useState } from "react";
import Axios from 'axios';
import StudentListRow from "./StudentListRow";

function StudentList()
{
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("https://test-web-deployment.onrender.com/students/")
        .then((res) => {
            if(res.status === 200) 
                setArr(res.data);
            else
                Promise.reject();

        })
        .catch((err) => {
            alert(err);
        })
    }, []);

    const ListItems = () => {
        return arr.map((val, ind) => {
            return <StudentListRow obj={val} />
        })
    }
    return(
        <table style={{maxWidth:"60%", margin:"50px auto"}} className="table table-success table-bordered table-striped my-4">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll No</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}                
            </tbody>
        </table>
    )
}
export default StudentList;
