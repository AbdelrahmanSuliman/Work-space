// Function to open a main tab
function openTab(tabName, elmnt) {
    // Declare variables
    let i, tabcontent, tablinks;
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Remove the 'active' class from all tab links
    tablinks = document.getElementsByClassName("tablink")
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.opacity = 1;
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Display the selected tab content
    document.getElementById(tabName).style.display = "block";
    elmnt.style.opacity = 0.5;
    // Add the 'active' class to the clicked tab link
    elmnt.className += " active";
}

// Function to open a subtab
function openSubTab(subTabName, elmnt) {
    // Declare variables
    let i, subtabcontent, subtablinks;
    // Hide all subtab content
    subtabcontent = document.getElementsByClassName("subtabcontent")
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    // Remove the 'active' class from all subtab links
    subtablinks = document.getElementsByClassName("subtablink")
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].style.opacity = 1;
        subtablinks[i].className = subtablinks[i].className.replace(" active", "");
    }
    // Display the selected subtab content
    document.getElementById(subTabName).style.display = "block";
    elmnt.style.opacity = 0.5;
    // Add the 'active' class to the clicked subtab link
    elmnt.className += " active";
}

const form = document.querySelector(".productForm");

form.addEventListener('submit', event => {
    // Prevent form submission from refreshing the page
    event.preventDefault();

    // Generate a unique product code
    const productCode = generateProductCode();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productQuantity = document.getElementById('productQuantity').value;
    const imageInput = document.getElementById('productImageUpload')
    const products = document.getElementById('existing-products-tab')

    // Get the first selected file from the file input field
    const file = imageInput.files[0]
    const reader = new FileReader();

    // Event listener for the 'load' event when the file is read successfully
    reader.onload = function (event) {
        // Create a new image element
        const imageElement = document.createElement('img')
        // Set the src attribute of the image element to the data URL of the uploaded image
        imageElement.src = event.target.result;

        // Remove the placeholder if it exists
        const placeholder = document.getElementById('placeholder')
        if (placeholder) {
            products.removeChild(placeholder);
        }

        // Create a new div for the product
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')

        // Create a new div for product details
        const productDetailsDiv = document.createElement('div')

        // Construct HTML for the product details
        productDetailsDiv.innerHTML = `
            <h4 id="product-name-${productName}">${productName}</h4>
            <p id="product-price-${productName}">$${productPrice}</p>
            <p id="product-quantity-${productName}">Stock: ${productQuantity}</p>
        `;

        // Append the product details div to the product div
        productDiv.appendChild(productDetailsDiv);

        // Append the image element before the product details
        productDiv.insertBefore(imageElement, productDetailsDiv);

        const barcodeCanvas = document.createElement('canvas');
        barcodeCanvas.id = `barcode-${productName}`; // Unique ID for each barcode container

        // Append the barcode canvas to the product div
        productDiv.appendChild(barcodeCanvas);

        // Append the product div to the products container
        products.appendChild(productDiv);

        // Generate barcode for the product
        JsBarcode(barcodeCanvas, productCode, {
            format: 'CODE128',
            displayValue: true,
            width: 1,
            height: 50,
            fontSize: 20
        });

        // Create a new div for the buttons
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        // Create a new download button
        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.classList.add('download-button');
        downloadButton.id = `download-btn-${productName}`;

        // Add an event listener to the download button
        downloadButton.addEventListener('click', () => {
            const barcodeImage = document.getElementById(`barcode-${productName}`).toDataURL('image/png');
            const a = document.createElement('a');
            a.href = barcodeImage;
            a.download = `${productName}-barcode.png`;
            a.click();
        });

        // Append the download button to the buttons div
        buttonsDiv.appendChild(downloadButton);

        // Create a new edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.id = `edit-btn-${productName}`;

        editButton.addEventListener('click', function() {
            openEditModal(productName, productPrice, productQuantity);
        });

        // Append the edit button to the buttons div
        buttonsDiv.appendChild(editButton);

        // Append the buttons div to the product div
        productDiv.appendChild(buttonsDiv);

        // Append the product div to the products container
        products.appendChild(productDiv);
    }

    // Read the uploaded image file as a data URL
    reader.readAsDataURL(file);


    // Clear input fields after adding the product
    document.getElementById('productName').value = ''
    document.getElementById('productPrice').value = ''
    document.getElementById('productQuantity').value = ''
    document.getElementById('productImageUpload').value = ''; // Clear the file input
});

// Helper function to generate a unique product code
function generateProductCode() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Function to open the edit modal for a product
function openEditModal(name, price, quantity) {
    // Set the values of the input fields in the edit modal
    document.getElementById('editProductName').value = name;
    document.getElementById('editProductPrice').value = price;
    document.getElementById('editProductQuantity').value = quantity;
 
    // Display the edit modal
    document.getElementById('editModal').style.display = 'block';

    window.currentProduct = name;
 
    // Set the data-product-name attribute for the product div
    const productDiv = document.querySelector(`[data-product-name="${name}"]`);
    if (productDiv) {
        productDiv.dataset.productName = name;
    }
 
    // Set the initial values of the edit modal input fields
    document.getElementById(`edit-product-name`).value = name;
    document.getElementById(`edit-product-price`).value = price;
    document.getElementById(`edit-product-quantity`).value = quantity;
}
 
 // Close the edit modal when the close button is clicked
document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('editModal').style.display = 'none';
};
 
 // Save changes to the product when the save button is clicked
document.getElementById('saveChangesBtn').onclick = function() {
    const productName = document.getElementById('editProductName').value;
    const productPrice = document.getElementById('editProductPrice').value;
    const productQuantity = document.getElementById('editProductQuantity').value;
 
    // Get the current product
    const currproduct = window.currentProduct;
 
    // Update the product details on the page
    document.getElementById(`product-name-${currproduct}`).textContent = productName;
    document.getElementById(`product-price-${currproduct}`).textContent = `$${productPrice}`;
    document.getElementById(`product-quantity-${currproduct}`).textContent = `Stock: ${productQuantity}`;
 
    // Update the current product
    window.currentProduct = productName;
 
    // Close the edit modal
    document.getElementById('editModal').style.display = 'none';
};

// Function to scan a barcode from an image file
function scanBarcodeFromImage() {
    // Get the file input element
    const fileInput = document.getElementById('imageInput');

    const checkoutTableBody = document.querySelector('#cartTable tbody');

    // Get the selected file
    const file = fileInput.files[0];

    // If a file is selected
    if (file) {
        // Create a new FileReader instance
        const reader = new FileReader();

        // Event listener for the 'load' event when the file is read successfully
        reader.onload = function (event) {
            // Create a new Image object
            const img = new Image();
            // Event listener for the 'load' event when the image is loaded
            img.onload = function () {
                // Call the javascriptBarcodeReader function with the image and barcode configuration
                javascriptBarcodeReader({
                    image: img,
                    barcode: 'code-128',
                    options: {}
                })
                .then(code => {
                    // Get the output element
                    const outputElement = document.getElementById('output');
                    // If there are barcodes and their length is greater than 0
                    if (code && code.length > 0) {
                        // Set the output element's innerText to 'Detected Barcode: ' followed by the first barcode
                        outputElement.innerText = 'Detected Barcode: ' + code;

                        const newRow = document.createElement('tr');
                        
                        const productNameCell = document.createElement('td');
                    } else {
                        // Otherwise, set the output element's innerText to 'No barcode found'
                        outputElement.innerText = 'No barcode found';
                    }
                })
                .catch(err => {
                    // If there is an error, set the output element's innerText to 'Error: ' followed by the error message
                    document.getElementById('output').innerText = 'Error: ' + err.message;
                    // Log the error
                    console.error(err);
                });
            };
            // Set the image source to the data URL of the uploaded image
            img.src = event.target.result;
        };

        // Read the file as a Data URL
        reader.readAsDataURL(file);
    } else {
        // If no file is selected, log an error message
        console.error('No file selected');
    }
}

function scanBarcode() {
    const scannerContainer = document.getElementById('scanner-container');
    const scanOutput = document.getElementById('scanOutput');

    // Initialize Quagga.js and start the scanner
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: scannerContainer,
            constraints: {
                width: 480,
                height: 320,
                facingMode: "environment"
            },
        },
        decoder: {
            readers: ["ean_reader", "upc_reader", "code_128_reader", "code_39_reader", "code_39_vin_reader", "codabar_reader", "i2of5_reader", "2of5_reader", "code_93_reader"]
        }
    }, function (err) {
        if (err) {
            console.error('Failed to initialize Quagga: ', err);
            return;
        }
        // Set willReadFrequently to true for the canvas element
        const videoElem = document.querySelector('video');
        if (videoElem) {
            const canvasElem = videoElem.nextElementSibling;
            if (canvasElem && canvasElem.tagName.toLowerCase() === 'canvas') {
                canvasElem.setAttribute('willReadFrequently', true);
            }
        }
        Quagga.start();
    });

    // Event listener for successful barcode detection
    Quagga.onDetected(function (data) {
        const code = data.codeResult.code;
        scanOutput.innerText = 'Detected Barcode: ' + code;
    });
}


