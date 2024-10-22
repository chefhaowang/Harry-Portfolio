export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div className="page-container">
        <div className="card">
          <h2>Contact Information</h2>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Email:</strong> haowang@example.com
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/haowang"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/haowang
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
