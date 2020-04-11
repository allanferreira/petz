import {Grid} from './style'
import {Card as Product} from '@/components/Product'

export default ({products}) => (
    <Grid>
        {products.map(product => 
            <Product 
                key={product.id}
                id={product.id}
                name={product.name}
            />
        )}    
    </Grid>
)
