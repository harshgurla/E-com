import { Form, useActionData, Link, Navigate } from 'react-router'
import './LoginRegister.css';

const Login = () => {

    const data = useActionData();
   

    if(data?.token) {
        localStorage.setItem('token', data.token);
         return <Navigate to='/' />
    }
   
  return (
    <div className='auth-container'>
        <h1 className='head'>Login</h1>
        {
            data && data.message && <p  style={{ color: 'red'}}>{data.message}</p>
        }
        <Form className='form-con' method='post' action='/login'>
            <input className='name' type="text" name='email' placeholder='Username' />
            <input  className='password' type="password" name='password' placeholder='Password' />
            <button  className='btn1' type='submit'>Login</button>
        </Form>

        <p className='para' >Don't have account?  <Link to="/register">Register now</Link> </p>
    </div>
  )
}

export default Login