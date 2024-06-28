import {Container} from "react-bootstrap";
import './styles/auth.less'
import Header from "../components/Header.tsx";
import ButtonMain from "../components/ui/ButtonMain.tsx";

export default function Login() {

    return (
        <div className='login__page'>
            <Header/>
            <Container>
                <div className='content col-lg-4 col-md-6 col-sm-8 col-12'>
                    <div className='input__container'>
                        <div className='input__box'>
                            <p className='input__text'>Username:</p>
                            <input placeholder='Your username'/>
                        </div>

                        <div className='input__box'>
                            <p className='input__text'>Password:</p>
                            <input placeholder='Your password'/>
                        </div>
                    </div>

                    <ButtonMain text='Sign in'/>
                </div>
            </Container>
        </div>

    )
}