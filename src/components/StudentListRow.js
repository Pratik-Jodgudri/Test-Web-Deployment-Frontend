import Axios from "axios";
import { Link } from "react-router-dom";

function StudentListRow(props) {
    const { _id, name, email, rollNo } = props.obj;

    const handleClick = () => {
        Axios.delete("https://test-web-deployment.onrender.com/students/delete-student/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully!");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td className="d-flex justify-content-start">
                <Link to={`/edit-student/${_id}`} className="text-decoration-none text-light">
                    <button className="btn btn-success me-3">
                        Edit
                    </button>
                </Link>
                <button onClick={handleClick} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default StudentListRow;