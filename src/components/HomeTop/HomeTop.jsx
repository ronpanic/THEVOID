import React from 'react'
import "./HomeTop.css"

const HomeTop = () => {
    return (
      <div className='homepage'>
          <div className="overlay"></div>
          <img className='background-img' src="https://cdn.discordapp.com/attachments/791431401018228756/1160237507947020369/hed.jpeg?ex=6533ee62&is=65217962&hm=11a1d7557dfe1e3557390030c85658eb90e4fc77f0821ea9ab73b31fa75bb202&" alt="" />
          <div className='homeinfo'>
              <h2>"Envio a todo el Pais"</h2>
              <h1>THE VOID</h1>
              <h3>Disfruta de nuestros Drops</h3>
              <a href=""><button>Ver Catálogo</button></a>
          </div>
      </div>
    )
  }
  

export default HomeTop