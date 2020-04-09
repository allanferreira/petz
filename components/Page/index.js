import Navbar from '@/components/Navbar'
import Error from '@/components/Error'
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
