# Install 

<font size="5"> `npx create-app-react name_proyect`</font>
<br>
<font size="5"> `cd name_proyect`</font>
<br>
<font size="5"> `npm start`</font>


## Links

* [Create React App](https://github.com/facebook/create-react-app).
* [Redux JS](https://redux.js.org/).

### Dependencies
* uuid
* react-dom-route
* @redux/toolki

## Configure Redux 

```
cd App > Store.js
```
### Reducer `Redux`
```js
import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "../features/tasks/Storage";

export default configureStore({ 
    reducer: {
        tasks: commentReducer
    }
});
```

---

```
cd features > tasks > Storage.js
```
### CreateSlice `Redux`
```javascript
import { createSlice } from "@reduxjs/toolkit";

export const Storage = createSlice(
    {
    name: "tasks",
    initialState,
    reducers: {}
    }})

export default Storage.reducer;
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

## Modify App.js `Step 2` (implement `react-dom-route`)
```js
import './App.css';
import CommentSubmit from './components/CommentSubmit';
import CommentList from './components/CommentList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<CommentList />} />
        <Route path="/create" element={<CommentSubmit />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```
