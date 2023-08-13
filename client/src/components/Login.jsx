// src/Register.js
import { useState } from 'react';
import '../style/Login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phonenumber: '',
    description: '',
    location: '',
    password: '',
 
    image:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // Handle form submission, e.g., send data to a backend server
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <center>
        <h2>REGISTER</h2>
        </center>
        
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
         <input
          type="text"
          name="image"
          placeholder="ImageLink"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phonenumber"
          placeholder="Phone Number"
          value={formData.phonenumber}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Login;
