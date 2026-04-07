// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: contexts/ConfigContext.tsx
// ============================================
export { ConfigContext };
import {
  createContext,
  useReducer,
  useEffect,
  type ReactNode,
} from "react";

// ============================================
// TIPOS
// ============================================

// TODO: Define los tipos para el estado de configuración
interface ConfigState {
  theme: "light" | "dark" | "system";
  fontSize: "small" | "medium" | "large";
  density: "compact" | "normal" | "spacious";
  notifications: {
    email: boolean;
    push: boolean;
    sound: boolean;
  };
}

// TODO: Define las acciones del reducer usando discriminated unions
type ConfigAction =
  | { type: "SET_THEME"; payload: ConfigState["theme"] }
  | { type: "SET_FONT_SIZE"; payload: ConfigState["fontSize"] }
  | { type: "SET_DENSITY"; payload: ConfigState["density"] }
  | {
      type: "SET_NOTIFICATION";
      payload: {
        key: keyof ConfigState["notifications"];
        value: boolean;
      };
    }
  | { type: "RESET" };

// ============================================
// CONSTANTES
// ============================================

// TODO: Define valores por defecto y key de localStorage
const STORAGE_KEY = "app-config";

const defaultConfig: ConfigState = {
  theme: "light",
  fontSize: "medium",
  density: "normal",
  notifications: {
    email: true,
    push: true,
    sound: false,
  },
};

// ============================================
// REDUCER
// ============================================

// TODO: Implementa el reducer para manejar las acciones
const configReducer = (
  state: ConfigState,
  action: ConfigAction,
): ConfigState => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };

    case "SET_FONT_SIZE":
      return { ...state, fontSize: action.payload };

    case "SET_DENSITY":
      return { ...state, density: action.payload };

    case "SET_NOTIFICATION":
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.payload.key]: action.payload.value,
        },
      };

    case "RESET":
      return defaultConfig;

    default:
      return state;
  }
};

// ============================================
// CONTEXT Y HOOKS
// ============================================

interface ConfigContextValue extends ConfigState {
  setTheme: (theme: ConfigState["theme"]) => void;
  setFontSize: (size: ConfigState["fontSize"]) => void;
  setDensity: (density: ConfigState["density"]) => void;
  setNotification: (
    key: keyof ConfigState["notifications"],
    value: boolean,
  ) => void;
  reset: () => void;
}

// TODO: Crea el contexto con undefined para forzar validación
const ConfigContext = createContext<ConfigContextValue | undefined>(undefined);


// ============================================
// PROVIDER
// ============================================

// TODO: Implementa el Provider con:
// 1. Inicialización desde localStorage
// 2. Persistencia cuando cambia el estado
// 3. Aplicación de tema al DOM (data-theme attribute)
// 4. Detección de preferencia del sistema

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [state, dispatch] = useReducer(
    configReducer,
    defaultConfig,
    (initial) => {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initial;
    },
  );

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Aplicar tema al DOM
  useEffect(() => {
    const root = document.documentElement;

    if (state.theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      root.setAttribute("data-theme", prefersDark ? "dark" : "light");
    } else {
      root.setAttribute("data-theme", state.theme);
    }
  }, [state.theme]);

  // Acciones
  const setTheme = (theme: ConfigState["theme"]) =>
    dispatch({ type: "SET_THEME", payload: theme });

  const setFontSize = (size: ConfigState["fontSize"]) =>
    dispatch({ type: "SET_FONT_SIZE", payload: size });

  const setDensity = (density: ConfigState["density"]) =>
    dispatch({ type: "SET_DENSITY", payload: density });

  const setNotification = (
    key: keyof ConfigState["notifications"],
    value: boolean,
  ) =>
    dispatch({
      type: "SET_NOTIFICATION",
      payload: { key, value },
    });

  const reset = () => dispatch({ type: "RESET" });

  return (
    <ConfigContext.Provider
      value={{
        ...state,
        setTheme,
        setFontSize,
        setDensity,
        setNotification,
        reset,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

