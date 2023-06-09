import Image from "next/image";
import NextLink from 'next/link';

import { Spacer, Text, theme, Link } from "@nextui-org/react";


export const NavBar = () => {


  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray900.value
    }} >
        <Image  
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icono de la app"
            width={ 70 }
            height = { 70 }
        />

       
          <Link href="/" as ={ NextLink }>
            <Text color='white' h2 >P</Text>
            <Text color='white' h3>okémon</Text>
          </Link>
       

        <Spacer css={{ flex: 1 }} />

          <Link href='/favorites' as={ NextLink }>
            <Text color='white' >Favoritos</Text>
          </Link>


    </div>
  )
}
