currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/user/username/projects/myproject/lib/app.ts]
myapp.component("hello");

//// [/user/username/projects/myproject/tsconfig.json]
{
  "compilerOptions": {
    "module": "none",
    "types": [
      "@myapp/ts-types"
    ]
  }
}

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


/a/lib/tsc.js --w -p /user/username/projects/myproject/tsconfig.json
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

[91merror[0m[90m TS2688: [0mCannot find type definition file for '@myapp/ts-types'.
  The file is in the program because:
    Entry point of type library '@myapp/ts-types' specified in compilerOptions

  [96muser/username/projects/myproject/tsconfig.json[0m:[93m5[0m:[93m7[0m
    [7m5[0m       "@myapp/ts-types"
    [7m [0m [96m      ~~~~~~~~~~~~~~~~~[0m
    File is entry point of type library specified here.

[[90m12:00:26 AM[0m] Found 1 error. Watching for file changes.



Program root files: [
  "/user/username/projects/myproject/lib/app.ts"
]
Program options: {
  "module": 0,
  "types": [
    "@myapp/ts-types"
  ],
  "watch": true,
  "project": "/user/username/projects/myproject/tsconfig.json",
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib/app.ts

No cached semantic diagnostics in the builder::

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/lib/app.ts (used version)

PolledWatches::
/user/username/projects/myproject/node_modules: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/lib/app.ts: *new*
  {}
/user/username/projects/myproject/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/lib/app.js]
myapp.component("hello");



Change:: npm install ts-types

Input::
//// [/user/username/projects/myproject/node_modules/@myapp/ts-types/package.json]
{
  "version": "1.65.1",
  "types": "types/somefile.define.d.ts"
}

//// [/user/username/projects/myproject/node_modules/@myapp/ts-types/types/somefile.define.d.ts]

declare namespace myapp {
    function component(str: string): number;
}


PolledWatches::
/user/username/projects/node_modules:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/node_modules:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/lib/app.ts:
  {}
/user/username/projects/myproject/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/node_modules: *new*
  {}

Before running Timeout callback:: count: 2
11: timerToInvalidateFailedLookupResolutions
12: timerToUpdateProgram
After running Timeout callback:: count: 1
13: timerToUpdateProgram
Before running Timeout callback:: count: 1
13: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
sysLog:: /user/username/projects/myproject/node_modules:: Changing watcher to PresentFileSystemEntryWatcher

>> Screen clear
[[90m12:00:39 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:43 AM[0m] Found 0 errors. Watching for file changes.



Program root files: [
  "/user/username/projects/myproject/lib/app.ts"
]
Program options: {
  "module": 0,
  "types": [
    "@myapp/ts-types"
  ],
  "watch": true,
  "project": "/user/username/projects/myproject/tsconfig.json",
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib/app.ts
/user/username/projects/myproject/node_modules/@myapp/ts-types/types/somefile.define.d.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib/app.ts
/user/username/projects/myproject/node_modules/@myapp/ts-types/types/somefile.define.d.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/node_modules/@myapp/ts-types/types/somefile.define.d.ts (used version)
/user/username/projects/myproject/lib/app.ts (computed .d.ts)

PolledWatches::
/user/username/projects/node_modules:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/lib/app.ts:
  {}
/user/username/projects/myproject/node_modules/@myapp/ts-types/package.json: *new*
  {}
/user/username/projects/myproject/node_modules/@myapp/ts-types/types/somefile.define.d.ts: *new*
  {}
/user/username/projects/myproject/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/node_modules:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/lib/app.js] file written with same contents

Change:: No change, just check program

Input::

Timeout callback:: count: 0
Immedidate callback:: count: 0
Output::

exitCode:: ExitStatus.undefined

