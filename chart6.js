const ctx6 = document.getElementById('mixed');

let mixed =  new Chart(ctx6, {
    type: 'scatter',
    data: {
        labels: [
            'January',
            'February',
            'March',
            'April'
          ],
          datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
          }, {
            type: 'line',
            label: 'Line Dataset',
            data: [15, 25, 35, 45],
            fill: false,
            borderColor: 'rgb(54, 162, 235)'
          }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });