import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import rootReducer from "../store/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["confige", "doneTask", "skipeddTask", "onProgressTask"],
};

export default persistReducer(persistConfig, rootReducer);
