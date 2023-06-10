import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const [disabled, setDisabled] = useState(false);

  const { signIn, googleUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

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

  const handleLogin = (data) => {
    const { email, password } = data;
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

  const handleGoogle = () => {
    googleUser()
      .then(result => {
        const googleUsed = result.user;
        const saveUser = { name: googleUsed.displayName, email: googleUsed.email };
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      });
  };

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/74/374/372/colorful-minimalism-windows-10-pastel-shapes-hd-wallpaper-preview.jpg')" }}>
      <div className="hero-content flex-col md:flex-row lg:flex-row gap-9">

        <div className="card flex-shrink-0 w-full md:w-1/2 lg:w-1/2 h-[600px] max-w-5xl shadow-xl p">
          <p className='font-bold text-4xl text-black px-6 mb-4 md:mb-8'>Login Please!!</p>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name='email'
                placeholder="enter your email"
                className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                {...register('email', { required: true })}
                value={watch('email') || ''}
                onChange={(e) => setValue('email', e.target.value)}
              />
              {errors.email && <span className="error-message">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="enter your password"
                className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
                {...register('password', { required: true })}
                value={watch('password') || ''}
                onChange={(e) => setValue('password', e.target.value)}
              />
              {errors.password && <span className="error-message">Password is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name='captcha'
                onBlur={handleValidateReCaptcha}
                placeholder="type the above captcha"
                className={`input input-bordered ${errors.captcha ? 'input-error' : ''}`}
                {...register('captcha', { required: true })}
                value={watch('captcha') || ''}
                onChange={(e) => setValue('captcha', e.target.value)}
              />
              {errors.captcha && <span className="error-message">Captcha is required</span>}
            </div>
            <div className="form-control mt-1">
              <input className="btn btn-warning" disabled={disabled} type="submit" value='Login' />
            </div>
            <p className='text-center '><small>New Here?</small> <Link to='/signup' className='underline text-orange-400'>Create a new account</Link> </p>
            <div className="text-center ">
              <p>-----------or----------</p>
              <button onClick={handleGoogle} className="btn btn-circle btn-outline"> <FaGoogle /></button>
            </div>
          </form>
        </div>
        <img className='w-full md:w-1/2 lg:w-1/2 rounded-lg' src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?size=626&ext=jpg&ga=GA1.1.1507081718.1683064994&semt=sph" alt="" />
      </div>
    </div>
  );
};

export default Login;
