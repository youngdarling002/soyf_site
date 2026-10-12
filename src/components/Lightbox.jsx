import { createPortal } from 'react-dom'

// Fullscreen photo viewer shared by the studio mosaic and the event ribbons.
// images: [{ thumb, full }], selectedIndex < 0 means closed.
export default function Lightbox({ images, selectedIndex, onClose, onPrev, onNext, setIndex }) {
  if (selectedIndex < 0 || !images[selectedIndex]) return null
  return createPortal(
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>

        {/* Main Image Container */}
        <div className="lightbox-main">
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); onPrev() }}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <img src={images[selectedIndex].full} alt="Fullscreen" className="lightbox-img" />

          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); onNext() }}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          {/* Close Button inside Main Container (Top Right) */}
          <button className="lightbox-close" onClick={onClose}>×</button>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="lightbox-thumbnails">
          {images.map((img, i) => (
            <div
              key={i}
              className={`lightbox-thumb ${i === selectedIndex ? 'active' : ''}`}
              onClick={() => setIndex(i)}
            >
              <img src={img.thumb} alt={`Thumb ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  )
}
