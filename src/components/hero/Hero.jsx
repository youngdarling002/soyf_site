import Navbar from '../Navbar.jsx'
import '../../styles/hero-isolated.css'

// Lighter 720p file for phones, 1080p for everything else.
const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
const videoSrc = isMobile ? '/videos/hero-720.mp4' : '/videos/hero-1080.mp4'

export default function Hero() {
  return (
    <main id="studio" className="hero">
      <video
        className="video_bg"
        src={videoSrc}
        poster="/img/hero-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <section className="hero-gallery">
        <h2 className="hero-heading">
          <span className="accent">WE CREATE</span> EMOTIONS<br />
          <span className="accent">WORTH</span> SHARING.
        </h2>
        <div className="gallery-cta">
          <a
            href="#footer"
            className="gallery-join-btn"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('footer')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            aria-label="Join the band"
          >
            JOIN THE BAND
          </a>
        </div>
      </section>
      <Navbar />
    </main>
  )
}
