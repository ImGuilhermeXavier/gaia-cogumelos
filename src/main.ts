import './style.css'

// Menu Mobile
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

// Formulário de Contato
;(() => {
  const form = document.getElementById('email-form') as HTMLFormElement
  if (!form) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const data = {
      nome: formData.get('nome') as string,
      empresa: formData.get('empresa') as string,
      email: formData.get('email') as string,
      mensagem: formData.get('mensagem') as string,
    }

    const submitButton = form.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement
    const originalText = submitButton.textContent

    try {
      // Desabilita o botão e mostra loading
      submitButton.disabled = true
      submitButton.textContent = 'Enviando...'

      const response = await fetch('/api/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // Sucesso
        submitButton.textContent = 'Enviado!'
        submitButton.classList.remove('bg-forest', 'hover:bg-leaf')
        submitButton.classList.add('bg-green-600')

        // Reset form
        form.reset()

        // Volta ao estado original após 3s
        setTimeout(() => {
          submitButton.disabled = false
          submitButton.textContent = originalText
          submitButton.classList.remove('bg-green-600')
          submitButton.classList.add('bg-forest', 'hover:bg-leaf')
        }, 3000)
      } else {
        throw new Error('Erro no envio')
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)

      // Erro
      submitButton.textContent = 'Erro no envio'
      submitButton.classList.remove('bg-forest', 'hover:bg-leaf')
      submitButton.classList.add('bg-red-600')

      // Volta ao estado original após 3s
      setTimeout(() => {
        submitButton.disabled = false
        submitButton.textContent = originalText
        submitButton.classList.remove('bg-red-600')
        submitButton.classList.add('bg-forest', 'hover:bg-leaf')
      }, 3000)
    }
  })
})()
