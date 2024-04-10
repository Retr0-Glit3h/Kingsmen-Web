import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';

const Auth = () => {

    const [formData, setFormData] = useState({
        username: '', email: '', password:''
    })

    console.log(formData)

    function handleChange(event) {
        setFormData((prevFormData) => {
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        }) 
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try{
            const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
              data: {
                  username: formData.username,
              }
            }
          })
          if (error) throw error
          alert('Check your email or username or password.')
        } catch(error){
            alert(error)
          }
    }

    return (
        <div>
            <h1 className='signUpTitle'>Sign Up</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Enter Name: </label>
                <input 
                  placeholder='Username'
                  name='username'
                  onChange={handleChange}

                />
                </div>
                <div> 
                <label>Enter Email ID: </label>    
                <input 
                  placeholder='Email'
                  name='email'
                  onChange={handleChange}

                />
                </div>

                <div>
                 <label>Enter Password :</label>
                <input 
                  placeholder='Password'
                  name='password'
                  type='password'
                  onChange={handleChange}

                />
                </div>

                <button type='submit'>
                    Submit
                </button>
                
            </form>
            Already have an account ? <Link to='/Login'>Login</Link>
        </div>
        </div>
    )
}

export default Auth
