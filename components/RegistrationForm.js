'use client'

import { useState } from 'react'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    educationLevel: '',
    desiredProgram: '',
    university: '',
    startDate: '',
    message: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Inscription envoyée avec succès! Nous vous contacterons bientôt.'
        })
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          nationality: '',
          passportNumber: '',
          educationLevel: '',
          desiredProgram: '',
          university: '',
          startDate: '',
          message: ''
        })
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Une erreur est survenue. Veuillez réessayer.'
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erreur de connexion. Veuillez vérifier votre connexion internet.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Nom Complet *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Votre nom complet"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="votre.email@exemple.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="+33 6 12 34 56 78"
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
            Date de Naissance *
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            required
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-2">
            Nationalité *
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            required
            value={formData.nationality}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Française"
          />
        </div>

        <div>
          <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Numéro de Passeport *
          </label>
          <input
            type="text"
            id="passportNumber"
            name="passportNumber"
            required
            value={formData.passportNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="12AB34567"
          />
        </div>

        <div>
          <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700 mb-2">
            Niveau d'Études *
          </label>
          <select
            id="educationLevel"
            name="educationLevel"
            required
            value={formData.educationLevel}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >
            <option value="">Sélectionnez...</option>
            <option value="Baccalauréat">Baccalauréat</option>
            <option value="Licence">Licence</option>
            <option value="Master">Master</option>
            <option value="Doctorat">Doctorat</option>
          </select>
        </div>

        <div>
          <label htmlFor="desiredProgram" className="block text-sm font-medium text-gray-700 mb-2">
            Programme Souhaité *
          </label>
          <input
            type="text"
            id="desiredProgram"
            name="desiredProgram"
            required
            value={formData.desiredProgram}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Ex: Médecine, Ingénierie, etc."
          />
        </div>

        <div>
          <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
            Université Préférée
          </label>
          <input
            type="text"
            id="university"
            name="university"
            value={formData.university}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Nom de l'université (optionnel)"
          />
        </div>

        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
            Date de Début Souhaitée *
          </label>
          <select
            id="startDate"
            name="startDate"
            required
            value={formData.startDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >
            <option value="">Sélectionnez...</option>
            <option value="Septembre 2025">Septembre 2025</option>
            <option value="Février 2026">Février 2026</option>
            <option value="Septembre 2026">Septembre 2026</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message Additionnel
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Informations supplémentaires..."
          />
        </div>

        {status.message && (
          <div className={`p-4 rounded-lg ${
            status.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Envoi en cours...' : "Soumettre l'Inscription"}
        </button>
      </form>
    </div>
  )
}
