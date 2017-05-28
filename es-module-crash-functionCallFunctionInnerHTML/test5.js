import { test1 } from "./test1.js";
import { test2 } from "./test2.js";
import { test3 } from "./test3.js";
import { test4 } from "./test4.js";
import { test6 } from "./test6.js";
import { test7 } from "./test7.js";
import { test8 } from "./test8.js";

export function test5(){
	return aux5();
}

function aux5(){
	return 'Test 5';
}

document.body.innerHTML += `test5 import: ${test1()}, ${test2()}, ${test3()}, ${test4()}, ${test6()}, ${test7()}, ${test8()}<br>`;
