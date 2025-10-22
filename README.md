
In case ESLint is configured to not allow using the underscore dangle, wrap it like so:
```diff
+ /* eslint-disable no-underscore-dangle */
  const store = createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
+ /* eslint-enable */
```

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);
```

In case you don't include other enhancers and middlewares, just use `devToolsEnhancer`:
```js
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));
```    

If you want to restrict it there, use `redux-devtools-extension/logOnlyInProduction`:
```js
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // options like actionSanitizer, stateSanitizer
));
```
or with middlewares and enhancers:
 ```js
 import { createStore, applyMiddleware } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

 const composeEnhancers = composeWithDevTools({
   // options like actionSanitizer, stateSanitizer
 });
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
   applyMiddleware(...middleware),
   // other store enhancers if any
 ));
 ```
> 
 If you're already checking `process.env.NODE_ENV` when creating the store, include `redux-devtools-extension/logOnly` for production environment.

 If you don’t want to allow the extension in production, just use `redux-devtools-extension/developmentOnly`.
