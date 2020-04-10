import Title from '@/components/Title'
import {Center, Text} from './style'

export default ({title, children}) => (
    <Center>
        <Title text={title}/>
        <Text>{children}</Text>
    </Center>
)
