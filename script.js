function calculateQuote() {
    // Get user input
    const websiteType = document.getElementById('website-type').value;
    const selectedFeatures = Array.from(document.getElementById('features').selectedOptions).map(option => option.value);
    const numberOfPages = parseInt(document.getElementById('pages').value);
    const urgencyLevel = parseInt(document.getElementById('urgency').value);
  
    // Base Price for the selected website type (adjust these values based on your pricing)
    let basePrice = 0;
    switch (websiteType) {
      case 'basic':
        basePrice = 5000; // Adjust as needed
        break;
      case 'portfolio':
        basePrice = 10000; // Adjust as needed
        break;
      case 'e-commerce':
        basePrice = 15000; // Adjust as needed
        break;
      // Add more cases as needed
    }
  
    // Additional Features Price
    let additionalFeaturesPrice = 0;
    const featurePrices = {
      responsive: 2000, // Adjust as needed
      'custom-design': 5000, // Adjust as needed
      // Add more features and prices as needed
    };
    selectedFeatures.forEach(feature => {
      additionalFeaturesPrice += featurePrices[feature] || 0;
    });
  
    // Page Price
    const costPerPage = 1000; // Adjust as needed
    const pagePrice = numberOfPages * costPerPage;
  
    // Urgency Cost
    const urgencyCosts = {
      1: 0, // Not Urgent 
      2: 1000, // Moderate 
      3: 2000,    // Urgent 
    };
    const urgencyCost = urgencyCosts[urgencyLevel] || 0;
  
    // Total Quote
    const totalQuote = basePrice + additionalFeaturesPrice + pagePrice + urgencyCost;
  
    // Display the result
    const resultElement = document.getElementById('quote-results');
    resultElement.innerHTML = `Total Quote: R${totalQuote}`;

     // Check if the Terms and Conditions checkbox is checked
  const termsCheckbox = document.getElementById('terms-checkbox');
  if (!termsCheckbox.checked) {
    alert('Please read and accept the Terms and Conditions before submitting the form.');
    return; // Stop execution if the checkbox is not checked
  }
  }
  
  // Update urgency label
  function updateUrgencyLabel() {
    const urgencyInput = document.getElementById('urgency');
    const urgencyLabel = document.getElementById('urgency-label');
  
    if (urgencyInput.value == 1) {
      urgencyLabel.innerHTML = 'Urgency Level: Not Urgent';
    } else if (urgencyInput.value == 2) {
      urgencyLabel.innerHTML = 'Urgency Level: Moderate';
    } else if (urgencyInput.value == 3) {
      urgencyLabel.innerHTML = 'Urgency Level: Urgent';
    } else {
      urgencyLabel.innerHTML = '';
    }
  }
  