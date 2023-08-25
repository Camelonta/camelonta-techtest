import Heading from '../components/Heading/Heading';
import CardBlock from '../components/CardBlock/CardBlock';
import s from './styles.module.css';
import DataProvider from '../contexts/DataProvider';
import { navbarItems } from '../navbarData';
import Navbar from '../components/Navbar/Navbar';

function Index({ data, navbarItems }) {

  return (
    <DataProvider initialData={data} navbarItems={navbarItems}>
      <Navbar />
      <div className={s.container}>
        <Heading />
        <div className={s.cardBlockContainer}>
          <CardBlock />
        </div>
      </div>
    </DataProvider>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3000/api/cards');
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        data,
        navbarItems,
      },
      revalidate: 60,
    };

  } catch (error) {
    console.error('Unable to fetch data', error);
    return {
      props: {
        data: [],
        navbarItems,
      },
    };
  }
}

export default Index;