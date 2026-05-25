'use client'
import { useEffect, useRef } from 'react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const education = [
  {
    degree: 'Développeur Full Stack JS',
    school: 'IT COMP',
    location: 'Bir Mourad Rais, Alger',
    period: 'Fév 2025 – Juil 2025',
    description: 'Formation professionnelle intensive en développement Full Stack JavaScript : React, Next.js, Node.js, bases de données et déploiement.',
    highlight: null,
    color: 'from-emerald-500 to-teal-500',
    icon: '💻',
  },
  {
    degree: 'Master – Ingénierie des Systèmes Informatiques Intelligents',
    school: 'Université d\'Alger 1',
    location: 'Alger',
    period: 'Sep 2022 – Juil 2024',
    description: 'Formation de haut niveau alliant génie logiciel, intelligence artificielle et systèmes intelligents.',
    highlight: 'PFE : Application de traduction de la langue des signes en texte (Python + IA)',
    color: 'from-blue-500 to-indigo-500',
    icon: '🎓',
  },
  {
    degree: 'Licence – Ingénierie des Systèmes d\'Information et Logiciels',
    school: 'Université M\'Hamed Bougera',
    location: 'Boumerdes',
    period: 'Sep 2021 – Juil 2022',
    description: 'Formation fondamentale en génie logiciel, bases de données, réseaux et développement web.',
    highlight: 'PFE : Application web de demande d\'attestations',
    color: 'from-violet-500 to-purple-500',
    icon: '📚',
  },
  {
    degree: 'Baccalauréat Scientifique',
    school: 'Lycée Mokrani 1',
    location: 'Ben Aknoun',
    period: 'Sep 2018 – Juil 2019',
    description: 'Baccalauréat série scientifique, obtenu avec succès.',
    highlight: null,
    color: 'from-amber-500 to-orange-500',
    icon: '🏫',
  },
]

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-blue-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Formation
          </span>
          <h2 className="font-display text-4xl font-bold text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
            Parcours Académique
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className="reveal bg-white border border-slate-100 rounded-3xl p-7 shadow-sm card-hover overflow-hidden relative"
              style={{ transitionDelay: `${(i % 2) * 150}ms` }}
            >
              {/* Top color bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`} />

              <div className="flex items-start gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {edu.degree}
                  </h3>
                  <p className={`text-transparent bg-clip-text bg-gradient-to-r ${edu.color} font-semibold mt-1`}>
                    {edu.school}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {edu.description}
              </p>

              {edu.highlight && (
                <div className="flex items-start gap-2 bg-blue-50/80 border border-blue-100 rounded-2xl px-4 py-3">
                  <Award className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-blue-700 text-sm font-medium">{edu.highlight}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
