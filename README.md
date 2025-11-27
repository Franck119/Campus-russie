# Campus Russie - Registration Platform

## 🚀 Quick Deploy to Vercel

### Step 1: Upload to GitHub
1. Create a new repository on GitHub
2. Upload all these files to the repository

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repository
5. Add Environment Variables:
   - TELEGRAM_BOT_TOKEN: 8311920098:AAEnHnuPvUAhFx_XoIsklYYzo4ND2tubYVk
   - TELEGRAM_CHAT_ID: -1003174010015
6. Click Deploy

## ✅ What's Included
- ✅ Registration form with validation
- ✅ Telegram bot integration
- ✅ Responsive design
- ✅ French language interface
- ✅ Success/error handling

## 📁 File Structure
```
campus-russie/
├── package.json
├── next.config.js
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   └── api/
│       └── submit/
│           └── route.js
└── components/
    └── RegistrationForm.js
```

## 🔧 Local Development (Optional)
```bash
npm install
npm run dev
```

Visit http://localhost:3000
