import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { AuthContext } from '../Provider/AuthContext';
const Login = () => {

    const {LogInUser ,sighInWithGoogle , auth,setUser}=use(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
  const [errorMessage,setErrorMessage]=useState("");
  const emailRef=useRef();
  

  const handleLogIn=e=>{
    e.preventDefault();
    const form=e.target;
    const email = form.email.value;
    const password = form.password.value

    // LogIn User
    LogInUser(email,password)
    .then(result=>{
      toast.success("logged in successfully");
      navigate(`${location.state? location.state : "/"}`)
      navigate("/")
    })
    .catch(error=>{
        setErrorMessage("Invalid email or password")

    })
  }

  // Google login
    const handleGoogleLogin=()=>{
      sighInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log("User Info:", user.displayName, user.photoURL);
        setUser(user); 
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Logged in Successfully");
      })
          .catch(error => {
            console.error(error)
        })
    }

    const handleForgetPassword=()=>{
        const email =emailRef.current.value;
        setErrorMessage("")
        sendPasswordResetEmail(auth ,email)
        .then(()=>{
          Swal.fire({
            
            text: "Password reset link sent. Check your inbox.",
            icon: "success"
          });
        })
        .catch(error=>{
          setErrorMessage(error.message);
        })
    }
    return (
        <div className='lg:flex items-center md:pt-1.5 pt-8  bg-[#e2edff] min-h-screen'>
            <div >
          <DotLottieReact className='w-[900px] h-[500px] md:flex hidden'
      src="https://lottie.host/5d1d8c3b-d794-4cc9-89bc-0007d756ebdd/19q24B5DP3.lottie"
      loop
      autoplay
    />
        </div>

        {/* login form */}
         <div className='flex flex-col justify-center items-center lg:mt-14 mt-6'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-6 pb-4 px-2">
                <h2 className='text-3xl font-semibold text-center'>Login your Account</h2>
      <div className="card-body">
        <form onSubmit={handleLogIn} className="fieldset">
          <label className="label text-gray-800">Email</label>
          <input type="email" name="email" ref={emailRef} className="input focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Email" required />

          <label className="label text-gray-800">Password</label>
          <input type="password" name='password' className="input focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Password" required/>
          <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
          {
            errorMessage && <p className='text-red-400 text-xs'>{errorMessage}</p>
          }
          
          <button type='submit'  className="btn btn-neutral mt-4 bg-[#00a7ac]  border-none">Login</button>
        </form>
        <p className=' font-semibold text-center py-5'>Dont’t Have An Account ? <Link to="/auth/signUp" className='text-[#60A5FA]'>SignUp</Link></p>
      </div>
    </div>
    <div className="divider lg:w-96 mx-auto">Or authorize with</div>
    <button onClick={handleGoogleLogin} className="btn shadow-md py-3 lg:w-96 w-full bg-white text-base text-gray-800 hover:shadow-md hover:border-gray-400 flex gap-4  mx-auto  border-[#e5e5e5]">
  <svg className='w-6 h-6' aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        </div>           
        </div>
    );
};

export default Login;