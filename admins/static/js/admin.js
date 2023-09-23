document.getElementById('Reject').onclick = function() {
    console.log('Reject button clicked'); // Add this line for testing

    // Send a POST request to the server to delete the company
    fetch('/delete_company', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'company_id=' + registration.companyID,
    })
    .then(function(response) {
        if (response.ok) {
            // Add your approval logic here
            alert('Rejected ' + registration.companyName);
        } else {
            // Handle errors or display an error message
            console.error('Error deleting company');
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
};
