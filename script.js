// Sample menu items (you can replace this with data fetched from a server or a database)
const menuItems = [
    {
        name: "Spicy Biryani",
        description: "Flavorful and spicy biryani with tender chicken and basmati rice.",
        price: "$12.99",
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Paneer Tikka",
        description: "Grilled paneer marinated with yogurt and spices, served with chutney.",
        price: "$8.99",
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Veg Pizza",
        description: "Delicious pizza topped with fresh vegetables and melted cheese.",
        price: "$10.99",
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Chocolate Lava Cake",
        description: "Warm and gooey chocolate cake served with vanilla ice cream.",
        price: "$6.99",
        image: "https://via.placeholder.com/300x200"
    }
];

// Function to render menu cards dynamically
function renderMenu() {
    const menuContainer = document.getElementById('menu-cards-container');
    menuContainer.innerHTML = ''; // Clear any existing cards

    menuItems.forEach(item => {
        // Create the card element
        const card = document.createElement('div');
        card.classList.add('menu-card');

        // Set the inner HTML for the card
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-card-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-card-footer">
                    <span class="price">${item.price}</span>
                    <button class="btn-order">Add to Cart</button>
                </div>
            </div>
        `;

        // Append the card to the container
        menuContainer.appendChild(card);
    });
}

// Call the render function when the page loads
window.onload = renderMenu;

