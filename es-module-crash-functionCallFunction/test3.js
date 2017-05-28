import { test1 } from "./test1.js";
import { test2 } from "./test2.js";
import { test4 } from "./test4.js";
import { test5 } from "./test5.js";
import { test6 } from "./test6.js";
import { test7 } from "./test7.js";
import { test8 } from "./test8.js";

export function test3(){
	return aux3();
}

function aux3(){
	return 'Test 3';
}

console.log('test3 import: ' + test1(), test2(), test4(), test5(), test6(), test7(), test8());
