# TREE

* [Create React App](https://github.com/facebook/create-react-app).
* [Redux JS](https://redux.js.org/).

### Dependencies
* uuid
* react-dom-route
* @redux/toolki

## Configure Redux

<font size="5"> `npx create-app-react`</font>

```
cd App > Store.js
```
### Reducer
```js
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";

export default configureStore({ 
    reducer: {
        tasks: tasksReducer
    }
});
```

---

```
cd features > tasks > Slice.js
```
### CreateSlice
```javascript
import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice(
    {
    name: "tasks",
    initialState,
    reducers: {}
    }})

export default Slice.reducer;
```
---
## Modify APP.js
```javascript
import {Provider} from 'react-redux';
import store from './App/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
```
