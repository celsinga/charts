let labels1 = ['YES', 'YES BUT IN GREEN'];
let data1 = [69, 31];
let colors1 = ['#49A9EA', '#36CAAB'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['Bills', 'Food', 'Shopping', 'Video Games'],
        datasets: [ {
            data: [43, 31, 16, 10],
            backgroundColor: ['#49A9EA', '#36CAAB', '#fcba03', '#fc0b03']
        }]
    },
    options: {
        title: {
            text: "Money spent this week",
            display: true
        }
    }
});

let labels2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let data2 = [60, 150, 30, 90, 50, 60, 100];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#fcba03', '#fc0b03', '#5203fc'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Exercise this week (in minutes)",
            display: true
        },
        legend: {
          display: false
        }
    }
});


let labels3 = ['JavaScript', 'Python', 'SQL', 'Ruby', 'HTML/CSS'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [
          {
            label: 'Me',
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            data: [51, 15, 32, 5, 44]
          }
        ]
    },
    options: {
        title: {
            text: "Skills",
            display: true
        }
    }
});

let labels4 = ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'];
let data4 = [8, 7, 6, 8, 6, 8, 10];
let colors4 = ['#5203fc'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'line',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Sleep this week",
            display: true
        }
    }
});