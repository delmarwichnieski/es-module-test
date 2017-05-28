import { test2 } from "./test2.js";
import { test3 } from "./test3.js";
import { test4 } from "./test4.js";
import { test5 } from "./test5.js";
import { test6 } from "./test6.js";
import { test7 } from "./test7.js";
import { test8 } from "./test8.js";

export function test1(){
	return aux1();
}

function aux1(){
	return 'Test 1';
}

document.body.innerHTML += `test1 import: ${test2()}, ${test3()}, ${test4()}, ${test5()}, ${test6()}, ${test7()}, ${test8()}<br>`;
