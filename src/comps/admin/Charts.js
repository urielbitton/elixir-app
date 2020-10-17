import React, { useEffect, useContext } from 'react'
import Chart from 'chart.js';
import { ProductContext } from '../../comps/site/ProductContext'

function Charts(props) { 

  const {products, general} = useContext(ProductContext)

  useEffect(() => {
    let chart = document.getElementById('line-chart').getContext('2d')
    let gradientblu = chart.createLinearGradient(0, 0, 0, 400)
    gradientblu.addColorStop(0, 'rgba(92, 162, 255,1)')
    gradientblu.addColorStop(1, 'rgba(232, 242, 255,0.1)')
    let gradientpurp = chart.createLinearGradient(0, 0, 0, 400)
    let gradientblu2 = chart.createLinearGradient(0, 0, 0, 400)
    gradientpurp.addColorStop(0, 'rgba(130, 107, 232,1)')
    gradientpurp.addColorStop(1, 'rgba(130, 107, 232,0.6)')
    gradientblu2.addColorStop(0, 'rgba(92, 162, 255,1)')
    gradientblu2.addColorStop(1, 'rgba(92, 162, 255,0.6)')

    //line chart
    new Chart(document.getElementById("line-chart"), {
      type: 'line', 
      data: {
        labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],
        datasets: [{ 
            data: [0,general.revenue_range[0],general.revenue_range[1],general.revenue_range[2],general.revenue_range[3],general.revenue_range[4],general.revenue_range[5],general.revenue_range[6],general.revenue_range[7],general.revenue_range[8],general.revenue_range[9],general.revenue_range[10]],
            label: "Revenue",
            borderColor: "#0a9dff",
            fill: true,
            backgroundColor: gradientblu
          },
        ]   
      },      
      options: { 
        responsive:true,
        title: {
          display: true,
          text: 'This Month'
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: '#f1f1f1'
            }
          }],
          yAxes: [{
            gridLines: {
              color: '#f1f1f1'
            },
            ticks: {
              //stepSize: 100,
              //beginAtZero: true,
            } 
          }],
        }  
      } 
    })
    //bar chart
    new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        datasets: [{ 
            data: [general.order_proc,general.order_proc,general.order_proc,general.order_proc,general.order_proc,general.order_proc,general.order_proc],
            label: "Active",
            borderColor: "#fafafa",
            fill: true,
            backgroundColor: gradientblu2
          }, { 
            data: [general.products_sold[0],general.products_sold[1],general.products_sold[2],general.products_sold[3],general.products_sold[4],general.products_sold[5],general.products_sold[6],],
            label: "Processed",
            borderColor: "#fafafa",
            fill: true,
            backgroundColor: gradientpurp  
          }
        ]   
      },      
      options: { 
        responsive:true,
        title: {
          display: true,
          text: 'This Week'
        }, 
      }
    }); 
 
  },[])

  return (
    <>
      <canvas id={props.type}></canvas>
    </> 
  )
}

export default Charts