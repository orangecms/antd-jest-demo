## About 🐈
This is a demo to show how to test React components with some extras.

Involved are React, [Ant Design](http://ant.design), Babel, Jest, Enzyme, webpack, some custom CSS, cats, and emoji 🐢.

### Configuration
Here comes the tricky part. These are some things you need to consider when testing
with Jest:
* Jest automatically mocks your modules, you need to [unmock them](https://facebook.github.io/jest/docs/api.html#jestunmockmodulename) - and actually, they are stubbed
* Jest can [use tools like webpack](http://facebook.github.io/jest/docs/tutorial-webpack.html) to preprocess files

## Try it out 🚀
### Installation
Just install the Node modules:
```bash
npm i
```

### Linting
ESlint is configured as a lint script in `package.json`:
```bash
npm run lint
```

### Run the tests
The test script in `package.json` will run Jest using the default path `__tests__`:
```bash
npm test
```

### Preview the components
Components can be previewed via [React Storybook](http://getstorybook.io).
It will be available on (http://localhost:9900) if you run:
```bash
npm start
```

## LICENSE

![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png) WTFPL (http://www.wtfpl.net/)

