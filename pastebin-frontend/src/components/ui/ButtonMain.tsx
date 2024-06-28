import '../styles/Button.less'

interface Props {
    text: string,
    action?: Function
}

export default function ButtonMain(props: Props) {
    return(
        <button className='button__main'>{props.text}</button>
    )
}

