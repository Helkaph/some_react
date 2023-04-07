import React from 'react'

function TempInp({ temp, setTemp }) {
 return <div>
    <p>Введите температуру(в градусах Фаренгейта)</p>
    <input type="text" value={temp} onChange={(event) => setTemp(event.target.value)} />
 </div>
}

export default TempInp