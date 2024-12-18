document.addEventListener('DOMContentLoaded', async () => {
    const offersList = document.getElementById('offersList');
    const ledgerTable = document.getElementById('ledgerTable');

    try {
        // Fetch and display offers
        const offers = await fetchOffers();
        offers.forEach(offer => {
            const listItem = document.createElement('li');
            listItem.textContent = offer;
            offersList.appendChild(listItem);
        });

        // Fetch and display ledger entries
        const ledgerEntries = await fetchLedger();
        ledgerEntries.forEach(entry => {
            const row = document.createElement('tr');

            const dateCell = document.createElement('td');
            dateCell.textContent = entry.date;
            row.appendChild(dateCell);

            const descriptionCell = document.createElement('td');
            descriptionCell.textContent = entry.description;
            row.appendChild(descriptionCell);

            const amountCell = document.createElement('td');
            amountCell.textContent = entry.amount;
            row.appendChild(amountCell);

            const balanceCell = document.createElement('td');
            balanceCell.textContent = entry.balance;
            row.appendChild(balanceCell);

            ledgerTable.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading customer data:', error);
    }
});

async function fetchOffers() {
    // Placeholder for API call to fetch offers
    // Replace with actual implementation
    return [
        'Buy 2, Get 1 Free',
        '20% off on orders above ₹500',
        'Free delivery for orders this week'
    ];
}

async function fetchLedger() {
    // Placeholder for API call to fetch ledger data
    // Replace with actual implementation
    return [
        { date: '2024-12-01', description: 'Purchase: Paracetamol', amount: '-₹200', balance: '₹800' },
        { date: '2024-12-05', description: 'Payment Received', amount: '+₹500', balance: '₹1300' },
        { date: '2024-12-10', description: 'Purchase: Vitamin D', amount: '-₹300', balance: '₹1000' }
    ];
}
