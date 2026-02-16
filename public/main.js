document.getElementById('btnConvertir').addEventListener('click', () => {
  const pesos = document.getElementById('pesos').value;

  if (!pesos || isNaN(pesos) || pesos <= 0) {
    alert('Por favor ingresa una cantidad válida en pesos');
    return;
  }

  // Conversión directa sin servidor
  const tasaCambio = 17.10; // 1 dólar = 17.10 pesos
  const dolares = (parseFloat(pesos) / tasaCambio).toFixed(2);
  
  document.getElementById('dolares').value = '$' + dolares + ' USD';
  document.getElementById('dolares').className = 'resultado-exitoso';
});

document.getElementById('btnLimpiar').addEventListener('click', () => {
  document.getElementById('pesos').value = '';
  document.getElementById('dolares').value = '';
  document.getElementById('dolares').className = '';
});
