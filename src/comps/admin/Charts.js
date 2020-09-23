import React, { useEffect, useContext } from 'react'
import Chart from 'chart.js';
import { ProductContext } from '../../comps/site/ProductContext'

function Charts(props) { 

  const {products, general} = useContext(ProductContext)
  const prodsold = products.filter(prod => prod.addcart).length

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
        labels: ["Week 1","Week 2","Week 3","Week 4"],
        datasets: [{ 
            data: [25,15,30,1,5,10,23,36,13,1,22,11,23,19,19,19,22,19,12,13,16,11,25,29,43,12,13,14,1,27,42],
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
            data: [12.0,11.0,32.4,45.7,40.59,32.0,43.3,41.5,22.0,33.1],
            label: "Active",
            borderColor: "#fafafa",
            fill: true,
            backgroundColor: gradientblu2
          }, { 
            data: [12,15,30,21,5,50,43,76,23,12],
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
        } 
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