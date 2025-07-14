import { roomType } from "@/redux/types/roomType";
import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "redux";

// Typy podstawowe
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ActionMap = Record<string, Record<HttpMethod, string>>;

// Interfejsy parametrów
interface NexusQuery<R = unknown> {
  slice: string;
  type: "GET";
  selectorKey?: string;
  __returnType?: R;
}

interface NexusCommand<T = unknown> {
  slice: string;
  type: "POST" | "PUT" | "DELETE";
  data?: T;
}

// Typ stanu aplikacji (przykładowy, dostosuj do swojego AppState)
interface AppState {
  counter: {
    value: number;
  };
  room: {
    rooms: roomType;
  };
}

// Strategie dla różnych typów operacji
const NexusStrategies = {
  // Strategia dla zapytań (GET)

  GET: {
    useExecute(params: { slice: string; selectorKey: string }) {
      return useSelector((state: AppState) => {
        const sliceState = state[params.slice as keyof AppState];
        if (sliceState) {
          const selectedValue =
            sliceState[params.selectorKey as keyof typeof sliceState];
          return selectedValue;
        }
        return undefined;
      });
    },
  },
  // Strategia dla mutacji (POST, PUT, DELETE)
  MUTATE: {
    useExecute(dispatch: Dispatch<Action>, action: string, data?: unknown) {
      dispatch({ type: action, payload: data });
    },
  },
};

const actionMap: ActionMap = {
  counter: {
    GET: "counter/getValue",
    POST: "counter/increment",
    PUT: "counter/setValue",
    DELETE: "counter/reset",
  },
  room: {
    GET: "room/getValue",
    DELETE: "room/reset",
    POST: "room/setValue",
    PUT: "",
  },
};

// Deklaracje przeciążeń dla Hooka useNexus

/**
 * Przeciążenie dla zapytań (GET).
 * Zwraca bezpośrednio dane ze stanu Redux.
 * @template R Oczekiwany typ zwracanych danych.
 * @param params Obiekt z 'slice', 'type: "GET"' i opcjonalnym 'selectorKey'.
 * @returns Dane typu R ze stanu Redux.
 */
export function useNexus<R>(params: NexusQuery<R>): R;

/**
 * Przeciążenie dla komend (POST, PUT, DELETE).
 * Zwraca funkcję, którą należy wywołać, aby wykonać mutację.
 * @template T Typ danych, które będą przekazane do mutacji.
 * @param params Obiekt z 'slice' i 'type: "POST" | "PUT" | "DELETE"'.
 * @returns Funkcja przyjmująca dane typu T i nic nie zwracająca (void).
 */
export function useNexus<T>(params: NexusCommand<T>): (data?: T) => void;

// Główna implementacja Hooka useNexus
/**
 * Główna implementacja Hooka useNexus do interakcji ze stanem Redux.
 * Obsługuje zarówno zapytania (GET) jak i komendy (POST, PUT, DELETE).
 * @param params Parametry określające operację (query lub command).
 * @returns Dane dla zapytań (GET) lub funkcję dla komend (POST, PUT, DELETE).
 * @throws Error w przypadku nieobsługiwanego slice/type lub brakujących danych dla mutacji (z wyjątkiem DELETE).
 */
export function useNexus(params: NexusQuery | NexusCommand): unknown {
  const dispatch = useDispatch<Dispatch<Action>>();
  const normalizedSlice = params.slice.toLowerCase();
  const actionType = actionMap[normalizedSlice]?.[params.type];

  // Walidacja: Sprawdź, czy akcja jest zdefiniowana w mapie akcji
  if (!actionType) {
    throw new Error(
      `Unsupported slice/type: ${params.slice}/${params.type}. Please check your actionMap.`
    );
  }

  // Obsługa zapytań (GET)
  if (params.type === "GET") {
    const queryParams = params as NexusQuery;
    const selectorKey = queryParams.selectorKey || "value";
    return NexusStrategies.GET.useExecute({
      slice: normalizedSlice,
      selectorKey,
    });
  }

  return (data: unknown) => {
    NexusStrategies.MUTATE.useExecute(dispatch, actionType, data);
  };
}
