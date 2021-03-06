import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import '../Resources/signUp.css'

const AddNewCourse = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const history = useHistory()

    const [id, setId] = useState(null);
    const [teacherdata, setTeacherData] = useState([])
    const [data, setData] = useState(
        {
            course_name: "",
            year: "",
            description: "",
            teacher: "",
            price: "",
            user_id: user.user_id
        }
    );

    const url = "http://localhost:3001/getAllTeachers"
    useEffect(() => {

        fetch(url, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setTeacherData(data)
            })

    }, [url])


    const handleSubmit = (e) => {
        e.preventDefault();


        const url = "http://localhost:3001/addNewCourse"

        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setId(data);
                alert("Course Added Successfully!")
                history.push("/adminHome/courses")
            })
    }

    return (

        <main className="form-signup">

            {/* <img className="mb-4" src="logo_icon.png" alt="" width="72" height="72" /> */}
            <h1 className="h3 mb-3 fw-normal">Add new Course</h1>
            <form onSubmit={handleSubmit} className="row g-3 authForm">


                <div className="col-md-6">
                    <label htmlFor="courseName" className="mt-2">Course Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="courseName"
                        value={data.course_name}
                        onChange={(e) => setData({ ...data, course_name: e.target.value })}
                        required
                    />
                </div>


                <div className="col-md-4">
                    <label className="mt-2" htmlFor="year">Course Year</label>
                    <select
                        className="form-control"
                        id="year"
                        placeholder="Choose..."
                        value={data.year}
                        onChange={(e) => setData({ ...data, year: e.target.value })}
                        required
                    >
                        <option>Choose...</option>
                        <option>2021 Ordinary Level</option>
                        <option>2022 Ordinary Level</option>
                        <option>2021 Advanced Level</option>
                        <option>2022 Advanced Level</option>
                        <option>2023 Advanced Level</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label className="mt-2" htmlFor="teacher">Taught by</label>
                    <select
                        className="form-control"
                        id="teacher"
                        placeholder="Choose..."
                        value={data.teacher}
                        onChange={(e) => setData({ ...data, teacher: e.target.value })}
                        required
                    >
                        <option>Choose...</option>
                        {teacherdata.map((teacherdt, i) => (
                                            <option>{teacherdt.teacher_id} {teacherdt.fname} {teacherdt.lname}</option>
                                        ))}
                    </select>
                </div>


                <div className="col-12">
                    <label className="mt-2" htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={data.description}
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                        required
                    />
                </div>

                <div className="col-md-5">
                    <label className="mt-2" htmlFor="price">Course Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={data.price}
                        onChange={(e) => setData({ ...data, price: e.target.value })}
                        required
                    />
                </div>

                <div className="col-12 mt-4">
                    <input type="submit" className="w-100 btn btn-lg btn-dark" value="Add Course" />
                </div>
            </form>


        </main>

    );
}

export default AddNewCourse;