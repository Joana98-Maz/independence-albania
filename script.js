// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = sdf()

function sdf() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}


let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.85,
  fill: {gradient: ['rgb(152, 66, 66)', 'rgb(255, 0, 0)']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".GDP .bar").circleProgress({
  value: 0.036
});
$(".Unemployment .bar").circleProgress({
  value: 0.11
});      
$(".Inflation .bar").circleProgress({
  value: 0.0204
});
$(".Agriculture .bar").circleProgress({
  value: 0.217
});
$(".IndustrialSector .bar").circleProgress({
  value: 0.242
});
$(".tourism .bar").circleProgress({
  value: 0.174
});

const ctx = document.getElementById('myPieChart').getContext('2d');

const data = {
  labels: [
    'Muslim',
    'Bektashi',
    'Catholic',
    "Orthodox" ,
   "Undefined" ,
    "Not prononced",
    
  ],
  datasets: [{
    label: 'Religious Demographics in Albania',
    data: [56.7, 2.9, 10.3, 6.7, 5.5, 13.7,], // Replace these percentages with the actual values
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)'
    ],
    hoverOffset: 4
  }]
};

const myPieChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Religious Demographics in Albania'
      }
    }
    
  }
  
});

const xValues = [1990,1995,2000,2005,2010,2015,2017,2018,2019,2020,2022,2023];
const yValues = ["3295066","3284364","3182021","3032634","2913399","2882481","2879355","2877013","2873883","2866849","2842321","2832439"];
const barColors = ["red","black","red","black","red","black","red","black","red","black","red","black"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Population of Albania In 30 Years"
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
  }
}
   );
   
document.getElementById('scrollButton').
addEventListener('click', function() {
  const scrollTarget = document.getElementById('scrollTarget');
  scrollTarget.scrollIntoView({ behavior: 'smooth' });
});

