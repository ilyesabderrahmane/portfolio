'use client'
import { useEffect, useRef } from 'react'
import { User, Target, Heart, Award } from 'lucide-react'

const stats = [
  { value: '2+', label: 'Ans d\'expérience', icon: Award },
  { value: '10+', label: 'Projets réalisés', icon: Target },
  { value: 'Master', label: 'Ingénierie Sys. Info.', icon: User },
  { value: 'BDL', label: 'Banque Actuelle', icon: Heart },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-blue-500 font-semibold text-sm tracking-widest uppercase mb-3">
            À Propos
          </span>
          <h2 className="font-display text-4xl font-bold text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
            Qui suis-je ?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                Je suis <strong className="text-slate-800">Abderrahmane Elyes</strong>, développeur Full Stack JS 
                et ingénieur informatique, actuellement en poste à la{' '}
                <strong className="text-blue-600">Banque de Développement Local (BDL)</strong> à Alger.
              </p>
              <p>
                Titulaire d'un{' '}
                <strong className="text-slate-800">Master en ingénierie des systèmes informatiques intelligents</strong>{' '}
                de l'Université d'Alger 1, je maîtrise un large éventail de technologies : 
                du développement web full stack aux applications bancaires critiques.
              </p>
              <p>
                Ma passion pour l'<strong className="text-slate-800">intelligence artificielle</strong> m'a amené 
                à développer une application de traduction du langage des signes — projet de fin d'études 
                combinant Python, vision par ordinateur et deep learning.
              </p>
              <p>
                Autonome, rigoureux et toujours en veille technologique, je cherche constamment à 
                perfectionner mes compétences pour concevoir des solutions à fort impact.
              </p>
            </div>

            {/* Languages */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Arabe (natif)', 'Français (courant)', 'Anglais (intermédiaire)'].map(lang => (
                <span
                  key={lang}
                  className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium"
                >
                  🌐 {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5 reveal">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <div
                key={label}
                className="bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-100 rounded-2xl p-6 text-center card-hover"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-blue-100">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 font-display" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {value}
                </div>
                <div className="text-sm text-slate-500 mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
