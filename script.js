let requestURL = 'https://city-mobil.ru/api/cars';

let xhr = new XMLHttpRequest();

xhr.responseType = 'json';

xhr.onload = () => {
    let response = xhr.response;
    renderList (response);
}

xhr.open('GET', requestURL);
xhr.send();

let tbody = document.getElementsByTagName('tbody');


function renderList (response) {
    let responseArray = Object.values(response)
    responseArray.forEach(el => {
        el.forEach (element => {
            let tr = document.createElement('tr');
            let td = document.createElement('td');

            if(element.mark !== undefined && element.model !== undefined) {

                tr.appendChild(td);
                tbody[0].appendChild(tr);
                td.innerText = element.mark + ' ' + element.model;
            }
            

            let td2 = document.createElement('td');
            tr.appendChild(td2);

            let td3 = document.createElement('td');
            tr.appendChild(td3);

            let td4 = document.createElement('td');
            tr.appendChild(td4);

            let td5 = document.createElement('td');
            tr.appendChild(td5);

            let td6 = document.createElement('td');
            tr.appendChild(td6);

            let tariffs = Object.entries(element.tariffs);

            let tariffs0 = tariffs[0]
            
            tariffs.forEach(element => {
                if(tariffs0[0] == "Эконом") {
                    let element1 = element[1]
                    td2.innerText = Object.values(element1);
                }else {
                    td2.innerText = '-';
                }

                if(tariffs0[0] == "Комфорт") {
                    let element1 = element[1]
                    td3.innerText = Object.values(element1);
                }else {
                    td3.innerText = '-';
                }

                if(tariffs0[0] == "Комфорт+") {
                    let element1 = element[1]
                    td4.innerText = Object.values(element1);
                }else {
                    td4.innerText = '-';
                }

                if(tariffs0[0] == "Минивен") {
                    let element1 = element[1]
                    td5.innerText = Object.values(element1);
                }else {
                    td5.innerText = '-';
                }

                if(tariffs0[0] == "Бизнес") {
                    let element1 = element[1]
                    td6.innerText = Object.values(element1);
                }else {
                    td6.innerText = '-';
                }
            })
        })
        let anchor = document.getElementById('anchor')

        let table = document.getElementById('table')

        let bool = true;



        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            
            bool = !bool;

            let sortedRows = Array.from(table.rows)
            .slice(1)
            if(bool == false) {
                sortedRows.sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? -1 : 1);
            }else {
                sortedRows.sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
            }
            

            table.tBodies[0].append(...sortedRows);
        })

        
        
        let btn = document.getElementById('btn');

        btn.addEventListener('click', () => {
            let input = document.querySelector('#input');
            let inputValue = input.value.trim();
            if(inputValue != '') {
                rows.forEach(element => {
                    if(element.cells[0].innerText.indexOf(inputValue) == -1) {
                        console.log(inputValue)
                        element.classList.add('hide');
                    }
                    
                })
            }else {
                rows.forEach(element => {
                    element.classList.remove('hide');
                })
            }
        })

        let rows = Array.from(table.rows)
        .slice(1)
        
        let chosenCar = document.getElementById('chosenCar');

        rows.forEach( element => {
            element.addEventListener('click', () => {
                let elementCells = Array.from(element.cells)
                elementCells.forEach(element => {
                    if(element.innerText != '-' && element != elementCells[0]) {
                        console.log(element.innerText);
                        let elementIndex = elementCells.indexOf(element);
                        chosenCar.innerText = 'Выбран автомобиль ' + elementCells[0].innerText + ' ' + elementCells[elementIndex].innerText + ' года выпуска';
                    }
                })
            })
        })

        
        
    })
}