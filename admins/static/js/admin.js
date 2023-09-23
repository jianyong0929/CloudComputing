// This would be replaced with a call to your server to get the actual data
var registrations = [
    { companyID: '1',companyName: 'Company A', address: '11A, Lorong Seri Juru 24, Taman Seri Juru', contactNo: '05-3453209', email: 'companyA@example.com', status: 'Pending' },
    { companyID: '2', companyName: 'Company B',address: '11A, Lorong Seri Juru 24, Taman Seri Juru', contactNo: '04-5068432', email: 'companyB@example.com', status: 'Pending' }
    // ...
];

var table = document.getElementById('registrationTable');

registrations.forEach(function(registration) {
    var row = document.createElement('tr');
    
    var idCell = document.createElement('td');
    idCell.textContent = registration.companyID;
    row.appendChild(idCell);

    var nameCell = document.createElement('td');
    nameCell.textContent = registration.companyName;
    row.appendChild(nameCell);

    var addressCell = document.createElement('td');
    addressCell.textContent = registration.address;
    row.appendChild(addressCell);

    var contactNoCell = document.createElement('td');
    contactNoCell.textContent = registration.contactNo;
    row.appendChild(contactNoCell);

    var emailCell = document.createElement('td');
    emailCell.textContent = registration.email;
    row.appendChild(emailCell);
    
    var statusCell = document.createElement('td');
    statusCell.textContent = registration.status;
    row.appendChild(statusCell);
    
    var actionCell = document.createElement('td');
    var approveButton = document.createElement('button');
    approveButton.textContent = 'Approve';
    approveButton.onclick = function() {
        // Add your approval logic here
        alert('Approved ' + registration.companyName);
    };
    actionCell.appendChild(approveButton);
    
    var rejectButton = document.getElementById('Reject');
    //rejectButton.textContent = 'Reject';

    rejectButton.onclick = function() {
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
    
    actionCell.appendChild(rejectButton);
    
    row.appendChild(actionCell);
    
    table.appendChild(row);
});

document.getElementById('logout').addEventListener('click', function() {
    window.location.href = 'index.html'; // replace 'login.html' with the path to your login page
});

// Assuming each row has a reject button with a class 'reject'
let rejectButtons = document.querySelectorAll('.reject');

rejectButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        let row = e.target.parentNode.parentNode; // get the parent row of the clicked button
        row.parentNode.removeChild(row); // remove the row from its parent (the table)
    });
});

