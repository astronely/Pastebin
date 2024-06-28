import {Container} from "react-bootstrap";
import './styles/Header.less'
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className='header'>
            <Container>
                <div className='header__container'>
                    <div className='tabs'>
                        <a className='tabs__text' href='#' onClick={() => {
                            navigate('/')
                        }}>PASTEBIN</a>
                    </div>
                    <div className='buttons'>
                        <button className='button__log' onClick={() => {
                            navigate('/login')
                        }}>SignIn
                        </button>
                        <button className='button__log' onClick={() => {
                            navigate('/signup')
                        }}>SignUp
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}