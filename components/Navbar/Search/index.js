import {useState, useEffect} from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import {Search, Input} from './style'

export default () => {

    const [text, setText] = useState('')
    const [link, setLink] = useState('/busca')

    useEffect(() => {
        const query = text && `?q=${text}`
        setLink('/busca' + query)
    }, [text])

    return (
        <Search>
            <Input 
                placeholder='Diga o nome completo do produto que você procura?'
                onChange={e => setText(e.target.value)}
            />
            <Link href={link}>
                <a>
                    <Button text='Buscar'/>
                </a>
            </Link>
        </Search>
    )
}
