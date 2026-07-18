import { useEffect, useState } from 'react'

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
]

function Nav() {
    const [activeId, setActiveId] = useState('home')

    useEffect(() => {
        const sections = ['home', ...navItems.map((item) => item.id)]
            .map((id) => document.getElementById(id))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <nav className="site-nav">
            <div className="container d-flex align-items-center justify-content-between py-3">
                <a href="#home" className="nav-brand">
                    Maryam Lim-Baig
                </a>
                <div className="d-flex gap-2">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`nav-link ${activeId === item.id ? 'active' : ''}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Nav
