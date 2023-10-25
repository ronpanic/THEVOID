export const voidProducts = [
    { id: 1, nombre: "HOODIE ORBITA", precio: 45, imgAdditional: ["/image/2.jpg", "/image/4.jpg", "/image/5.jpg", "/image/guiadetalles.jpg"], info: " • Una buzo con capucha de alta calidad que te mantendrá abrigado y con estilo.  • Confeccionada con materiales suaves y duraderos para un confort duradero.  • Perfecta para cualquier ocasión", img: "/image/2.jpg" },
    { id: 2, nombre: "LUDACRIS BROWN", precio: 20, imgAdditional: ["/image/3.jpg", "/image/4.jpg", "/image/5.jpg", "/image/guiadetalles.jpg"], info: "BEST HOODIE AWAY", img: "/image/3.jpg" },
    { id: 3, nombre: "LUDACRIS BEIGE", precio: 20, imgAdditional: ["/image/4.jpg", "/image/4.jpg", "/image/5.jpg", "/image/guiadetalles.jpg"], info: "BEST HOODIE AWAY", img: "/image/4.jpg" },
    { id: 4, nombre: "GATIVIDEO", precio: 35, imgAdditional: ["/image/5.jpg", "/image/4.jpg", "/image/5.jpg", "/image/guiadetalles.jpg"], info: "BEST HOODIE AWAY", img: "/image/5.jpg" },
    { id: 5, nombre: "HOODIE ORBITA 2.0.1", precio: 50, imgAdditional: ["/image/6.jpg", "/image/4.jpg", "/image/5.jpg", "/image/guiadetalles.jpg"], info: "BEST HOODIE AWAY", img: "/image/6.jpg" },
    { id: 6, nombre: "ZERO", precio: 35, imgAdditional: ["/image/7.jpg", "/image/4.jpg", "/image/5.jpg", "/image/guiadetalles.jpg"], info: "BEST HOODIE AWAY", img: "/image/7.jpg" },
    { id: 7, nombre: "SNOW GARMENT", precio: 35, imgAdditional: ["image/8.jpg", "/image/4.jpg", "/image/5.jpg", "/image/guiadetalles.jpg"], info: "BEST HOODIE AWAY", img: "/image/8.jpg" },
    { id: 8, nombre: "GILLEL", precio: 15, imgAdditional: ["/image/9.jpg", "/image/4.jpg", "/image/5.jpg", "/image/guiadetalles.jpg"], info: "BEST HOODIE AWAY", img: "/image/9.jpg" },
    { id: 9, nombre: "BROWN HUMO", precio: 15, imgAdditional: ["/image/10.jpg", "/image/10-2.jpg", "/image/10-3.jpg", "/image/guiadetalles.jpg"], info: "Bermuda de gabardina color gris con cintura elástica , cordón y bolsillos cargo laterales Todos los modelos pasan por un proceso industrial de lavado. Todas las fotos publicadas en nuestra web son reales, pero tene en cuenta que fueron tomadas en un estudio con flashes y cámaras profesionales", img: "/image/10.jpg" },
    { id: 10, nombre: "OVERSHIRT LENA", precio: 22, imgAdditional: ["/image/11.jpg", "/image/4.jpg", "/image/5.jpg", "/image/guiadetalles.jpg"], info: "BEST HOODIE AWAY", img: "/image/11.jpg" },
    { id: 11, nombre: "BZO GERO", precio: 10, imgAdditional: ["/image/12.jpg", "/image/4.jpg", "/image/5.jpg", "/image/guiadetalles.jpg"], info: "BEST HOODIE AWAY", img: "/image/12.jpg" },
    { id: 12, nombre: "LIKE HH306", precio: 60, imgAdditional: ["/image/13.jpg", "/image/4.jpg", "/image/5.jpg", "/image/guiadetalles.jpg"], info: "BEST HOODIE AWAY", img: "/image/13.jpg" },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(voidProducts);
        }, 500)
    })
}

