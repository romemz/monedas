document.getElementById('btnConvertir').addEventListener('click', () => {
  const pesos = document.getElementById('pesos').value;

  if (!pesos || isNaN(pesos) || pesos <= 0) {
    alert('Por favor ingresa una cantidad válida en pesos');
    return;
  }

  fetch('/convertir', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pesos: parseFloat(pesos) })
  })
  .then(r => r.json())
  .then(data => {
    document.getElementById('dolares').value = '$' + data.dolares + ' USD';
    document.getElementById('dolares').className = 'resultado-exitoso';
  })
  .catch(err => {
    alert('Error en la conversión');
    console.error(err);
  });
});

document.getElementById('btnLimpiar').addEventListener('click', () => {
  document.getElementById('pesos').value = '';
  document.getElementById('dolares').value = '';
  document.getElementById('dolares').className = '';
});
