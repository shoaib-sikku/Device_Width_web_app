import React, { useEffect, useState } from 'react'
import '../style/main.scss'

const UseEffectPro = () => {
    const [record, setRecord] = useState(window.screen.width);

    const width = () => {
        setRecord(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', width);
    })

    return (
        <>
            <div id='container'>
                <p>you can known your device width.</p>
                <h1>{record}px</h1>
            </div>
        </>
    )
}
export default UseEffectPro
