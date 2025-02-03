# Resume Analyzer (Frontend)

A modern web application frontend built with Next.js that provides an intuitive interface for resume analysis and cover letter generation. This is the client-side component of the Resume Analyzer application.

## 🌟 Features

- **Interactive Resume Upload**: Drag-and-drop interface for easy resume uploads
- **Real-time Analysis**: View resume analysis results in real-time with a beautiful UI
- **Cover Letter Generator**: User-friendly interface for generating customized cover letters
- **Secure Authentication**: Protected routes with JWT-based authentication
- **Responsive Design**: Beautiful and modern UI that works on all devices
- **Dark/Light Mode**: Support for both dark and light themes

## 🏗️ Project Structure

```
├── app/                 # Next.js 14 app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── services/       # Service-specific pages
├── components/         # Reusable UI components
│   ├── ui/            # Basic UI components
│   └── providers/     # Context providers
├── sections/          # Feature-specific sections
│   ├── analyze/       # Resume analysis components
│   ├── auth/          # Authentication forms
│   └── cover-letter/  # Cover letter components
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── types/             # TypeScript type definitions
└── styles/            # Global styles and Tailwind config
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm or bun package manager
- Backend API server running (see [backend repository](link-to-backend-repo))

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy the example environment file and configure it:

   ```bash
   cp .env.example .env
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:3000`

## 🔧 Environment Variables

Copy `.env.example` to `.env` and configure:

- `NEXT_PUBLIC_API_URL`: Backend API URL (e.g., http://localhost:3000)
- `NEXT_PUBLIC_APP_URL`: Frontend application URL
- `NEXT_PUBLIC_UPLOAD_MAX_SIZE`: Maximum file upload size in MB

## 🎨 Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Run type checking
pnpm type-check
```

### Code Style

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

### Component Development

- Use Tailwind CSS for styling
- Follow atomic design principles
- Implement responsive design
- Ensure accessibility standards

## 🧪 Testing

```bash
# Run unit tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue in the GitHub repository.
