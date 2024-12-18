document.addEventListener('DOMContentLoaded', async () => {
    const stockTable = document.getElementById('stockTable');
    const customerLedgerTable = document.getElementById('customerLedgerTable');

    try {
        const stockData = await getStockData();
        stockData.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            stockTable.appendChild(tr);
        });

        const customerLedger = await getCustomerLedger();
        customerLedger.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            customerLedgerTable.appendChild(tr);
        });
    } catch (error) {
        console.error('Error loading staff data:', error);
    }
});
