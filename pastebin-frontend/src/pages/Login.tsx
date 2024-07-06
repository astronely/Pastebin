import {Container} from "react-bootstrap";
import './styles/auth.scss'
import Header from "../components/Header";
import {useState} from "react";
import {AuthClient} from "../proto/AuthServiceClientPb";

export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const authClient = async (username: string, password: string, app_id: number) => {
        // console.log(username, password, app_id)
        const client = new AuthClient("http://localhost:8080", null, null);
        // const request = new LoginRequest();
        // request.setUsername(username);
        // request.setPassword(password);
        // request.setAppId(app_id);
        // await client.login(request, {})
            // .then((res: any) => console.log(res))
            // .catch((err: any) => console.log(err))
    }

    const onClickLogin = () => {
        if (username && password) authClient(username, password, 1234)
            .then(r => console.log(r))
            .catch((err: any) => console.log(err))
    }

    return (
        <div className='login__page'>
            <Header/>
            <Container>
                <div className='content col-lg-4 col-md-6 col-sm-8 col-12'>
                    <div className='input__container'>
                        <div className='input__box'>
                            <p className='input__text'>Username:</p>
                            <input placeholder='Your username' value={username} onChange={(e) => setUserName(e.target.value)}/>
                        </div>

                        <div className='input__box'>
                            <p className='input__text'>Password:</p>
                            <input placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={onClickLogin}>Sign In</button>
                    {/*<ButtonMain text='Sign in' action={onClickLogin}/>*/}
                </div>
            </Container>
        </div>

    )
}