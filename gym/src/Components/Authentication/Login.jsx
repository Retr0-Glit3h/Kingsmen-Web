import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';

const Auth1 = () => {

    const [formData, setFormData] = useState({
        email: '', password:''
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
            const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })
          if (error) throw error
          console.log(data)
          //alert('Check your email or username or password.')
        } catch(error){
            alert(error)
          }
    }

    return (
        <div>
            <h1 className='signUpTitle'>Sign In</h1>
        <div>
            <form onSubmit={handleSubmit}>
            
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
            Don't have an account ? <Link to='/Signup'>Sign up</Link>
        </div>
        </div>
    )
}

export default Auth1
