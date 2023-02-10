import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart(props) {
  console.log(props.dataPoints);
  const charts = props.dataPoints.map(dP => {
    return <ChartBar
      key={dP.label}
      value={dP.value}
      maxValue={props.maxValue}
      label={dP.label}
    />
  })

  return (
    <div className='chart'>
      {charts}
    </div>
  )
}