import React, { useState } from "react";
//import validate from "./validation";

export const validate = (form) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.username.trim()) {
        errors.username = "Username is required";
    } else if (!emailRegex.test(form.username)){
        errors.username = "Username must be a valid email";
    } 

    if (!form.password.trim()){
        errors.password = "Password is required";
    }else if (!/\d/.test(form.password)) {
        errors.password = "Password must contain at least one number.";
      } else if (form.password.length < 6 || form.password.length > 10) {
        errors.password = "Password must be between 6 and 10 characters.";
      }
    return errors;
};


export const Form = ({ login }) => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: null, password: null});
    //const [errors, setErrors] = React.useState({});

    const handleInputChange = (event) => {
        const {name, value } = event.target;
        setForm({ ...form, [name]: value });
        //setForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate(form);
        setErrors(validationErrors);
       
        if (Object.keys(validationErrors).length === 0) {
            login(form);
          }
        // const newErrors = validate(form);
        // setErrors(newErrors);
        // if(Object.keys(newErrors).length === 0){
        //     console.log(form);
        // }
    };
    
    return (
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Email"
                        value={form.username}
                        onChange={handleInputChange}
                    />
                    {/*{errors.username && <div className='errors'>{errors.username}</div>}*/}
                    {errors.username && <p className="error-message">{errors.username}</p>}
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleInputChange}
                    />
                    {/*{errors.password && <div className="error">{errors.password}</div>}*/}
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <button type="submit">Sign in</button>
            </form>
        );
}



// if (!form.username.trim()) {
//     errors.username = "Username is required";
// } else if (!emailRegex.test(form.username)){
//     errors.username = "Username must be a valid email";
// } 
//else if (form.username.length > 35){
   // errors.username = "Username must not exceed 35 characters";
//}