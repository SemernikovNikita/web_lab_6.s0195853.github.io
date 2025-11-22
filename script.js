window.addEventListener('DOMContentLoaded',function(event){
    let currentRadioValue = "";

    let radios = document.getElementsByName("radio-group-1");
    radios.forEach(function(radio){
        radio.addEventListener("change",function(event){
            let select = event.target;
            currentRadioValue = select.value;
            let list = document.getElementsByName("listbox")[0];
            let chek = document.getElementsByClassName("characteristic")[0];
            let label = document.getElementById("ischezni");

            if(list) list.style.display = "block";
            if(chek) chek.style.display = "block"; 
            if(label) label.style.display = "block";  

            if(select.value == "1"){
                if(list) list.style.display = "none";
                if(chek) chek.style.display = "none";
                if(label) label.style.display = "none";
            }
            else if(select.value == "2"){
                if(chek) chek.style.display = "none";
            }
            
            else if(select.value == "3"){
                if(list) list.style.display = "none";
                if(label) label.style.display = "none";
            }
        });
    });
    
    document.getElementById('calculate').addEventListener('input', function() {
            
            const count = parseInt(document.getElementById('count').value);
            
            if (isNaN(count) || count < 1) {
                alert('Пожалуйста, введите корректное количество товара');
                return;
            }

            if(currentRadioValue == "1"){
                const result = count * currentRadioValue;
                document.getElementById('result').textContent = 
                `Итоговая стоимость товара: ${result}`;
            }

            else if(currentRadioValue == "2"){
                const l = document.getElementsByName('listbox')[0];
                const listboxvalue = parseInt(l.value);
                const result = listboxvalue * currentRadioValue * count;
                document.getElementById('result').textContent = 
                `Итоговая стоимость товара: ${result}`;
            }

            else if(currentRadioValue == "3"){
                const serviceCheckboxes = document.querySelectorAll('input[name="check-1"]:checked');
                let serviceValue = 1;
                serviceCheckboxes.forEach(checkbox => {
                    serviceValue *= parseFloat(checkbox.value) || 1;
                });
                const result = currentRadioValue * count * serviceValue;
                document.getElementById('result').textContent = 
                `Итоговая стоимость товара: ${result}`;
            };
        
    })
});