import React from 'react';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import img7 from './img/img7.jpg'
// import img8 from './img/img8.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h2>FutureTube</h2>
        <input type="search" placeholder="Busca"/>
      </header>

      <div className="main-container">
        <nav>
          <p>Início</p>
          <p>Em alta</p>
          <p>Inscrições</p>
          <p>Originais</p>
          <p>Biblioteca</p>
          <p>Histórico</p>
        </nav>

        <section>
          <article>
            <img src={img1} alt="img1"/>
            <p className="nome-media">Media 1</p>
          </article>
          
          <article>
            <img src={img2} alt="img2"/>
            <p className="nome-media">Media 2</p>
          </article>
          
          <article>
            <img src={img3} alt="img3"/>
            <p className="nome-media">Media 3</p>
          </article>
          
          <article>
            <img src={img4} alt="img4"/>
            <p className="nome-media">Media 4</p>
          </article>
          
          <article>
            <img src={img5} alt="img5"/>
            <p className="nome-media">Media 5</p>
          </article>

          <article>
            <img src={img6} alt="img6"/>
            <p className="nome-media">Media 6</p>
          </article>
          
          <article>
            <img src={img7} alt="img7"/>
            <p className="nome-media">Media 7</p>
          </article>
          
          <article>
            <img src={require('./img/img8.jpg')} alt="img8"/>
            <p className="nome-media">Media 8</p>
          </article>
        </section>
      </div>

      <footer>
          <p>Volte sempre!</p>
          <div className="menu-redes">
              <p>Siga-nos nas redes sociais:</p>
              <img src="https://seeklogo.com/images/F/facebook-logo-966BBFBC34-seeklogo.com.png" alt="FacebookLogo"/>
              <img src="https://seeklogo.com/images/T/twitter-bird-icon-logo-B5634C6F6A-seeklogo.com.png" alt="TwitterLogo"/>
              <img src="http://ancoramar.com.br/wp-content/uploads/2019/04/new-instagram-logo.jpg" alt="InstagramLogo"/>
              <img src="https://seeklogo.com/images/P/pinterest-logo-CA98998DCB-seeklogo.com.png" alt="PinterestLogo"/>
          </div>
      </footer>
    </div>
  );
}

export default App;
