import React, { useEffect } from 'react';
import Image from 'next/image';

// Reusable Components
const Header = () => (
  <header style={styles.header}>
    <div style={styles.logoContainer}>
      <Image
        src="/images/logo.webp"
        alt="YB One Logo"
        width={40}
        height={40}
        style={styles.logo}
      />
      <span style={styles.brandName}>YB One</span>
    </div>
  </header>
);

const HeroSection = () => (
  <section style={styles.hero}>
    <div style={styles.heroContent}>
      <h1 style={styles.heroTitle}>Top 1% Leaders for Your Business</h1>
      <p style={styles.heroSubtitle}>
        Access the same elite talent who drive market leaders—without fixed salaries.
      </p>
      <p style={styles.highlightText}>Grow smarter, Pay smarter.</p>
    </div>
  </section>
);

const ServiceCard = ({ title, description }) => (
  <div style={styles.serviceCard}>
    <h3 style={styles.serviceTitle}>{title}</h3>
    <p style={styles.serviceDescription}>{description}</p>
  </div>
);

const TestimonialCard = ({ text, author }) => (
  <div style={styles.testimonialCard}>
    <p style={styles.testimonialText}>{text}</p>
    <p style={styles.testimonialAuthor}>{author}</p>
  </div>
);

const Footer = () => (
  <footer style={styles.footer}>
    <p style={styles.footerText}>
      © 2024 YB One Strategic Solutions Private Limited. All rights reserved.
    </p>
    <div style={styles.socialLinks}>
      <a
        href="https://www.linkedin.com/company/yb-one"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.socialLink}
        aria-label="LinkedIn"
      >
        LinkedIn
      </a>
      <a href="mailto:sales@ybonesolutions.com" style={styles.socialLink} aria-label="Email">
        Email
      </a>
    </div>
  </footer>
);

// Main Component
export default function Home() {
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = globalStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={styles.container}>
      <Header />
      <HeroSection />

      {/* Why Choose Us Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Pool of top 1% product experts.</li>
          <li style={styles.listItem}>Cost-effective, no fixed salary pressure.</li>
          <li style={styles.listItem}>Proven track record with market leaders.</li>
        </ul>
      </section>

      {/* Services Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Expertise</h2>
        <div style={styles.servicesGrid}>
          <ServiceCard
            title="Product Strategy"
            description="Crafting winning product roadmaps."
          />
          <ServiceCard
            title="Business Design Solutions"
            description="Innovative business models for growth."
          />
          <ServiceCard
            title="Market Analysis"
            description="Data-driven insights for success."
          />
          <ServiceCard
            title="User Experience Design"
            description="Seamless and engaging user experiences."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Voice of our Happy Clients</h2>
        <div style={styles.testimonialsGrid}>
          <TestimonialCard
            text="Their expertise transformed our product strategy. Highly recommended!"
            author="— Shubham Bharthiya, CEO at Codezen"
          />
          <TestimonialCard
            text="A game-changer for our business design. Truly top-tier talent."
            author="— Shrey Singh, Co-Founder at Graeon.AI"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Transform Your Product?</h2>
        <p style={styles.ctaSubtitle}>Let’s build something extraordinary together.</p>
        <button
          style={styles.ctaButton}
          aria-label="Contact Us"
          onClick={() => window.open('https://www.linkedin.com/company/yb-one', '_blank')}
        >
          Contact Us
        </button>
      </section>

      <Footer />
    </div>
  );
}

// Styles with Glassmorphism and Animations
const styles = {
  container: {
    backgroundColor: '#0A0A0A',
    color: '#E0E0E0',
    fontFamily: 'Roboto, sans-serif',
    padding: '0 20px',
  },
  header: {
    padding: '20px',
    position: 'sticky',
    top: '0',
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    backdropFilter: 'blur(10px)',
    zIndex: '1000',
    borderRadius: '0 0 20px 20px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    height: '40px',
    width: 'auto',
  },
  brandName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  hero: {
    background: 'linear-gradient(to bottom, #0A0A0A, #1A1A1A)',
    padding: '100px 20px',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#FFFFFF',
    animation: 'fadeIn 2s ease-in-out',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#E0E0E0',
    animation: 'fadeIn 3s ease-in-out',
  },
  highlightText: {
    fontSize: '1.2rem',
    color: '#FFFFFF', // White text for contrast
    display: 'inline-block',
    padding: '5px 10px',
    borderRadius: '5px',
    margin: '10px 0',
    textShadow: '0 0 5px #FF6B35, 0 0 10px #FF6B35, 0 0 20px #FF6B35', // Glowing orange effect
    animation: 'glow 2s infinite alternate', // Glow animation
  },
  ctaButton: {
    backgroundColor: '#FF6B35',
    color: '#FFFFFF',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.3s ease',
    animation: 'fadeIn 4s ease-in-out',
  },
  section: {
    padding: '80px 20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: '#FFFFFF',
    animation: 'fadeIn 1s ease-in-out',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#E0E0E0',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  serviceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    animation: 'fadeIn 2s ease-in-out',
  },
  serviceTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#FFFFFF',
  },
  serviceDescription: {
    fontSize: '1rem',
    color: '#E0E0E0',
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  testimonialCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    animation: 'fadeIn 2s ease-in-out',
  },
  testimonialText: {
    fontSize: '1rem',
    marginBottom: '10px',
    color: '#E0E0E0',
  },
  testimonialAuthor: {
    fontSize: '0.9rem',
    color: '#FF6B35',
  },
  ctaSection: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '80px 20px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    margin: '40px 0',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#FFFFFF',
    animation: 'fadeIn 1s ease-in-out',
  },
  ctaSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#E0E0E0',
    animation: 'fadeIn 2s ease-in-out',
  },
  footer: {
    padding: '40px 20px',
    textAlign: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  footerText: {
    fontSize: '0.9rem',
    marginBottom: '10px',
    color: '#E0E0E0',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  socialLink: {
    color: '#FF6B35',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
  },
};

// Global CSS for Animations
const globalStyles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 5px #FF6B35, 0 0 10px #FF6B35, 0 0 20px #FF6B35;
    }
    to {
      text-shadow: 0 0 10px #FF6B35, 0 0 20px #FF6B35, 0 0 30px #FF6B35;
    }
  }

  .serviceCard:hover, .testimonialCard:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .ctaButton:hover {
    background: #FF8C5A;
    transform: scale(1.05);
  }

  .socialLink:hover {
    color: #FF8C5A;
  }
`;