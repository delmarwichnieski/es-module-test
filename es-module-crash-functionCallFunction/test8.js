import { test1 } from "./test1.js";
import { test2 } from "./test2.js";
import { test3 } from "./test3.js";
import { test4 } from "./test4.js";
import { test5 } from "./test5.js";
import { test6 } from "./test6.js";
import { test7 } from "./test7.js";

export function test8(){
	return aux8();
}

function aux8(){
	return 'Test 8';
}

console.log('test8 import: ' +  test1(), test2(), test3(), test4(), test5(), test6(), test7());
