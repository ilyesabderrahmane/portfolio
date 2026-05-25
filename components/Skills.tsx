'use client'
import { useEffect, useRef } from 'react'
import {
  Code2, Database, Wrench, Brain, Users, Zap
} from 'lucide-react'

const technicalSkills = [
  { name: 'HTML / CSS', level: 92, color: '#F97316' },
  { name: 'JavaScript / TypeScript', level: 82, color: '#EAB308' },
  { name: 'ReactJS / Next.js', level: 78, color: '#06B6D4' },
  { name: 'PHP / Laravel', level: 85, color: '#8B5CF6' },
  { name: 'Java', level: 80, color: '#F43F5E' },
  { name: 'Python', level: 75, color: '#10B981' },
  { name: 'SQL / MySQL / Oracle', level: 82, color: '#3B82F6' },
  { name: 'Git / GitHub', level: 85, color: '#1D4ED8' },
]

const softSkills = [
  { icon: Brain, label: 'Apprentissage rapide', color: 'from-blue-500 to-cyan-400' },
  { icon: Users, label: 'Esprit d\'équipe', color: 'from-emerald-500 to-teal-400' },
  { icon: Zap, label: 'Motivation & engagement', color: 'from-amber-500 to-orange-400' },
  { icon: Wrench, label: 'Adaptabilité', color: 'from-violet-500 to-purple-400' },
]

const techBadges = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'Next.js',
  'PHP', 'Laravel', 'Java', 'Python', 'SQL', 'MySQL', 'Oracle',
  'Git', 'GitHub', 'VS Code', 'Postman', 'REST API',
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const barsRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const container = e.target as HTMLElement

container.querySelectorAll('.skill-bar').forEach((bar, i) => {
            const el = bar as HTMLElement
            const target = el.dataset.level || '0'
            setTimeout(() => {
              el.style.width = target + '%'
            }, i * 80)
          })
        }
      })
    }, { threshold: 0.3 })

    if (barsRef.current) observer.observe(barsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-blue-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Compétences
          </span>
          <h2 className="font-display text-4xl font-bold text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
            Mon Arsenal Technique
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical skill bars */}
          <div ref={barsRef} className="reveal">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Langages & Frameworks
                </h3>
              </div>
              <div className="space-y-5">
                {technicalSkills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-slate-700">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full rounded-full transition-all duration-1000 ease-out"
                        data-level={skill.level}
                        style={{
                          width: '0%',
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft skills + tools */}
          <div className="space-y-6 reveal">
            {/* Soft skills */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Qualités Personnelles
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors card-hover"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 text-center leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outils */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Outils & Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techBadges.map(tech => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-sm font-medium hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
