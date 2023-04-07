import React, { useState} from 'react';
import { nanoid } from 'nanoid'


function getSum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += +elem;
	}
	
	return res;
}

function Calculator() {
	const [value, setValue] = useState('');
	const [nums, setNums] = useState([1, 2, 3]);
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	function handleBlur(event) {
		setNums([...nums, event.target.value]); // добавляем элемент в массив
	}
	
	return <div>
		<p>{getSum(nums)}</p>
		<input value={value} onChange={handleChange} onBlur={handleBlur} />
	</div>;
}
export default Calculator;