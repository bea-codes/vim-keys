/*
VIM-LIKE SHORTCUTS FOR SCROLLING FIREFOX ADDON.
by bea-codes.

TO-DOS:
- Rolagem Horizontal
- Tornar os seguintes parâmetros configuráveis pelo usuários:
    1. Rolagem "smooth" ou "instant"
    2. Valor da rolagem ({top: -100, 50, 200}... etc)
- Checar qual elemento está em foco e fazer a rolagem em relação a esse elemento. (Pesquisar se é possível)
*/

document.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return
  }

  let key = event.key
  if (event.altKey) {
    switch (key) {
      case "j":
        window.scrollBy({
          top: 100,
          behavior: "smooth",
        })
        console.log(`${key} pressed`)
        break

      case "k":
        window.scrollBy({
          top: -100,
          behavior: "smooth",
        })
        console.log(`${key} pressed`)
        break

      case "h":
        window.scrollBy({
          left: -100,
          behavior: "smooth",
        })
        console.log(`${key} pressed`)
        break

      case "l":
        window.scrollBy({
          left: 100,
          behavior: "smooth",
        })
        console.log(`${key} pressed`)
        break

      default:
        return
    }
  } else {
    return
  }

  event.preventDefault()
})
