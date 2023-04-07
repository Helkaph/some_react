import React from 'react'

function Verdict({ temp }) {
    function checkTemp(temp) {
        if (+temp <= 0) {
            return <p>Лёд</p>
        } else if (+temp > 0 && temp < 100) {
            return <p>Вода жидкая</p>
        } else {
            return <p>Пар</p>
        }
    }
    return <div>
        {checkTemp(temp)}
    </div>
}

export default Verdict