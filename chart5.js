const ctx5 = document.getElementById('scatter');

let scatter =  new Chart(ctx5, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
              x: -10,
              y: 0
            },{
                x: -8,
                y: 1
              }, {
                x: -8,
                y: 1.5
              },{
                x: -7,
                y: .5
              },{
                x: -4,
                y: 3
              },{
                x: -4,
                y: 2
              },{
                x: -5,
                y: 1
              },{
              x: 0,
              y: 10
            }, {
                x: 2,
                y: 2
              },{
                x: 3,
                y: 5
              },{
                x: 4,
                y: 8
              },{
                x: 4,
                y: 7.5
              },{
                x: 6,
                y: 9
              },{
              x: 10,
              y: 5
            }, {
              x: 0.5,
              y: 5.5
            }],
            backgroundColor: 'rgb(255, 99, 132)'
          }]
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    }
  });