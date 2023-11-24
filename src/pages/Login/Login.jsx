import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowUpRight } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Container from "../../components/Shared/Container/Container";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const {user, signIn} = useAuth()
    const [error, setError] = useState("");
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email, data.password);
    signIn(data.email, data.password)
    .then((result) => {
      const user = result.user;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Account created successfully ",
        showConfirmButton: false,
        timer: 1500,
      });
      setError('')
      navigate(from, {replace: true})
    })
    
    .catch((error) => {
      console.log(error.message);
      const costomArror = error.message === "Firebase: Error (auth/user-not-found)." && "User not found. Please verify the entered information and try again."
      setError(costomArror);
     
    });
  }

  return (
    <Container>
      <div className="w-72 mx-auto text-center pt-6">
        <h3 className="text-3xl font-semibold  mb-2">Log In</h3>
        <p className="text-[19x] font-semibold">
          We're glad to see you again!
        </p>
        <p className="text-base text-gray-700 mt-2">
          Don't have an account?{" "}
          <Link className="text-orange-500" to="/signup">
            {" "}
            Sign Up!
          </Link>
        </p>
      </div>

      <div className="w-[50%] mx-auto border border-gray-400 my-10 py-10 px-10 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
                className="input input-bordered rounded-lg"
              />
              {errors.email && (
                <span className="text-red-600 mt-3">
                  Email field is required
                </span>
              )}
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              className="input input-bordered rounded-lg"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600 mt-3">
                Password field is required
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600 mt-3">
                Password must be 6 Characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-600 mt-3">
                Password must be one upper case one lower case one sipecil
                Characters
              </span>
            )}
            <label className="label">
              <p className="text-red-600">{error}</p>
            </label>
            <div className="form-control mt-6">
              <button
                type="submit"
                className=" flex justify-center items-center gap-2 bg-orange-500 border rounded-lg  w-100  text-white font-semibold py-4"
              >
                Login <BsArrowUpRight className="font-extrabold" />
              </button>
            </div>
          </div>
          
        </form>
      </div>
    </Container>
  );
};

export default Login;
