document.querySelectorAll('.reject').forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default form submission
        
        // Retrieve the 'company_id' from the data attribute
        var companyID = button.getAttribute('data-companyID');
        
        // Send a POST request to the server to delete the company
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
                console.error('Error deleting company');
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
    });
});
