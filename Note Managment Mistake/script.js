function clickKiya() {
    let productName = document.getElementById("productId").value;
    let productPrice = document.getElementById("productPrice").value;
    let fileInput = document.getElementById('imageInput');
    let file = fileInput.files[0];

    if (productName && productPrice && file) {
        let newRowHTML = `<tr>
            <td>${productName}</td>
            <td><img src="${URL.createObjectURL(file)}" style="width: 10em;"></td>
            <td>${productPrice}</td>
        </tr>`;

        document.getElementById('tableBody').innerHTML += newRowHTML;
        document.getElementById("productId").value = "";
        document.getElementById("productPrice").value = "";
        fileInput.value = "";

        let deleteButton = document.getElementById('deleteLastRowButton');
        if (!deleteButton) {
            // Agar nahi hoga to append kar rha hu
            deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Last Row';
            deleteButton.id = 'deleteLastRowButton';
            deleteButton.onclick = deleteLastRow;
            document.getElementById('ResultContainer').appendChild(deleteButton);
        }
    } else {
        alert("Pehele sab dhang se daaliye 🙏");
    }
}
function deleteLastRow() {
    let tableBody = document.getElementById('tableBody');
    let rows = tableBody.getElementsByTagName('tr');

    // Ye check karne ke liye Rows hai ki nahi
    if (rows.length > 0) {
        tableBody.removeChild(rows[rows.length - 1]);
    } else {
        alert("No rows to delete.");
    }

    // Ye delete button chupane ke liye
    if (tableBody.children.length === 0) {
        let deleteButton = document.getElementById('deleteLastRowButton');
        if (deleteButton) {
            deleteButton.remove();
        }
    }
}

