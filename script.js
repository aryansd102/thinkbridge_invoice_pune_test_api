let items = [];

function addItem() {
    const name = document.getElementById("itemName").value;
    const price = Number(document.getElementById("itemPrice").value);
    const itemId = Number(document.getElementById('itemId').value);

    if (!name || price <= 0) {
        alert("Enter valid item name and price.");
        return;
    }

    items.push({
        ItemID: itemId,
        Name: name,
        Price: price
    });

    updatePreview();

    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
}

function updatePreview() {
    const tbody = document.querySelector("#invoiceTable tbody");
    tbody.innerHTML = "";

    let total = 0;

    items.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.ItemID}</td>
            <td>${item.Name}</td>
            <td>${item.Price.toFixed(2)}</td>
        `;

        total += item.Price;
        tbody.appendChild(row);
    });

    document.getElementById("grandTotal").innerText = total.toFixed(2);
}

function generateInvoice() {
    const invoiceID = document.getElementById("invoiceID").value;
    const customer = document.getElementById("customerName").value;

    if (!invoiceID || !customer) {
        alert("Enter Invoice ID and Customer Name");
        return;
    }

    document.getElementById("prevID").innerText = invoiceID;
    document.getElementById("prevCustomer").innerText = customer;

    updatePreview();

    console.log("Invoice to save:", {
        InvoiceID: invoiceID,
        CustomerName: customer,
        Items: items
    });
}
