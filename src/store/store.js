import { createStore } from "redux";
import { persistStore } from "redux-persist";

import rootReducerPersist from "../persistore/persistRootReducer";

const store = createStore(
  rootReducerPersist,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { persistor, store };
