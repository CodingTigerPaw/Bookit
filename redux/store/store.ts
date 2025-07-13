import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import roomReducer from "../slices/roomSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// 1. Najpierw zdefiniuj rootReducer
const rootReducer = combineReducers({
  counter: counterReducer,
  room: roomReducer,
});

// 2. Następnie zastosuj persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 3. Konfiguracja store
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer, // Przekazujemy JEDEN zpersistowany reducer
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export const store = makeStore();
export const persistor = persistStore(store);

// 4. Typy dla TypeScript
export type RootState = ReturnType<typeof rootReducer>; // Używamy rootReducer, nie store.getState()
export type AppDispatch = typeof store.dispatch;
