# Atmos Coding Challenge by [Jonathan Chuang](https://jonathanchuang.me/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Libraries
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-redux](https://react-redux.js.org/tutorials/quick-start)
- [Material UI](https://material-ui.com/)
- [Material UI Icons](https://material-ui.com/components/icons/#icons)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## File Organization
- Views: Complete page views built with components
- Components: Building blocks to create view pages
- api: Mock API
- Constants: Constant data
- Store: redux store
- Reducers: redux reducers

## Bugs/Future Improvements

A list of features that could've been implemented better/would've loved to discuss with a co-worker to figure out

- [Usage of Material UI Modal](https://github.com/j0nathanchuang/atmos-coding-challenge/blob/main/src/components/shared/Modal.jsx): See comment in the attached file
- [Best usage of URL queries](https://github.com/j0nathanchuang/atmos-coding-challenge/blob/main/src/components/shared/Card.jsx): Could not figure out how to do this correctly. Had some success moving the Modal component into the View component but functionality was not right either
- [Best usage of Redux](https://github.com/j0nathanchuang/atmos-coding-challenge/tree/main/src/reducers): Not proficient in redux yet, only familiar with an already built out redux code base at Capital One. Struggled to build from scratch
- [Usage of PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html): I think I definitely should've used this (learned about this good practice at Capital One)
- Duplicate code: in hindsight, I used a lot of duplicate code to format text, could be put into util functions