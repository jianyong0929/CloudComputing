fetch('/delete_company', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'company_id=' + companyID, // Include the company ID in the request
})
.then(function(response) {
    if (response.ok) {
        // Add your approval logic here
        alert('Rejected company with ID ' + companyID);
    } else {
        // Handle errors or display an error message
        console.error('Error deleting company. Status:', response.status);
        response.text().then(function(errorMessage) {
            console.error('Error Message:', errorMessage);
        });
    }
})
.catch(function(error) {
    console.error('Fetch Error:', error);
});
