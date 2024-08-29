import React from "react";
import { LABELS, PUBLIC_ACCESS_KEY } from "../../../data";
import { FormLabel } from "./components/FormLabel";
import Swal from "sweetalert2";

const Contact: React.FC = () => {
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", PUBLIC_ACCESS_KEY);

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // Reset form
      event.target.reset();

      // Display alert
      Swal.fire({
        title: "Success!",
        text: "Thank you for contact!",
        icon: "success",
        confirmButtonColor: "#3b82f6",
      });
    }
  };

  return (
    <section id="contact" className="flex h-screen items-center py-28">
      <div className="container">
        <div className="flex w-full max-w-[580px] flex-col">
          <h2 className="pb-4 text-3xl font-semibold sm:text-5xl md:text-7xl">
            Contact Me
          </h2>

          <form onSubmit={onSubmit}>
            {LABELS.map((label) => (
              <FormLabel
                key={label.id}
                id={label.id}
                type={label.type}
                placeholder={label.placeholder}
              />
            ))}
            <button
              type="submit"
              className="mt-8 text-nowrap rounded-lg bg-white px-4 py-[10px] text-sm font-medium text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Contact };
