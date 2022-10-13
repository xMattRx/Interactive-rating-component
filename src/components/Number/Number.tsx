import './Number.scss'

interface NumberProps {
    number: number,
    selected: number
    setSelected: React.Dispatch<React.SetStateAction<number>>

}

export default function Number(props: NumberProps) {
    return (
        <span onClick={() => {
            props.setSelected(props.number)
        }} className={`number ${props.selected === props.number && 'selected'}`}>{props.number}</span>
    )
}
