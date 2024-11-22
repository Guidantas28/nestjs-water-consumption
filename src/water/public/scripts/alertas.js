document.getElementById('alert-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const userId = document.getElementById('userId').value;

  const response = await fetch(`/water/alert?userId=${userId}`);
  const alerts = await response.json();

  const resultDiv = document.getElementById('alert-result');
  resultDiv.innerHTML = `<h2>Alertas</h2>`;
  alerts.forEach((alert) => {
    resultDiv.innerHTML += `<p>${alert.message}</p>`;
  });
});
