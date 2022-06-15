import type { NextPage } from 'next'
import { useState } from 'react'
import QRCodeCanvas from './QRCodeCanvas'


const Home: NextPage = () => {
  const [ text, setText ] = useState('')
  return (
    <div className='container'>
   <h1>GERADOR DE QR CODE</h1>
   <input onChange={(element) => setText(element.target.value)} value={text} placeholder={'Digite o sei endereço aqui'} type="text" />

   <QRCodeCanvas text={text}></QRCodeCanvas>
    </div>
  )
}

export default Home
