// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/Form/Form.tsx
// ============================================

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type FormEvent,
  type InputHTMLAttributes,
} from "react";

// ============================================
// CONTEXT INTERNO
// ============================================

// TODO: Crea un contexto interno para el Form
interface FormContextValue {
  values: Record<string, string>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  setValue: (name: string, value: string) => void;
  setError: (name: string, error: string) => void;
  setTouched: (name: string) => void;
}

const FormContext = createContext<FormContextValue | undefined>(undefined);

// ============================================
// FIELD CONTEXT
// ============================================

// TODO: Contexto para cada Field individual
interface FieldContextValue {
  name: string;
}

const FieldContext = createContext<FieldContextValue | undefined>(undefined);

// ============================================
// FORM ROOT
// ============================================

// TODO: Implementa el componente raíz del Form
interface FormRootProps {
  children: ReactNode;
  onSubmit: (values: Record<string, string>) => void;
  initialValues?: Record<string, string>;
}

const FormRoot = ({
  children,
  onSubmit,
  initialValues = {},
}: FormRootProps) => {
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouchedState] = useState<Record<string, boolean>>({});

  const setValue = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const setError = (name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const setTouched = (name: string) => {
    setTouchedState((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <FormContext.Provider
      value={{ values, errors, touched, setValue, setError, setTouched }}
    >
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

// ============================================
// FORM FIELD
// ============================================

// TODO: Contenedor de campo que proporciona contexto
interface FormFieldProps {
  children: ReactNode;
  name: string;
}

const FormField = ({ children, name }: FormFieldProps) => {
  return (
    <FieldContext.Provider value={{ name }}>
      <div style={{ marginBottom: "12px" }}>{children}</div>
    </FieldContext.Provider>
  );
};

// ============================================
// FORM LABEL
// ============================================

// TODO: Etiqueta del campo
interface FormLabelProps {
  children: ReactNode;
  required?: boolean;
}

const FormLabel = ({ children, required }: FormLabelProps) => {
  const field = useContext(FieldContext);

  if (!field) return null;

  return (
    <label htmlFor={field.name} style={{ display: "block" }}>
      {children} {required && "*"}
    </label>
  );
};

// ============================================
// FORM INPUT
// ============================================

// TODO: Input del formulario
type FormInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

const FormInput = (props: FormInputProps) => {
  const form = useContext(FormContext);
  const field = useContext(FieldContext);

  if (!form || !field) return null;

  const { values, setValue, setTouched } = form;

  return (
    <input
      {...props}
      name={field.name}
      value={values[field.name] || ""}
      onChange={(e) => setValue(field.name, e.target.value)}
      onBlur={() => setTouched(field.name)}
      style={{
        width: "100%",
        padding: "6px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    />
  );
};

// ============================================
// FORM ERROR
// ============================================

// TODO: Mensaje de error del campo
interface FormErrorProps {
  children?: ReactNode;
}

const FormError = ({ children }: FormErrorProps) => {
  const form = useContext(FormContext);
  const field = useContext(FieldContext);

  if (!form || !field) return null;

  const error = form.errors[field.name];

  if (!error && !children) return null;

  return (
    <span style={{ color: "red", fontSize: "12px" }}>{error || children}</span>
  );
};

// ============================================
// FORM ACTIONS
// ============================================

// TODO: Contenedor para botones del formulario
interface FormActionsProps {
  children: ReactNode;
}

const FormActions = ({ children }: FormActionsProps) => {
  return <div style={{ marginTop: "16px" }}>{children}</div>;
};

// ============================================
// FORM SUBMIT
// ============================================

// TODO: Botón de submit
interface FormSubmitProps {
  children: ReactNode;
  disabled?: boolean;
}

const FormSubmit = ({ children, disabled }: FormSubmitProps) => {
  return (
    <button type="submit" disabled={disabled}>
      {children}
    </button>
  );
};

// ============================================
// COMPOUND COMPONENT EXPORT
// ============================================

// TODO: Usa Object.assign para crear el compound component
const Form = Object.assign(FormRoot, {
  Field: FormField,
  Label: FormLabel,
  Input: FormInput,
  Error: FormError,
  Actions: FormActions,
  Submit: FormSubmit,
});

export { Form };
