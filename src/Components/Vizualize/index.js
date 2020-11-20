import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';
import { useLayoutEffect, useRef, useState } from 'react';
import { render } from '@testing-library/react';
import WordCloud from './WordClouds';
import Chart from './Charts';
import { Wrapper, ControlButtons } from './Vizualize.styles';

const Vizualize = (props) => {
  const [display, setDisplay] = useState('intro');

  const renderIntro = () => {
    return (
      <Wrapper>
        <h2> Vizualize: </h2>
        <p>
          Here you can select different vizulizations of your journal
          data to help find patterns.
        </p>
        <p>
          Select a button below to view. Word clouds will show you
          patterns from your positive journal entires, while graphs
          will show you your average score by day of the week.
        </p>
        <p>We're adding more vizualizations, so check back soon!</p>
        <ControlButtons>
          <button onClick={() => setDisplay('clouds')}>
            {' '}
            WordClouds
          </button>
          <button onClick={() => setDisplay('graphs')}>Graphs</button>
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

  //console.log('plus twos', plus2)
  return (
    <Wrapper>
      {display === 'intro' ? (
        renderIntro()
      ) : display === 'clouds' ? (
        <WordCloud
          history={props.history}
          positive={positiveDaysWords}
          negative={
            'negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative negative '
          }
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
    </Wrapper>
  );
};

export default Vizualize;
