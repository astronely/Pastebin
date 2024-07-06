import {Container} from "react-bootstrap";
import './styles/Home.scss'
import Header from "../components/Header";
import ButtonMain from "../components/ui/ButtonMain";

export default function Home() {

    return (
        <div className='home__page'>
            <Header />
            <Container>
                <div className='content'>
                    <div className='post__create'>
                        <textarea className='post__text' placeholder='Text'></textarea>
                        <ButtonMain text='Post code' />
                    </div>
                </div>
            </Container>
        </div>
    )
}