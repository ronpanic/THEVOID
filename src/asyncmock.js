const voidProducts = [
    { nombre: "HOODIE ORBITA", precio: 45, img: "./image/2.jpg" },
    { nombre: "PANTALON LUDACRIS BROWN", precio: 20, img: "./image/3.jpg" },
    { nombre: "PANTALON LUDACRIS BEIGE", precio: 20, img: "./image/4.jpg" },
    { nombre: "REMERA GATIVIDEO", precio: 35, img: "./image/5.jpg" },
    { nombre: "HOODIE ORBITA 2.0.1", precio: 50, img: "./image/6.jpg" },
    { nombre: "REMERA ZERO", precio: 35, img: "./image/7.jpg" },
    { nombre: "REMERA SNOW GARMENT", precio: 35, img: "./image/8.jpg" },
    { nombre: "REMERA GILLEL", precio: 15, img: "./image/9.jpg" },
    { nombre: "REMERA BROWN HUMO", precio: 15, img: "./image/10.jpg" },
    { nombre: "OVERSHIRT LENA", precio: 22, img: "./image/11.jpg" },
    { nombre: "BZO GERO", precio: 10, img: "./image/12.jpg" },
    { nombre: "PANTALON LINE 06", precio: 25, img: "./image/13.jpg" },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(voidProducts);
        }, 500)
    })
}

