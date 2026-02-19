export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-foreground">Gide</span>
      </div>
      <nav className="flex items-center gap-6">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Home
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          About
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Contact
        </a>
      </nav>
    </header>
  )
}
