document.addEventListener("DOMContentLoaded", function() {
    console.log("Initializing charts...");

    let chart1 = new Chart(document.getElementById('chart1'), {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022'],
            datasets: [{
                label: 'Interest for data',
                data: [10, 50, 80],
                backgroundColor: ['#ff9999', '#99ff99', '#9999ff'],
                borderColor: ['#ff0000', '#00ff00', '#0000ff'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: { display: false, position: 'right' },
                title: { display: true, text: 'My interest for data analyst', color: 'black', font: { size: 20 } }
            },
            animation: { duration: 3000 }
        }
    });

    console.log("Chart 1 initialized:", chart1);

    let chart2 = new Chart(document.getElementById('chart2'), {
        type: 'pie',
        data: {
            labels: ['Educational', 'Entertainment', 'Others'],
            datasets: [{
                data: [50, 40, 10],
                backgroundColor: ['#ff9999', '#99ff99', '#9999ff'],
                borderColor: ['#ffffff'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 3000 },
            plugins: {
                title: { display: true, text: 'Type of video I watch', color: 'black', font: { size: 20 } },
                legend: { display: false, position: 'right' }
            }
        }
    });

    console.log("Chart 2 initialized:", chart2);

    let chart3 = new Chart(document.getElementById('chart3'), {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'Sample Line Data',
                data: [240, 360, 480, 600],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 3000 },
            plugins: {
                legend: { display: false, position: 'right' },
                title: { display: true, text: 'Revenue', color: 'black', font: { size: 20 } }
            },
            scales: {
                x: {
                    ticks: { color: 'black', font: { size: 14 } },
                },
                y: {
                    ticks: { color: 'black', font: { size: 14 }, beginAtZero: true }
                }
            }
        }
    });

    console.log("Chart 3 initialized:", chart3);
});
