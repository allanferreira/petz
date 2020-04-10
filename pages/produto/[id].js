import Metadata from '@/components/Metadata'
import Page from '@/components/Page'
import {Detail} from '@/components/Product'
import {productsAPI} from '@/services/api'

const Index = ({name, info, error = null}) => (
    <Page error={error}>
        <Metadata pageTitle={name}/>
        <Detail
            name={name}
            info={info}
        />
    </Page>
)

Index.getInitialProps = async ({query}) => {
    let product = {}
    
    try {
        const {data} = await productsAPI.find(query.id)
        product = data
    } catch (err) {
        product.error = err.response
    }
    
    return product
}

export default Index
