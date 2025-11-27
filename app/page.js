import RegistrationForm from '@/components/RegistrationForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Campus Russie
            </h1>
            <p className="text-gray-600">
              Inscription pour les études en Russie
            </p>
          </div>
          <RegistrationForm />
        </div>
      </div>
    </main>
  )
}
