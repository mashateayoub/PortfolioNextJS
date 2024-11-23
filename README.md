# Personal Portfolio Website

A modern portfolio website built with Next.js, featuring multi-language support (English, French, and Arabic), dark/light mode, and smooth animations.

## Features

- 🌍 Multi-language support (EN, FR, AR)
- 🌓 Dark/Light mode
- 📱 Fully responsive design
- ⚡ Fast page loads and smooth transitions
- 🎨 Clean and minimal UI
- 🔄 RTL support for Arabic

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Framer Motion
- shadcn/ui



## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-repo/personal-portfolio.git
```         

2. Install dependencies:

```bash
npm install
```



3. Create a `.env.local` file in the root directory with the following variables:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=xyz@gmail.com
SMTP_PASS=xyzPassword
CONTACT_EMAIL=xyz@gmail.com 
```

Note: For Gmail, you'll need to:
    1. Enable 2-factor authentication
    2. Generate an App Password:
        - Go to Google Account settings
        - Security > 2-Step Verification > App passwords
        - Generate a new app password for "Mail"
        - Use this generated password as SMTP_PASS

4. Start the development server:

```bash
npm run dev
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.    
