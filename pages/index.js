import Card from '../components/Card/Card';

export default function Index() {


  // TODO: Instead of using this hardcoded data variable, fetch data from API endpoint '/api/cards'. The data structure is the same.


  const data = [
    {
      id: '1',
      heading: 'This is hardcoded',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'house',
    },
    {
      id: '2',
      heading: 'Not the correct data',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'grade',
    },
  ];

  return (
    <div>
      {data && data.map((card) => (
        <Card card={card} />
      ))}
    </div>
  )
}
