document
  .getElementById('consumption-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;

    const response = await fetch('/water/record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: parseInt(userId),
        amount: parseFloat(amount),
        date,
      }),
    });

    if (response.ok) {
      alert('Consumo registrado com sucesso!');
    } else {
      alert('Erro ao registrar consumo!');
    }
  });
