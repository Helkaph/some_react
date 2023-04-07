import React from 'react'

function Verdict({ temp }) {
    function TempConvertation(temp) {
        return <p>{(+temp - 32) * 5 / 9}</p>
    }
    return <div>
        {TempConvertation(temp)}
    </div>
}

export default Verdict