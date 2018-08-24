const options = {
    responsive: true,
    legend: {
        display: false
    },
    elements: {
        line: {
            tension: 0
        }
    },
    scales: {
        xAxes: [{ position: "top" }],
        yAxes: [
            {
                ticks: {
                    min: 0,
                    max: 100
                }
            }
        ]
    }
};

const backendOptions = Object.assign(
    {
        title: { display: true, text: "Backend" }
    },
    options
);
const backendChart = new Chart("backend_chart", {
    type: "line",
    data: {
        labels: ["Java", "Spring", "SQL", "Node.js", "MongoDB"],
        datasets: [
            {
                label: "Backend",
                backgroundColor: "rgba(63,81,181,0.2)",
                borderColor: "rgb(63,81,181)",
                data: [90, 80, 80, 60, 30],
                fill: "start"
            }
        ]
    },
    options: backendOptions
});

const frontendOptions = Object.assign(
    {
        title: { display: true, text: "Frontend" }
    },
    options
);
const frontendChart = new Chart("frontend_chart", {
    type: "line",
    data: {
        labels: ["HTML5", "CSS3", "Javascript", "Angular", "SASS"],
        datasets: [
            {
                label: "Frontend",
                backgroundColor: "rgba(63,81,181,0.2)",
                borderColor: "rgb(63,81,181)",
                data: [80, 80, 90, 95, 70],
                fill: "start"
            }
        ]
    },
    options: frontendOptions
});
