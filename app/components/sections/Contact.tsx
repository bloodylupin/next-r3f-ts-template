import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import { AlertTriangle, Ban, CheckSquare, MailWarning } from "lucide-react";
import clsx from "clsx";

import { useTransition } from "react";
import { containerVariants, elementVariants } from "@/app/variants/variants";

import { motion } from "framer-motion";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required(),
    privacy: yup.boolean().required().isTrue(),
  })
  .required();

export default function Form() {
  const inputs = [
    { name: "name", type: "text", label: "Nome" },
    { name: "email", type: "text", label: "E-mail" },
    { name: "message", type: "textarea", label: "Messaggio" },
  ] as const;

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isPending, startTransition] = useTransition();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col justify-center h-full"
    >
      <motion.h2 variants={elementVariants}>Scrivimi un messaggio!</motion.h2>
      {isSubmitSuccessful ? (
        <div className="grid gap-4 max-w-screen max-h-screen">
          <p className="bg-success text-success-content rounded-3xl grid grid-cols-[auto,1fr] items-center gap-2 px-8 py-2">
            <CheckSquare />
            Grazie per il messaggio, ti risponderò al più presto!
          </p>
          <button onClick={() => reset()} className="btn btn-primary">
            Manda un altro messaggio
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit((d) =>
            axios
              .post("https://andreaborin-ndr.site/api/send", d)
              .then((res) => console.log(res))
              .catch((error) => setError("root.serverError", error))
          )}
          className="grid gap-4 max-w-screen max-h-screen md:grid-cols-2"
        >
          {inputs.map((input) => (
            <motion.div
              variants={elementVariants}
              className={clsx(
                "form-control relative",
                input.type === "textarea" ? "md:col-span-2" : ""
              )}
              key={input.name}
            >
              {input.type !== "textarea" ? (
                <input
                  type={input.type}
                  placeholder={`${input.label}...`}
                  className="input input-bordered w-full shadow shadow-secondary rounded-lg bg-opacity-50"
                  id={input.name}
                  {...register(input.name)}
                />
              ) : (
                <textarea
                  className="textarea textarea-bordered shadow shadow-secondary rounded-lg bg-opacity-50"
                  placeholder={`${input.label}...`}
                  id={input.name}
                  {...register(input.name)}
                  rows={7}
                ></textarea>
              )}

              {errors[`${input.name}`] ? (
                <span className="badge badge-warning gap-2 xs:mt-2 max-xs:absolute max-xs:top-0 max-xs:right-0 h-auto">
                  {errors[`${input.name}`]?.type === "email" ? (
                    <MailWarning height={16} />
                  ) : (
                    <AlertTriangle height={16} />
                  )}
                  <span className="max-xs:hidden">
                    {errors[`${input.name}`]?.type === "email"
                      ? "Inserisci una e-mail valida."
                      : `Il campo ${input.label} è necessario.`}
                  </span>
                </span>
              ) : null}
            </motion.div>
          ))}
          <motion.div
            variants={elementVariants}
            className="form-control md:col-span-2 relative"
          >
            <label className="label cursor-pointer gap-3 justify-start">
              <input
                type="checkbox"
                defaultChecked={false}
                className="checkbox"
                id="privacy"
                {...register("privacy")}
              />
              <span className="label-text">
                Accetto il trattamento dei dati personali come specificato nella{" "}
                <a href="/privacy" className="link">
                  Privacy Policy
                </a>
              </span>
            </label>
            {errors.privacy ? (
              <span className="badge badge-warning gap-2 xs:mt-2 max-xs:absolute max-xs:bottom-0 max-xs:right-0 h-auto">
                <AlertTriangle height={16} />
                <span className="max-xs:hidden">
                  Accetta la privacy policy per per proseguire.
                </span>
              </span>
            ) : null}
          </motion.div>
          <motion.div
            variants={elementVariants}
            className="form-control md:col-span-2"
          >
            {isSubmitting ? (
              <button className="btn btn-primary btn-disabled" disabled>
                Loading...{" "}
                <span className="loading loading-spinner loading-lg"></span>
              </button>
            ) : (
              <input type="submit" value="Invia" className="btn btn-primary" />
            )}
          </motion.div>
          {errors.root?.serverError ? (
            <span className="badge badge-error gap-2 h-auto">
              <Ban height={16} />
              Invio non riuscito, riprova più tardi.
            </span>
          ) : null}
        </form>
      )}
    </motion.div>
  );
}
