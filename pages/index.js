import { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import Heading from '../components/Heading/Heading';

export default function Index() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./api/cards');
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Heading />
      {data && data.map((card) => (
        <Card card={card} />
      ))}
    </div>
  )
}
