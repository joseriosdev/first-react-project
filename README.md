# What I learnt

In this repository, you will found a single project deployed "Calculadora de Impuestos" (loan calculator) and the src code for another project based on [Brad Traversy React Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8) where he creates a Task Tracker and uses [Json Server](https://www.npmjs.com/package/json-server) as backend so he can do htpp requests. A lot of fun for this and great to start learning.

## Initializating a React App

1. Once you have installed [Node](https://nodejs.org/en/)
2. Type in CLI: `npx create-react-app`
3. Start the server `npm start`
4. Once the app is ready, run `npm run build`
5. To check out your recent build. Run `npm i -g serve` to install a basic server
6. Run as admin `serve -s build -p 7070` where build is the recently created build folder and -p 7070 is the port where is hosted
7. For **Routing** install the package `npm i react-router-dom`
* If you need react icons, use `npm i react-icons`
> Recommended to install the chrome extension **_"React Dev Tools"_** and VSCode extension **_ES7 React Snippets_**

## Creating the backend

1. Run locally `npm i json-server`
2. Add a script on your package.json with `"server": "json-server --watch db.json --port 5005"`
3. Then run the recently created script `npm run server`
4. Now you can use rest methods with the server

# React Terminology
### _In 'simple' words_

* __Component -__ A piece of code that it's rendered, can have visual stuff only or a complently elaborated system. All your react apps eventually will be a single component `App` that calls the other components. To use them, use the **import** and **export** ES6 features. Components can be created following arrow functions (the standard convention) or classes. You can customize them with your own attributes like parameters in a function.
* __JSX -__ The HTML that uses react, it's similar but there are some small diff.
* __JSX Expressions -__ Instead of using the regular attributes in HTML, like `onClick="myFunc()"`, you replace the quotes for curly braces `onClick={myFunc}`.
* __Component Props -__ Props is an object that lives inside components, they became the component's attributes that look similar to parameters or args in a function.
* __PropTypes -__ Prototype that can be imported as `import PropTypes from 'prop-types'` and allows us the developers to add some typing to the props that a component can get, for example: the `prop.age` can only be a number, so we write `age: PropTypes.number.isRequired`.
* __Styling -__ Can be done with bootstrap, inline on its own way but inline, or with regular css. You can use any other styling tech, but for now regular css works well it is imported to App.js.
* __React Lists -__ Whenever you use a JS array method for example .map(), and that method returns JSX, then that's a _React List_. This list contains a key.
* __State -__ When thinking to handle data on you cmp, you can use Props or State. The difference its that props won't change, are static, while states can mutate by using a special method.
> There are two data types that handles the cmp data, Props and State, props are declared by its parent element while using attributes and are static. When data will change, we use state instead, both have info about the cmp but state changes mostly becase user events.
* __Context API or Redux -__ While working with cmp state, you most likely going to need it in other parts of your app, that's when is useful the use of Redux, there is a solution for that coming up next.
* __Global State -__ Or App level state is when you use the state concept on the App cmp (which the one and only that renders your site), is helpful when many cmp use certain state.
* __React Hooks -__ Hooks are for UI functionality as components are for UI design. It allows you to use classes and you can also create your own hooks
* __Component lifecycle -__ Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: **Mounting** _(put the element into the DOM)_, **Updating** _(whenever is a change on the cmp state or props)_, and **Unmounting** _(when a cmp is removed from the DOM)_.

