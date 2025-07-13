// src/app/providers/ReduxProvider.js
"use client"; // Ważne: to sprawia, że komponent jest Client Component

import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";

export function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
}
