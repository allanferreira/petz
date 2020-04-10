import {Warning} from '@/components/Message'
import Metadata from '@/components/Metadata'

export default ({statusCode}) => {

    const message = statusCode === 404 
        ? 'Página não encontrada' 
        : 'Tente acessar o nosso site novamente daqui a algumas horas.'

    return (
        <>
            <Metadata pageTitle='Algo não está certo'/>
            <Warning title='Desculpe! Algo não está certo'>
                <strong>😷 Erro {statusCode || 'desconhecido'}: </strong>
                {message}
            </Warning>
        </>
    )
}
