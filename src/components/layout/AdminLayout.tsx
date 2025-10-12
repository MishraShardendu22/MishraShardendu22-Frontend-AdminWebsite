import { useEffect, useState } from 'preact/hooks'
import { route } from 'preact-router'
import { useAuth } from '../../hooks/use-auth'
import {
  Menu,
  User,
  Settings,
  Briefcase,
  LogOut,
  Award,
  LayoutDashboard,
  FolderKanban,
  GraduationCap,
} from 'lucide-react'
import { Button } from '../ui/button'
import ThemeToggle from '../extra/ThemeToggle'
import type { JSX } from 'preact'

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Profile', href: '/admin/profile', icon: User },
  { name: 'Skills', href: '/admin/skills', icon: Settings },
  { name: 'Projects', href: '/admin/projects', icon: Briefcase },
  { name: 'Experiences', href: '/admin/experiences', icon: GraduationCap },
  { name: 'Certifications', href: '/admin/certifications', icon: Award },
  { name: 'Kanban', href: '/admin/kanban', icon: FolderKanban },
]

interface AdminLayoutProps {
  children?: JSX.Element | JSX.Element[]
  path?: string
}

export default function AdminLayout({ children, path }: AdminLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { logout, isAuthenticated, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !isAuthenticated && path !== '/admin/login') {
      route('/admin/login')
    }
  }, [isAuthenticated, isLoading, path])

  const isActive = (href: string) => path === href

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="fixed bottom-4 right-4 z-[60]">
        <ThemeToggle />
      </div>

      <header className="sticky top-0 z-50 flex items-center justify-between bg-card/90 backdrop-blur-md border-b border-border px-4 sm:px-8 h-16 shadow-md">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-primary/20 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
          <a href="/admin/dashboard" className="font-bold text-xl text-primary select-none">
            Admin Panel
          </a>
        </div>

        <nav className="hidden lg:flex gap-6 font-semibold">
          {navigation.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive(href)
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="text-primary hover:bg-primary/20" onClick={logout}>
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      {mobileMenuOpen && (
        <nav className="lg:hidden sticky top-16 z-40 bg-card/90 backdrop-blur-md border-b border-border shadow-md flex flex-col px-4 py-2 gap-2">
          {navigation.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-150 ${
                isActive(href)
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </a>
          ))}
        </nav>
      )}

      <main className="flex-1 p-6 sm:p-10">{children}</main>
    </div>
  )
}
