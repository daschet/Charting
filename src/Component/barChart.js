import { Bar } from 'react-chartjs-2';
import propTypes from 'prop-types'

const BarChart = (props) => {

    return <Bar data={props.chartData}/>

}
BarChart.propTypes = {
    name : propTypes.string
}

export default BarChart