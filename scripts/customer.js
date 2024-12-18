document.addEventListener('DOMContentLoaded', async () => {
    const offersList = document.getElementById('offersList');
    const ledgerTable = document.getElementById('ledgerTable');

    try {
        const offers = await getOffers();
        offers.forEach(offer => {
            const li = document.createElement('li');
            li.textContent = offer[0];
            offersList.appendChild(li);
        });

        const ledger = await getCustomerLedger();
        ledger.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            ledgerTable.appendChild(tr);
        });
    } catch (error) {
        console.error('Error loading customer data:', error);
    }
});
