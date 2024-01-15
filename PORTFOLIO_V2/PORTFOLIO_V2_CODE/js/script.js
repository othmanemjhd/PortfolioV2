// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const filterButtons = document.querySelectorAll('.btn-group .btn');
    const itemList = document.getElementById('itemList');
    console.log("im inside filter function");
    console.log(filterButtons);
    console.log(itemList);
    // Add click event listener to each filter button
    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const selectedCategory = button.getAttribute('data-category');

            // Filter items based on the selected category
            filterItems(selectedCategory);
        });
    });

    // Function to filter items
    function filterItems(category) {
        const items = itemList.querySelectorAll('li');
        console.log("im inside filterItems function");
        console.log(items);
        items.forEach(function (item) {
            const itemCategory = item.getAttribute('data-category');

            if (category === 'all' || category === itemCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
