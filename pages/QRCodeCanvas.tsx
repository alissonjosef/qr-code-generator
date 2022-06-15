import { useEffect, useRef } from "react";
import QRCode from 'qrcode'

interface Props {
    text: string
}


function QRCodeCanvas ({text}: Props)  {

    const canvasRef = useRef<HTMLCanvasElement | null>()

    useEffect(() => {
        QRCode.toCanvas(canvasRef.current, text,{width:500},(error) => {
            console.log(error)
        })
    }, [text]);

  return (
    <>
        <canvas ref={canvasRef} id='canvas'></canvas>
    </>
  )
}

export default QRCodeCanvas;