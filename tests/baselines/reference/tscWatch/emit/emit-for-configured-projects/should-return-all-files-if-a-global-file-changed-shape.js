currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/a/b/moduleFile1.ts]
export function Foo() { };

//// [/a/b/file1Consumer1.ts]
import {Foo} from "./moduleFile1"; export var y = 10;

//// [/a/b/file1Consumer2.ts]
import {Foo} from "./moduleFile1"; let z = 10;

//// [/a/b/globalFile3.ts]
interface GlobalFoo { age: number }

//// [/a/b/moduleFile2.ts]
export var Foo4 = 10;

//// [/a/b/tsconfig.json]
{}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


/a/lib/tsc.js --w -p /a/b/tsconfig.json
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

[[90m12:00:34 AM[0m] Found 0 errors. Watching for file changes.



Program root files: [
  "/a/b/file1Consumer1.ts",
  "/a/b/file1Consumer2.ts",
  "/a/b/globalFile3.ts",
  "/a/b/moduleFile1.ts",
  "/a/b/moduleFile2.ts"
]
Program options: {
  "watch": true,
  "project": "/a/b/tsconfig.json",
  "configFilePath": "/a/b/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts
/a/b/globalFile3.ts
/a/b/moduleFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts
/a/b/globalFile3.ts
/a/b/moduleFile2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/modulefile1.ts (used version)
/a/b/file1consumer1.ts (used version)
/a/b/file1consumer2.ts (used version)
/a/b/globalfile3.ts (used version)
/a/b/modulefile2.ts (used version)

FsWatches::
/a/b/file1consumer1.ts: *new*
  {}
/a/b/file1consumer2.ts: *new*
  {}
/a/b/globalfile3.ts: *new*
  {}
/a/b/modulefile1.ts: *new*
  {}
/a/b/modulefile2.ts: *new*
  {}
/a/b/tsconfig.json: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/a/b: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/moduleFile1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = void 0;
function Foo() { }
exports.Foo = Foo;
;


//// [/a/b/file1Consumer1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = void 0;
exports.y = 10;


//// [/a/b/file1Consumer2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var z = 10;


//// [/a/b/globalFile3.js]


//// [/a/b/moduleFile2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo4 = void 0;
exports.Foo4 = 10;



Change:: change shape of global file

Input::
//// [/a/b/globalFile3.ts]
interface GlobalFoo { age: number }var T2: string;


Before running Timeout callback:: count: 1
1: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90m12:00:37 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:53 AM[0m] Found 0 errors. Watching for file changes.



Program root files: [
  "/a/b/file1Consumer1.ts",
  "/a/b/file1Consumer2.ts",
  "/a/b/globalFile3.ts",
  "/a/b/moduleFile1.ts",
  "/a/b/moduleFile2.ts"
]
Program options: {
  "watch": true,
  "project": "/a/b/tsconfig.json",
  "configFilePath": "/a/b/tsconfig.json"
}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts
/a/b/globalFile3.ts
/a/b/moduleFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts
/a/b/globalFile3.ts
/a/b/moduleFile2.ts

Shape signatures in builder refreshed for::
/a/b/globalfile3.ts (computed .d.ts)
/a/b/modulefile1.ts (computed .d.ts)
/a/b/file1consumer1.ts (computed .d.ts)
/a/b/file1consumer2.ts (computed .d.ts)
/a/b/modulefile2.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

//// [/a/b/moduleFile1.js] file written with same contents
//// [/a/b/file1Consumer1.js] file written with same contents
//// [/a/b/file1Consumer2.js] file written with same contents
//// [/a/b/globalFile3.js]
var T2;


//// [/a/b/moduleFile2.js] file written with same contents
