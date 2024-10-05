// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const packages = [
        { name: "Beach Holiday", price: 300 },
        { name: "Mountain Adventure", price: 500 }
    ];

    const packageList = document.querySelector('.package-list');
    const packageSelect = document.getElementById('packageSelect');

    // Function to render packages
    function renderPackages() {
        packageList.innerHTML = '';
        packageSelect.innerHTML = '';
        packages.forEach((pkg, index) => {
            // Create package card
            const packageDiv = document.createElement('div');
            packageDiv.className = 'package';
            packageDiv.innerHTML = `
                <h3>${pkg.name}</h3>
                <p>Price: $${pkg.price}</p>
            `;
            packageList.appendChild(packageDiv);

            // Add package to select dropdown
            const option = document.createElement('option');
            option.value = index;
            option.text = `${pkg.name} - $${pkg.price}`;
            packageSelect.appendChild(option);
        });
    }

    // Admin form to add new package
    const adminForm = document.getElementById('adminForm');
    adminForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const packageName = document.getElementById('packageName').value;
        const packagePrice = document.getElementById('packagePrice').value;

        packages.push({ name: packageName, price: Number(packagePrice) });
        renderPackages();
        adminForm.reset();
    });

    // Booking form
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const selectedPackageIndex = document.getElementById('packageSelect').value;
        const taxiBooking = document.getElementById('taxiBooking').checked;
        const hotelBooking = document.getElementById('hotelBooking').checked;

        const selectedPackage = packages[selectedPackageIndex];
        alert(`You have booked the "${selectedPackage.name}" package with:
        Taxi Booking: ${taxiBooking ? 'Yes' : 'No'}
        Hotel Booking: ${hotelBooking ? 'Yes' : 'No'}`);
        
        bookingForm.reset();
    });

    // Initial render of packages
    renderPackages();
});
