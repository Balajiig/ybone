import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Next.js Image component

// Array of changing text
const changingText = [
  ['soul '],
  ['voice']
];

// Gradient text style
const gradientTextStyle = {
  background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
};

export default function Home() {
  const [currentText, setCurrentText] = useState(0);

  // Effect to cycle through changing text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % changingText.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle contact button click
  const handleContactClick = () => {
    window.open("https://www.linkedin.com/in/balajii-g/", "_blank");
  };

  // Handle explore button click
  const handleExploreClick = () => {
    window.open("https://www.spotnxt.com/", "_blank");
  };

  return (
    <div style={{
      backgroundColor: '#121212',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif', // Modern font
      position: 'relative',
      overflow: 'hidden',
      padding: '2rem', // Add padding for better spacing
    }}>
      {/* Logo and Brand Name */}
      <div style={{ 
        position: 'absolute', 
        top: '2rem', 
        left: '2rem', 
        display: 'flex', 
        alignItems: 'center',
        zIndex: 10, // Ensure it's above other elements
      }}>
        {/* Logo without circular frame */}
        <Image 
          src="/images/logo.webp" // Ensure this path is correct
          alt="Logo" 
          width={40} // Set width
          height={40} // Set height
          loading="lazy" 
          style={{ transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          onError={(e) => {
            console.error("Logo failed to load. Check the path or file name.");
            e.target.style.display = 'none'; // Hide the broken image icon
            // Fallback: Display a placeholder or text
            const fallback = document.createElement('div');
            fallback.innerText = 'YBOne';
            fallback.style.color = '#ff7e5f';
            fallback.style.fontSize = '20px';
            e.target.parentNode.appendChild(fallback);
          }}
        />
        <span style={{ marginLeft: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>YB One</span>
      </div>

      {/* Main Heading with Changing Text */}
      <h1 style={{ 
        fontSize: 'clamp(2.5rem, 8vw, 4rem)', // Responsive font size
        transition: 'opacity 1s ease-in-out', 
        opacity: 1,
        marginBottom: '1rem', // Add spacing
      }}>
        We craft{' '}
        <span style={{ 
          ...gradientTextStyle, 
          opacity: 1, 
          transition: 'opacity 1s ease-in-out', 
          display: 'inline-block', 
          animation: 'fadeInOut 3s infinite' 
        }}>
          {changingText[currentText].join(' ')}
        </span>{' '}
        of the product
      </h1>

      {/* Tagline */}
      <p style={{ 
        fontSize: 'clamp(1rem, 3vw, 1.5rem)', // Responsive font size
        color: '#aaa', 
        fontWeight: 'lighter', 
        marginBottom: '2rem', // Add spacing
      }}>
        One stop solution for all your business needs.
      </p>

      {/* Additional Text with Clickable Action */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: '1.5rem', // Add spacing
        flexWrap: 'wrap', // Wrap on smaller screens
      }}>
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.5rem)', // Responsive font size
          color: '#aaa', 
          fontWeight: 'lighter', 
          marginRight: '1rem', 
          marginBottom: '1rem', // Add spacing on smaller screens
        }}>
          Let's Connect Your product, Our expertise, and a cup of Coffee.
        </p>
        <span 
          style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.5rem)', // Responsive font size
            color: '#ff7e5f', 
            cursor: 'pointer', 
            textDecoration: 'underline', 
            transition: 'color 0.3s ease-in-out',
            fontWeight: '600', // Make it bold
          }}
          onClick={handleContactClick}
          onMouseOver={(e) => e.target.style.color = '#feb47b'}
          onMouseOut={(e) => e.target.style.color = '#ff7e5f'}
          role="button"
          aria-label="Contact"
        >
          Contact
        </span>
      </div>

      {/* "Watch the Magic Happen" Text with Clickable Action */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexWrap: 'wrap', // Wrap on smaller screens
      }}>
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.5rem)', // Responsive font size
          color: '#aaa', 
          fontWeight: 'lighter', 
          marginRight: '1rem', 
          marginBottom: '1rem', // Add spacing on smaller screens
        }}>
          See the magic happen
        </p>
        <span 
          style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.5rem)', // Responsive font size
            color: '#ff7e5f', 
            cursor: 'pointer', 
            textDecoration: 'underline', 
            transition: 'color 0.3s ease-in-out',
            fontWeight: '600', // Make it bold
          }}
          onClick={handleExploreClick}
          onMouseOver={(e) => e.target.style.color = '#feb47b'}
          onMouseOut={(e) => e.target.style.color = '#ff7e5f'}
          role="button"
          aria-label="Explore"
        >
          Explore our product
        </span>
      </div>

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          .additional-text { flex-direction: column; text-align: center; }
          .additional-text p { margin-right: 0; margin-bottom: 20px; }
        }
      `}</style>
    </div>
  );
}