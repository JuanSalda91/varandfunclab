// --- Task 1 --- //
function formatFullName(firstName, lastName){
    // Check if firstname and lastname are missing
    if (firstName === "" || firstName === undefined) {
        return "Invalid input.";
    }

    if (lastName === "" | lastName === undefined) {
        return "Invalid input.";
    }

    // Formatted to uppercase the first  letter of each one first and lastname
    const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return formattedLastName + ", " + formattedFirstName;

}

console.log(formatFullName("Juan", "Saldarriaga"))