import React from 'react';
import Card from '@/components/card';
import data from '@/utils/stops_list.json';

const Home: React.FC = () => {
  return (
    <main>
      <div >
        {data.map((value, i) => (
          <Card key={i} card={value} />
        ))}
      </div>
    </main>
  );
};

export default Home;
