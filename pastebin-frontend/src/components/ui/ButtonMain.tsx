import '../styles/Button.less'

interface Props {
    text: string
}

export default function ButtonMain(props: Props) {
    return(
        <button className='button__main'>{props.text}</button>
    )
}

