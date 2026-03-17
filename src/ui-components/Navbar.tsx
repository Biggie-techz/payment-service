import { useTheme } from '@/components/theme-provider'
import { Sun, Moon } from 'lucide-react'

export const Navbar = () => {
  const logo = "/favicon/StateLogo.png"
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'light' : 'system')
  }

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <nav className="p-4 md:px-6 bg-background/90 sticky top-0 z-50 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <img src={logo} alt="" className="w-36" />
        <p className="font-bold text-sm lg:text-2xl text-chart-5 hidden lg:block">Revenue Payments Made Easy</p>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-input hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
            title="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button className="bg-emerald-800 text-white p-2 rounded-md cursor-pointer">Self-Service</button>
        </div>
      </div>
    </nav>
  )
}
