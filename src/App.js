import logo from './logo.svg';
import './App.css';
import BarChart from './Component/barChart';
import { useEffect, useState } from 'react';
import { CategoryScale } from 'chart.js';
import Chart from  'chart.js/auto'
import { orderList } from './const/orderList';

Chart.register(CategoryScale)

function App() {

  const [chartData, setchartData] = useState ({
    labels : [],
    datasets : [{
      label: "",
      data: [],
      backgroundColor: "",
    }],
  })

useEffect (() => {
  setchartData({
    labels : orderList.map((data) => data.date),
    datasets : [{
      label: "data order",
      data: orderList.map((data)=>data.totalOrder),
      backgroundColor: "red",
    }]
})
},[])

  return (
    <div className="App">
      <BarChart chartData={chartData} />
    </div>
  );
}

export default App;
