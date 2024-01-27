let wrapperTable = document.getElementById('wrapperTable');

fetch('http://localhost:3000')
    .then(response => {
        response.json()
            .then(meteo => {
                console.log(meteo);
                view(meteo);
            });
    });

function formatData(dataString) {
    const data = new Date(dataString);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    };

    return data.toLocaleString('it-IT', options);
}

function view(meteo) {
    const innerArray = meteo[0];

    innerArray.forEach(element => {
        let formattedTramonto = formatData(element.tramonto);

        let row = document.createElement('tr');
        row.innerHTML = `
            <td class="text-center">${formattedTramonto}</td>
            <td class="text-center">${element.temperatura_massima}</td>
        `;

        wrapperTable.appendChild(row);
    });
}
