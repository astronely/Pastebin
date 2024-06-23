import {Container} from "react-bootstrap";
import './styles/Header.less'
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className='header'>
            <Container>
                <div className='tabs'>
                    <button className='button__log' onClick={() => {
                        navigate('/login')
                    }}>SignIn</button>
                    <button className='button__log'>SignUp</button>
                </div>
            </Container>
        </div>
    )
}