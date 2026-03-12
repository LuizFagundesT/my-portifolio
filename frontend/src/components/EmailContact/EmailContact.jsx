import { useState } from "react";
import { useTranslation } from "react-i18next";
import styleEmailContact from "../EmailContact/EmailContact.module.css";
import emailjs from "@emailjs/browser";

export default function EmailContact() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          name: form.nome,
          time: form.email,
          telefone: form.telefone,
          message: form.mensagem
        },
        import.meta.env.VITE_EMAIL_PUBLIC
      );

      setStatus("Email enviado com sucesso!");
      setForm({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
      });

    } catch (error) {
      console.error(error);
      setStatus("Erro ao enviar email.");
    }

    setLoading(false);
  }

  return (
    <form
      className={styleEmailContact.form}
      onSubmit={handleSubmit}
    >
      <h2>{t("email.enviaEmail")}</h2>

      <div className={styleEmailContact.box_name_email}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className={styleEmailContact.input_form}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={styleEmailContact.input_form}
          required
        />
      </div>

      <input
        type="tel"
        name="telefone"
        placeholder="Telefone"
        value={form.telefone}
        onChange={handleChange}
        className={styleEmailContact.input_form}
      />

      <textarea
        name="mensagem"
        placeholder="Mensagem"
        value={form.mensagem}
        onChange={handleChange}
        className={styleEmailContact.input_form}
        required
      />

      <button
        type="submit"
        className={styleEmailContact.button}
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {status && <p>{status}</p>}
    </form>
  );
}