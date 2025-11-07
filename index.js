// --- Task 1 --- //
function formatFullName(firstName, lastName) {
    // --- Check if firstname and lastname are missing
    if (firstName === "" || firstName === undefined) {
        return "Invalid input.";
    }

    if (lastName === "" | lastName === undefined) {
        return "Invalid input.";
    }

    // --- Formatted to uppercase the first  letter of each one first and lastname
    const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return formattedLastName + ", " + formattedFirstName;

}

console.log(formatFullName("Juan", "Saldarriaga"))

// --- Task 2 --- ///
function calculateTotalCost(price, quantity, taxRate) {
    // --- Check price, quantity and taxrate
    if(price === "" | price === undefined | price === null) {
        return "Invalid input";
    }

    if(quantity === "" | quantity === undefined | quantity === null) {
        return "Invalid input";
    }

    if(taxRate === "" | taxRate === undefined | taxRate === null) {
        return "Invalid input";
    }
    // --- total cost calculation formula
    const totalCost = (price * quantity) * (1 + taxRate);

    // --- return total cost
    return totalCost;
}

console.log(calculateTotalCost(12, 5, 0.5)) // --- Returns Final cost
console.log(calculateTotalCost(7, 3, 1)) // --- Returns Final cost
console.log(calculateTotalCost(2, "", 0.5)) // --- Returns Invalid input
