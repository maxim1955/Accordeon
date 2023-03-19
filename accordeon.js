

let acc = document.querySelectorAll(".accordion")
console.log(acc)
for (let res of acc) {
    res.addEventListener("click", () => {
        res.classList.toggle("active")
        let panel = res.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    })
}
