import { Form, Link, useActionData } from 'react-router';
import './LoginRegister.css';

const Register = () => {

  const data = useActionData();

  
  return (
    <div className='auth-container'>
        <h1 className='head'>register</h1>
        {
          data && data.message && <p style={{ color: 'red'}}>{data.message}</p>
        }
        <Form className='form-con' method='post' action='/register'>
            <input className='name' type="text" name='username' placeholder='Username' />
            <input className='name' type="text" name='email' placeholder='email' />
            <input className='password' type="password" name='password' placeholder='Password' />
            <button className='btn1' type='submit'>Login</button>
        </Form>
         <p className='para'>Already have a account? <Link to="/login">login</Link></p>
    </div>
  )
}

export default Register