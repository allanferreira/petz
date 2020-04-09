import Link from 'next/link'
import {Navbar, Logo} from './style'

const alt = 'Petz - Pet Shop Online'

export default () => (
    <Navbar>
        <Link href='/'>
            <a>
                <Logo
                    src='/images/logos/header.png'
                    alt={alt}
                    title={alt}
                />
            </a>
        </Link>
    </Navbar>
)
