import { useContext } from "react";
import { ConfigContext } from "./ConfigContext";

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig debe usarse dentro de ConfigProvider");
  }
  return context;
};
