import React,  { useState }from 'react'
import Image from "next/image"
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter } from 'next/router';


const Login = () => {
    const router=useRouter();
    const [Email, setEmail] = useState();
    const [pass, setPass] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { Email, pass }
        let res = await fetch("https://ambuj-bhandari-animated-sniffle-74xppvvq6x92r6r4-3000.preview.app.github.dev/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        let response = await res.json()
        console.log(response);
        if(response.success)
        {
            router.push("http://localhost:3000")
        }
    }
    return (
        <div>            
            <section className=" mx-10 vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                    {<Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid" alt="Sample image" width="350px"
                    height="400px"layout='responsive' /> }
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{top: "50px"}}>
                        <form onSubmit={handleSubmit} method='POST'>
                            <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="E-mail">Email address</label>
                                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="e-mail" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                            </div>

                            <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="Passwrd">Password</label>
                                <input onChange={(e)=>{setPass(e.target.value)}} type="password" id="password" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="remeber" />
                                    <label className="form-check-label" htmlFor="Remeber-me">
                                        Remember me
                                    </label>
                                </div>
                                <a href="/forgetpass" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                    style={{paddingleft: "2.5rem" ,paddingright: "2.5rem"}}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link href="/Signup"
                                    className="link-danger">Register</Link></p>
                            </div>
                            <div>
                                <p style={{paddingTop:"10px",paddingLeft: "240px"}}> <strong>Or</strong></p>
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
        </div>

    )
}

export default Login;
