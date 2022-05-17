export const listadoProductos = [
    {
      id:1,
      categoria: 'mats',
      producto: 'Mat Yoga 5mm',
      detalle: 'Mat antideslizante profesional de Yoga. Compuesto de PU premium.',
      precio: '$40.000',
      imgUrl: './imagenes/mat5mm.jpg',
      stock: 5
    },
    {
        id:2,
        categoria: 'mats',
        producto: 'Mat Yoga 3mm',
        detalle: 'Mat Yoga antideslizante, fácil de limpiar y liviano. Compuesto de PVC.',
        precio: '$35.000',
        imgUrl: './imagenes/mat3mm.jpg',
        stock: 5
    },
    {
        id:3,
        categoria: 'accesorios',
        producto: 'Ladrillo Eco',
        detalle: 'Ladrillo amigable con el medio ambiente de corcho 100%. Provee mayor firmeza y tenacidad que los otros materiales.',
        precio: '$5.000',
        imgUrl: './imagenes/ladrillo.jpg',
        stock: 5
    },
];

export const getItems = (categoriaId) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(categoriaId ? listadoProductos.filter(prod => prod.categoria === categoriaId) : listadoProductos);
      }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(listadoProductos.find(prod => prod.id === parseInt(id)))
        }, 1000)
    })
}