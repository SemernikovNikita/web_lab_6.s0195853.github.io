window.addEventListener('DOMContentLoaded', function(event) {
    let currentRadioValue = "";
    function calculateTotal() {
        const countInput = document.getElementById('count');
        const count = parseInt(countInput.value);
        
        if (isNaN(count) || count < 1) {
            document.getElementById('result').textContent = 'Итоговая стоимость товара: 0';
            return;
        }
    
        let result = 0;
    
        if (currentRadioValue === "1") {
            result = count * parseInt(currentRadioValue);
        } else if (currentRadioValue === "2") {
            const list = document.getElementsByName('listbox')[0];
            if (list) {
                const listboxvalue = parseInt(list.value);
                result = listboxvalue * parseInt(currentRadioValue) * count;
            }
        } else if (currentRadioValue === "3") {
            const serviceCheckboxes = document.querySelectorAll('input[name="check-1"]:checked');
            let serviceValue = 1;
            serviceCheckboxes.forEach(checkbox => {
                serviceValue *= parseFloat(checkbox.value) || 1;
            });
            result = parseInt(currentRadioValue) * count * serviceValue;
        }
    
        document.getElementById('result').textContent = `Итоговая стоимость товара: ${result}`;
    }

    let radios = document.getElementsByName("radio-group-1");
    radios.forEach(function(radio) {
        radio.addEventListener("change", function(event) {
            let select = event.target;
            currentRadioValue = select.value;
            let list = document.getElementsByName("listbox")[0];
            let chek = document.getElementsByClassName("characteristic")[0];
            let label = document.getElementById("ischezni");

            if (list) list.style.display = "block";
            if (chek) chek.style.display = "block"; 
            if (label) label.style.display = "block";  

            if (select.value == "1") {
                if (list) list.style.display = "none";
                if (chek) chek.style.display = "none";
                if (label) label.style.display = "none";
            } else if (select.value == "2") {
                if (chek) chek.style.display = "none";
            } else if (select.value == "3") {
                if (list) list.style.display = "none";
                if (label) label.style.display = "none";
            }
            
            calculateTotal();
        });
    });


    document.getElementById('count').addEventListener('input', calculateTotal);

    const listbox = document.getElementsByName('listbox')[0];
    listbox.addEventListener('change', calculateTotal);
    

    const checkboxes = document.querySelectorAll('input[name="check-1"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });

    
});
