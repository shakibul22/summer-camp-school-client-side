import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, googleUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://summer-camp-school-server-three.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate(from, { replace: true });

                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    };
    const handleGoogle = () => {
        googleUser()
            .then(result => {
                const googleUsed = result.user;
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Google sign up successgully',
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
        <>
            <Helmet>
                <title>Yoga | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen  bg-[url('https://img.freepik.com/free-vector/blue-white-gradient-abstract-background_53876-60241.jpg?w=826&t=st=1686188107~exp=1686188707~hmac=1b45f0b63c2ad42e45636670182012e0381e251c3b9043b446664c897e670909')]">
                <div className="hero-content flex mt-10  ">

                    <div className="card flex-shrink-0 shadow-2xl w-1/2 p-5">
                        <h2 className="p-3 text-start text-3xl font-bold">Please Sign Up</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>

                                <input
                                    type="file" placeholder="Photo URL"
                                    {...register("photoURL", { required: true })}
                                    className="file-input file-input-bordered w-full"
                                />

                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password"  {...register("confirmPassword", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} placeholder="confirm-password" className="input input-bordered" />
                                {errors.confirmPassword?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.confirmPassword?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}

                                {errors.confirmPassword?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control w-full mt-2">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="p-3 text-center"><small>Already have an account <Link to="/login" className="underline text-orange-400 uppercase">Login</Link></small></p>
                        <div className="text-center">
                            <p>-----------or----------</p>
                            <button onClick={handleGoogle} className="btn btn-circle btn-outline"> <FaGoogle /></button>
                        </div>

                    </div>
                    <img className="w-1/2" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=826&t=st=1686198753~exp=1686199353~hmac=7bb45798ca6005f378c1ef638d95e9a8d1f1ee44f921e0ff83a3cc77ca5310da" alt="" />
                </div>
            </div>
        </>
    );
};

export default Register;


