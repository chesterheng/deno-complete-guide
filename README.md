# Deno: The Complete Guide Zero to Mastery

## Table of Contents

- [Deno: The Complete Guide Zero to Mastery](#deno-the-complete-guide-zero-to-mastery)
  - [Table of Contents](#table-of-contents)
  - [Section 2: Deno Foundations](#section-2-deno-foundations)
    - [4. Why Deno?](#4-why-deno)
    - [5. Deno Runtime And V8 Engine](#5-deno-runtime-and-v8-engine)
    - [6. Deno Installation](#6-deno-installation)
    - [7. Quick Note: Installing Deno](#7-quick-note-installing-deno)
    - [10. Setting Up Our Developer Environment](#10-setting-up-our-developer-environment)
    - [11. Quick Note: Official VS Code Plugin](#11-quick-note-official-vs-code-plugin)
    - [12. Our First Deno App](#12-our-first-deno-app)
    - [13. Exercise: Our First Deno App](#13-exercise-our-first-deno-app)
    - [15. Deno Internals And Architecture](#15-deno-internals-and-architecture)
    - [17. Deno Metrics](#17-deno-metrics)
    - [18. Exercise: Deno Architecture](#18-exercise-deno-architecture)
  - [Section 3: Deno vs Node](#section-3-deno-vs-node)
    - [21. Deno Game Changers](#21-deno-game-changers)
    - [22. Deno Game Changers 2](#22-deno-game-changers-2)
    - [24. Single Executable To Rule Them All](#24-single-executable-to-rule-them-all)
    - [25. Deno Security](#25-deno-security)
    - [26. Deno Permissions](#26-deno-permissions)
    - [27. Deno Permissions 2](#27-deno-permissions-2)
    - [28. Deno Permissions 3](#28-deno-permissions-3)
  - [Section 4: Deno Modules And Tooling](#section-4-deno-modules-and-tooling)
    - [29. How Modules Work In Deno](#29-how-modules-work-in-deno)
    - [30. URL Modules](#30-url-modules)
    - [31. Standard Library](#31-standard-library)
    - [32. 3rd Party Modules](#32-3rd-party-modules)
    - [33. Deno Caching](#33-deno-caching)
    - [34. Deno Caching 2](#34-deno-caching-2)
    - [35. NPM for Deno](#35-npm-for-deno)
    - [36. Managing Module Versions](#36-managing-module-versions)
    - [37. Where the Bleep is package.json?](#37-where-the-bleep-is-packagejson)
    - [38. Deps.ts](#38-depsts)
    - [39. Locking Dependencies](#39-locking-dependencies)
    - [40. Deno Upgrade](#40-deno-upgrade)
    - [41. Reviewing Deno Modules](#41-reviewing-deno-modules)
    - [42. Deno Tooling](#42-deno-tooling)
    - [43. Deno Tooling 2](#43-deno-tooling-2)
  - [Section 5: TypeScript](#section-5-typescript)
  - [Section 6: Deno File I/O - Planets Project](#section-6-deno-file-io---planets-project)
  - [Section 7: Exercise: SpaceX Launch Data](#section-7-exercise-spacex-launch-data)
  - [Section 8: NASA Project: Deno For Backend Development](#section-8-nasa-project-deno-for-backend-development)
  - [Section 9: NASA Project: Deno Production And The Cloud (Docker + AWS)](#section-9-nasa-project-deno-production-and-the-cloud-docker--aws)
  - [Section 10: Where To Go From Here?](#section-10-where-to-go-from-here)
  - [Section 11: Bonus: How JavaScript Works](#section-11-bonus-how-javascript-works)
  - [Section 12: Bonus: Learning TypeScript](#section-12-bonus-learning-typescript)
  - [Section 13: Bonus: HTTP, AJAX, JSON and APIs](#section-13-bonus-http-ajax-json-and-apis)

## Section 2: Deno Foundations

### 4. Why Deno?

- [Deno](https://deno.land)
- Rust by Mozilla
- TypeScript by Microsoft
- V8 Engine by Google

**[⬆ back to top](#table-of-contents)**

### 5. Deno Runtime And V8 Engine

- JS / TS -> V8 Engine -> Mobile / Web

**[⬆ back to top](#table-of-contents)**

### 6. Deno Installation

```console
curl -fsSL https://deno.land/x/install/install.sh | sh
```

- Deno was installed successfully to /Users/chesterheng/.deno/bin/deno
- Manually add the directory to your $HOME/.bash_profile (or similar)
  - export DENO_INSTALL="/Users/chesterheng/.deno"
  - export PATH="$DENO_INSTALL/bin:$PATH"

```console
open /Users/chesterheng/.deno/bin/deno
/Users/chesterheng/.deno/bin/deno --help
deno
```

**[⬆ back to top](#table-of-contents)**

### 7. Quick Note: Installing Deno

[Deno online editor](https://repl.it/languages/deno#index.ts)

**[⬆ back to top](#table-of-contents)**

### 10. Setting Up Our Developer Environment

```console
deno run deno.js
deno run deno2.ts
```

<details>
<summary>deno.js</summary>

```javascript
const food = Deno.args[0];
const parent = Deno.args[1];

if (food === 'love' && parent === 'ryan') {
  console.log('🦕...Deno is born!')
} else {
  console.log('🥚...this egg needs some love')
}

setTimeout(() => {
  console.log('check')
}, 1000)

console.table(Deno.metrics())
```

</details>

<details>
<summary>deno2.ts</summary>

```typescript
const b: string = 'Chester'
console.log(b)
```

</details>

**[⬆ back to top](#table-of-contents)**

### 11. Quick Note: Official VS Code Plugin

- Download and enable [Visual Studio Code Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
- Enable Deno for your project:
  - Create a file .vscode/settings.json in your project folder:
  ```json
  {
    "deno.enable": true
  }
  ```

**[⬆ back to top](#table-of-contents)**

### 12. Our First Deno App

- [✂️ Copy and 📋 Paste Emoji](https://getemoji.com)
- [deno doc](https://doc.deno.land/builtin/stable)

```console
deno run deno.js 'love'
```

<details>
<summary>deno.js</summary>

```javascript
const food = Deno.args[0]

if(food === 'love') {
  console.log('🦕...Deno is born!')
} else {
  console.log('🥚...this egg needs some love')
}
```

</details>

**[⬆ back to top](#table-of-contents)**

### 13. Exercise: Our First Deno App

```console
deno run deno.js 'love' 'ryan'
```

<details>
<summary>deno.js</summary>

```javascript
const food = Deno.args[0];
const parent = Deno.args[1];
if (food === 'love' && parent === 'ryan') {
   console.log('🦕...Deno is born!')
}
```

</details>

**[⬆ back to top](#table-of-contents)**

### 15. Deno Internals And Architecture

|                  | Node JS | Deno  |
| ---------------- | ------- | ----- |
| Engine           | V8      | V8    |
| Written In       | C++     | Rust  |
| Asynchronous I/O | LIBUV   | TOKIO |

![](section-02/deno-process.jpg)
![](section-02/node-system.jpg)

- [Deno Architecture](https://medium.com/deno-tutorial/deno-architecture-8551fb3be80e)
- [Deno vs Node](https://medium.com/deno-tutorial/deno-vs-node-dc741d85f9d7)

**[⬆ back to top](#table-of-contents)**

### 17. Deno Metrics

![](section-02/deno-matrics.jpg)

```console
deno run deno.js
```

<details>
<summary>deno.js</summary>

```javascript
setTimeout(() => {
  console.log('check')
  console.table(Deno.metrics())
}, 1000)
```

</details>

**[⬆ back to top](#table-of-contents)**

### 18. Exercise: Deno Architecture

When do we run the Rust code?

- Deno.
- window.

|               | Node JS    | Deno      |
| ------------- | ---------- | --------- |
| Window Object | global     | window    |
| window.fetch  | node-fetch | available |

**[⬆ back to top](#table-of-contents)**

## Section 3: Deno vs Node

### 21. Deno Game Changers
### 22. Deno Game Changers 2

Deno

- First class TypeScript
- [ES Modules](https://deno.land/std@0.65.0/examples)
```javascript
import "https://deno.land/std@0.65.0/examples/welcome.ts"
import "https://deno.land/std@0.65.0/examples/chat/server.ts"
```
- Security first
```console
deno run --allow-net deno2.js
```
- ["Decentralized" modules](https://deno.land/x): developer can host modules anywhere -> 
- [Standard Library](https://deno.land/std@0.65.0)
- [Built In Tooling](https://deno.land/manual/tools)
- Browser Compatible API
  - JS can run in browser with no changes
  - same window object with browser
  - fetch is available
- Single Executable: deno
- Async returns Promises
- Opinionated Modules: [Deno Style Guide](https://deno.land/manual/contributing/style_guide)

**[⬆ back to top](#table-of-contents)**

### 24. Single Executable To Rule Them All

["deno compile" into executable](https://github.com/denoland/deno/issues/986)

**[⬆ back to top](#table-of-contents)**

### 25. Deno Security

[Permissions for CLI](https://github.com/denoland/deno/blob/master/cli/permissions.rs)

```rs
pub allow_read: PermissionState,
pub read_allowlist: HashSet<PathBuf>,
pub allow_write: PermissionState,
pub write_allowlist: HashSet<PathBuf>,
pub allow_net: PermissionState,
pub net_allowlist: HashSet<String>,
pub allow_env: PermissionState,
pub allow_run: PermissionState,
pub allow_plugin: PermissionState,
pub allow_hrtime: PermissionState,
```

**[⬆ back to top](#table-of-contents)**

### 26. Deno Permissions
### 27. Deno Permissions 2
### 28. Deno Permissions 3

- Whitelisting is the practice of explicitly allowing some identified entities access to a particular privilege, service, mobility, access or recognition. It is the opposite of blacklisting.
- [Drake — a task runner for Deno](https://github.com/srackham/drake)

```console
deno run --allow-net deno2.js
deno run --allow-env main.ts
deno run --allow-all main.ts
deno run -A main.ts
deno run -help
deno install --allow-env main.ts
section-03
deno run -A Drakefile.ts hello
```

<details>
<summary>deno2.js</summary>

```javascript
import "https://deno.land/std@0.65.0/examples/welcome.ts"
import "https://deno.land/std@0.65.0/examples/chat/server.ts"
```

</details>

<details>
<summary>Drakefile.ts</summary>

```typescript
import { desc, run, task, sh } from "https://deno.land/x/drake@v1.2.6/mod.ts";

desc("Minimal Drake task");
task("hello", [], async function() {
  console.log("Hello from Drake!");
  await sh("deno run --allow-env main.ts");
  await sh("echo Hello World");
});

run()
```

</details>

<details>
<summary>main.ts</summary>

```typescript
console.log("Hello", Deno.env.get("USER"));
```

</details>

**[⬆ back to top](#table-of-contents)**

## Section 4: Deno Modules And Tooling

### 29. How Modules Work In Deno

```console
deno info deno3.js

local: deno3.js
type: JavaScript
deps:
deno3.js
  └── deno2.js
```

<details>
<summary>deno2.js</summary>

```javascript
export function denode(input) {
  if (input.toLowerCase() === 'node') {
    return input.split("").sort().join("")
  }
  return input;
}
```

</details>

<details>
<summary>deno3.js</summary>

```javascript
import { denode } from './deno2.js'

console.log(denode("NODE"));
```

</details>

**[⬆ back to top](#table-of-contents)**

### 30. URL Modules

- [Deno Standard Library](https://deno.land/std@0.66.0)

```console
deno info deno3.js

Download https://deno.land/std@0.66.0/examples/welcome.ts
local: deno3.js
type: JavaScript
deps:
deno3.js
  ├── deno2.js
  └── https://deno.land/std@0.66.0/examples/welcome.ts
```

```console
deno info https://deno.land/std@0.66.0/examples/welcome.ts

local: /Users/chesterheng/Library/Caches/deno/deps/https/deno.land/aaa5f7b759111e731af7b564810dc454f6ecbeb452c020834e6e6782a3fd973e
type: TypeScript
compiled: /Users/chesterheng/Library/Caches/deno/gen/https/deno.land/aaa5f7b759111e731af7b564810dc454f6ecbeb452c020834e6e6782a3fd973e.js
deps:
https://deno.land/std@0.66.0/examples/welcome.ts
```

<details>
<summary>deno2.js</summary>

```javascript
export function denode(input) {
  if (input.toLowerCase() === 'node') {
    return input.split("").sort().join("")
  }
  return input;
}
```

</details>

<details>
<summary>deno3.js</summary>

```javascript
import { denode } from './deno2.js'
import "https://deno.land/std@0.66.0/examples/welcome.ts"

console.log(denode("NODE"));
```

</details>

**[⬆ back to top](#table-of-contents)**

### 31. Standard Library
**[⬆ back to top](#table-of-contents)**

### 32. 3rd Party Modules
**[⬆ back to top](#table-of-contents)**

### 33. Deno Caching
**[⬆ back to top](#table-of-contents)**

### 34. Deno Caching 2
**[⬆ back to top](#table-of-contents)**

### 35. NPM for Deno
**[⬆ back to top](#table-of-contents)**

### 36. Managing Module Versions
**[⬆ back to top](#table-of-contents)**

### 37. Where the Bleep is package.json?
**[⬆ back to top](#table-of-contents)**

### 38. Deps.ts
**[⬆ back to top](#table-of-contents)**

### 39. Locking Dependencies
**[⬆ back to top](#table-of-contents)**

### 40. Deno Upgrade
**[⬆ back to top](#table-of-contents)**

### 41. Reviewing Deno Modules
**[⬆ back to top](#table-of-contents)**

### 42. Deno Tooling
**[⬆ back to top](#table-of-contents)**

### 43. Deno Tooling 2
**[⬆ back to top](#table-of-contents)**

## Section 5: TypeScript
**[⬆ back to top](#table-of-contents)**

## Section 6: Deno File I/O - Planets Project
**[⬆ back to top](#table-of-contents)**

## Section 7: Exercise: SpaceX Launch Data
**[⬆ back to top](#table-of-contents)**

## Section 8: NASA Project: Deno For Backend Development
**[⬆ back to top](#table-of-contents)**

## Section 9: NASA Project: Deno Production And The Cloud (Docker + AWS)
**[⬆ back to top](#table-of-contents)**

## Section 10: Where To Go From Here?
**[⬆ back to top](#table-of-contents)**

## Section 11: Bonus: How JavaScript Works
**[⬆ back to top](#table-of-contents)**

## Section 12: Bonus: Learning TypeScript
**[⬆ back to top](#table-of-contents)**

## Section 13: Bonus: HTTP, AJAX, JSON and APIs
**[⬆ back to top](#table-of-contents)**
