import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Wrapper } from './Vizualize.styles';

const WordCloud = (props) => {
  console.log('wordcloud props', props);
  const [dayType, setDayType] = useState('plus');

  const chart = useRef(null);
  useLayoutEffect(() => {
    let x = am4core.create(
      'chartdiv',
      am4plugins_wordCloud.WordCloud
    );
    let series = x.series.push(
      new am4plugins_wordCloud.WordCloudSeries()
    );

    if (dayType === 'plus') {
      series.text = props.positive;
    } else {
      series.text = props.negative;
    }
    series.minWordLength = 4;
    chart.current = x;

     series.minFontSize = '1%'
    series.randomness = '0'

    series.heatRules.push({
        "target": series.labels.template,
        "property": "fill",
        "min": am4core.color("#ffffff"),
        "max": am4core.color("#000022"),
        "dataField": "value"
       });


    //creates loading spinner
    series.events.on('arrangestarted', function (ev) {
            ev.target.baseSprite.preloader.show(0);
        });
    series.events.on('arrangeprogress', function (ev) {
            ev.target.baseSprite.preloader.progress = ev.progress;
        });

    return () => x.dispose();
  }, []);

  useLayoutEffect(() => {
    chart.current.series.text = props.negative;
  }, []);

  return (
    <Wrapper>
      <h3>
        {dayType == 'plus'
          ? 'What makes a positive day?'
          : 'Negative Days'}{' '}
      </h3>
      <div id="chartdiv"></div>
      {/* <button onClick={()=>setDayType('plus')}> Positive Days</button> */}
      {/* <button onClick = {()=>setDayType('plus')}>Negative Days</button> */}
      <p>
        Right now, word clouds only works on positive days. We're
        working on it, and you'll be able to view negative and neutral
        days soon!
      </p>
    </Wrapper>
  );
};

export default WordCloud;

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
