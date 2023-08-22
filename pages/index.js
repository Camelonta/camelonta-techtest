import { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import Heading from '../components/Heading/Heading';
export default function Index() {


  // TODO: Instead of using this hardcoded data variable, fetch data from API endpoint '/api/cards'. The data structure is the same.

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./api/cards');
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  // const data = [
  //   {
  //     id: '1',
  //     heading: 'This is hardcoded',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     icon: 'house',
  //   },
  //   {
  //     id: '2',
  //     heading: 'Not the correct data',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     icon: 'grade',
  //   },
  // ];

  return (
    <div>
      <Heading />
      {data && data.map((card) => (
        <Card card={card} />
      ))}
    </div>
  )
}
