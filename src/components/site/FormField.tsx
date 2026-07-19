import type { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";

type Base = { label: string; hint?: string; error?: string };

export function TextField({ label, hint, error, ...rest }: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink">{label}</span>
      {hint && <span className="mt-0.5 block text-xs text-muted-foreground">{hint}</span>}
      <input
        {...rest}
        className="mt-2 w-full rounded-sm border border-border bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-honey-deep"
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

export function TextArea({ label, hint, error, ...rest }: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink">{label}</span>
      {hint && <span className="mt-0.5 block text-xs text-muted-foreground">{hint}</span>}
      <textarea
        rows={4}
        {...rest}
        className="mt-2 w-full rounded-sm border border-border bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-honey-deep"
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

export function SelectField({
  label,
  hint,
  children,
  ...rest
}: Base & InputHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink">{label}</span>
      {hint && <span className="mt-0.5 block text-xs text-muted-foreground">{hint}</span>}
      <select
        {...(rest as never)}
        className="mt-2 w-full rounded-sm border border-border bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-honey-deep"
      >
        {children}
      </select>
    </label>
  );
}

export function FormNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-sm border border-border/60 bg-muted px-4 py-3 text-xs text-muted-foreground">
      {children}
    </p>
  );
}
