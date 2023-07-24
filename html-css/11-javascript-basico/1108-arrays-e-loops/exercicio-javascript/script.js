const links = document.querySelectorAll("nav a");

function ativarLink(link) {
  const href = link.href;
  const url = document.location.href;

  if (href === url) {
    link.style.color = "white";
    link.style.backgroundColor = "black";
  }
}

links.forEach(ativarLink);
