import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion' // Switched back to framer-motion matching your environment setup
import { Mail, Menu, Phone, X } from 'lucide-react'

function WhatsAppIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.405.002 9.801-4.394 9.804-9.802.002-2.618-1.013-5.078-2.86-6.929C16.463 1.968 14.009 1.95 11.99 1.95c-5.41 0-9.807 4.394-9.81 9.802-.001 1.636.435 3.235 1.265 4.639L2.28 21.758l5.52-1.447L6.648 19.15zM17.17 14.39c-.286-.144-1.695-.838-1.957-.934-.26-.096-.451-.144-.641.144-.19.286-.735.934-.901 1.122-.166.188-.333.21-.619.066-1.173-.588-2.015-1.026-2.822-1.417-.677-.327-1.094-.633-1.255-.848-.286-.381-.03-.583.151-.763.162-.162.361-.422.542-.634.18-.21.241-.361.361-.601.12-.24.06-.451-.03-.641-.09-.19-.735-1.77-.962-2.32-.222-.53-.475-.458-.651-.462-.17-.003-.365-.004-.56-.004-.195 0-.514.073-.783.361-.269.289-1.024 1.002-1.024 2.445 0 1.443 1.047 2.84 1.192 3.033.146.19 2.06 3.147 4.99 4.417.697.302 1.24.483 1.664.618.7.222 1.339.191 1.843.116.562-.084 1.695-.693 1.935-1.363.24-.67.24-1.24.168-1.362-.072-.122-.26-.194-.546-.34z" />
    </svg>
  )
}

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fix: Handles navigating to standard pages and sections on the homepage cleanly
  const handleNavigation = (e, href) => {
    e.preventDefault()
    setOpen(false)

    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate('/')
      }
      return
    }

    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '')
      
      if (location.pathname === '/') {
        // We are on the homepage, scroll down seamlessly
        const element = document.getElementById(elementId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // We are on another page (like /blog), route back to homepage with anchor point tag
        navigate('/', { state: { scrollToId: elementId } })
      }
    } else {
      // Normal routing for external tracks like /blog
      navigate(href)
    }
  }

  // Effect helper to handle incoming scroll intents from secondary subpages back to home
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToId) {
      const elementId = location.state.scrollToId
      setTimeout(() => {
        const element = document.getElementById(elementId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      // Clear history token state array mapping
      window.history.replaceState({}, document.title)
    }
  }, [location])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* Logo block */}
        <Link to="/" onClick={(e) => handleNavigation(e, '/')} className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <img
              src='/Logo.jpg'
              alt="Thermovap Logo"
              className="w-10 h-10 rounded-lg"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-widest text-foreground">
              THERMOVAP
            </span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground">
              ENGINEERING
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavigation(e, item.href)}
              className="group relative rounded-md px-3 py-2 text-sm font-bold text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-px h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="mailto:thermovapengineering@gmail.com"
            title="Email Thermovap Engineering"
            aria-label="Email Thermovap Engineering"
            className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:bg-secondary hover:border-primary/40 transition-all duration-200"
          >
            <Mail className="h-4 w-4" />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919217227372"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-emerald-600 transition-all hover:bg-emerald-600 hover:text-white dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Phone Button */}
          <a
            href="tel:+919217227372"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:flex"
          >
            <Phone className="h-4 w-4" />
            <span className="text-xs font-mono font-bold">+91 92172 27372</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onTouchStart={(e) => handleNavigation(e, item.href)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}

              {/* WhatsApp Row - Mobile */}
              <a
                href="https://wa.me/919217227372"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>

              {/* Mail Row - Mobile */}
              <a
                href="mailto:thermovapengineering@gmail.com"
                className="mt-2 flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-200"
              >
                <Mail className="h-4 w-4 text-primary" />
                Email Us Directly
              </a>

              {/* Phone Row - Mobile */}
              <a
                href="tel:+919217227372"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                Call +91 92172 27372
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}