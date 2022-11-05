# React project initialized

This is just a intial react project repository that has been already set up with mui (as style framework), i18n and theming features so it can make easier init a new react project with this features.

---

## Technologies found
- [React v18](https://reactjs.org/)
- [Typescript v4.8](https://www.typescriptlang.org/)
- [Vite.js](https://vitejs.dev/)
- [Mui v5.10](https://mui.com/)
- [Node v16.18](https://nodejs.org/en/)

## Features already included
- Internazionalization (i18n). It has set two languages so far: `Spanish (es)` and `English (en)`.
- Styled with Mui.
- `Silka` font as custom one.
- Theming, using `dark`, `light` and `system` color modes. `system` is set by default.
- An component called `AppConfigMenu.tsx`, where the user can set both app locale and theme.
- A `404 not found` page already built.
- `React router` is already set and included.

## How to run the project?
1. Clone this repository.
2. Open the project on your favorite IDE or Code editor.
3. Run `npm install` to install the dependencies.
4. Run the command `npm run dev` to launch the poject and start making changes.

## What needs to be changed?
- You need to change the icon svg files to the ones that you're using on the project. You can find them at `/scr/assets/images/full-logo.svg` and at `/public/icon-logo.svg`, as well as the `title` tag on `index.html`. This icon files are used in `/src/App.tsx` and `/src/pages/NotFoundPage.tsx`.
- You can also change the custom font that's already set. Keep in mind you need to use `.ttf` files and change names and references at `/src/index.css` and `src/constants/MuiThemeOptions.ts`.
