<!-- .github/copilot-instructions.md
     Purpose: concise, repo-specific guidance for AI coding agents working on this codebase.
-->

# Quick orientation for coding agents

- Project type: React Native app (React 19.1.1 / React Native 0.82.1). See `package.json` for versions and scripts.
- Entry point: `index.js` registers the root component from `App.jsx`.
- Note: repo contains mixed JS/TS artifacts (there is a `tsconfig.json` and a TS test), but runtime app code currently uses `.js`/`.jsx` files.

## Big picture architecture

- Single React Native application with native projects under `android/` and `ios/`.
- JS layer is small and standard: `index.js` -> `App.jsx`. Native code is the usual RN scaffold (Gradle for Android, Xcode/Pods for iOS).
- Metro (RN bundler) serves JS (default port 8081). Android build may embed a `react_native_dev_server_ip` (see generated resources under `android/app/build/...`) so expect local-dev IPs to sometimes be baked into debug builds.

## Where to start making changes

- To change UI/behavior: edit `App.jsx` or add new components under the repo root (there is no `src/` enforced convention).
- Entry wiring: `index.js` (registers component name from `app.json`).

## Developer workflows (commands and tips)

- Start Metro dev server (fast refresh):

  npm start

- Run on Android (requires Android SDK/emulator or device):

  npm run android

- Run on iOS (macOS, CocoaPods required):

  # first-time / after native dependency changes
  bundle install
  bundle exec pod install --project-directory=ios

  npm run ios

- Linting and formatting: `npm run lint` (project uses `@react-native/eslint-config` + Prettier). Follow existing eslint rules.
- Tests: `npm test` runs Jest. Unit tests live in `__tests__/` (example: `__tests__/App.test.tsx`).

## Important project-specific notes

- Node engine: `package.json` specifies `node >=20`. Use that environment for local runs.
- Mixed JS/TS: there is a `tsconfig.json` and TypeScript/TSX tests, but the app root file is `App.jsx`. When adding new files prefer consistency: if you add TS, update imports and ensure build tooling matches.
- Watch out for generated native build artifacts: `android/app/build/` and `ios/Pods/` (don't edit generated files). Large auto-generated folders exist — prefer editing source under `android/app/src/main` or `ios/PracticeApp`.
- Dev server IP: debug Android build may include a hard-coded `react_native_dev_server_ip` (look under `android/app/build/.../values/gradleResValues.xml`) — if Metro runs on a different machine/IP update that value or use the in-app Dev Menu to change packager host.

## Integration & dependencies

- Native integration points: `android/` (Gradle, `gradlew`), `ios/` (Xcode project + `Podfile`).
- Autolinking is enabled (standard RN autolinking); native module changes usually require `pod install` (iOS) and Gradle sync (Android).
- Key deps declared in `package.json`: `react`, `react-native`, `react-native-safe-area-context`, and `@react-native/new-app-screen`.

## Project conventions and patterns (observable)

- Single-root RN app — there is no explicit feature-folder structure yet. When adding features, use a clear folder (e.g. `src/components`, `src/screens`) and keep index registration in `index.js`.
- Tests are colocated in `__tests__`. Follow the existing Jest setup in `jest.config.js` and type hints in `@types/*` devDependencies.
- Keep styles with components (inline StyleSheet.create) as the scaffold does.

## Files to inspect when debugging or changing behavior (examples)

- `index.js` — app registration and bundle entry.
- `App.jsx` — current UI root (small file; good starting point for PRs).
- `package.json` — scripts and dependency versions (run commands listed above).
- `README.md` — contains RN setup notes (CocoaPods, Metro); useful for environment tips.
- `__tests__/App.test.tsx` and `jest.config.js` — testing examples and configuration.

## Example small tasks (how an agent should implement)

- Change root text: edit `App.jsx` (Text element shows "App"). Run `npm start` + `npm run android` to verify on device/emulator.
- Add a JS component: create `src/components/MyButton.jsx` and import in `App.jsx`. No native changes required.

## Safety / scope rules for autonomous edits

- Don't modify files under `android/app/build/` or `ios/Pods/` — they are generated.
- Avoid changing Gradle/Xcode plumbing unless the user asks explicitly; small RN JS changes are preferred.

---

If anything above is unclear or you'd like more details (example: a suggested folder structure, or adding CI/test harness), tell me which area to expand and I will update this file.
