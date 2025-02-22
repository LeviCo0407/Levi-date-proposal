document.getElementById('dateProposalForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Retrieve values from the form
  const date = document.getElementById('date').value;
  const activity = document.querySelector('input[name="activity"]:checked').value;
  const food = document.getElementById('food').value;
  const vehicle = document.getElementById('vehicle').value;
  
  // Build and display the results summary
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>Your Date Proposal Summary:</h2>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Activity:</strong> ${activity}</p>
    <p><strong>Food Setting:</strong> ${food}</p>
    <p><strong>Vehicle:</strong> ${vehicle}</p>
  `;
});