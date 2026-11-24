import { useEffect, useRef } from 'react'
import { gsap } from '../lib/motion'

const BASE = import.meta.env.BASE_URL
const TOTAL = 240

// These ranges are based on the movement phases in the supplied video.
// The center frame is a stable, front-facing pose.
const RANGES = {
  left: [0, 34],       // source frames 001–035
  up: [35, 74],        // source frames 036–075
  center: [95, 124],   // source frames 096–125
  right: [125, 154],   // source frames 126–155
  down: [155, 199],    // source frames 156–200
}

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))
const lerp = (a, b, t) => a + (b - a) * t

export default function LookAt({ className = '', label = 'Om Pandey avatar' }) {
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const stateRef = useRef({ current: 109, target: 109, drawn: -1 })

  useEffect(() => {
    let alive = true
    const images = Array.from({ length: TOTAL }, (_, index) => {
      const image = new Image()
      image.decoding = 'async'
      image.src = `${BASE}img/hero-frames/f${String(index).padStart(3, '0')}.webp`
      image.onload = () => {
        if (alive) stateRef.current.drawn = -1
      }
      return image
    })
    imagesRef.current = images

    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.round(rect.width * dpr))
      canvas.height = Math.max(1, Math.round(rect.height * dpr))
      stateRef.current.drawn = -1
    }
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()

    const getTargetFrame = (event) => {
      const rect = canvas.getBoundingClientRect()
      const nx = clamp(((event.clientX - rect.left) / rect.width - 0.5) * 2, -1, 1)
      const ny = clamp(((event.clientY - rect.top) / rect.height - 0.5) * 2, -1, 1)

      // Ignore tiny pointer changes around the center to prevent jitter.
      if (Math.abs(nx) < 0.12 && Math.abs(ny) < 0.12) return 109

      // Use the dominant cursor axis and map it to a movement present in the video.
      if (Math.abs(nx) >= Math.abs(ny)) {
        const [start, end] = nx < 0 ? RANGES.left : RANGES.right
        const amount = clamp(Math.abs(nx), 0, 1)
        return Math.round(lerp((start + end) / 2, nx < 0 ? start : end, amount))
      }

      if (ny < 0) {
        const [start, end] = RANGES.up
        return Math.round(lerp((start + end) / 2, start, Math.abs(ny)))
      }

      const [start, end] = RANGES.down
      return Math.round(lerp((start + end) / 2, end, Math.abs(ny)))
    }

    const move = (event) => {
      stateRef.current.target = getTargetFrame(event)
    }
    const leave = () => { stateRef.current.target = 109 }

    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerleave', leave)

    const tick = () => {
      const state = stateRef.current
      state.current += (state.target - state.current) * 0.12
      const index = clamp(Math.round(state.current), 0, TOTAL - 1)
      if (index === state.drawn) return

      const image = imagesRef.current[index]
      if (!image?.complete || !image.naturalWidth) return

      state.drawn = index
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Fill the hero canvas while preserving the original video frame ratio.
      const scale = Math.max(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight)
      const width = image.naturalWidth * scale
      const height = image.naturalHeight * scale
      ctx.drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height)
    }

    gsap.ticker.add(tick)
    return () => {
      alive = false
      gsap.ticker.remove(tick)
      observer.disconnect()
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerleave', leave)
      imagesRef.current = []
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-label={label} role="img" />
}
