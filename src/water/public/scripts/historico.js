document
  .getElementById('history-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    const response = await fetch(
      `/water/history?userId=${userId}&startDate=${startDate}&endDate=${endDate}`,
    );
    const history = await response.json();

    const resultDiv = document.getElementById('history-result');
    resultDiv.innerHTML = `<h2>Histórico de Consumo</h2>`;
    history.forEach((entry) => {
      resultDiv.innerHTML += `<p>Data: ${entry.date}, Consumo: ${entry.amount}m³</p>`;
    });
  });
