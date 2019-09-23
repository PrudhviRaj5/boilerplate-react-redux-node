Simple and optimized React boilerplate. It includes: 

- [x] React 16.9.0
- [x] React Router Dom 5.0.1
- [x] ECMAScript 6+ and JSX support
- [x] Latest Webpack (v.4.40.2), and Webpack Dev Server (v.4.19.1)
- [x] Best minimal Webpack Config for Production & Development
- [x] Hot Module Replacement using [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [x] Babel 7 for transpiling the code
- [x] Custom Babel Preset with Decorators, Class Properties, Rest/Spread operator support, and Module Resolver
- [x] ES6 linting using Airbnb, and Recommended
- [x] SASS support with recommended style linting config 
- [x] Separate CSS stylesheets generation
- [x] Prettier for formatting the linting
- [x] Husky for checking linting before git commit & git push
- [ ] Component testing using [react-test-renderer](https://www.npmjs.com/package/react-test-renderer)
- [ ] Code Coverage

## Starting the dev server

Make sure you have the latest Stable or LTS version of Node.js installed.

1. `git clone https://github.com/KleoPetroff/react-webpack-boilerplate.git`
2. Run `npm install` or `yarn install`
3. Start the dev server using `npm start`
4. Open [http://localhost:6600](http://localhost:6600)

## Available Commands

- `npm start` - start the dev server
- `npm clean` - delete the dist folder
- `npm run build` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm run lint:eslint:fix` - to auto fix eslint issues


## Development

Run `npm start` and load the app by opening [http://localhost:5500](http://localhost:5500)

## Production code

Run `npm run build`. The production-ready code will be located under `dist` folder. You can test the build by running `npm run start:prod` and loading the app by opening [http://localhost:5005](http://localhost:5005)
