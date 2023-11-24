
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";


const SocialLogin = () => {
    const {signInWithGoogle} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then((result) => {
          const loggedInUser = result.user;
          const saveUser = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            photo: loggedInUser.photoURL,
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
              navigate("/");
            }
          })
            navigate(from, {replace: true})
            console.log(loggedInUser);
        })
    }

  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex items-center justify-center gap-16 mt-2">
        <button
          onClick={handleGoogleSignIn}
          type="submit"
          
        >
          <FcGoogle className="text-black text-[30px]  " />
         
        </button>

      </div>
    </div>
  );
};

export default SocialLogin;
