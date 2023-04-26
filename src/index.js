import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.js';
import Article from './components/Article.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Nav />
      <Article />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
