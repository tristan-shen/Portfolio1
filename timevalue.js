document.addEventListener('DOMContentLoaded', function () {
    // Initialize charts
    var ctxTimeValue = document.getElementById('timeValueChart').getContext('2d');
    var ctxInterestBar = document.getElementById('interestBarChart').getContext('2d');
    var timeValueChart = new Chart(ctxTimeValue, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Value Over Time',
                data: [],
                borderColor: '#4CAF50',
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Years'
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount ($)'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
    var interestBarChart = new Chart(ctxInterestBar, {
        type: 'bar',
        data: {
            labels: ['Year 5', 'Year 10', 'Year 15'],
            datasets: [{
                label: 'Interest Earned',
                data: [],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    function calculateTimeValue() {
        var money = parseFloat(document.getElementById('moneyInput').value) || 0;
        var interestRate = parseFloat(document.getElementById('interestRate').value) / 100 || 0;

        var interest1 = money * Math.pow(1 + interestRate, 1) - money;
        var interest5 = money * Math.pow(1 + interestRate, 5) - money * Math.pow(1 + interestRate, 4);
        var interest10 = money * Math.pow(1 + interestRate, 10) - money * Math.pow(1 + interestRate, 9);
        var interest15 = money * Math.pow(1 + interestRate, 15) - money * Math.pow(1 + interestRate, 14);

        document.getElementById('totalInterest5').innerText = `$${interest5.toFixed(2)}`;
        document.getElementById('averageInterest5').innerText = `$${(interest5 / 5).toFixed(2)}`;
        document.getElementById('totalInterest10').innerText = `$${interest10.toFixed(2)}`;
        document.getElementById('averageInterest10').innerText = `$${(interest10 / 10).toFixed(2)}`;
        document.getElementById('totalInterest15').innerText = `$${interest15.toFixed(2)}`;
        document.getElementById('averageInterest15').innerText = `$${(interest15 / 15).toFixed(2)}`;

        var years = [];
        var values = [];
        for (var i = 1; i <= 15; i++) {
            years.push(i);
            values.push(money * Math.pow(1 + interestRate, i));
        }
        timeValueChart.data.labels = years;
        timeValueChart.data.datasets[0].data = values;
        timeValueChart.update();

        interestBarChart.data.datasets[0].data = [interest5, interest10, interest15];
        interestBarChart.update();

        document.getElementById('interest5').innerText = `$${interest5.toFixed(2)}`;
        var percentage5 = ((interest5 / money) * 100).toFixed(2);
        document.getElementById('percentage5').innerText = `${percentage5 >= 0 ? '+' : ''}${percentage5}%`;
        document.getElementById('percentage5').style.color = percentage5 >= 0 ? 'green' : 'red';

        document.getElementById('interest10').innerText = `$${interest10.toFixed(2)}`;
        var percentage10 = ((interest10 / interest5) * 100).toFixed(2);
        document.getElementById('percentage10').innerText = `${percentage10 >= 0 ? '+' : ''}${percentage10}%`;
        document.getElementById('percentage10').style.color = percentage10 >= 0 ? 'green' : 'red';

        document.getElementById('interest15').innerText = `$${interest15.toFixed(2)}`;
        var percentage15 = ((interest15 / interest10) * 100).toFixed(2);
        document.getElementById('percentage15').innerText = `${percentage15 >= 0 ? '+' : ''}${percentage15}%`;
        document.getElementById('percentage15').style.color = percentage15 >= 0 ? 'green' : 'red';
    }

    document.getElementById('moneyInput').addEventListener('input', calculateTimeValue);
    document.getElementById('interestRate').addEventListener('input', calculateTimeValue);

    // Initial calculation with default values
    calculateTimeValue();
});
