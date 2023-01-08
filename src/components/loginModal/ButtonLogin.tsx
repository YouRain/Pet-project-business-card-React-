import React, { ReactNode } from "react";

interface IButtonLogin {
    cl: string
    children: ReactNode
}

// const ButtonLogin: React.FC = ({ cl, children, ...props }) => {
function ButtonLogin({ cl, children, ...props }: IButtonLogin) {
    // const navigate = useNavigate();

    // function goToMainPage() {
    //     navigate("/mainpage")
    // }

    return (
        <button
            // onClick={goToMainPage}
            className={cl}
            type="submit"
            {...props}
        >
            {children}
        </button>

        // <Link to="/mainpage" className={className}>
        //     {children}
        // </Link>
    )
}

export default ButtonLogin;