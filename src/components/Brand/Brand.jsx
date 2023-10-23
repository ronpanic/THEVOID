import React from 'react';
import Footer from '../Footer/Footer';
import HomeTop from '../HomeTop/HomeTop';
import "./Brand.css"


const BoxItem = ({ titulo, subtitulo, descripcion }) => {
  return (
    <div className='box-item'>
      <h2>{titulo}</h2>
      <h3>{subtitulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

const BoxItemData = [
  {
    titulo: 'TIPOGRAFIA',
    subtitulo: 'Ropa que marca la diferencia',
    descripcion: 'Descubre nuestra selección de prendas únicas que desafían lo convencional.'
  },
  {
    titulo: 'PALET',
    subtitulo: 'Colores modernos para tu estilo único',
    descripcion: 'Explora nuestra paleta de colores modernos diseñada para destacarte.'
  },
  {
    titulo: 'US',
    subtitulo: 'Ropa diseñada para entendidos en moda',
    descripcion: 'Creaciones exclusivas para aquellos que entienden y aprecian la moda auténtica.'
  },

];

const BoxItemData2 = [
  {
    titulo: 'LAVADO',
    subtitulo: 'Instrucciones de lavado',
    descripcion: 'Recomendamos el lavado a mano de nuestras prendas para garantizar su máxima durabilidad y mantener su calidad intacta a lo largo del tiempo.'
  },
  {
    titulo: 'CALIDAD',
    subtitulo: 'Productos de alta calidad',
    descripcion: 'Nuestras prendas están fabricadas con materiales duraderos y de primera calidad.'
  },
  {
    titulo: 'ENVÍOS',
    subtitulo: 'Envíos rápidos y seguros',
    descripcion: 'Ofrecemos opciones de envío confiables para que recibas tus compras a tiempo y en perfecto estado.'
  },
];

const Brand = () => {
  return (

    <div className='brand-container'>
      <img className='background-img' src="https://cdn.discordapp.com/attachments/791431401018228756/1160237507947020369/hed.jpeg?ex=6533ee62&is=65217962&hm=11a1d7557dfe1e3557390030c85658eb90e4fc77f0821ea9ab73b31fa75bb202&" alt="" />
      <div className='brand-info'>
        <h1>THIS IS THE BRAND</h1>
      </div>

      <h3>

      </h3>

      <div className='icon-container'>
        <ion-icon name="airplane-outline"></ion-icon>
        <ion-icon name="chatbubbles-outline"></ion-icon>
        <ion-icon name="accessibility-outline"></ion-icon>
        <ion-icon name="ticket-outline"></ion-icon>
        <ion-icon name="trophy-outline"></ion-icon>
        <ion-icon name="wallet-outline"></ion-icon>

      </div>

      <div className='box-container'>
        {BoxItemData.map((item, index) => (
          <div key={index} className='tipografia'>
            <BoxItem
              titulo={item.titulo}
              subtitulo={item.subtitulo}
              descripcion={item.descripcion}
            />
          </div>
        ))}
      </div>


      <div className='box-container'>
        {BoxItemData2.map((item, index) => (
          <div key={index} className='tipografia'>
            <BoxItem
              titulo={item.titulo}
              subtitulo={item.subtitulo}
              descripcion={item.descripcion}
            />
          </div>
        ))}
      </div>

      <div className='img-container'>

        <div class="image-container">
          <img src="https://i.pinimg.com/564x/e2/ea/42/e2ea42131b724159a6b8291efee70178.jpg" alt="" />
          <h4 className='s1'>THE</h4>
        </div>

        <div class="image-container">
          <img src="https://i.pinimg.com/564x/1c/6f/a4/1c6fa431da50660d3c98f505dba24649.jpg" alt="" />
          <h4 className='s2'>NEW</h4>
        </div>

        <div class="image-container">
          <img src="https://i.pinimg.com/564x/4d/6c/be/4d6cbef5c81be85d6c32dfae7497086f.jpg" alt="" />
          <h4 className='s3'>STYLE</h4>
        </div>

      </div>


    


      <Footer />
    </div>
  );
}

export default Brand;