import { test1 } from "./test1.js";
import { test3 } from "./test3.js";
import { test4 } from "./test4.js";
import { test5 } from "./test5.js";
import { test6 } from "./test6.js";
import { test7 } from "./test7.js";
import { test8 } from "./test8.js";

export function test2(){
	return aux2();
}

function aux2(){
	return 'Test 2';
}

document.body.innerHTML += `test2 import: ${test1()}, ${test3()}, ${test4()}, ${test5()}, ${test6()}, ${test7()}, ${test8()}<br>`;
