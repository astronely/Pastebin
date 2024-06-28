import {Container} from "react-bootstrap";
import './styles/auth.less'
import Header from "../components/Header.tsx";
import ButtonMain from "../components/ui/ButtonMain.tsx";

export default function SignUp() {

    return (
        <div className='login__page'>
            <Header/>
            <Container>
                <div className='content col-lg-4 col-md-6 col-sm-8 col-12'>
                    <div className='input__container'>
                        <div className='input__box'>
                            <div className='input__text'>Username:</div>
                            <input placeholder='Your username'/>
                        </div>

                        <div className='input__box'>
                            <div className='input__text'>Email:</div>
                            <input placeholder='Your email'/>
                        </div>

                        <div className='input__box'>
                            <div className='input__text'>Password:</div>
                            <input placeholder='Your password'/>
                        </div>
                    </div>

                    <ButtonMain text='Sign up'/>
                </div>
            </Container>
        </div>

    )
}