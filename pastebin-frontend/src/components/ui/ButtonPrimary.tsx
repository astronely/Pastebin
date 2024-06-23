import '../styles/Button.less'

interface Props {
    text: string
}

export default function ButtonPrimary(props: Props) {
    return(
        <button className='button__primary'>{props.text}</button>
    )
}