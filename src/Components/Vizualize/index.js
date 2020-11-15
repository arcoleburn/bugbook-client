import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud'
import { useLayoutEffect, useRef } from 'react'

const Vizualize=(props)=>{

    
    const plus2=props.entries.filter(entry=>entry.day_rating==2||1||0||-1||-2).map((x)=>x.journal_entry)
    console.log(plus2)
    const chart = useRef(null)
console.log('sliced', plus2.slice(" "))
const words = plus2.join(" ").toLowerCase()
console.log('words', words)    
let uniqueWords = [...new Set(plus2.join(" ").toLowerCase().split(" "))]

    let cloudData=uniqueWords.map(x=> {return {text:x, value:0 }})

    for(let word in words){
        const index = cloudData.findIndex(x=>x.text===word)
        console.log('index', index||null
        )
       // cloudData[index].value +     
    }
    
    console.log('cloud data', cloudData) 

    useLayoutEffect(()=>{
        let x = am4core.create('chartdiv', am4plugins_wordCloud.WordCloud)
        let series = x.series.push(new am4plugins_wordCloud.WordCloudSeries())
        series.text=plus2.join(" ")
        series.minWordLength=3
        chart.current = x
        return ()=> x.dispose()
    }, [])


    console.log('viz', props)
    const mins2=props.entries.filter(entry=>entry.day_rating==-2)



    console.log('plus twos', plus2)
    return(<><h1>hi</h1>
        
        <div id='chartdiv'></div></>)
}

export default Vizualize