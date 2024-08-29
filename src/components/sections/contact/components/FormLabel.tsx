import React from "react";
import { twMerge } from "tailwind-merge";

interface formLabelProps {
  id: string;
  type: string;
  placeholder: string;
  className?: string;
}

const FormLabel: React.FC<formLabelProps> = ({
  id,
  type,
  placeholder,
  className,
}) => {
  return (
    <div className="mt-8">
      <label htmlFor={id} className="text-sm font-medium capitalize">
        {id}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          rows={8}
          required
          className={twMerge(
            "mt-2 block w-full rounded-md border border-gray-700 bg-grey-dark px-3 py-2 text-sm",
            className,
          )}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required
          className={twMerge(
            "mt-2 block w-full rounded-md border border-gray-700 bg-grey-dark px-3 py-2 text-sm",
            className,
          )}
        />
      )}
    </div>
  );
};

export { FormLabel };
