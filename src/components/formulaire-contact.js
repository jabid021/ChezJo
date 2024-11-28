import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + " - " + value);

    setFormData({ ...formData, [name]: value });


    
  };

  const handleKeyUp = (e) => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.message === ""
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contactez-nous</h2>
      <p>
        Futur prise de contact : {formData.name} {formData.email}{" "}
        {formData.phone} {formData.message}
      </p>
      {submitted ? (
        <p style={styles.successMessage}>
          Merci de nous avoir contacté. Nous reviendrons vers vous bientôt.
        </p>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.field}>
            <label htmlFor="name" style={styles.label}>
              Nom :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label htmlFor="email" style={styles.label}>
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label htmlFor="phone" style={styles.label}>
              Téléphone :
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label htmlFor="message" style={styles.label}>
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              style={styles.textarea}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={valid ? styles.button : styles.buttonDisabled}
            disabled={
              FormData.name === "" ||
              formData.email === "" ||
              formData.phone === "" ||
              formData.message === ""
            }
          >
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#fbe9e7",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#b71c1c",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  successMessage: {
    textAlign: "center",
    color: "#4caf50",
    fontSize: "18px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#b71c1c",
    fontSize: "16px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #b71c1c",
    borderRadius: "4px",
    fontSize: "14px",
    color: "#333",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #b71c1c",
    borderRadius: "4px",
    fontSize: "14px",
    color: "#333",
    minHeight: "100px",
  },
  button: {
    backgroundColor: "#b71c1c",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonDisabled: {
    backgroundColor: "grey",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "not-allowed",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonHover: {
    backgroundColor: "#a31616",
  },
};

export default ContactForm;
