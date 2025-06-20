import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import BootstrapCard from './BootstrapCard'; // Import the BootstrapCard component

function App() {
  // Data for Exercise 1: Celebrities
  const celebrities = [
    {
      title: 'Bob Dylan',
      imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
      buttonLabel: 'Go to Wikipedia',
      buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
      description:
        'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
    },
    {
      title: 'McCartney',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
      buttonLabel: 'Go to Wikipedia',
      buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
      description:
        'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.',
    },
  ];

  // Data for Exercise 2: Planets
  const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

  return (
    <div className="App">
      {/* Section for Exercise 1: Bootstrap Cards */}
      <h2 className="m-5 text-center">Celebrities (Bootstrap Cards):</h2>
      <div className="d-flex flex-wrap justify-content-center"> {/* Using Bootstrap flexbox for layout */}
        {celebrities.map((celebrity, index) => (
          <BootstrapCard
            key={index} // Unique key for list items
            title={celebrity.title}
            imageUrl={celebrity.imageUrl}
            buttonLabel={celebrity.buttonLabel}
            buttonUrl={celebrity.buttonUrl}
            description={celebrity.description}
          />
        ))}
      </div>

      {/* Section for Exercise 2: Planets List */}
      <h2 className="m-5 text-center">Planets (Bootstrap List Group):</h2>
      <div className="d-flex justify-content-center"> {/* Center the list */}
        <ul className="list-group m-5" style={{ width: '30rem' }}> {/* Applied Bootstrap list-group styling */}
          {planets.map((planet, index) => (
            <li key={index} className="list-group-item">{planet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;