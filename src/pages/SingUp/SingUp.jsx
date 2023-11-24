import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";


const SignUp = () => {
  const {createUser} = useAuth()
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const saveUser = {
          name: data.name,
          email: data.email,
          photo: data.photoURL,
          date: data.date,
        };

        fetch("https://traveller-server-one.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, {replace: true});
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className=" my-10 lg:px-12">
      <div className="lg:flex px-10 gap-12 justify-center lg:items-center lg:min-h-screen">

      <div className="lg:w-1/3">
          <img className="rounded-lg" src="https://i.ibb.co/jVvxsHc/justin-geo-walsiyen-KKb-P7-Qc-E2-WU-unsplash.jpg" alt="" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl mb-4 font-semibold ">Create your Account.</h1>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered rounded-lg"
                />
                {errors.name && (
                  <span className="text-red-600 mt-3">
                    Name field is required
                  </span>
                )}
              </div>
          
            </div>

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
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="bg-orange-500 border rounded-lg w-100  text-white font-semibold py-4"
              >
                Sign Up
              </button>
            </div>
           <div className="mt-4">
           <p className="mb-5">
            Already member?{" "}
            <Link to="/login" className="text-orange-500">
              Login here.
            </Link>
          </p>
           </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>

        
      </div>
    </div>
  );
};

export default SignUp;
