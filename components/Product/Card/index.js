import Link from 'next/link'
import Button from '@/components/Button'
import { productsAPI } from 'services/api'
import {Product, Image, Name} from './style'

const alt = '😋 Comidinha bem gostosa para cachorros'

export default ({id, name}) => {

    const removeHandler = () => {
        productsAPI.destroy(id)
    }

    return (
        <Product>
            <Link href={`/produto/${id}`}>
                <a title={alt}>
                    <Image 
                        src='/images/products/mini.jpg'
                        alt={alt}
                    />
                    <Name>{name}</Name>
                </a>
            </Link>
            <Button 
                danger 
                onClick={() => removeHandler()}
                text='Remover'
            />
        </Product>
    )
}
