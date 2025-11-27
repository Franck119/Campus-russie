import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()

    const message = `
🎓 *NOUVELLE INSCRIPTION - CAMPUS RUSSIE*

👤 *Informations Personnelles:*
• Nom: ${data.fullName}
• Email: ${data.email}
• Téléphone: ${data.phone}
• Date de Naissance: ${data.dateOfBirth}
• Nationalité: ${data.nationality}
• Passeport: ${data.passportNumber}

📚 *Informations Académiques:*
• Niveau d'Études: ${data.educationLevel}
• Programme Souhaité: ${data.desiredProgram}
• Université: ${data.university || 'Non spécifié'}
• Date de Début: ${data.startDate}

💬 *Message:*
${data.message || 'Aucun message'}

⏰ Date: ${new Date().toLocaleString('fr-FR')}
    `.trim()

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    )

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json()
      console.error('Telegram API Error:', errorData)
      throw new Error('Failed to send to Telegram')
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Registration submitted successfully' 
    })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    )
  }
}
