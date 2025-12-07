# NotifyDesk - React TypeScript Dashboard App

A modern, fully-featured dashboard application built with React, TypeScript, Tailwind CSS, shadcn/ui components, and Framer Motion animations.

## Features

### ✨ Core Features

- **Authentication System**
  - Login/Logout functionality with form validation
  - Auth context management for global state
  - Protected routes based on authentication status
  - Demo credentials: Use any email and password to login

- **Responsive Dashboard**
  - Collapsible left sidebar navigation
  - Multiple menu sections with icons
  - Smooth animations and transitions
  - Mobile-friendly design

- **Light/Dark Theme**
  - Theme toggle available on login page and dashboard
  - Persistent theme preference (saved in localStorage)
  - Automatic detection of system preferences
  - Seamless theme switching with Tailwind CSS

- **Page Sections**
  - **Dashboard**: Overview with stat cards
  - **Messages**: Message center (extensible)
  - **Users**: User management view
  - **Notifications**: Notification feed
  - **Settings**: User settings and profile management

### 🎨 Design & Animation

- Built with **Tailwind CSS** for styling
- **shadcn/ui** components for consistent UI
- **Framer Motion** for smooth animations:
  - Page transitions
  - Button interactions
  - Sidebar animations
  - Card stagger effects
  - Hover states with whileHover/whileTap

- Beautiful gradient backgrounds
- Smooth color transitions
- Interactive UI elements

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Animation library
- **Radix UI** - Unstyled, accessible components
- **Lucide Icons** - Beautiful icon library

## Project Structure

```
src/
├── components/
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       └── switch.tsx
├── context/
│   ├── AuthContext.tsx     # Authentication state management
│   └── ThemeContext.tsx    # Theme state management
├── lib/
│   └── utils.ts            # Utility functions (cn for classname merging)
├── pages/
│   ├── LoginPage.tsx       # Login page with animations
│   └── Dashboard.tsx       # Main dashboard with sidebar
├── App.tsx                 # Root component with routing logic
├── main.tsx                # React root and context providers
└── index.css               # Global styles with Tailwind

Configuration Files:
├── vite.config.ts          # Vite configuration with path aliases
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── tsconfig.app.json       # App-specific TypeScript config
```

## Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd /Users/sagar12/sagar_v/reactProject/NotifyDesk
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

### Login

1. Open the app in your browser
2. Enter any email and password (demo mode accepts any credentials)
3. Click "Login" to proceed to the dashboard

### Navigation

- Use the sidebar menu to navigate between different sections
- Click the menu icon (top-left) to toggle sidebar visibility
- Each menu item has a smooth hover effect and animation

### Theme Switching

- Click the theme toggle (Moon/Sun icon) in either:
  - Login page top-right
  - Dashboard sidebar bottom section
- Your theme preference is automatically saved

### Logout

- Click the "Logout" button in the dashboard sidebar
- You'll be redirected back to the login page

## Component Documentation

### UI Components

#### Button
```tsx
import { Button } from '@/components/ui/button'

<Button variant="default" size="lg">Click me</Button>
```

Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
Sizes: `default`, `sm`, `lg`, `icon`

#### Input
```tsx
import { Input } from '@/components/ui/input'

<Input type="email" placeholder="your@email.com" />
```

#### Switch
```tsx
import { Switch } from '@/components/ui/switch'

<Switch checked={isDark} onCheckedChange={toggle} />
```

### Context Hooks

#### useAuth
```tsx
import { useAuth } from '@/context/AuthContext'

const { user, isAuthenticated, login, logout } = useAuth()
```

#### useTheme
```tsx
import { useTheme } from '@/context/ThemeContext'

const { theme, toggleTheme } = useTheme()
```

## Animations

The application uses Framer Motion for:

- **Page Transitions**: Content fades in and slides in/out
- **Button Interactions**: Scale and hover effects
- **Menu Items**: Slide animations on hover
- **Card Stagger**: Sequential animations for dashboard cards
- **Sidebar Toggle**: Smooth width transitions

All animations are performant and respect user preferences for reduced motion.

## Customization

### Adding New Pages

1. Create a new file in `src/pages/`
2. Export a React component
3. Add navigation logic in `Dashboard.tsx` or `App.tsx`

### Adding New Components

1. Create component in `src/components/`
2. Use existing UI components from `components/ui/`
3. Combine with Framer Motion for animations

### Theming

Edit `src/index.css` to customize CSS variables:
```css
:root {
  --primary: your-color;
  --background: your-color;
  /* ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Created with ❤️ using React, TypeScript, and modern web technologies.

---

**Happy coding!** 🚀
