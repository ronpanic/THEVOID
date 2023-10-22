import React from 'react';
import Footer from '../Footer/Footer';
import HomeTop from '../HomeTop/HomeTop';
import "./Brand.css"


const Brand = () => {
  return (
    <div className='brand-container'>
      <img className='background-img' src="https://cdn.discordapp.com/attachments/791431401018228756/1160237507947020369/hed.jpeg?ex=6533ee62&is=65217962&hm=11a1d7557dfe1e3557390030c85658eb90e4fc77f0821ea9ab73b31fa75bb202&" alt="" />
      <div className='brand-info'>
        <h1>THIS IS THE BRAND</h1>
      </div>
      <div className='box-container'>

        <div className='tipografia'>
          <h2>TIPOGRAFIA</h2>
          <h3>Ropa que marca la diferencia</h3>
          <p>Descubre nuestra selección de prendas únicas que desafían lo convencional.</p> 
        </div>
        <div className='palet'>
            <h2>PALET</h2>
            <h3>Colores modernos para tu estilo único</h3>
            <p>Explora nuestra paleta de colores modernos diseñada para destacarte.</p> 
        </div>
        <div className='us'>
            <h2>US</h2>
            <h3>Ropa diseñada para entendidos en moda</h3>
            <p>Creaciones exclusivas para aquellos que entienden y aprecian la moda auténtica.</p> 
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Brand;
