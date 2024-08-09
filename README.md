# Angular Boilerplate

This opinionated Angular starter focuses on the latest Angular features and best practices. It offers essential features for flexibility and scalability, minimizing unnecessary overhead. The codebase is lightweight yet robust, allowing developers to choose their preferred technologies like UI component libraries, state management, server-side rendering, etc. Its flexible boilerplate enables easy customization and adaptation to unique project requirements.

## ⚗️ Features

- [Angular 16](https://angular.io/docs)
- [PNPM](https://pnpm.io/), [esbuild](https://esbuild.github.io/)
- [Standalone components](https://angular.io/guide/standalone-components)
- [Signals](https://angular.io/guide/signals)
- [Lazy loading](https://angular.io/guide/lazy-loading-ngmodules)
- [PWA](https://angular.io/guide/service-worker-getting-started)
- [I18n](https://ngneat.github.io/transloco/)
- [Taiga UI](https://taiga-ui.dev/)
- OS/Light/Dark themes
- Lightweight, fast, and built using state-of-the-art technology.

## ✅ Ready-to-use

### UI Frameworks

- [Taiga UI](https://taiga-ui.dev/)

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/).

## ⚙ Prerequisites

- Node.js ([^16.14.0 || ^18.10.0](https://angular.io/guide/versions)): <https://nodejs.org/en/>
- PNPM: <https://pnpm.io/>
- Docker (optional): <https://www.docker.com/>

## 🏹 Start development

> **Note:**
> You have three options to start a new project based on this template:
>
> 1. Create a new GitHub repository from this template.
> 2. Clone this repository to start with a clean git history.
> 3. Scaffold a project fork on StackBlitz.

### Install dependencies

```sh
pnpm install # run `npm install -g pnpm` if you don't have pnpm installed
```

### Run project

```sh
pnpm dev
```

## 🐳 Docker

Create an image of the project.

```sh
docker buildx build -t angular-boilerplate:latest .
```

Run the image of the project.

```sh
docker run --rm -p 8080:80 -d angular-boilerplate:latest
```

## 🧙‍♂️ Commands

| Command         | Description                                              | npm                     | yarn                 | pnpm                 |
| --------------- | -------------------------------------------------------- | ----------------------- | -------------------- | -------------------- |
| `dev`           | Starts the development server                            | `npm run dev`           | `yarn dev`           | `pnpm dev`           |
| `dev:host`      | Starts the development server with a custom host         | `npm run dev`           | `yarn dev`           | `pnpm dev`           |
| `build`         | Builds the production code                               | `npm run build`         | `yarn build`         | `pnpm build`         |
| `watch`         | Builds the production code and watches for changes       | `npm run watch`         | `yarn watch`         | `pnpm watch`         |
| `test`          | Runs the unit tests                                      | `npm run test`          | `yarn test`          | `pnpm test`          |
| `test:e2e`      | Open Cypress                                             | `npm run test`          | `yarn test`          | `pnpm test`          |
| `test:headless` | Runs the unit tests in headless mode                     | `npm run test:headless` | `yarn test:headless` | `pnpm test:headless` |
| `lint`          | Runs the linter                                          | `npm run lint`          | `yarn lint`          | `pnpm lint`          |
| `lint:fix`      | Runs the linter and fixes any linting errors             | `npm run lint:fix`      | `yarn lint:fix`      | `pnpm lint:fix`      |
| `lint:staged`   | Runs the linter on staged files                          | `npm run lint:staged`   | `yarn lint:staged`   | `pnpm lint:staged`   |
| `stylelint`     | Runs the style linter                                    | `npm run stylelint`     | `yarn stylelint`     | `pnpm stylelint`     |
| `stylelint:fix` | Runs the style linter and fixes any style linting errors | `npm run stylelint:fix` | `yarn stylelint:fix` | `pnpm stylelint:fix` |
| `format`        | Formats the code with prettier                           | `npm run format`        | `yarn format`        | `pnpm format`        |
