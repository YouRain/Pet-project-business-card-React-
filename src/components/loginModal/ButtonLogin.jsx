import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ButtonLogin({ className, children, ...props }) {
    // const navigate = useNavigate();

    // function goToMainPage() {
    //     navigate("/mainpage")
    // }

    return (
        <button
            // onClick={goToMainPage}
            className={className}
            type="submit"
            {...props} >
            {children}
        </button>

        // <Link to="/mainpage" className={className}>
        //     {children}
        // </Link>
    )
}

export default ButtonLogin;