import Head from 'next/head'

export default ({ children, pageTitle='' }) => {
 
    const title = pageTitle ? `Petz - ${pageTitle}` : 'Petz - Pet Shop Online'
    
    return (
        <Head>
            <title>{title}</title>

            <link rel="icon" type="image/png" href="/images/icons/favicon.png"/>
            <link rel="icon" href="/images/icons/favicon.ico"/>
            <link rel="stylesheet" href="/css/reset.css"/>
            <link rel="stylesheet" href="/css/main.css"/>

            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
            {children}
        </Head>
    )
}
