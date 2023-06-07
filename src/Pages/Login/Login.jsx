import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);
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
        position: 'top-end',
        icon: 'success',
        title: 'Login successfully!!',
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, { replace: true });

    });
  };

  return (
    <div className="hero min-h-screen " style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/02/06/66/18/240_F_206661802_IHVW9C5M2LmylkPYPGXJVpLpAKpNkgtt.jpg')" }}>
      <div className="hero-content flex-col  bg-slate-500 md:flex-row lg:flex-row gap-9" style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }}>
    
        <div className="card flex-shrink-0 w-full h-[500px] max-w-5xl text-white ">
            <p className='font-bold text-4xl '>Login Please!!</p>
          <form onSubmit={handleLogin} className="card-body">
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
              <input type="text" name='captcha' onBlur={handleValidateReCaptcha}   placeholder="type the above captcha" className="input input-bordered"/>
            
            </div>
            <div className="form-control mt-1">
              <input className="btn btn-warning" disabled={false} type="submit" value='Login' />
            </div>
          <p className='text-center  mb-6'><small>New Here?</small> <Link to='/signup' className='underline text-orange-400'>Create a new account</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
