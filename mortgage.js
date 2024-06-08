document.addEventListener('DOMContentLoaded', function () {
    var ctxPie = document.getElementById('paymentPieChart').getContext('2d');
    var paymentPieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [0, 0],
                backgroundColor: ['#36A2EB', '#FF6384'],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = ctx.dataset._meta[0].total;
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        return percentage;
                    },
                    color: '#fff',
                }
            }
        }
    });

    var ctxLine = document.getElementById('investmentLineChart').getContext('2d');
    var investmentLineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: [], // Years
            datasets: [
                {
                    label: 'Mortgage Amount',
                    data: [],
                    borderColor: '#36A2EB',
                    fill: false
                },
                {
                    label: 'Investment Value',
                    data: [],
                    borderColor: '#FF6384',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Years'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount ($)'
                    }
                }
            }
        }
    });

    function calculateMortgage() {
        var mortgageAmount = parseFloat(document.getElementById('mortgageAmount').value) || 0;
        var prepaymentAmount = parseFloat(document.getElementById('prepaymentAmount').value) || 0;
        var annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value) / 100 || 0;
        var amortizationPeriod = parseInt(document.getElementById('amortizationPeriod').value) || 25;
        var paymentFrequency = parseInt(document.getElementById('paymentFrequency').value) || 12;
        var termYears = parseInt(document.getElementById('termYears').value) || 5;

        var numberOfPayments = amortizationPeriod * paymentFrequency;
        var periodInterestRate = annualInterestRate / paymentFrequency;
        var paymentAmount = mortgageAmount * (periodInterestRate * Math.pow(1 + periodInterestRate, numberOfPayments)) / (Math.pow(1 + periodInterestRate, numberOfPayments) - 1);

        var totalPaymentAmount = paymentAmount * numberOfPayments;
        var totalInterestPaid = totalPaymentAmount - mortgageAmount;
        var totalNumberOfPayments = numberOfPayments;
        var monthlyPayment = paymentAmount * paymentFrequency / 12; // Calculate the equivalent monthly payment

        document.getElementById('totalPaymentAmount').innerText = `$${totalPaymentAmount.toFixed(2)}`;
        document.getElementById('totalInterestPaid').innerText = `$${totalInterestPaid.toFixed(2)}`;
        document.getElementById('totalNumberOfPayments').innerText = totalNumberOfPayments;
        document.getElementById('monthlyPayment').innerText = `$${monthlyPayment.toFixed(2)}`;

        // Update pie chart
        paymentPieChart.data.datasets[0].data = [mortgageAmount, totalInterestPaid];
        paymentPieChart.update();

        // Calculate investment data
        var investmentValue = prepaymentAmount;
        var investmentValues = [];
        var mortgageValues = [];
        var years = [];
        var remainingMortgage = mortgageAmount;

        for (var i = 1; i <= amortizationPeriod; i++) {
            investmentValue = investmentValue * (1 + annualInterestRate) + monthlyPayment * 12;
            investmentValues.push(investmentValue.toFixed(2));

            for (var j = 0; j < paymentFrequency; j++) {
                var interestPayment = remainingMortgage * periodInterestRate;
                var principalPayment = paymentAmount - interestPayment;
                remainingMortgage -= principalPayment;
                if (remainingMortgage < 0) {
                    remainingMortgage = 0;
                }
            }
            mortgageValues.push(remainingMortgage.toFixed(2));
            years.push(i);
        }

        // Update line chart
        investmentLineChart.data.labels = years;
        investmentLineChart.data.datasets[0].data = mortgageValues;
        investmentLineChart.data.datasets[1].data = investmentValues;
        investmentLineChart.update();

        // Calculate investment summary
        var totalInvestmentInterest = investmentValue - prepaymentAmount - (monthlyPayment * 12 * amortizationPeriod);
        var averageInvestmentInterestPerYear = totalInvestmentInterest / amortizationPeriod;
        var timeToSurpassMortgage = years.find(year => investmentValues[year - 1] >= mortgageAmount);

        document.getElementById('totalInvestmentInterest').innerHTML = `<span style="color: gray;">Total Interest Earned:</span> <span style="color: blue;">$${totalInvestmentInterest.toFixed(2)}</span>`;
        //document.getElementById('totalInvestmentInterest').style.color = 'blue'; // Change 'blue' to your desired color
        document.getElementById('averageInvestmentInterestPerYear').innerHTML = `<span style="color: gray;">Average Interest per Year:</span> <span style="color: green;">$${averageInvestmentInterestPerYear.toFixed(2)}</span>`;
        document.getElementById('timeToSurpassMortgage').innerHTML = `<span style="color: gray;">Time to Surpass Mortgage Amount:</span> <span style="color: red;">${timeToSurpassMortgage} years</span>`;
    }

    document.getElementById('mortgageAmount').addEventListener('input', calculateMortgage);
    document.getElementById('prepaymentAmount').addEventListener('input', calculateMortgage);
    document.getElementById('annualInterestRate').addEventListener('input', calculateMortgage);
    document.getElementById('amortizationPeriod').addEventListener('change', calculateMortgage);
    document.getElementById('paymentFrequency').addEventListener('change', calculateMortgage);
    document.getElementById('termYears').addEventListener('change', calculateMortgage);

    // Initial calculation with default values
    calculateMortgage();
});
