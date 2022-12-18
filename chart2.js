const ctx2 = document.getElementById('doughnut');

let doughnut =  new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow',
            'Green'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100, 125],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 25)'
            ],
            hoverOffset: 4
          }]
    }
  });