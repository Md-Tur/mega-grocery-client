import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {

    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-3'>Please Register Here</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={agree ? 'text-primary' : 'text-danger'} label="Accept terms and conditions" />
                </Form.Group>
                <Button disabled={!agree} className='w-50 mx-auto d-block mb-3' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Registered Patient?<Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;