function storeData(e) {
    e.preventDefault(); // prevent default form submission

    const formData = new FormData(form);
    const userData = {};

    // iterate over the form fields and store their values in the userData object
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    // store the userData object in localStorage
    localStorage.setItem("userData", JSON.stringify(userData));
}
const storedData = localStorage.getItem("userData");
const userData = JSON.parse(storedData);

console.log(userData);