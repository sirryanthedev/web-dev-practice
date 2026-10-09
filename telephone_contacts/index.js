const btn_clear = document.querySelector(".button-clear");
const btn_confirm = document.querySelector(".button-confirm");
const p_results = document.querySelector(".p-results");
const input_contact = document.querySelector(".input-contact");
// test data
const contacts = ["Mary:02345", "Jane:01543", "Dan:08123", "Bob:03272"]; 

btn_clear.addEventListener("click", () => {
    p_results.textContent = "";
    input_contact.value = "";
});
btn_confirm.addEventListener("click", () => {
    if (input_contact.value) {
        p_results.textContent = "";
        for (const contact of contacts) {
            let contact_info = contact.split(":");
            if (contact_info[0].toLowerCase() === input_contact.value.toLowerCase()) {
                p_results.textContent = `The contact was found! ${contact_info[0]}: ${contact_info[1]}.`
                return;
            }
        }
        p_results.textContent = "Contact not found!";
        return;
    } else {
        p_results.textContent = "Enter a contact name!";
    }
})