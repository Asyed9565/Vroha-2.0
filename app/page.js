import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header/Navigation */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1 className={styles.logo}>Vroha 2.0</h1>
          <ul className={styles.navLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Welcome to Vroha 2.0</h2>
          <p>Your modern business solution for success</p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <h2>About Us</h2>
        <p>
          We are dedicated to providing exceptional services and solutions
          for businesses of all sizes. Our team brings expertise, innovation,
          and commitment to every project.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.section}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Service 1</h3>
            <p>Description of your first service goes here.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Service 2</h3>
            <p>Description of your second service goes here.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Service 3</h3>
            <p>Description of your third service goes here.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <h2>Contact Us</h2>
        <p>Email: hello@vroha.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Business St, City, Country</p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2026 Vroha 2.0. All rights reserved.</p>
      </footer>
    </main>
  )
}
