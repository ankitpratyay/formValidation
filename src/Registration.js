import { useState } from "react";
const Registration = () => {
    const initalState = {
        uname: "",
        password: "",
        email: "",
        gender: ""
    };
    const [userDetails, setUserDetails] = useState(initalState);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
        setFormError({ ...formError, [name]: "" });
    };
    const checkValidation = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.uname) {
            error.uname = "User Name is Required";
        }
        if (!values.password) {
            error.password = "Password is required";
        }
        if (!values.email) {
            error.email = "Email is Required";
        } else if (!regex.test(values.email)) {
            error.email = "Please provide a valid Email";
        }
        return error;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(checkValidation(userDetails));
        setIsSubmit(true);
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="uname"
                        placeholder="Enter User Name"
                        style={{ margin: 5 }}
                        onChange={handleChange}
                    />
                    <br />
                    {formError.uname && <p>{formError.uname}</p>}
                </div>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                />
                <br />
                {formError.password && <p>{formError.password}</p>}
                <input
                    name="email"
                    type="text"
                    placeholder="Enter Email"
                    style={{ margin: 5 }}
                    onChange={handleChange}
                />
                <br />
                {formError.email && <p>{formError.email}</p>}
                Gender:{" "}
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked
                    onChange={handleChange}
                />{" "}
                Male
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                />{" "}
                FeMale <br />
                <button>Register</button>
            </form>
        </div>
    );
};
export default Registration;
