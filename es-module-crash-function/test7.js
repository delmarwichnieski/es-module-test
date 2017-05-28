import { test1 } from "./test1.js";
import { test2 } from "./test2.js";
import { test3 } from "./test3.js";
import { test4 } from "./test4.js";
import { test5 } from "./test5.js";
import { test6 } from "./test6.js";
import { test8 } from "./test8.js";

export function test7(){
	return 'Test 7';
}

console.log('test7 import: ' + test1(), test2(), test3(), test4(), test5(), test6(), test8());
