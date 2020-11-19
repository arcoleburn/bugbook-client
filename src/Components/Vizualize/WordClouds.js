import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud'
import { useLayoutEffect, useRef, useState, useEffect } from 'react'

const WordCloud = (props) => {
    console.log('wordcloud props', props)
    const [dayType, setDayType] = useState('plus')


     const chart = useRef(null)
    useLayoutEffect(()=>{
        let x = am4core.create('chartdiv', am4plugins_wordCloud.WordCloud)
        let series = x.series.push(new am4plugins_wordCloud.WordCloudSeries())
        
        if(dayType === 'plus'){series.text=props.positive} else{series.text=props.negative}
        series.minWordLength=3
        chart.current = x
        return ()=> x.dispose()
    }, [])

    useLayoutEffect(()=>{
        chart.current.series.text = props.negative
    },[])

    return (
        <>
        <h3>{dayType=='plus' ? 'Positive Days' : 'Negative Days'} </h3>
        <div id='chartdiv'></div>
        <button onClick={()=>setDayType('plus')}> Positive Days</button>
        {/* <button onClick = {()=>setDayType('plus')}>Negative Days</button> */}
        <p>Right now, word clouds only works on positive days. We're working on it!</p>
        

    </>
    )

}

export default WordCloud


//trying to create object 
//console.log('words', words)    
// let uniqueWords = [...new Set(plus2.join(" ").toLowerCase().split(" "))]

    // let cloudData=uniqueWords.map(x=> {return {text:x, value:0 }})

    // for(let word in words){
    //     const index = cloudData.findIndex(x=>x.text===word)
    //     console.log('index', index||null
    //     )
    //    // cloudData[index].value +     
    // }
    
    //console.log('cloud data', cloudData) 