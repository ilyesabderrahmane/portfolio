'use client'
import { useEffect, useRef } from 'react'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: 'Ingénieur Informatique',
    company: 'Banque de Développement Local (BDL)',
    location: 'Staoueli, Alger',
    period: 'Août 2025 – Présent',
    current: true,
    description: [
      'Développement d\'applications web (PHP, Laravel, MySQL)',
      'Conception de solutions desktop métier',
      'Mise à niveau, correction et optimisation des applications existantes',
    ],
    tags: ['PHP', 'Laravel', 'MySQL', 'Oracle', 'Java'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Développeur Full Stack JS (Formation)',
    company: 'IT COMP',
    location: 'Bir Mourad Rais, Alger',
    period: 'Fév 2025 – Juil 2025',
    current: false,
    description: [
      'Formation intensive en développement Full Stack JavaScript',
      'Pratique de React, Next.js et Node.js',
      'Projets pratiques et mise en situation professionnelle',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'JavaScript'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Stagiaire Développement Web',
    company: 'CNR',
    location: 'Alger',
    period: 'Avr 2022 – Juin 2022',
    current: false,
    description: [
      'Stage de développement web',
      'Découverte des pratiques professionnelles',
      'Contribution à des projets web internes',
    ],
    tags: ['Web', 'HTML', 'CSS', 'JavaScript'],
    color: 'from-violet-500 to-purple-500',
  },
]

export default function Experience() {
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
    <section id="experience" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-blue-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Parcours
          </span>
          <h2 className="font-display text-4xl font-bold text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
            Expérience Professionnelle
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-emerald-200 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="reveal md:pl-20 relative"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className={`hidden md:flex absolute left-4 w-9 h-9 bg-gradient-to-br ${exp.color} rounded-xl items-center justify-center shadow-lg -translate-x-1/2`}
                  style={{ left: '2rem' }}
                >
                  <Briefcase className="w-4 h-4 text-white" />
                </div>

                {/* Card */}
                <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-md transition-all duration-300 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-xl text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            En poste
                          </span>
                        )}
                      </div>
                      <div className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} font-semibold text-lg`}>
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 text-sm text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-600">
                        <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-xl text-xs font-semibold font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
