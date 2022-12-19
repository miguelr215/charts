const ctx2 = document.getElementById('doughnut');

let doughnut =  new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow',
            'Green', 
            'Purple'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [50, 300, 100, 125, 75],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 25, 0.2)',
              'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 25, 1)',
              'rgba(153, 102, 255, 1)'
          ],
            hoverOffset: 4
          }]
    }
  });