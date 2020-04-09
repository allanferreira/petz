import {Button} from './style'

export default ({text, danger = false, onClick = () => {}}) => {
    return (
        <Button 
            danger={danger}
            onClick={()=> onClick()}
        >
            {text}
        </Button>
    )
}
