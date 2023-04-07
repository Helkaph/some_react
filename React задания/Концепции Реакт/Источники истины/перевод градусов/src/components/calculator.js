import React, { useState} from 'react';
import { nanoid } from 'nanoid'
import TempInp from './tempinp'
import Verdict from './verdict'

function Calculator() {
    const [temp, setTemp] = useState(0)

    return <div>
        <Verdict temp={temp} />
        <TempInp temp={temp} setTemp={setTemp} />
    </div>
}

export default Calculator;