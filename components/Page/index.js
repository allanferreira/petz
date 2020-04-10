import Navbar from '@/components/Navbar'
import {Error} from '@/components/Message'
import {Page} from './style'

export default ({children, error = null}) => (
    <>
        <Navbar/>
        <Page>
            { error 
                ? <Error statusCode={error.statusCode}/>
                : children
            }
        </Page>
    </>
)
