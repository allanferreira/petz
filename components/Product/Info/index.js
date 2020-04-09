import Title from '@/components/Title'
import Text from '@/components/Text'
import { Info, Image, ContentArea, ImageArea } from './style'

const alt = '😋 Comidinha bem gostosa para cachorros'

export default ({name, body}) => (
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
            <Text>{body}</Text>
        </ContentArea>
    </Info>
)
