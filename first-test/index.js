const tbody = document.querySelector('.tbody');

let dataArr = [];

function getData() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
    .then(res => res.json())
    .then(result => dataArr = result)
    .then(() => {
        for (let i = 0; i < dataArr.length; i++) {
            let tr = document.createElement('tr');
            tr.classList.add('tr')
            tr.innerHTML = `
                        <tr>
                            <td>${dataArr[i].id}</td>
                            <td>${dataArr[i].symbol}</td>
                            <td>${dataArr[i].name}</td>
                         </tr>
                     `;

            if (dataArr[i].symbol === "usdt") {
                tr.style.backgroundColor = "rgba(0,255,0,0.5)"
                
            } else if (i <= 5) {
                tr.style.backgroundColor = "rgba(0,0,255,0.5)"
            }

            tbody.append(tr);
        }
    })
}

getData();