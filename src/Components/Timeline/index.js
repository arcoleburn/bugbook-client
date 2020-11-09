import DailySummary from '../DailySummary';
import Header from '../Header';


const Timeline = () => {
  const data = [
    {
      date: new Date(`2020-01-01`).toDateString().split(' ').slice(1).join(' '),
      hours: 2,
      rating: 1,
      entry: `I'm baby activated charcoal shabby chic bushwick freegan irony post-ironic. Cold-pressed portland tilde umami lyft listicle skateboard paleo hexagon VHS. Bitters lo-fi brunch gluten-free hell of fashion axe trust fund cred succulents tousled twee you probably haven't heard of them pork belly venmo leggings.`,
    },
    {
        date: new Date(`2020-01-02`).toDateString().split(' ').slice(1).join(' '),
      hours: 4,
      rating: 2,
      entry: `Hammock literally XOXO af helvetica stumptown palo santo humblebrag artisan +1 edison bulb affogato waistcoat leggings retro. Pok pok photo booth single-origin coffee prism selvage thundercats salvia occupy tacos letterpress. Man bun humblebrag lyft truffaut hammock, pop-up microdosing bitters seitan aesthetic tilde fashion axe.`,
    },
    { date: new Date(`2020-01-03`).toDateString().split(' ').slice(1).join(' '), hours: 2, rating: -2 },
    { date: new Date(`2020-01-04`).toDateString().split(' ').slice(1).join(' '), hours: 2, rating: 0 },
    { date: new Date(`2020-01-05`).toDateString().split(' ').slice(1).join(' '), hours: 2, rating: 1 },
    { date: new Date(`2020-01-06`).toDateString().split(' ').slice(1).join(' '), hours: 2, rating: -1 },
    { date: new Date(`2020-01-07`).toDateString().split(' ').slice(1).join(' '), hours: 2, rating: 1 },
  ];

  let list = data.map((day) => {
    console.log(day);
    return (
      <DailySummary
        date={day.date}
        hours={day.hours}
        rating={day.rating}
        entry={day.entry}
        key={day.date}
      />
    );
  });
  console.log(list);
  return (
      <>
      <Header>
          Timeline
      </Header>
      {list}
      </>)
};
export default Timeline;
