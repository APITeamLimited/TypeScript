currentDirectory:: /user/username/projects/myproject useCaseSensitiveFileNames: false
Input::
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

//// [/user/username/projects/myproject/pkg0/index.ts]
export const pkg0 = 0;

//// [/user/username/projects/myproject/pkg0/tsconfig.json]
{
  "compilerOptions": {
    "composite": true
  }
}

//// [/user/username/projects/myproject/pkg1/index.ts]
export const pkg1 = 1;

//// [/user/username/projects/myproject/pkg1/tsconfig.json]
{
  "compilerOptions": {
    "composite": true
  },
  "references": [
    {
      "path": "../pkg0"
    }
  ]
}

//// [/user/username/projects/myproject/pkg2/index.ts]
export const pkg2 = 2;

//// [/user/username/projects/myproject/pkg2/tsconfig.json]
{
  "compilerOptions": {
    "composite": true
  },
  "references": [
    {
      "path": "../pkg0"
    }
  ]
}

//// [/user/username/projects/myproject/pkg3/index.ts]
export const pkg3 = 3;

//// [/user/username/projects/myproject/pkg3/tsconfig.json]
{
  "compilerOptions": {
    "composite": true
  },
  "references": [
    {
      "path": "../pkg0"
    }
  ]
}

//// [/user/username/projects/myproject/pkg4/index.ts]
export const pkg4 = 4;

//// [/user/username/projects/myproject/pkg4/tsconfig.json]
{
  "compilerOptions": {
    "composite": true
  },
  "references": [
    {
      "path": "../pkg0"
    }
  ]
}

//// [/user/username/projects/myproject/tsconfig.json]
{
  "references": [
    {
      "path": "./pkg0"
    },
    {
      "path": "./pkg1"
    },
    {
      "path": "./pkg2"
    },
    {
      "path": "./pkg3"
    },
    {
      "path": "./pkg4"
    }
  ],
  "files": []
}


/a/lib/tsc.js -b -w -v
Output::
>> Screen clear
[[90m12:00:49 AM[0m] Starting compilation in watch mode...

[[90m12:00:50 AM[0m] Projects in this build: 
    * pkg0/tsconfig.json
    * pkg1/tsconfig.json
    * pkg2/tsconfig.json
    * pkg3/tsconfig.json
    * pkg4/tsconfig.json
    * tsconfig.json

[[90m12:00:51 AM[0m] Project 'pkg0/tsconfig.json' is out of date because output file 'pkg0/tsconfig.tsbuildinfo' does not exist

[[90m12:00:52 AM[0m] Building project '/user/username/projects/myproject/pkg0/tsconfig.json'...

[[90m12:01:02 AM[0m] Project 'pkg1/tsconfig.json' is out of date because output file 'pkg1/tsconfig.tsbuildinfo' does not exist

[[90m12:01:03 AM[0m] Building project '/user/username/projects/myproject/pkg1/tsconfig.json'...

[[90m12:01:13 AM[0m] Project 'pkg2/tsconfig.json' is out of date because output file 'pkg2/tsconfig.tsbuildinfo' does not exist

[[90m12:01:14 AM[0m] Building project '/user/username/projects/myproject/pkg2/tsconfig.json'...

[[90m12:01:24 AM[0m] Project 'pkg3/tsconfig.json' is out of date because output file 'pkg3/tsconfig.tsbuildinfo' does not exist

[[90m12:01:25 AM[0m] Building project '/user/username/projects/myproject/pkg3/tsconfig.json'...

[[90m12:01:35 AM[0m] Project 'pkg4/tsconfig.json' is out of date because output file 'pkg4/tsconfig.tsbuildinfo' does not exist

[[90m12:01:36 AM[0m] Building project '/user/username/projects/myproject/pkg4/tsconfig.json'...

[[90m12:01:46 AM[0m] Found 0 errors. Watching for file changes.



Program root files: [
  "/user/username/projects/myproject/pkg0/index.ts"
]
Program options: {
  "composite": true,
  "watch": true,
  "configFilePath": "/user/username/projects/myproject/pkg0/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg0/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg0/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/pkg0/index.ts (computed .d.ts during emit)

Program root files: [
  "/user/username/projects/myproject/pkg1/index.ts"
]
Program options: {
  "composite": true,
  "watch": true,
  "configFilePath": "/user/username/projects/myproject/pkg1/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg1/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg1/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/pkg1/index.ts (computed .d.ts during emit)

Program root files: [
  "/user/username/projects/myproject/pkg2/index.ts"
]
Program options: {
  "composite": true,
  "watch": true,
  "configFilePath": "/user/username/projects/myproject/pkg2/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg2/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg2/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/pkg2/index.ts (computed .d.ts during emit)

Program root files: [
  "/user/username/projects/myproject/pkg3/index.ts"
]
Program options: {
  "composite": true,
  "watch": true,
  "configFilePath": "/user/username/projects/myproject/pkg3/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg3/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg3/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/pkg3/index.ts (computed .d.ts during emit)

Program root files: [
  "/user/username/projects/myproject/pkg4/index.ts"
]
Program options: {
  "composite": true,
  "watch": true,
  "configFilePath": "/user/username/projects/myproject/pkg4/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg4/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg4/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/pkg4/index.ts (computed .d.ts during emit)

FsWatches::
/user/username/projects/myproject/pkg0/index.ts: *new*
  {}
/user/username/projects/myproject/pkg0/tsconfig.json: *new*
  {}
/user/username/projects/myproject/pkg1/index.ts: *new*
  {}
/user/username/projects/myproject/pkg1/tsconfig.json: *new*
  {}
/user/username/projects/myproject/pkg2/index.ts: *new*
  {}
/user/username/projects/myproject/pkg2/tsconfig.json: *new*
  {}
/user/username/projects/myproject/pkg3/index.ts: *new*
  {}
/user/username/projects/myproject/pkg3/tsconfig.json: *new*
  {}
/user/username/projects/myproject/pkg4/index.ts: *new*
  {}
/user/username/projects/myproject/pkg4/tsconfig.json: *new*
  {}
/user/username/projects/myproject/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/pkg0: *new*
  {}
/user/username/projects/myproject/pkg1: *new*
  {}
/user/username/projects/myproject/pkg2: *new*
  {}
/user/username/projects/myproject/pkg3: *new*
  {}
/user/username/projects/myproject/pkg4: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/pkg0/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pkg0 = void 0;
exports.pkg0 = 0;


//// [/user/username/projects/myproject/pkg0/index.d.ts]
export declare const pkg0 = 0;


//// [/user/username/projects/myproject/pkg0/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-10197922616-export const pkg0 = 0;","signature":"-4821832606-export declare const pkg0 = 0;\n"}],"root":[2],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/pkg0/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "original": {
          "version": "-10197922616-export const pkg0 = 0;",
          "signature": "-4821832606-export declare const pkg0 = 0;\n"
        },
        "version": "-10197922616-export const pkg0 = 0;",
        "signature": "-4821832606-export declare const pkg0 = 0;\n"
      }
    },
    "root": [
      [
        2,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 776
}

//// [/user/username/projects/myproject/pkg1/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pkg1 = void 0;
exports.pkg1 = 1;


//// [/user/username/projects/myproject/pkg1/index.d.ts]
export declare const pkg1 = 1;


//// [/user/username/projects/myproject/pkg1/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-10158787190-export const pkg1 = 1;","signature":"-3530363548-export declare const pkg1 = 1;\n"}],"root":[2],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/pkg1/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "original": {
          "version": "-10158787190-export const pkg1 = 1;",
          "signature": "-3530363548-export declare const pkg1 = 1;\n"
        },
        "version": "-10158787190-export const pkg1 = 1;",
        "signature": "-3530363548-export declare const pkg1 = 1;\n"
      }
    },
    "root": [
      [
        2,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 776
}

//// [/user/username/projects/myproject/pkg2/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pkg2 = void 0;
exports.pkg2 = 2;


//// [/user/username/projects/myproject/pkg2/index.d.ts]
export declare const pkg2 = 2;


//// [/user/username/projects/myproject/pkg2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-14414619060-export const pkg2 = 2;","signature":"-6533861786-export declare const pkg2 = 2;\n"}],"root":[2],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/pkg2/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "original": {
          "version": "-14414619060-export const pkg2 = 2;",
          "signature": "-6533861786-export declare const pkg2 = 2;\n"
        },
        "version": "-14414619060-export const pkg2 = 2;",
        "signature": "-6533861786-export declare const pkg2 = 2;\n"
      }
    },
    "root": [
      [
        2,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 776
}

//// [/user/username/projects/myproject/pkg3/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pkg3 = void 0;
exports.pkg3 = 3;


//// [/user/username/projects/myproject/pkg3/index.d.ts]
export declare const pkg3 = 3;


//// [/user/username/projects/myproject/pkg3/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-14375483634-export const pkg3 = 3;","signature":"-5242392728-export declare const pkg3 = 3;\n"}],"root":[2],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/pkg3/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "original": {
          "version": "-14375483634-export const pkg3 = 3;",
          "signature": "-5242392728-export declare const pkg3 = 3;\n"
        },
        "version": "-14375483634-export const pkg3 = 3;",
        "signature": "-5242392728-export declare const pkg3 = 3;\n"
      }
    },
    "root": [
      [
        2,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 776
}

//// [/user/username/projects/myproject/pkg4/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pkg4 = void 0;
exports.pkg4 = 4;


//// [/user/username/projects/myproject/pkg4/index.d.ts]
export declare const pkg4 = 4;


//// [/user/username/projects/myproject/pkg4/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-14336348208-export const pkg4 = 4;","signature":"-3950923670-export declare const pkg4 = 4;\n"}],"root":[2],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/pkg4/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "original": {
          "version": "-14336348208-export const pkg4 = 4;",
          "signature": "-3950923670-export declare const pkg4 = 4;\n"
        },
        "version": "-14336348208-export const pkg4 = 4;",
        "signature": "-3950923670-export declare const pkg4 = 4;\n"
      }
    },
    "root": [
      [
        2,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 776
}


Change:: dts doesn't change

Input::
//// [/user/username/projects/myproject/pkg0/index.ts]
export const pkg0 = 0;const someConst2 = 10;


Before running Timeout callback:: count: 1
1: timerToBuildInvalidatedProject
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90m12:01:49 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:50 AM[0m] Project 'pkg0/tsconfig.json' is out of date because output 'pkg0/tsconfig.tsbuildinfo' is older than input 'pkg0/index.ts'

[[90m12:01:51 AM[0m] Building project '/user/username/projects/myproject/pkg0/tsconfig.json'...

[[90m12:02:02 AM[0m] Project 'pkg1/tsconfig.json' is up to date with .d.ts files from its dependencies

[[90m12:02:03 AM[0m] Updating output timestamps of project '/user/username/projects/myproject/pkg1/tsconfig.json'...

[[90m12:02:05 AM[0m] Project 'pkg2/tsconfig.json' is up to date with .d.ts files from its dependencies

[[90m12:02:06 AM[0m] Updating output timestamps of project '/user/username/projects/myproject/pkg2/tsconfig.json'...

[[90m12:02:08 AM[0m] Project 'pkg3/tsconfig.json' is up to date with .d.ts files from its dependencies

[[90m12:02:09 AM[0m] Updating output timestamps of project '/user/username/projects/myproject/pkg3/tsconfig.json'...

[[90m12:02:11 AM[0m] Project 'pkg4/tsconfig.json' is up to date with .d.ts files from its dependencies

[[90m12:02:12 AM[0m] Updating output timestamps of project '/user/username/projects/myproject/pkg4/tsconfig.json'...

[[90m12:02:14 AM[0m] Found 0 errors. Watching for file changes.



Program root files: [
  "/user/username/projects/myproject/pkg0/index.ts"
]
Program options: {
  "composite": true,
  "watch": true,
  "configFilePath": "/user/username/projects/myproject/pkg0/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg0/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/pkg0/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/pkg0/index.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/pkg0/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pkg0 = void 0;
exports.pkg0 = 0;
var someConst2 = 10;


//// [/user/username/projects/myproject/pkg0/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-7839887915-export const pkg0 = 0;const someConst2 = 10;","signature":"-4821832606-export declare const pkg0 = 0;\n"}],"root":[2],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/pkg0/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "original": {
          "version": "-7839887915-export const pkg0 = 0;const someConst2 = 10;",
          "signature": "-4821832606-export declare const pkg0 = 0;\n"
        },
        "version": "-7839887915-export const pkg0 = 0;const someConst2 = 10;",
        "signature": "-4821832606-export declare const pkg0 = 0;\n"
      }
    },
    "root": [
      [
        2,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 797
}

//// [/user/username/projects/myproject/pkg1/tsconfig.tsbuildinfo] file changed its modified time
//// [/user/username/projects/myproject/pkg2/tsconfig.tsbuildinfo] file changed its modified time
//// [/user/username/projects/myproject/pkg3/tsconfig.tsbuildinfo] file changed its modified time
//// [/user/username/projects/myproject/pkg4/tsconfig.tsbuildinfo] file changed its modified time

Change:: No change

Input::

Timeout callback:: count: 0
Immedidate callback:: count: 0
Output::

exitCode:: ExitStatus.undefined


Change:: dts change

Input::
//// [/user/username/projects/myproject/pkg0/index.ts]
export const pkg0 = 0;const someConst2 = 10;export const someConst = 10;


Before running Timeout callback:: count: 1
2: timerToBuildInvalidatedProject
After running Timeout callback:: count: 1
3: timerToBuildInvalidatedProject
Output::
>> Screen clear
[[90m12:02:17 AM[0m] File change detected. Starting incremental compilation...

[[90m12:02:18 AM[0m] Project 'pkg0/tsconfig.json' is out of date because output 'pkg0/tsconfig.tsbuildinfo' is older than input 'pkg0/index.ts'

[[90m12:02:19 AM[0m] Building project '/user/username/projects/myproject/pkg0/tsconfig.json'...



Program root files: [
  "/user/username/projects/myproject/pkg0/index.ts"
]
Program options: {
  "composite": true,
  "watch": true,
  "configFilePath": "/user/username/projects/myproject/pkg0/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg0/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/pkg0/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/pkg0/index.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/pkg0/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someConst = exports.pkg0 = void 0;
exports.pkg0 = 0;
var someConst2 = 10;
exports.someConst = 10;


//// [/user/username/projects/myproject/pkg0/index.d.ts]
export declare const pkg0 = 0;
export declare const someConst = 10;


//// [/user/username/projects/myproject/pkg0/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"1748855762-export const pkg0 = 0;const someConst2 = 10;export const someConst = 10;","signature":"-6216230055-export declare const pkg0 = 0;\nexport declare const someConst = 10;\n"}],"root":[2],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/pkg0/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "original": {
          "version": "1748855762-export const pkg0 = 0;const someConst2 = 10;export const someConst = 10;",
          "signature": "-6216230055-export declare const pkg0 = 0;\nexport declare const someConst = 10;\n"
        },
        "version": "1748855762-export const pkg0 = 0;const someConst2 = 10;export const someConst = 10;",
        "signature": "-6216230055-export declare const pkg0 = 0;\nexport declare const someConst = 10;\n"
      }
    },
    "root": [
      [
        2,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 862
}


Change:: build pkg1,pkg2,pkg3,pkg4

Input::

Before running Timeout callback:: count: 1
3: timerToBuildInvalidatedProject
After running Timeout callback:: count: 0
Output::
[[90m12:02:33 AM[0m] Project 'pkg1/tsconfig.json' is out of date because output 'pkg1/index.js' is older than input 'pkg0/tsconfig.json'

[[90m12:02:34 AM[0m] Building project '/user/username/projects/myproject/pkg1/tsconfig.json'...

[[90m12:02:35 AM[0m] Updating unchanged output timestamps of project '/user/username/projects/myproject/pkg1/tsconfig.json'...

[[90m12:02:37 AM[0m] Project 'pkg2/tsconfig.json' is out of date because output 'pkg2/index.js' is older than input 'pkg0/tsconfig.json'

[[90m12:02:38 AM[0m] Building project '/user/username/projects/myproject/pkg2/tsconfig.json'...

[[90m12:02:39 AM[0m] Updating unchanged output timestamps of project '/user/username/projects/myproject/pkg2/tsconfig.json'...

[[90m12:02:41 AM[0m] Project 'pkg3/tsconfig.json' is out of date because output 'pkg3/index.js' is older than input 'pkg0/tsconfig.json'

[[90m12:02:42 AM[0m] Building project '/user/username/projects/myproject/pkg3/tsconfig.json'...

[[90m12:02:43 AM[0m] Updating unchanged output timestamps of project '/user/username/projects/myproject/pkg3/tsconfig.json'...

[[90m12:02:45 AM[0m] Project 'pkg4/tsconfig.json' is out of date because output 'pkg4/index.js' is older than input 'pkg0/tsconfig.json'

[[90m12:02:46 AM[0m] Building project '/user/username/projects/myproject/pkg4/tsconfig.json'...

[[90m12:02:47 AM[0m] Updating unchanged output timestamps of project '/user/username/projects/myproject/pkg4/tsconfig.json'...

[[90m12:02:49 AM[0m] Found 0 errors. Watching for file changes.



Program root files: [
  "/user/username/projects/myproject/pkg1/index.ts"
]
Program options: {
  "composite": true,
  "watch": true,
  "configFilePath": "/user/username/projects/myproject/pkg1/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg1/index.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

Program root files: [
  "/user/username/projects/myproject/pkg2/index.ts"
]
Program options: {
  "composite": true,
  "watch": true,
  "configFilePath": "/user/username/projects/myproject/pkg2/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg2/index.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

Program root files: [
  "/user/username/projects/myproject/pkg3/index.ts"
]
Program options: {
  "composite": true,
  "watch": true,
  "configFilePath": "/user/username/projects/myproject/pkg3/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg3/index.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

Program root files: [
  "/user/username/projects/myproject/pkg4/index.ts"
]
Program options: {
  "composite": true,
  "watch": true,
  "configFilePath": "/user/username/projects/myproject/pkg4/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/pkg4/index.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/pkg1/tsconfig.tsbuildinfo] file changed its modified time
//// [/user/username/projects/myproject/pkg2/tsconfig.tsbuildinfo] file changed its modified time
//// [/user/username/projects/myproject/pkg3/tsconfig.tsbuildinfo] file changed its modified time
//// [/user/username/projects/myproject/pkg4/tsconfig.tsbuildinfo] file changed its modified time

Change:: No change

Input::

Timeout callback:: count: 0
Immedidate callback:: count: 0
Output::

exitCode:: ExitStatus.undefined

