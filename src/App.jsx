import React from 'react';
import './App.css';
import image1 from '../src/assets/img1.png'
import image2 from '../src/assets/img2.png'
import image3 from '../src/assets/img3.png'
import BookCard from './components/BookCard';
import AuthorCard from './components/AuthorCard';
import ReadersCard from './components/ReadersCard';

function App() {
  return (
    <div className="App">
      <div className="book-container">
        <div className="book">
          <BookCard
          title="Science Fiction"
          image={image1}
          description="As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands..."
          />
          
        </div>
        <div className="book">
          <AuthorCard 
          title = "Mystery"
          image={image2} 
          description="The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light..."
          
          />
          
        </div>
        <div className="book">
          <ReadersCard 
           title= "Fantasy"
           image={image3} 
           description="The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light..."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
