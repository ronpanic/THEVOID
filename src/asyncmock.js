export const voidProducts = [
    { id: 1, nombre: "HOODIE ORBITA", precio: 45, info: "BEST HOODIE AWAY", img: "/image/2.jpg" },
    { id: 2, nombre: "PANTALON LUDACRIS BROWN", precio: 20, info: "BEST HOODIE AWAY", img: "/image/3.jpg" },
    { id: 3, nombre: "PANTALON LUDACRIS BEIGE", precio: 20, info: "BEST HOODIE AWAY", img: "/image/4.jpg" },
    { id: 4, nombre: "REMERA GATIVIDEO", precio: 35, info: "BEST HOODIE AWAY", img: "/image/5.jpg" },
    { id: 5, nombre: "HOODIE ORBITA 2.0.1", precio: 50, info: "BEST HOODIE AWAY", img: "/image/6.jpg" },
    { id: 6, nombre: "REMERA ZERO", precio: 35, info: "BEST HOODIE AWAY", img: "/image/7.jpg" },
    { id: 7, nombre: "REMERA SNOW GARMENT", precio: 35, info: "BEST HOODIE AWAY", img: "/image/8.jpg" },
    { id: 8, nombre: "REMERA GILLEL", precio: 15, info: "BEST HOODIE AWAY", img: "/image/9.jpg" },
    { id: 9, nombre: "REMERA BROWN HUMO", precio: 15, info: "BEST HOODIE AWAY", img: "/image/10.jpg" },
    { id: 10, nombre: "OVERSHIRT LENA", precio: 22, info: "BEST HOODIE AWAY", img: "/image/11.jpg" },
    { id: 11, nombre: "BZO GERO", precio: 10, info: "BEST HOODIE AWAY", img: "/image/12.jpg" },
    { id: 12, nombre: "PANTALON LINE 06", precio: 25, info: "BEST HOODIE AWAY", img: "/image/13.jpg" },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(voidProducts);
        }, 500)
    })
}

