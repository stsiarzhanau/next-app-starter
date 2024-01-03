This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) default template, configured to use TypeScript, Tailwind CSS, `src` directory and App Router.

On top of the default Next.js setup, this project includes:

- **[Custom ESLint configuration](https://github.com/stsiarzhanau/eslint-config-nextjs-typescript)** with extended TypeScript support and additional rules for Tailwind CSS, Vitest, React Testing Library and more... Next.js specific rules are also included;
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

## Test environment

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
