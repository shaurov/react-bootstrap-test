import React from "react"

function Footer() {
  return (
    <section className="section border-top border-secondary">
      <div className="container">
        <p style={{ textTransform: "uppercase" }}>
          <span style={{ fontWeight: 600 }}>
            © Copyright {new Date().getFullYear()}
          </span>
          <br />A Kiteslab Experiment, React Bootstrap Starter, Version 0.24.00
        </p>
      </div>
    </section>
  )
}

export default Footer
