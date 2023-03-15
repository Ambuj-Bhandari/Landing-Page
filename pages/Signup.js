import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/dist/client/image';
const Signup = () => {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [pass, setPass] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { Name, Email, pass }
        let res = await fetch("https://ambuj-bhandari-animated-sniffle-74xppvvq6x92r6r4-3000.preview.app.github.dev/api/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        let response = await res.json()
        console.log(response);
    }
    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            {<Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid" alt="Sample image" width="350"
                    height="400"layout='responsive' /> }
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit} method='POST'>
                                <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="name">Name</label>
                                    <input value={Name} onChange={(e)=>{setName(e.target.value)}} type="text" id="name" className="form-control form-control-lg"
                                        placeholder="Enter your Name" />
                                </div>
                                <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">Email address</label>
                                    <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                </div>

                                <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="pass">Password</label>
                                    <input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" id="pass" className="form-control form-control-lg"
                                        placeholder="Enter password" />   
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        style={{ paddingleft: "2.5rem", paddingright: "2.5rem" }}>Signup</button>
                                </div>
                                <div>
                                <p style={{paddingTop:"10px",paddingLeft: "235px"}}> <strong>Or</strong></p>
                            </div>
                            <div>
                                <p style={{paddingLeft: "210px"}}>Sign in with</p>
                                <button type="button" className="btn btn-primary btn-floating btn-block">
                                    <i className='mx-1'><FacebookIcon/></i>Continue with Facebook
                                </button>

                                <button type="button" className="btn btn-primary btn-floating  btn-block">
                                    <i className='mx-1'><GoogleIcon/></i>Continue with Google
                                </button>

                                <button type="button" className="btn btn-primary btn-floating  btn-block">
                                <i className='mx-2'><LinkedInIcon/></i>Continue with LinkedIn
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default Signup;
