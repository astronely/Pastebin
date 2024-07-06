import '../styles/Button.scss'

interface Props {
    text: string,
    action?: Function
}

export default function ButtonMain(props: Props) {

    return(
        <button onClick={() => props.action} className='button__main'>{props.text}</button>
    )
}

