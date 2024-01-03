This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) default template, configured to use TypeScript, Tailwind CSS, `src` directory and App Router.

On top of the default Next.js setup, this starter project includes:

- **[Custom ESLint configuration](https://github.com/stsiarzhanau/eslint-config-nextjs-typescript)** with extended TypeScript support and additional rules for Tailwind CSS, Vitest, React Testing Library and more. Next.js specific rules are also included;
- **.editorconfig file**;
- **Prettier configuration** with special formatting rules for Tailwi`nd CSS;
- **Pre-commit hook** to lint and format staged files on commit with husky and lint-staged;
- **Environment for unit tests** with Vite and React Testing Library.

## Getting Started

Clone this repository. Cloning the repository will download all files including the configuration files and scripts needed to run and develop the project locally.

`cd` to the project directory and initialize new Git repository by running `rm -rf .git && git init`.

Run `npm install` to install dependencies.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Code linting and formatting

#### Code linting and formatting - General

```json
"lint": "eslint src",
"lint:fix": "eslint src --fix",
"format:check": "prettier . --ignore-unknown --check",
"format": "prettier . --ignore-unknown --write",
```

`npm run lint` - will run ESLint to lint all `.ts` and `.tsx` files in `src` directory.

`npm run lint:fix` - will run ESLint to lint all `.ts` and `.tsx` files in `src` directory and automatically fix all the found issues that can be automatically fixed.

`npm run format:check` - will run Prettier to check formatting for all files in the project according to the Prettier configuration. This command does not modify any files and only outputs the list of files that have formatting issues.

`npm run format` - will run Prettier to format all files in the project according to the Prettier configuration.

To lint and format files that are staged for commit a pre-commit hook is configured using husky and lint-staged. If there are some issues with linting or formatting the hook will try to autofix and format code and then make a commit. If issues cannot be autofixed, commit will be aborted. If autofix completely reverts all changes, commit will also be aborted.

**To get most of this setup when working in team it's highly recommeded for each contributor to have EditorConfig, Prettier and ESLint plugins / extensions installed and enabled in their editor / IDE. For ESLint extension it's recommended to enable autofix on file save, for Prettier - format on file save (and optionally on type / paste). This will ensure code is formatted and linted consistently across all contributors.** Example setup for Visual Studio Code IDE is described in a separate section of this README.

As some contributors may have some issues with editor / IDE extensions or with Git hooks, it's also recommended to run `npm run lint` and `npm run format:check` as part of CI pipeline to ensure code is properly formatted and linted.

#### Code linting and formatting - Import sorting

There are different plugins for both ESLint and Prettier to perform import sorting. For this starter [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) was chosen as IMHO it's really very simple to configure and does it's job amazingly. Also it has a great documentation.

#### Code linting and formatting - Tailwind CSS

Both ESLint (via [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)) and Prettier (via [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)) are used to lint and format Tailwind CSS code. ESLint plugin check things like deprecated class names, invalid class names, etc. Prettier plugin sorts and properly formats Tailwind CSS classes.

> To get the best possible DX with Tailwind CSS it's also highly recommended to install editor / IDE extension that adds intellisense for Tailwind classes. For example for Visual Studio Code such extension is [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

## Test environment (unit tests)

```json
"test": "vitest",
"test:run": "vitest run",
"test:ui": "vitest --ui --coverage",
"coverage": "vitest run --coverage"
```

`npm test` - will run Vitest in watch mode. When you modify your source code or the test files, Vitest smartly searches the module graph and only reruns the related tests instead of rerunning all tests.

`npm run test:run` - will perform a single tests run without watch mode.

`npm run test:ui` - can be used instead of (or alongside with) `npm test` to run Vitest in watch mode and output test results and optionally code coverage in a browser tab (using [Vitest UI](https://vitest.dev/guide/ui.html#vitest-ui)) instead of a terminal window.

`npm run coverage` - will generate code coverage reports using Vitest and output them to the `coverage/` directory.

This starter uses [Vitest](https://vitest.dev/guide/why.html) as a test runner. It has Jest compatible API, but it's faster and easier to configure than Jest. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (with additional matchers from [jest-dom](https://github.com/testing-library/jest-dom) enabled) is used for component testing. user-event (a companion library for Testing Library that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser) is also installed and can be used without any additional configuration.

[happy-dom](https://github.com/capricorn86/happy-dom) is used by default as testing environment to test React components. [jsdom](https://github.com/jsdom/jsdom) is also installed as a fallback if happy-dom is not sufficient for some tests. You can also set environment on per-file basis using [control comments](https://vitest.dev/guide/environment.html#environments-for-specific-files).

#### Test environment (unit tests) - config and setup files

`vitest.config.mts` - main Vitest [configuration file](https://vitest.dev/config/)

`vitest-setup.ts` - setup file that configures React Testing Library to be used with Vitest and jest-dom. You

`src/test-utils.tsx` (not included by default) - in your project you might want to create a [shared test utils file](https://testing-library.com/docs/react-testing-library/setup) to define common utilities, mocks and custom render method. It's not included by default as it's better to define such things on per-project basis due to different project requirements.

> Note: you can use AI tools like [Sourcegraph Cody](https://sourcegraph.com/cody) to [generate](https://docs.sourcegraph.com/cody/use-cases/generate-unit-tests) test files and test cases automatically based on your code. Cody (when used as a Visual Studio Code extension) not only generates test boilerplate for a single source file but also tries to understand your whole codebase (incl. test setup files) and logic to generate meaningful test cases with proper mocks, assertions and edge cases.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on other platforms

You can also deploy Next.js apps to other platforms. Here are some examples:

- [Netlify](https://www.netlify.com/with/nextjs/)
- [Railway](https://railway.app)

## Example Visual Studio Code setup

Here is an example of recommended VS Code extensions and settings to enhance your Next.js development experience:

// TODO
