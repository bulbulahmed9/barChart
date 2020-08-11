
// let CHART = document.getElementById("lineChart")

// let lineChart = new Chart(CHART, {
//     type: 'line',
//     data: {
//         labels: ["january", "february", "march", "april", "may", "june", "july"],
//         datasets: [
//             {
//                 label: "first line chart",
//                 fill: true,
//                 backgroundColor: "transparent",
//                 borderColor: "blue",
//                 // borderDash: [5, 10],
//                 data: [65, 80, 81, 56, 55, 40]
//             }
//         ]
//     }
// })

var CHART = document.getElementById("barChart")

console.log(Chart.defaults)
Chart.defaults.scale.ticks.beginAtZero = true

var barChart = new Chart(CHART, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        datasets: [
            {
                label: "Simple Bar Chart",
                fill: true,
                barPercentage: 0.5,
                // categoryPercentage: 0.5,
                backgroundColor: "#8d6cab",
                data: [10000, 10000, 15000, 10000, 5000, 10000, 10000, 15000, 10000, 5000, 10000, 10000, 15000, 10000, 5000, 10000, 10000, 15000, 10000, 5000, 10000, 10000, 15000, 10000, 5000, 10000, 10000, 15000, 10000, 5000]
            }
        ]
    },
    options: {
        cornerRadius: 50,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 25000,
                    min: 0,
                    stepSize: 5000
                }
            }]
        }
    }
})