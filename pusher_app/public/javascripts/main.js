const form = document.getElementById('vote-form');

form.addEventListener('submit', (e) => {
    const choice = document.querySelector('input[name=os] :checked').value;

    const data = {os: choise};
     
    fetch('http://localhost:3000/', {
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Types' : 'application/json'
        })    
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    e.preventDefault();
});

let datapoints = [
    { lable: 'windows', y: 0 },
    { lable: 'mac', y: 0 },
    { lable: 'linux', y: 0 },
    { lable: 'other', y: 0 }
];

const chartContainer = document.querySelector('#chartContainer');

if(chartContainer){
    const chart = new CanvasJs.Chart('chartContainer', {
        animationEnabled: true,
        theme: 'theme1',
        title: {
            text : 'OS Result',
        },
        data: [
            {
                type: 'column',
                dataPoints: datapoints 
            }
        ],
    });
    chart.render();
}