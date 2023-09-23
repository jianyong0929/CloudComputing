document.addEventListener('DOMContentLoaded', function() {
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
                    // Company deleted successfully, now update the table
                    return response.json(); // Parse the JSON response
                } else {
                    // Handle errors or display an error message
                    console.error('Error deleting company. Status:', response.status);
                    response.text().then(function(errorMessage) {
                        console.error('Error Message:', errorMessage);
                    });
                }
            })
            .then(function(data) {
                // Update the table with the new data
                renderTable(data);
            })
            .catch(function(error) {
                console.error('Fetch Error:', error);
            });
        });
    });
    
    // Define a function to render the table
    function renderTable(data) {
        // Assuming you have a table element with ID 'companyTable'
        var table = document.getElementById('companyTable');
        
        // Clear the existing table rows, excluding the header row
        var rowCount = table.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            table.deleteRow(i);
        }

        // Iterate over the updated data and add rows to the table
        data.data.forEach(function(row) {
            var newRow = table.insertRow(-1);
            
            // Assuming 'row' has the same structure as in your original table
            // You can add cells and data similar to how you did in your original HTML
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            // Add more cells and data as needed
            cell1.innerHTML = row[0];
            cell2.innerHTML = row[1];
            // Add more cells and data as needed
        });
    }
});
