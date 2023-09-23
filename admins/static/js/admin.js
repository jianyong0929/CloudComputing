document.addEventListener('DOMContentLoaded', function () {
    // Your code here, including event listeners
    let rejectButtons = document.querySelectorAll('.reject');

    rejectButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            // Get the company ID associated with this button's row
            let companyID = e.target.dataset.companyID;

            // Send a POST request to the server to delete the company
            fetch('/delete_company', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'company_id=' + companyID,
            })
                .then(function (response) {
                    if (response.ok) {
                        // Add your approval logic here
                        alert('Rejected company with ID: ' + companyID);

                        // Remove the row from the table
                        let row = e.target.closest('tr');
                        row.parentNode.removeChild(row);
                    } else {
                        // Handle errors or display an error message
                        console.error('Error deleting company');
                    }
                })
                .catch(function (error) {
                    console.error('Error:', error);
                });
        });
    });
});
