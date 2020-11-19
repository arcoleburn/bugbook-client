import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'


const Chart = (props) => {
  const { data } = props;
console.log(data)
  const byDayOfWeek = [
      { day: 0, averageHours: 0, averageRating: 0 },
      { day: 1, averageHours: 0, averageRating: 0 },
      { day: 2, averageHours: 0, averageRating: 0 },
      { day: 3, averageHours: 0, averageRating: 0 },
      { day: 4, averageHours: 0, averageRating: 0 },
      { day: 5, averageHours: 0, averageRating: 0 },
      { day: 6, averageHours: 0, averageRating: 0 }];

    byDayOfWeek.forEach(day=>{
        let index= byDayOfWeek.indexOf(day)
        let filtered = data.filter(x=>x.day===day.day)
        let hours = filtered.map(x=>x.hours)
        let rating = filtered.map(x=>x.score)

        byDayOfWeek[index].averageHours = hours.reduce((a,b)=> a+b)/hours.length 
        byDayOfWeek[index].averageRating = rating.reduce((a,b)=>a+b)/rating.length
    })

    console.log('mondays', data.filter(day=> day.day==1))
const ratingData = byDayOfWeek.map(x=>{ return {day: x.day+1, rating: x.averageRating}})
console.log(ratingData)
  return (
      <>
      <h2> Daily Rating by Day of the Week</h2>
      <VictoryChart domainPadding={20}>
          <VictoryAxis
          style={{
              tickLabels: {fill: '#FF0000', fontSize: 20, padding: 120}
          }} 
          tickValues={[1,2,3,4,5,6,7]}
          tickFormat= {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}/> 
          <VictoryAxis dependentAxis tickFormat={(x)=>x}  />
        <VictoryBar labelComponent={<V.VictoryTooltip/>} data={ratingData.map(data=>{return {label:`${data.rating.toFixed(2)}`, ...data}})}
        x="day"
        y="rating"
        />
        </VictoryChart>
      </>
  )
};

export default Chart;