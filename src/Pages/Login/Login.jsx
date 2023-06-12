import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { signIn,googleUser } = useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
   
  const from=location.state?.from?.pathname || '/';

  const handleValidateReCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login successfully!!',
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, { replace: true });

    });
  };
  const handleGoogle = () => {
    googleUser()
        .then(result => {
            const googleUsed = result.user;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Google signIn successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, { replace: true });
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
               
              })
        });
};


  return (
    <div className="hero min-h-screen " style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/74/374/372/colorful-minimalism-windows-10-pastel-shapes-hd-wallpaper-preview.jpg')" }}>
       <Helmet>
        <title>Yoga | Login</title>
      </Helmet>
      <div className="hero-content flex-col  md:flex-row lg:flex-row gap-9" >
    
        <div className="card flex-shrink-0 w-1/2 h-[600px] max-w-5xl text-white shadow-xl p ">
            <p className='font-bold text-4xl  px-6 '>Login Please!!</p>
          <form onSubmit={handleLogin} className="card-body text-black">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="enter your email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="enter your password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input type="text" name='captcha' onBlur={handleValidateReCaptcha}   placeholder="type the above captcha" className="input input-bordered "/>
            
            </div>
            <div className="form-control ">
              <input className="btn btn-warning" disabled={false} type="submit" value='Login' />
            </div>
          <p className='text-center  '><small>New Here?</small> <Link to='/signup' className='underline text-orange-400'>Create a new account</Link> </p>
          </form>
          <div className="text-center">
                            <p>-----------or----------</p>
                            <button onClick={handleGoogle} className="btn btn-circle btn-outline"> <FaGoogle /></button>
                        </div>
        </div>
          <img className='w-1/2 rounded-lg ' src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?size=626&ext=jpg&ga=GA1.1.1507081718.1683064994&semt=sph" alt="" />
      </div>
    </div>
  );
};

export default Login;
