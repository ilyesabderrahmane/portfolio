'use client'
import { useEffect, useRef } from 'react'
import { ExternalLink, Calendar, Building2, User } from 'lucide-react'

const projects = [
  {
    title: 'Traduction du Langage des Signes',
    period: 'Fév – Juin 2024',
    context: 'PFE • Université Alger 1',
    category: 'IA & Vision',
    type: 'academic',
    description: 'Application Python basée sur l\'IA pour convertir les gestes de la langue des signes en texte en temps réel via traitement d\'image et deep learning.',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-50 to-cyan-50',
    icon: '🤟',
  },
  {
    title: 'Application Messagerie par Sockets',
    period: 'Juin 2024',
    context: 'Projet Personnel',
    category: 'Réseau',
    type: 'personal',
    description: 'Application client/serveur de communication en temps réel en Java utilisant les sockets TCP/IP et RMI pour des échanges de messages instantanés.',
    tags: ['Java', 'TCP/IP', 'RMI', 'Sockets'],
    color: 'from-violet-500 to-purple-500',
    gradient: 'from-violet-50 to-purple-50',
    icon: '💬',
  },
  {
    title: 'Gestion Fichiers Monétiques & CPI',
    period: 'Sep – Oct 2025',
    context: 'BDL',
    category: 'Bancaire',
    type: 'professional',
    description: 'Applications PHP natif pour le traitement et l\'intégration des fichiers monétiques et CPI dans le système bancaire de la BDL.',
    tags: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL', 'Oracle'],
    color: 'from-emerald-500 to-teal-500',
    gradient: 'from-emerald-50 to-teal-50',
    icon: '🏦',
  },
  {
    title: 'Gestion Mobile Paiement',
    period: 'Nov – Déc 2025',
    context: 'BDL',
    category: 'Bancaire',
    type: 'professional',
    description: 'Application Laravel pour le traitement et la gestion des flux transactionnels Mobile Paiement avec reporting avancé.',
    tags: ['Laravel', 'PHP', 'HTML/CSS', 'MySQL'],
    color: 'from-amber-500 to-orange-500',
    gradient: 'from-amber-50 to-orange-50',
    icon: '📱',
  },
  {
    title: 'Génération Fichiers BC Clôture CIB',
    period: 'Nov 2025',
    context: 'BDL',
    category: 'Bancaire',
    type: 'professional',
    description: 'Application Java générant automatiquement des fichiers BC pour les opérations de clôture des cartes CIB avec intégration Oracle.',
    tags: ['Java', 'Oracle', 'Automatisation'],
    color: 'from-rose-500 to-pink-500',
    gradient: 'from-rose-50 to-pink-50',
    icon: '💳',
  },
  {
    title: 'Conversion Messages ISO/MT Temps Réel',
    period: 'Fév – Mars 2026',
    context: 'BDL',
    category: 'Intégration',
    type: 'professional',
    description: 'Système Java multithreadé restant en écoute continue pour convertir les messages ISO 8583 / MT entre formats, compatible avec l\'ancien système bancaire.',
    tags: ['Java', 'ISO 8583', 'MT Messages', 'Multithreading'],
    color: 'from-indigo-500 to-blue-500',
    gradient: 'from-indigo-50 to-blue-50',
    icon: '🔄',
  },
  {
    title: 'Plateforme Inscriptions & Financement',
    period: 'Mars 2026',
    context: 'BDL',
    category: 'Web App',
    type: 'professional',
    description: 'Plateforme web Laravel complète pour la gestion des inscriptions, le suivi des dossiers et les demandes de financement.',
    tags: ['Laravel', 'PHP', 'MySQL', 'HTML/CSS'],
    color: 'from-teal-500 to-emerald-500',
    gradient: 'from-teal-50 to-emerald-50',
    icon: '📋',
  },
  {
    title: 'Rapprochement Visa / Mastercard',
    period: 'Mars – Avr 2026',
    context: 'BDL',
    category: 'Finance',
    type: 'professional',
    description: 'Système de rapprochement et de suivi comptable des fichiers monétiques internationaux Visa/Mastercard sous Laravel.',
    tags: ['Laravel', 'PHP', 'JavaScript', 'MySQL'],
    color: 'from-sky-500 to-blue-500',
    gradient: 'from-sky-50 to-blue-50',
    icon: '💰',
  },
]

const typeColors: Record<string, string> = {
  academic: 'bg-blue-50 text-blue-700 border-blue-200',
  personal: 'bg-violet-50 text-violet-700 border-violet-200',
  professional: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}
const typeLabels: Record<string, string> = {
  academic: 'Académique',
  personal: 'Personnel',
  professional: 'Professionnel',
}

export default function Projects() {
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
    <section id="projects" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-blue-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Réalisations
          </span>
          <h2 className="font-display text-4xl font-bold text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
            Mes Projets
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            Du traitement d&apos;image à l&apos;intégration bancaire, voici un aperçu de mes réalisations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm card-hover group"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              {/* Card top gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-sm border border-white`}>
                    {project.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${typeColors[project.type]}`}>
                      {typeLabels[project.type]}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${project.gradient} border border-white`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-2 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {project.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-5">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    {project.type === 'professional' ? (
                      <Building2 className="w-3.5 h-3.5" />
                    ) : (
                      <User className="w-3.5 h-3.5" />
                    )}
                    {project.context}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
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
    </section>
  )
}
