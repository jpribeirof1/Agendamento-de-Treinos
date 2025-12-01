const form = document.getElementById('form');
const lista = document.getElementById('lista');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const tema = document.getElementById('tema').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const participantes = document.getElementById('participantes').value;

  const item = document.createElement('li');
  item.textContent = `${data} • ${hora} — ${tema} (Participantes: ${participantes})`;

  lista.appendChild(item);

  form.reset();
});
