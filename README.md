### BUG REPRO GUIDE

Bug Repro Guide for Issue:https://github.com/expo/expo/issues/21665S
1. clone and install deps using yarn
2. cd apps/client
3. yarn android (create development build)
4. yarn dev
5. After installation of the development build in you device while the metro server is running, create a new folder (say `<expo-proj-root>/src/some-folder2`)
6. copy `abc.ts` from `some-folder` to `some-folder2 `
7. Make a change in App.tsx like the following
   ```ts
     - import { a } from "src/some-folder/abc";
     + import { a } from "src/some-folder2/abc";
   ```
You will encounter the error:
```
Unable to resolve "./src/some-folder2/abc" from "App.tsx"
 ERROR  [Error: undefined Unable to resolve module ./src/some-folder2/abc from /home/ashu/Desktop/walkingpal/apps/client/App.tsx: 

None of these files exist:
  * src/some-folder2/abc(.native|.android.ts|.native.ts|.ts|.android.tsx|.native.tsx|.tsx|.android.js|.native.js|.js|.android.jsx|.native.jsx|.jsx|.android.json|.native.json|.json)
  * src/some-folder2/abc/index(.native|.android.ts|.native.ts|.ts|.android.tsx|.native.tsx|.tsx|.android.js|.native.js|.js|.android.jsx|.native.jsx|.jsx|.android.json|.native.json|.json)
> 1 | import React from "react";
  2 | import { StyleSheet, Text, View } from "react-native";
  3 | import { Button } from "react-native-paper";
  4 | import "expo-dev-client";]
Error: Unable to resolve module ./src/some-folder2/abc from /home/ashu/Desktop/walkingpal/apps/client/App.tsx: 

None of these files exist:
  * src/some-folder2/abc(.native|.android.ts|.native.ts|.ts|.android.tsx|.native.tsx|.tsx|.android.js|.native.js|.js|.android.jsx|.native.jsx|.jsx|.android.json|.native.json|.json)
  * src/some-folder2/abc/index(.native|.android.ts|.native.ts|.ts|.android.tsx|.native.tsx|.tsx|.android.js|.native.js|.js|.android.jsx|.native.jsx|.jsx|.android.json|.native.json|.json)
> 1 | import React from "react";
  2 | import { StyleSheet, Text, View } from "react-native";
  3 | import { Button } from "react-native-paper";
  4 | import "expo-dev-client";
    at ModuleResolver.resolveDependency (/home/ashu/Desktop/walkingpal/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:137:15)
    at DependencyGraph.resolveDependency (/home/ashu/Desktop/walkingpal/node_modules/metro/src/node-haste/DependencyGraph.js:260:43)
    at Object.resolve (/home/ashu/Desktop/walkingpal/node_modules/metro/src/lib/transformHelpers.js:177:21)
    at Graph._resolveDependencies (/home/ashu/Desktop/walkingpal/node_modules/metro/src/DeltaBundler/Graph.js:432:35)
    at Graph._processModule (/home/ashu/Desktop/walkingpal/node_modules/metro/src/DeltaBundler/Graph.js:218:38)
    at async Graph._traverseDependenciesForSingleFile (/home/ashu/Desktop/walkingpal/node_modules/metro/src/DeltaBundler/Graph.js:207:5)
    at async Graph.traverseDependencies (/home/ashu/Desktop/walkingpal/node_modules/metro/src/DeltaBundler/Graph.js:147:9)
    at async DeltaCalculator._getChangedDependencies (/home/ashu/Desktop/walkingpal/node_modules/metro/src/DeltaBundler/DeltaCalculator.js:247:42)
    at async DeltaCalculator.getDelta (/home/ashu/Desktop/walkingpal/node_modules/metro/src/DeltaBundler/DeltaCalculator.js:90:16)
    at async DeltaBundler.getDelta (/home/ashu/Desktop/walkingpal/node_modules/metro/src/DeltaBundler.js:67:12)
```

### 8. Then restart the server
you will find that the error is gone.
