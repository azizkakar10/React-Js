import { Button } from "antd";
import { Link } from "react-router-dom";


function Auth(){
    return (
        <div className="flex flex-col items-center justify-center">
            <Button>Login With Google</Button>
            <Button>Login With Github</Button>
            <Link to={"/auth/signin"}><Button>Login With Email</Button></Link>

            <h1>DOn't have an account</h1><Link to={"/auth/signup"}>Create Account</Link>
        </div>
    )
};

export default Auth;