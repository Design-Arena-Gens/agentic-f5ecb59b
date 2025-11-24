'use client'

import { useState } from 'react'

interface Trend {
  id: number
  title: string
  category: string
  description: string
  impact: string
  actions: string[]
  icon: string
}

const trends: Trend[] = [
  {
    id: 1,
    title: "Intelligence Artificielle et Automatisation RH",
    category: "Technologie",
    description: "L'IA transforme le recrutement, la gestion des talents et l'analyse prédictive. Les chatbots RH et les systèmes d'aide à la décision deviennent essentiels.",
    impact: "Réduction de 40% du temps de recrutement et amélioration de 30% de la qualité des embauches",
    actions: [
      "Implémenter des outils de screening automatisé",
      "Former les équipes RH à l'IA générative",
      "Mettre en place des analyses prédictives du turnover"
    ],
    icon: "🤖"
  },
  {
    id: 2,
    title: "Bien-être Mental et Santé Psychologique",
    category: "Bien-être",
    description: "La santé mentale au travail devient une priorité stratégique. Les entreprises investissent dans des programmes de soutien psychologique et de prévention du burnout.",
    impact: "Réduction de 25% de l'absentéisme et augmentation de 35% de l'engagement",
    actions: [
      "Créer un programme d'accompagnement psychologique",
      "Former les managers à la détection des signaux faibles",
      "Instaurer des journées de santé mentale"
    ],
    icon: "🧠"
  },
  {
    id: 3,
    title: "Hybridation et Flexibilité du Travail",
    category: "Organisation",
    description: "Le modèle hybride s'impose comme la norme. Les organisations repensent leurs espaces et politiques pour maximiser flexibilité et collaboration.",
    impact: "Augmentation de 20% de la productivité et amélioration de 45% de la satisfaction",
    actions: [
      "Définir une politique hybride claire et équitable",
      "Réaménager les espaces de travail collaboratifs",
      "Investir dans les outils de collaboration à distance"
    ],
    icon: "🏢"
  },
  {
    id: 4,
    title: "Upskilling et Reskilling Continus",
    category: "Formation",
    description: "La formation continue devient permanente face à l'évolution rapide des compétences. Les parcours d'apprentissage personnalisés se multiplient.",
    impact: "70% des employés nécessiteront de nouvelles compétences d'ici 2027",
    actions: [
      "Cartographier les compétences futures nécessaires",
      "Créer des académies internes de formation",
      "Développer des partenariats avec des plateformes d'apprentissage"
    ],
    icon: "📚"
  },
  {
    id: 5,
    title: "Diversité, Équité et Inclusion (DEI)",
    category: "Culture",
    description: "Les initiatives DEI passent de la conformité à la stratégie. Les organisations mesurent et agissent concrètement pour créer des environnements inclusifs.",
    impact: "Les entreprises inclusives sont 35% plus performantes financièrement",
    actions: [
      "Établir des objectifs DEI mesurables",
      "Former tous les collaborateurs aux biais inconscients",
      "Créer des groupes de ressources pour employés"
    ],
    icon: "🌈"
  },
  {
    id: 6,
    title: "Analyse de Données RH (People Analytics)",
    category: "Technologie",
    description: "L'utilisation stratégique des données RH pour prendre des décisions éclairées sur les talents, la rétention et la performance organisationnelle.",
    impact: "Amélioration de 50% de la précision des décisions RH stratégiques",
    actions: [
      "Centraliser les données RH dans un système unifié",
      "Former des spécialistes en People Analytics",
      "Créer des dashboards de pilotage RH"
    ],
    icon: "📊"
  },
  {
    id: 7,
    title: "Expérience Employé Personnalisée",
    category: "Engagement",
    description: "Conception d'expériences employé sur mesure, inspirées du marketing client, pour attirer et retenir les talents dans un marché compétitif.",
    impact: "Réduction de 30% du turnover et augmentation de 40% de l'engagement",
    actions: [
      "Cartographier le parcours employé de bout en bout",
      "Personnaliser l'onboarding selon les profils",
      "Créer des moments marquants tout au long du parcours"
    ],
    icon: "✨"
  },
  {
    id: 8,
    title: "Responsabilité Sociale et Environnementale",
    category: "Durabilité",
    description: "Les employés, particulièrement les jeunes générations, choisissent des employeurs alignés avec leurs valeurs environnementales et sociales.",
    impact: "75% des milléniaux prêts à accepter un salaire plus bas pour un employeur responsable",
    actions: [
      "Définir et communiquer la raison d'être de l'entreprise",
      "Mettre en place des politiques environnementales concrètes",
      "Impliquer les employés dans des projets sociaux"
    ],
    icon: "🌍"
  },
  {
    id: 9,
    title: "Gestion Multigénérationnelle",
    category: "Management",
    description: "Gérer harmonieusement jusqu'à 5 générations au travail avec des attentes, valeurs et modes de communication différents.",
    impact: "Les équipes multigénérationnelles sont 20% plus innovantes",
    actions: [
      "Former les managers au leadership intergénérationnel",
      "Créer des programmes de mentorat inversé",
      "Adapter les avantages sociaux aux différentes générations"
    ],
    icon: "👥"
  },
  {
    id: 10,
    title: "Gig Economy et Travailleurs Contingents",
    category: "Organisation",
    description: "Intégration croissante de freelances, consultants et travailleurs à la demande dans les modèles de main-d'œuvre hybrides.",
    impact: "50% de la main-d'œuvre sera composée de travailleurs flexibles d'ici 2027",
    actions: [
      "Créer une stratégie de gestion des talents contingents",
      "Développer des plateformes internes de talents",
      "Assurer l'équité entre employés permanents et contingents"
    ],
    icon: "💼"
  }
]

const categories = ["Toutes", "Technologie", "Bien-être", "Organisation", "Formation", "Culture", "Engagement", "Durabilité", "Management"]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes")
  const [selectedTrend, setSelectedTrend] = useState<Trend | null>(null)

  const filteredTrends = selectedCategory === "Toutes"
    ? trends
    : trends.filter(trend => trend.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🎯 Tendances RH 2025
            </h1>
            <p className="text-lg text-gray-600">
              Vision d'expert sur l'avenir des ressources humaines
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">10</div>
            <div className="text-gray-600">Tendances Majeures</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2025</div>
            <div className="text-gray-600">Année Charnière</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
            <div className="text-gray-600">Insights d'Expert</div>
          </div>
        </div>

        {/* Trends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredTrends.map((trend) => (
            <div
              key={trend.id}
              onClick={() => setSelectedTrend(trend)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-6 border-2 border-transparent hover:border-indigo-300"
            >
              <div className="text-5xl mb-4">{trend.icon}</div>
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-3">
                {trend.category}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {trend.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {trend.description}
              </p>
              <div className="mt-4 text-indigo-600 font-medium text-sm">
                En savoir plus →
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedTrend && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedTrend(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-6xl mb-4">{selectedTrend.icon}</div>
                    <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-3">
                      {selectedTrend.category}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedTrend.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedTrend(null)}
                    className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      📋 Description
                    </h3>
                    <p className="text-gray-700">
                      {selectedTrend.description}
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                      📈 Impact
                    </h3>
                    <p className="text-indigo-800">
                      {selectedTrend.impact}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ✅ Actions Recommandées
                    </h3>
                    <ul className="space-y-2">
                      {selectedTrend.actions.map((action, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">●</span>
                          <span className="text-gray-700">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTrend(null)}
                  className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600">
            © 2025 Tendances RH | Expertise en Ressources Humaines
          </p>
        </div>
      </footer>
    </div>
  )
}
