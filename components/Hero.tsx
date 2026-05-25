'use client'
import { useEffect, useRef, useState } from 'react'
import { MapPin, Mail, Phone, Download, ArrowDown, Sparkles } from 'lucide-react'

const roles = [
  'Développeur Full Stack JS',
  'Ingénieur Informatique',
  'Développeur Laravel & PHP',
  'Passionné d\'IA & Python',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Typing animation
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  // Particles canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number }[] = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59,130,246,${p.alpha})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 50%, #F8FAFC 100%)',
      }}
    >
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-100/60 rounded-full blur-3xl animate-pulse-slow animation-delay-300 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-50/80 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Disponible pour de nouvelles opportunités
            </div>

            {/* Name */}
            <h1
              className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight mb-4 animate-slide-up"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Abderrahmane
              <br />
              <span className="gradient-text">Elyes</span>
            </h1>

            {/* Typed role */}
            <div className="font-display text-xl lg:text-2xl font-medium text-slate-500 mb-8 h-8 animate-slide-up animation-delay-200">
              <span className="text-blue-500">{displayed}</span>
              <span className="cursor text-blue-400">|</span>
            </div>

            {/* Bio */}
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mb-10 animate-slide-up animation-delay-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ingénieur informatique à la <strong className="text-slate-800">BDL</strong>, passionné par le développement web moderne. 
              Master en systèmes informatiques intelligents — je transforme des idées en applications robustes.
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10 animate-slide-up animation-delay-400">
              <span className="flex items-center gap-2 bg-white/80 border border-slate-200 px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                Sidi Abdellah, Alger
              </span>
              <a href="mailto:abderrahmaneelyes66@gmail.com" className="flex items-center gap-2 bg-white/80 border border-slate-200 px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm hover:border-blue-200 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                abderrahmaneelyes66@gmail.com
              </a>
              <a href="tel:0662252595" className="flex items-center gap-2 bg-white/80 border border-slate-200 px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm hover:border-blue-200 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 text-emerald-400" />
                0662 25 25 95
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up animation-delay-500">
              <a
                href="/Abderrahmane_Elyes_CV.pdf"
                download
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-7 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-7 py-4 rounded-2xl font-semibold hover:border-blue-200 hover:text-blue-600 hover:shadow-md transition-all duration-200"
              >
                Voir mes projets
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Profile picture */}
          <div className="flex-shrink-0 relative animate-float">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-200/60 scale-110 animate-spin-slow" />
            <div className="absolute inset-0 rounded-full border border-emerald-200/40 scale-125" />

            {/* Avatar container */}
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-blue-100 glow-blue">
                <img
                  src="/profile.jpg"
                  alt="Abderrahmane Elyes"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-emerald-100">
                        <div class="text-center">
                          <div style="font-family:Sora,sans-serif;font-size:64px;font-weight:800;background:linear-gradient(135deg,#3B82F6,#10B981);-webkit-background-clip:text;-webkit-text-fill-color:transparent">AE</div>
                          <p style="font-size:12px;color:#94A3B8;margin-top:4px">Photo de profil</p>
                        </div>
                      </div>
                    `
                  }}
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-lg px-4 py-2 flex items-center gap-2 border border-slate-100">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-slate-700">Disponible</span>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2 border border-slate-100">
                <span className="text-sm font-bold text-blue-600">5+ Projets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors">
            <span className="text-xs font-medium tracking-widest uppercase">Défiler</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
