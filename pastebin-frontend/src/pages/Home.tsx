import {Container} from "react-bootstrap";
import './styles/Home.less'
import Header from "../components/Header.tsx";
import ButtonMain from "../components/ui/ButtonMain.tsx";

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