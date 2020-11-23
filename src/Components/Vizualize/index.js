import WordCloud from 'react-d3-cloud'
// import WordCloud from './WordClouds';
import {useState} from 'react';
import Chart from './Charts';
import { Wrapper, ControlButtons } from './Vizualize.styles';

const Vizualize = (props) => {
  console.log('viz props', props)
  const [display, setDisplay] = useState('intro');

  const renderIntro = () => {
    return (
      <Wrapper>
        <h2> Vizualize: </h2>
        <p>
          Here you can select different vizualizations of your journal
          data to help find patterns.
        </p>
        <p>
          Once you've made a couple of journal entries, select a button below to view. Word clouds will show you
          patterns from your positive journal entires, while graphs
          will show you your average score by day of the week.
        </p>
        <p>We're adding more vizualizations, so check back soon!</p>
        <ControlButtons>
          <button disabled={props.entries.length == 0 ? true : false} onClick={() => setDisplay('clouds')}>
            {' '}
            WordClouds
          </button>
          <button disabled={props.entries.length == 0 ? true : false} onClick={() => setDisplay('graphs')}>Graphs</button>
        </ControlButtons>
      </Wrapper>
    );
  };

  
  //word cloud data
  const positiveDays = props.entries
    .filter((entry) => entry.day_rating == 2 || 1)
    .map((x) => x.journal_entry);
  const positiveDaysWords = positiveDays.join(' ').toLowerCase();
  const negativeDays = props.entries
    .filter((entry) => entry.day_rating == -2 || -1)
    .map((x) => x.journal_entry);
  const negativeDaysWords = negativeDays.join(' ').toLowerCase();


  //attempt to map word data 
    //find unique words
    const posWordsArr = positiveDaysWords.split(' ')
    console.log('pos days', posWordsArr)
  function unique(value, index, self){
    return self.indexOf(value) === index
  }
    const uniquePosWords= posWordsArr.filter(unique) 
    console.log(uniquePosWords)

    const posWordsData = uniquePosWords.map(word=> {return {text: word, value: 0}})
    console.log('data before', posWordsData)

  posWordsArr.forEach(word=> {
    //find matching object in posWords data
    let index = posWordsData.findIndex(x=> x.text == word)

    //plus 1 to it's value 
    posWordsData[index].value += 1 
    
  })
console.log('data after', posWordsData)
    //count instances of each word
 

const cloud = <WordCloud data={posWordsData} />





  //chart data

  const data = props.entries.map((entry) => {
    return {
      date: entry.date_created,
      score: entry.day_rating,
      hours: entry.deep_hours,
      day: new Date(entry.date_created).getDay(),
    };
  });

  console.log('chart data', data);

  return (
    <Wrapper>
      {display === 'intro' ? (
        renderIntro()
      ) : display === 'clouds' ? (
        <WordCloud
          history={props.history}
          positive={positiveDaysWords}
        />
      ) : display === 'graphs' ? (
        <Chart data={data} />
      ) : (
        'graphs  soon'
      )}
      {display !== 'intro' ? (
        <button id="home" onClick={() => setDisplay('intro')}>
          {' '}
          Vizualize Home
        </button>
      ) : null}

      {/* {cloud} */}
    </Wrapper>
   
  
  );
};

export default Vizualize;


 