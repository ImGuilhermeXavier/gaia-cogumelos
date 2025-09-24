import './style.css'
;(() => {
  const btn = document.getElementById('btnMenu')
  const menu = document.getElementById('mobileMenu')
  if (!btn || !menu) return

  const closeMenu = () => {
    if (!menu.classList.contains('hidden')) {
      menu.classList.add('hidden')
      btn.setAttribute('aria-expanded', 'false')
    }
  }

  // Abre/Fecha
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    const isOpen = !menu.classList.contains('hidden')
    menu.classList.toggle('hidden')
    btn.setAttribute('aria-expanded', String(!isOpen))
    if (!isOpen) {
      const firstLink = menu.querySelector('a')
      firstLink?.focus()
    }
  })

  // Fecha clicando fora
  document.addEventListener('click', (e: MouseEvent) => {
    if (!menu.classList.contains('hidden') && e?.target) {
      const inside = menu.contains(e.target as Node)
      const onBtn = btn.contains(e.target as Node)
      if (!inside && !onBtn) closeMenu()
    }
  })

  // Fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu()
  })

  // Fecha ao clicar em qualquer link
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => closeMenu())
  })
})()
