interface NavigationProps {
  scrolled?: boolean;
  activeSection?: string;
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation({ activeSection = '' }: NavigationProps) {
  return (
    <nav 
      className="fixed top-1/2 -translate-y-1/2 right-8 z-50 hidden md:block"
      aria-label="Main navigation"
    >
      <div className="flex flex-col gap-2">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.href}
              href={link.href}
              className={`w-2 h-2 rounded-full transition-all ${
                isActive
                  ? 'bg-foreground scale-125' 
                  : 'bg-muted hover:bg-muted-foreground'
              }`}
              title={link.label}
            >
              <span className="sr-only">{link.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
