# Proximity Post-it

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues-open][issues-open-shield]][issues-url]
[![Issues-closed][issues-closed-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]

|                                              Proximity Post-it                                           |
| :------------------------------------------------------------------------------------------------------: |
|                                              ![app-icon][]                                               |
|             Express yourself and share ideas. Vite + React + TypeScript + Redux + Tailwind               |
|                          [🐞 Report a bug or 🙋‍♂️ request a feature][issues-url]                            |
| [![contributions welcome][contributions-welcome]][issues-url] [![License][badge-apache]][apache-license] |

- [Proximity Post-it](#proximity-post-it)
  - [The Project](#the-project)
    - [Task](#task)
    - [Features](#features)
    - [Built With](#built-with)
  - [How to run this project](#how-to-run-this-project)
    - [Prerequisites](#prerequisites)
    - [Run it (Quickstart with docker)](#run-it-quickstart-with-docker)
    - [Installing the project](#installing-the-project)
    - [Available Scripts](#available-scripts)
      - [`npm start`](#npm-start)
      - [`npm run build`](#npm-run-build)
    - [Learn More](#learn-more)
      - [Vite](#vite)
      - [React](#react)
      - [TypeScript](#typescript)
      - [Tailwind CSS](#tailwind-css)
      - [Formatter and Linter](#formatter-and-linter)
  - [Potential Features](#potential-features)
  - [Author](#author)
  - [Contributing](#contributing)
  - [Show your support and acknowledges](#show-your-support-and-acknowledges)
  - [License](#license)

## The Project

You are working on a new feed to promote the company social network activity, you are provided with access to the account’s posts and comments, your job is to integrate that activity into the website.

### Task

Build a ReactJS project that fetches from the posts and comments API’s, presents a list of posts and when any of the items is clicked show the list of comments that are associated with that specific post.

You are responsible for:

- Fetching the data from the API.
- Presenting the data in the view.
- Relate comments to posts.



|                                                 |
| :---------------------------------------------: |
|                   Posts API:                    |
|  <https://jsonplaceholder.typicode.com/posts>   |
|                  Comments API:                  |
| <https://jsonplaceholder.typicode.com/comments> |


### Features
[![][javascript]][javascript-url] 
[![][react]][react-url] 

- Sets `eslint` rules
- Linters
- React
- React-DOM
- React-Create-App
- Typescript
- ES6 syntax
- Export/import ES6+ notation

### Built With

- `vite`
- `ESLint`
- `npm`
- `vscode` with _ESLint_ extension
- Linux/GNU
- Love and Passion for code

## How to run this project

### Prerequisites

- `npm` 6.14 +
- `node` 14.17 +
- `docker` and `docker-compose` (optional)
- A Text Editor like VSCode
- A browser like Firefox or Chrome

### Run it (Quickstart with docker)

- Be sure to setup `docker-compose` and have `git` and `npm` working.
- Run this:

```sh
> git clone https://github.com/Israel-Laguan/proximity-post-it.git
> cd proximity-post-it
> npm i
> docker-compose build
> docker-compose up frontend
```

- Enter `localhost:3000` in a browser for the frontend.

You can also test using docker, run `docker-compose up test` or `docker-compose run --rm test`

Not a fan of Docker or need more information? Continue for instructions to learn more about how to setup your PC for run the frontend!

We used `create-react-app` to initialize this project, so it is configurated to be easy to run. Just follow the following instructions.

### Installing the project

Now that you are set up, open a terminal and:

```sh
git clone https://github.com/Israel-Laguan/proximity-post-it.git
cd proximity-post-it
npm i && npm start
```

Then open `localhost:3000` to see the app.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.
Open `localhost:3000` to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

#### Vite

[Vite](https://github.com/vitejs/vite) is a fast frontend build tool. According to the [README](https://github.com/vitejs/vite/blob/main/README.md), it consists of two major parts:

- A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

#### React

[React](https://github.com/facebook/react) is a JavaScript library for building user interfaces.

Due to its awesome renderer system, there are many [React Renderor](https://github.com/chentsulin/awesome-react-renderer). So React can be not used only Web, for example, used by [React Native](https://reactnative.dev/).

Let's dive into React and Vite can use with React.

#### TypeScript

[TypeScript](https://github.com/microsoft/TypeScript) is a superset of JavaScript. It is just one of NPM library, but it provides an original compiler.

When you use TypeScript with React, you can write JSX with TypeScript, called TSX. Then you can develop views written by  **Type-Safe** template.

#### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is modern utility-first CSS framework. It provides many CSS rules, but these are purged when production builds. So developers do not worry about CSS asset size for performance optimization.

In VSCode, I recommend to use [intellisense extension](https://tailwindcss.com/docs/intellisense).

Frequently, React developers are worried about how to write CSS in TSX(JSX) template. You must choose from CSS Modules, [styled-components](https://styled-components.com/), [linaria](https://github.com/callstack/linaria), and so on.
Additionally, CSS architecture is difficult about scoping, e.g. BEM, FLOCSS.

When you decide to use Tailwind, you only write utility-first CSS classes, you don't have to worry about them!

#### Formatter and Linter

Already set up [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). You can customize the rules.

NOTICE: The template does not use [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) and [prettier-eslint](https://github.com/prettier/prettier-eslint). So I recommend that running commands individually. e.g. `prettier && eslint`.

Please read: <https://prettier.io/docs/en/integrating-with-linters.html>.

## Potential Features

- [ ] Update style.
- [ ] \<Insert your great idea here!>.

## Author

<table style="width:100%">
<thead>
    <tr>
        <th align="center">
            <a href="https://israel-laguan.github.io" rel="nofollow">Israel Laguan</a>
        </th>
        <th align="center">
             <div>
                <img align="top" width="26px" src="https://img.icons8.com/color/20/000000/message-squared.png" /> Email me to  <a href=”contact@israellaguan.com”>contact@israellaguan.com</a>
            </div>
            <div>
                <img align="top" width="26px" src="https://img.icons8.com/color/20/000000/linkedin.png" />
                Connect to<a href="https://www.linkedin.com/in/israellaguan"> my Linkedin</a>   
            </div>
        </th>
    </tr>
</thead>
  <tr>
    <td>
        <div>
            <a href="./docs/img/photo.png" target="_blank" rel="author">
                <img src="https://avatars2.githubusercontent.com/u/36519478?s=460&v=4">
            </a>
        </div>
    </td>
    <td>
        <div>
            <img src="https://github.com/Israel-Laguan/Israel-Laguan/raw/master/docs/banner.jpg">
        </div>
    </td>
  </tr>
</table>  

## Contributing

[![contributions welcome][contributions-welcome]][issues-url]

🤝 Contributions, issues and feature requests are welcome!
Feel free to check the [issues page][issues-url].

## Show your support and acknowledges

🤗 Give a ⭐️ if you like this project!

This project is possible with help from:

- Vite configuration from [meijin][vite-conf] and [simerlec][]
- Lint configuration from [Camilo Martinez][lint-conf] and [simerlec][]
- Icons from [![Icons8][icons8-logo]][icons8] Icons8
- Banner from [canva.com](https://www.canva.com)
- Favicon from [favicon.io](https://favicon.io/emoji-favicons/)

## License

[![License][badge-apache]][apache-license]

📝 This project is licensed under the [Apache 2](LICENSE)\
Feel free to fork this project and improve it!

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Israel-Laguan/proximity-post-it?style=for-the-badge
[contributors-url]: https://github.com/Israel-Laguan/proximity-post-it/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Israel-Laguan/proximity-post-it?style=for-the-badge
[forks-url]: https://github.com/Israel-Laguan/proximity-post-it/network/members
[stars-shield]: https://img.shields.io/github/stars/Israel-Laguan/proximity-post-it?style=for-the-badge
[stars-url]: https://github.com/Israel-Laguan/proximity-post-it/stargazers
[issues-open-shield]: https://img.shields.io/github/issues/Israel-Laguan/proximity-post-it?style=for-the-badge
[issues-closed-shield]: https://img.shields.io/github/issues-closed/Israel-Laguan/proximity-post-it?style=for-the-badge
[badge-framework]: https://img.shields.io/badge/store-Redux-000?style=for-the-badge&logo=redux
[react]: https://img.shields.io/badge/React-16+-61DAFB?style=for-the-badge&logo=react
[javascript]: https://img.shields.io/badge/JAVASCRIPT-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript
[css]: https://img.shields.io/badge/style-CSS-1572B6?style=for-the-badge&logo=css3
[contributions-welcome]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge
[issues-url]: https://github.com/Israel-Laguan/proximity-post-it/issues
[badge-apache]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge
[apache-license]: https://opensource.org/licenses/Apache-2.0
[author-pic]: https://avatars2.githubusercontent.com/u/36519478?s=460&v=4
[author-github]: https://israel-laguan.github.io
[author-linkedin]: https://www.linkedin.com/in/israellaguan
[author-email]: mailto:contact@israellaguan.com
[linkedin-icon]: https://img.icons8.com/color/20/000000/linkedin.png
[email-icon]: https://img.icons8.com/color/20/000000/message-squared.png
[banner]: https://github.com/Israel-Laguan/Israel-Laguan/raw/master/docs/banner.jpg
[app-banner]: docs/app-banner.png
[app-icon]: https://img.icons8.com/pastel-glyph/64/000000/test-tube--v2.png
[icons8]: https://icons8.com/
[icons8-logo]: https://img.icons8.com/fluent/20/000000/icons8-new-logo.png
[api-logo]: https://spoonacular.com/images/spoonacular-logo-b.svg
[lint-conf]: https://dev.to/equiman/powerful-react-project-setup-3k3l
[vite-conf]: https://github.com/TeXmeijin/vite-react-ts-tailwind-starter
[simerlec]: https://github.com/simerlec/vite-react-ts-starter


<!-- URL -->
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[react-url]: https://reactjs.org/
