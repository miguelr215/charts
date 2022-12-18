const ctx3 = document.getElementById('linechart');

// const labelsName = Utils.months({count: 12});
let linechart =  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Total Per Month',
        data: [12, 19, 3, 5, 2, 7, 9, 5, 8, 13, 9, 15],
        fill: false,
        borderColor: [
            'rgb(75, 192, 192, 1)'
        ],
        tension: 0.1
      }]
    }
  });