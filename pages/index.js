import { useState, useEffect } from 'react';
import Heading from '../components/Heading/Heading';
import CardBlock from '../components/CardBlock/CardBlock';

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
      <CardBlock data={data} />
    </div>

  )
}
