import Title from '@/components/Title'
import Text from '@/components/Text'
import Metadata from '@/components/Metadata'
import {Center} from './style'

export default ({statusCode}) => {

    const message = statusCode === 404 
        ? 'Página não encontrada' 
        : 'Tente acessar o nosso site novamente daqui a algumas horas.'

    return (
        <>
            <Metadata pageTitle='Algo não está certo'/>
            <Center>
                <Title text='Desculpe! Algo não está certo'/>
                <Text>
                    <strong>😷 Erro {statusCode || 'desconhecido'}: </strong>
                    {message}
                </Text>
            </Center>
        </>
    )
}
