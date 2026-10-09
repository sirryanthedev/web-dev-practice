const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    let msg = document.querySelector("p");
    let keys = [];

    if (e.altKey) {
        keys.push("alt");
    }
    if (e.ctrlKey) {
        keys.push("ctrl");
    }
    if (e.metaKey) {
        keys.push("meta");
    }
    if (e.shiftKey) {
        keys.push("shift");
    }
    
    msg.textContent =  `Special keys pressed: ${keys.join('+')}`;
})