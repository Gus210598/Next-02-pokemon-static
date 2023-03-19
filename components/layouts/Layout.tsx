import Head from "next/head"
import { FC } from "react"
import { NavBar } from '../ui';

interface Props {
    children: JSX.Element;
    title?: string;
}

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Gustavo Barahona" />
            <meta name="description" content={`Información sobre pokémon ${ title }`}/>
            <meta name="keywords" content={`${ title }, pokemon, pokedex `}/>
        </Head>

        <NavBar />

        <main style={{
            padding: '1px 20px'    
        }} >
            { children }
        </main>

    </>
  )
}
