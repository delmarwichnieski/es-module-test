import { test1 } from "./test1.js";
import { test2 } from "./test2.js";
import { test3 } from "./test3.js";
import { test5 } from "./test5.js";
import { test6 } from "./test6.js";
import { test7 } from "./test7.js";
import { test8 } from "./test8.js";

export function test4(){
	return aux4();
}

function aux4(){
	return 'Test 4';
}

document.body.innerHTML += `test4 import: ${test1()}, ${test2()}, ${test3()}, ${test5()}, ${test6()}, ${test7()}, ${test8()}<br>`;
