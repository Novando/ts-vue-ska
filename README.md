# TS Vue Ska
![TS Vue Ska](https://ik.imagekit.io/4e2sp9pwo/github-banner/ts-vue-ska.webp)
Boilerplate for Vue (Composition API) frontend project using Typescript.

## Overview
### Using
- Vue 3
- Vite
- Tailwind CSS
- Vue Router
- Pinia

### Feature
- Toaster
- Atomic design
- SVG as component

## Instruction
### Prerequisite
- NodeJs v22.16.0 or later
- Typescript

### How to Develop
1. (Mandatory if using Yarn or PNPM from `corepack`) disable auto pin by running one of following command:
```sh
# Option A: disable only this session
export COREPACK_ENABLE_AUTO_PIN=0

# Option B: disable permanently
shell_rc="$HOME/.${SHELL##*/}rc" \
  && grep -qxF 'export COREPACK_ENABLE_AUTO_PIN=0' "$shell_rc" \
  || echo 'export COREPACK_ENABLE_AUTO_PIN=0' >> "$shell_rc"
```
2. Duplicate `.env.sample` as `.env.local`, adjust the value to your desire.
3. Run one of following command:
```sh
#if using NPM
npm run dev

#if using Yarn
yarn dev

# if using PNPM
pnpm dev
```
Note: For more documentation, check README.md file inside corresponded directory