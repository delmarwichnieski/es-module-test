import { test1 } from "./test1.js";
import { test2 } from "./test2.js";
import { test3 } from "./test3.js";
import { test4 } from "./test4.js";
import { test5 } from "./test5.js";
import { test7 } from "./test7.js";
import { test8 } from "./test8.js";

export function test6(){
	return aux6();
}

function aux6(){
	return 'Test 6';
}

console.log('test6 import: ' + test1(), test2(), test3(), test4(), test5(), test7(), test8());
