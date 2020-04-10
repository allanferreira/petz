import Title from '@/components/Title'
import { Info, Image, ContentArea, ImageArea, List, Item } from './style'

const alt = '😋 Comidinha bem gostosa para cachorros'

export default ({name, info}) => {

    const compositionList = () => {
        
        const total = info.composition.length

        const compositions = info.composition.map((composition, index) => {
            const symbol = total === index + 1 ? '.' : ', '
            return composition + symbol
        })
        
        return compositions
    }

    return (
        <Info>
            <ImageArea>
                <Image 
                    src='/images/products/large.jpg'
                    alt={alt}
                    title={alt}
                />
            </ImageArea> 
            <ContentArea>
                <Title text={name}/>
                <List>
                    <Item>
                        <strong>Linha:</strong>
                        {info.line}
                    </Item>
                    <Item>
                        <strong>Indicação:</strong>
                        {info.indication}
                    </Item>
                    <Item>
                        <strong>Pet:</strong>
                        {info.petType}
                    </Item>
                    <Item>
                        <strong>Porte de Raça:</strong>
                        {info.petSize}
                    </Item>
                    <Item>
                        <strong>Idade:</strong>
                        {info.age}
                    </Item>
                    <Item>
                        <strong>Sabor:</strong>
                        {info.flavor}
                    </Item>
                    <Item>
                        <strong>Composição:</strong>
                        {compositionList()} 
                    </Item>
                    <Item>
                        <strong>Tipo:</strong>
                        {info.type}
                    </Item>
                    <Item>
                        <strong>Apresentação:</strong>
                        {info.presentation}
                    </Item>
                </List>
            </ContentArea>
        </Info>
    )
}
