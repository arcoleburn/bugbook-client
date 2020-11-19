import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud'
import { useLayoutEffect, useRef, useState } from 'react'
import { render } from '@testing-library/react'
import WordCloud from './WordClouds'
import Chart from './Charts'

const Vizualize=(props)=>{

    const [display, setDisplay] = useState('intro')


    const renderIntro = () => {
        
    return (<>
        <h3> Welcome to Vizualize!</h3>
        <p>Select a button below to view. Word clouds will shouw you patterns from your journal entires, while graphs will show you correlations with your daily score.</p>
        <button onClick={()=>setDisplay('clouds')}> WordClouds</button>
        <button onClick={()=>setDisplay('graphs')}>Graphs</button> 
    </>)
    }

    //word cloud data
    const positiveDays=props.entries.filter(entry=>entry.day_rating==2||1).map((x)=>x.journal_entry)
    const positiveDaysWords = positiveDays.join(' ').toLowerCase()
    const negativeDays=props.entries.filter(entry=>entry.day_rating==-2||-1).map((x)=>x.journal_entry)
    const negativeDaysWords = negativeDays.join(' ').toLowerCase()



    //chart data 

    const data = props.entries.map(entry => {return {date: entry.date_created, score: entry.day_rating, hours: entry.deep_hours, day:new Date(entry.date_created).getDay()}})

    console.log('chart data', data)
  




    //console.log('plus twos', plus2)
    return(<>
        {display==='intro' ? renderIntro() :
        display==='clouds' ? <WordCloud history={props.history} positive = {positiveDaysWords} negative={'negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative '}/>:
        display==='graphs'? <Chart data={data}/> : 'graphs  soon'}
        <button onClick={()=>setDisplay('intro')}> Go Back</button>
        </>)
}

export default Vizualize