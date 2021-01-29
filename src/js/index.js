const action = document.querySelectorAll("button")
const hasil = document.getElementById("hasil")

function penjumlahan() {
    const checkboxs = document.querySelectorAll("input:checked")
    if (checkboxs.length === 1 || checkboxs.length === 0) {
        hasil.style.color = "blue"
        hasil.innerHTML = "pilih minimal 2"

    } else {
        let countValue = 0;
        hasil.innerHTML = ""
        checkboxs.forEach((checkbox) => {
            let value = checkbox.parentElement.querySelector("input[type=number]").value
            if (value == "") {
                hasil.innerHTML = "field kosong"
                hasil.style.color = "blue"
            } else {
                countValue += parseInt(value)
                hasil.style.color = "blue"
                hasil.innerHTML = countValue
            }
        })
    }
}

function pengurangan() {
    const checkboxs = document.querySelectorAll("input:checked")
    if (checkboxs.length === 1 || checkboxs.length === 0) {
        hasil.style.color = "blue"
        hasil.innerHTML = "pilih minimal 2"

    } else {
        let countValue = 0,
            valid = 0;
        hasil.innerHTML = ""
        checkboxs.forEach((checkbox) => {
            let value = checkbox.parentElement.querySelector("input[type=number]").value
            if (value == "") {
                hasil.innerHTML = "field kosong"
                hasil.style.color = "blue"
                valid++
            } else {
                countValue = (countValue === 0 ? countValue + parseInt(value) : countValue - parseInt(value))
                if (valid === 0) {
                    hasil.style.color = "blue"
                    hasil.innerHTML = countValue
                }
            }
        })
    }
}

function perkalian() {
    const checkboxs = document.querySelectorAll("input:checked")
    if (checkboxs.length === 1 || checkboxs.length === 0) {
        hasil.style.color = "blue"
        hasil.innerHTML = "pilih minimal 2"

    } else {
        let countValue = 0,
            valid = 0;
        hasil.innerHTML = ""
        checkboxs.forEach((checkbox) => {
            let value = checkbox.parentElement.querySelector("input[type=number]").value
            if (value === "") {
                hasil.innerHTML = "field kosong"
                hasil.style.color = "blue"
                valid++
            } else {
                countValue = (countValue === 0 ? parseInt(value) : countValue * parseInt(value))
                if (valid === 0) {
                    hasil.style.color = "blue"
                    hasil.innerHTML = countValue
                }
            }
        })
    }
}

function pembagian() {
    const checkboxs = document.querySelectorAll("input:checked")
    if (checkboxs.length === 1 || checkboxs.length === 0) {
        hasil.style.color = "blue"
        hasil.innerHTML = "pilih minimal 2"

    } else {
        let countValue = 0,
            valid = 0;
        hasil.innerHTML = ""
        checkboxs.forEach((checkbox) => {
            let value = checkbox.parentElement.querySelector("input[type=number]").value
            if (value === "") {
                hasil.innerHTML = "field kosong"
                hasil.style.color = "blue"
                valid++
            } else {
                countValue = (countValue === 0 ? parseInt(value) : countValue / parseInt(value))
                if (valid === 0) {
                    hasil.style.color = "blue"
                    hasil.innerHTML = countValue
                }
            }
        })
    }
}

action.forEach((item) => {
    item.addEventListener('click', (e) => {
        let operator = e.target.value

        if (operator == "+") {
            this.penjumlahan()
        } else if (operator == "-") {
            this.pengurangan()
        } else if (operator == "*") {
            this.perkalian()
        } else if(operator == "/"){
            this.pembagian()
        } else {
            
        }
    })
})