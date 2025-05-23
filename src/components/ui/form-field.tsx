import type { ComponentProps } from "react";

interface FormFieldProps extends ComponentProps<"input"> {
  label: string;
}

function FormField({ label, ...props }: FormFieldProps) {
  return (
    <div className="form-field">
      <label className="form-field-label">{label}</label>
      <input className="form-field-input" autoComplete="off" {...props} />
    </div>
  );
}

export default FormField;
