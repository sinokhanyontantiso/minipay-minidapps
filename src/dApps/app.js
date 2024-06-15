document.getElementById('sendForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const recipient = document.getElementById('recipient').value;
  const amount = document.getElementById('amount').value;

  try {
    const response = await fetch('/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipient, amount })
    });

    const data = await response.json();
    document.getElementById('result').innerHTML = `<p>${data.message}</p>`;
  } catch (error) {
    console.error('Error sending transaction:', error);
  }
});
