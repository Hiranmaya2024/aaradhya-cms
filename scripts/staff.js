document.addEventListener('DOMContentLoaded', async () => {
    const stockTable = document.getElementById('stockTable');
    const customerLedgerTable = document.getElementById('customerLedgerTable');

    try {
        // Fetch and display stock data
        const stockData = await fetchStockData();
        stockData.forEach(item => {
            const row = document.createElement('tr');

            const itemCell = document.createElement('td');
            itemCell.textContent = item.name;
            row.appendChild(itemCell);

            const quantityCell = document.createElement('td');
            quantityCell.textContent = item.quantity;
            row.appendChild(quantityCell);

            const rateCell = document.createElement('td');
            rateCell.textContent = item.rate;
            row.appendChild(rateCell);

            stockTable.appendChild(row);
        });

        // Fetch and display customer ledger data
        const ledgerData = await fetchCustomerLedger();
        ledgerData.forEach(entry => {
            const row = document.createElement('tr');

            const customerNameCell = document.createElement('td');
            customerNameCell.textContent = entry.customerName;
            row.appendChild(customerNameCell);

            const balanceCell = document.createElement('td');
            balanceCell.textContent = entry.outstandingBalance;
            row.appendChild(balanceCell);

            customerLedgerTable.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading staff data:', error);
    }
});

async function fetchStockData() {
    // Placeholder for API call to fetch stock data
    // Replace with actual implementation
    return [
        { name: 'Paracetamol', quantity: 100, rate: '₹50' },
        { name: 'Amoxicillin', quantity: 200, rate: '₹120' },
        { name: 'Cough Syrup', quantity: 150, rate: '₹80' }
    ];
}

async function fetchCustomerLedger() {
    // Placeholder for API call to fetch customer ledger data
    // Replace with actual implementation
    return [
        { customerName: 'Pharmacy A', outstandingBalance: '₹5000' },
        { customerName: 'Pharmacy B', outstandingBalance: '₹3000' },
        { customerName: 'Pharmacy C', outstandingBalance: '₹7000' }
    ];
}
