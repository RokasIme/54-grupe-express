export function header(activeMenuIndex = -1) {
  const menu = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About us" },
    { href: "/pricing", text: "Pricing" },
    { href: "/users", text: "Users" },
  ];

  let menuHTML = "";

  for (let i = 0; i < menu.length; i++) {
    const link = menu[i];
    const active = i === activeMenuIndex ? "active" : "";
    menuHTML += `<a class="link ${active}" href="${link.href}">${link.text}</a>`;
  }

  return `
        <header class="main-header">
            <img class="logo" src="/img/logo.png" alt="Logo">
            <nav class="main-nav">${menuHTML}</nav>
        </header>`;
}
