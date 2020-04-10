import Link from 'next/link'
import Search from './Search'
import {Navbar, Logo, LogoArea} from './style'

const alt = 'Petz - Pet Shop Online'

export default () => (
    <Navbar>
        <LogoArea>
            <Link href='/'>
                <a>
                    <Logo
                        src='/images/logos/header.png'
                        alt={alt}
                        title={alt}
                    />
                </a>
            </Link>
        </LogoArea>
        <Search/>
    </Navbar>
)
