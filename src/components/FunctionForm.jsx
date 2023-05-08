import React, { useState } from 'react'

const FunctionForm = () => {
    const [form, setForm] = useState(
       { name:"",
        email:"",
        password:"",}
    );

    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

   const handleSubmit =(e) =>{
        e.preventDefault()
        console.log(form)
    }
    return (
    <div>
        <h1>Function Form</h1>
      <form onSubmit={handleSubmit}>
          <label htmlFor="name"> Name</label>
          <input type="text" name="name" onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="email"> email address</label>
          <input type="email" name="email"onChange={handleChange}/>
          <br /> 
          <br />
          <label htmlFor="password">password</label>
          <input type="password" name="password"onChange={handleChange}/>
          <br /> 
          <br />
          <button className="myforms"> Submit</button>
        </form>
    </div>
  )
}

export default FunctionForm
