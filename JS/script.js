/**
 * 1. PORTFOLIO CAROUSEL
 * Controls the navigation and animation of portfolio items in a carousel
 */

// Variables for carousel navigation and items
/*const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const items = document.querySelectorAll(".portfolio-item");
const itemsContainer = document.querySelector(".portfolio-items");
let currentItem = 0;

// Function to update the carousel's current item and its appearance
function updateCarousel() {
    itemsContainer.style.transform = `translateX(-${currentItem * 100}%)`;
    
    // Deactivate all items and activate the current one
    items.forEach(item => item.classList.remove('active'));
    items[currentItem].classList.add('active');

    // Update pagination dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentItem].classList.add('active');

    // Control button states
    nextBtn.disabled = currentItem >= items.length - 1;
    prevBtn.disabled = currentItem <= 0;
}

// Event listeners for carousel navigation
prevBtn.addEventListener("click", function() {
    if (currentItem > 0) {
        currentItem--;
        updateCarousel();
    }
});

nextBtn.addEventListener("click", function() {
    if (currentItem < items.length - 1) {
        currentItem++;
        updateCarousel();
    }
});

// Create pagination dots for the carousel
const paginationDotsContainer = document.querySelector('.pagination-dots');
items.forEach((item, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    paginationDotsContainer.appendChild(dot);
});

// Initialize the carousel state
updateCarousel();
*/


/**
 * 3. CHART ANIMATION
 * Animate chart bars when the About section comes into view and reset when out of view
 */
// Initializing the chart with empty data
let chart1 = new Chart(document.getElementById('chart1'), {
    type: 'bar',
    data: {
        labels: ['2020', '2021', '2022'],
        datasets: [{
            label: 'interest for data',
            data: [0, 0, 0],
            backgroundColor: ['#ff9999', '#99ff99', '#9999ff'], // Bar colors
            borderColor: ['#ff0000', '#00ff00', '#0000ff'],    // Border colors for bars
            borderWidth: 1                                      // Width of border
        }]
    },
    // ... (the rest of the chart initialization)
options: {
    responsive: false,  // Makes the chart responsive, you can set it to false if you don't want it to adjust to the parent container's size
    maintainAspectRatio: false,  // This will maintain the width to height ratio based on the canvas's original size
    // ... rest of the options
    scales: {
        y: {
            beginAtZero: true,
        }
    },
    plugins: {
        legend: {
            display: false,
            position: 'right'
        }
    },
    animation: {
        duration: 3000  // 3 seconds
    },
    scales: {
        x: {
            ticks: {
                color: 'white',   // Color for x-axis labels
                font: {
                    size: 14,     // Font size for x-axis labels
                }
            },
        },
        y: {
            ticks: {
                color: 'white',   // Color for y-axis labels
                font: {
                    size: 14,     // Font size for y-axis labels
                }
            },
        },
    },

    // Plugins configurations
    plugins: {
        // Legend configurations
        legend: {
            display: false,
            position: 'right',
            labels: {
                color: 'white',   // Color for legend labels
                font: {
                    size: 14,     // Font size for legend labels
                }
            },
        },

        // Title configurations
        title: {
            display: true,
            text: 'My interest for data analyst',  // Your chart title
            color: 'white',          // Color for chart title
            font: {
                size: 20,            // Font size for chart title
            }
        },
    },
}

});
// Initializing the pie chart with empty data
let chart2 = new Chart(document.getElementById('chart2'), {
    type: 'pie',
    data: {
        labels: ['Educational', 'entertainment', 'Others'],
        datasets: [{
            data: [0, 0, 0], // Initially, set data to zeros
            backgroundColor: ['#ff9999', '#99ff99', '#9999ff'], // Segment colors
            borderColor: ['#ffffff'], // Border colors for segments
            borderWidth: 0 // Width of border
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
         
        animation: {
            duration: 3000 // 3 seconds
        },
        plugins: {
            // Title configurations
         title: {
            display: true,
            text: 'type of video I watch',  // Your chart title
            color: 'white',          // Color for chart title
            font: {
                size: 20,            // Font size for chart title
            }
        },
            legend: {
                display: false,
                position: 'right'
            }
        },
    },  
});

// Initializing the line chart with empty data
let chart3 = new Chart(document.getElementById('chart3'), {
    type: 'line',
    data: {
        labels: ['2019', '2020', '2021', '2022'], // Adjust these as necessary
        datasets: [{
            label: 'Sample Line Data',
            data: [0, 0, 0, 0], // Initially, set data to zeros
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color under the line (fill)
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            borderWidth: 2 // Width of the line
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        animation: {
            duration: 3000 // 3 seconds
        },
        plugins: {
            legend: {
                display: false,
                position: 'right'
            },
            title: {
                display: true,
                text: 'Revenue',  // Your chart title
                color: 'white',          // Color for chart title
                font: {
                    size: 20,            // Font size for chart title
                }
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white',   
                    font: {
                        size: 14,     
                    }
                },
            },
            y: {
                ticks: {
                    color: 'white',   
                    font: {
                        size: 14,     
                    }
                },
                beginAtZero: true
            }
        }
    }
});
// Intersection Observer options
const intersectionOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1  // 10% of the element visibility to trigger animation
};

// Using Intersection Observer to animate the chart when the About section is visible
let chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate chart with actual data // Bar chart animation
            chart1.data.datasets[0].data = [10, 50, 80];
            chart1.update();

            // Pie chart animation
            chart2.data.datasets[0].data = [50, 40, 10];
            chart2.update();

            // Animate line chart with actual data
            chart3.data.datasets[0].data = [240, 360, 480, 0];
            chart3.update();

            // Add animation class to target element (for any additional animations)
            entry.target.classList.add('animate');
        } else {
            // Reset chart to its initial state
            chart1.data.datasets[0].data = [0, 0, 0];
            chart1.update();

            // Pie chart reset
            chart2.data.datasets[0].data = [0, 0, 0];
            chart2.update();

            // Reset line chart to its initial state
            chart3.data.datasets[0].data = [0, 0, 0, 0];
            chart3.update();

            // Reset animation class when out of view
            entry.target.classList.remove('animate');
        }
    });
}, intersectionOptions);
// Start observing the About section for visibility changes
chartObserver.observe(document.getElementById('About'));

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      const scrollDowns = document.createElement('div');
      scrollDowns.innerHTML = `<div class="mousey"><div class="scroller"></div></div>`;
      document.querySelector('.content-section#Home').appendChild(scrollDowns);
      scrollDowns.className = 'scroll-downs fade-in';
    }, 4000);
  });