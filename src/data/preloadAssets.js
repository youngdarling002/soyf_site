// Images shown immediately on page load (hero + above-fold ribbon).
// Loaded on ALL devices.
export const criticalImages = [
  '/img/logo.webp',
]

// Studio photo mosaic — used directly by StudioLocation component.
// Order matters: item-0 is the big 2x2 cell, items 4, 5 and 8 are wide,
// so landscape shots go there and portrait shots go into the 1x1 cells.
// Each photo has a small thumb for the mosaic and a larger file for the lightbox.
const studioPhotoNames = [
  'IMG_0176',
  'IMG_0097',
  'IMG_0115',
  'IMG_0122',
  'IMG_0162',
  'IMG_0103',
  'IMG_0142',
  'studio-session',
  '20250508_153020',
]
export const studioPhotos = studioPhotoNames.map((name) => ({
  thumb: `/img/studio/thumb/${name}.webp`,
  full: `/img/studio/${name}.webp`,
}))

// Loaded only on desktop (skipped on mobile to save bandwidth).
export const heavyImages = studioPhotos.map((p) => p.thumb)

