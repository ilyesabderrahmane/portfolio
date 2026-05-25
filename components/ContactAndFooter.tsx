'use client'
import { useEffect, useRef } from 'react'
import {
  Mail, Phone, MapPin, Download, Github, Linkedin,
  Send, ArrowUpRight, Code2
} from 'lucide-react'

export default function ContactAndFooter() {
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
    <>
      <section id="contact" className="py-24 bg-slate-50" ref={ref}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-blue-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Contact
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
              Travaillons Ensemble
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full mx-auto mt-4" />
            <p className="text-slate-500 mt-4 max-w-md mx-auto">
              Je suis ouvert aux nouvelles opportunités, collaborations et projets intéressants.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: contact cards */}
            <div className="space-y-5 reveal">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'abderrahmaneelyes66@gmail.com',
                  href: 'mailto:abderrahmaneelyes66@gmail.com',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  icon: Phone,
                  label: 'Téléphone',
                  value: '0662 25 25 95',
                  href: 'tel:0662252595',
                  color: 'from-emerald-500 to-teal-500',
                },
                {
                  icon: MapPin,
                  label: 'Adresse',
                  value: 'Cité Mohamed Okil LPP, Sidi Abdellah, Alger 16201',
                  href: '#',
                  color: 'from-violet-500 to-purple-500',
                },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-5 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group card-hover"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                      {label}
                    </div>
                    <div className="text-slate-800 font-semibold group-hover:text-blue-600 transition-colors">
                      {value}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-400 ml-auto transition-colors" />
                </a>
              ))}

              {/* Download CV */}
              <a
                href="/Abderrahmane_Elyes_CV.pdf"
                download
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-3xl p-6 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:scale-[1.02] active:scale-95 transition-all duration-200 font-semibold text-lg"
              >
                <Download className="w-6 h-6" />
                Télécharger mon CV (PDF)
              </a>
            </div>

            {/* Right: quick info card */}
            <div className="reveal">
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Disponibilités & Infos
                </h3>

                <div className="space-y-5">
                  {[
                    { label: 'Statut', value: 'En poste à la BDL', accent: true },
                    { label: 'Ouvert à', value: 'Opportunités, freelance, collaborations' },
                    { label: 'Localisation', value: 'Alger, Algérie' },
                    { label: 'Permis', value: 'B / A2' },
                    { label: 'Service militaire', value: 'Exempté' },
                    { label: 'Date de naissance', value: '28 Juillet 2001' },
                  ].map(({ label, value, accent }) => (
                    <div key={label} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                      <span className="text-slate-400 font-medium">{label}</span>
                      <span className={`font-semibold text-right ${accent ? 'text-emerald-600' : 'text-slate-700'}`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-slate-400 text-sm font-medium mb-4">Réseaux professionnels</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-2xl text-sm font-semibold hover:bg-slate-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-2xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a
                      href="mailto:abderrahmaneelyes66@gmail.com"
                      className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-5 py-3 rounded-2xl text-sm font-semibold hover:bg-blue-100 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold font-display" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Abderrahmane Elyes
                </div>
                <div className="text-slate-500 text-sm">Développeur Full Stack JS</div>
              </div>
            </div>

            <div className="text-center text-sm">
              <p>Conçu & développé avec ❤️ par Abderrahmane Elyes</p>
              <p className="text-slate-600 mt-1">Built with Next.js & Tailwind CSS • {new Date().getFullYear()}</p>
            </div>

            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:abderrahmaneelyes66@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
