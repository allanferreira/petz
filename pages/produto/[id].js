import Metadata from '@/components/Metadata'
import Page from '@/components/Page'
import {Info} from '@/components/Product'
import {productsAPI} from '@/services/api'

const Index = ({name, body, error = null}) => (
    <Page error={error}>
        <Metadata pageTitle={name}/>
        <Info
            name={name}
            body={body}
        />
    </Page>
)

Index.getInitialProps = async ({query}) => {
    let product = {}
    
    try {
        const {data} = await productsAPI.find(query.id)
        product.id = data.id,
        product.name = data.title
        product.body = data.body
    } catch (err) {
        product.error = err.response
    }
    
    return product
}

export default Index
