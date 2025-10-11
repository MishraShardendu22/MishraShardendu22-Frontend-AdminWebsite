# MishraShardendu22-Frontend-AdminWebsite

> Admin dashboard microfrontend for managing Shardendu Mishra's portfolio website

This is the admin panel for managing content, skills, projects, experiences, certifications, and other aspects of the portfolio website. Built with Preact, Vite, and TailwindCSS.

## 🚀 Features

- **Authentication System**: Secure login for admin access
- **Dashboard**: Overview of portfolio statistics and metrics
- **Profile Management**: Update personal information and settings
- **Skills Management**: Add, edit, and organize technical skills
- **Projects Management**: Manage portfolio projects with rich descriptions
- **Experience Management**: Track and update work experience entries
- **Certifications Management**: Maintain certification records
- **Kanban Board**: Task management and workflow organization
- **Markdown Editor**: Rich text editing with TipTap integration

## 🛠️ Tech Stack

- **Framework**: [Preact](https://preactjs.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: Custom components with Radix UI primitives
- **Routing**: Preact Router
- **State Management**: Preact Hooks
- **Editor**: TipTap (for markdown editing)

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20.x or later)
- [pnpm](https://pnpm.io/installation)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/MishraShardendu22/MishraShardendu22-Frontend-AdminWebsite.git
   cd MishraShardendu22-Frontend-AdminWebsite
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open your browser and navigate to `http://localhost:5173/admin`

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 🏗️ Project Structure

```
src/
├── components/
│   ├── admin/          # Admin-specific components
│   ├── extra/          # Additional components (Markdown Editor)
│   ├── layout/         # Layout components
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── pages/
│   └── admin/          # Admin pages (dashboard, skills, projects, etc.)
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and API helpers
├── app.tsx             # Main app component with routing
└── main.tsx            # Application entry point
```

## 🔐 Authentication

The admin panel requires authentication to access. Make sure to configure your authentication endpoints in the environment variables.

## 🌐 Deployment

This project is deployed as a Vercel microfrontend and is integrated with the main portfolio website.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shardendu Mishra**
- Email: mishrashardendu22@gmail.com
- GitHub: [@MishraShardendu22](https://github.com/MishraShardendu22)

## 📚 Related Projects

- [Main Portfolio Website](https://github.com/MishraShardendu22/MishraShardendu22-Frontend-PersonalWebsite)
- [Blog Website](https://github.com/MishraShardendu22/MishraShardendu22-Frontend-BlogWebsite)

## ⚠️ Security

If you discover any security-related issues, please email mishrashardendu22@gmail.com instead of using the issue tracker. See [SECURITY.md](SECURITY.md) for more information.

## 📋 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating in this project.
