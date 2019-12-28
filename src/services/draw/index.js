
function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
const getDate = () => {
    return Math.trunc(Date.now() / 1000) + getRandomArbitrary(0, 50);
};

const sampleDraws = () =>  [
    {id: 0, winner: "Emilio Basualdo Cibils", title: "Matera Roja", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. \nEstamos probando la descripción al estilo lorem ipsum", brand: "De Mates", endDate: getDate(), images: ["https://http2.mlstatic.com/matera-de-cuero-vacuno-D_NQ_NP_12938-MLA20069893007_032014-F.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 1, winner: "Javier Ortega Desio", title: "Kit de Peluquería", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta.Estamos probando la descripción al estilo lorem ipsum", brand: "Peluca del pelado", endDate:getDate(),   images:["https://mlstaticquic-a.akamaihd.net/vinilo-decorativo-de-pared-barberia-peluqueria-estilista-D_NQ_NP_607185-MLU31725182692_082019-F.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
{id: 2, winner: "Anlan Taylor", title: "Zapatillas Nike Rn 2017", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Nike", endDate: getDate(), images:["https://images.puma.net/images/369818/01/sv01/fnd/CHL/w/1000/h/1000/bg/255,255,255","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
{id: 3, winner: "Zaira Fenoglio", title: "2 Noches en el Delta", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Hotel del Delta", endDate: getDate() , images: ["https://www.ahstatic.com/photos/3167_ho_00_p_2048x1536.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
{id: 4, winner: "Julia Fenoglio", title: "Camastro King", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Colchones San Isidro", endDate: getDate() , images: ["https://http2.mlstatic.com/camastro-king-size-sillon-reposera-reclinable-mod-dubai-ext-D_NQ_NP_690117-MLA31209070041_062019-F.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
{id: 5, winner: "Nicol Prezzavento", title: "Anteojos Aviator", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Óptica Alemana", endDate: getDate(), images: ["https://i.linio.com/p/3636fa68a60b8087056733df51cd7175-product.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    /*{id: 6, winner: "Esteban Guaje Moore", title: "Matera Roja", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. \nEstamos probando la descripción al estilo lorem ipsum", brand: "De Mates", endDate: getDate(), images: ["https://http2.mlstatic.com/matera-de-cuero-vacuno-D_NQ_NP_12938-MLA20069893007_032014-F.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 7, winner: "Hernan Laperuta", title: "Kit de Peluquería", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta.Estamos probando la descripción al estilo lorem ipsum", brand: "Peluca del pelado", endDate: getDate(), images:["https://mlstaticquic-a.akamaihd.net/vinilo-decorativo-de-pared-barberia-peluqueria-estilista-D_NQ_NP_607185-MLU31725182692_082019-F.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 8, winner: "Violeta Juni", title: "Zapatillas Nike Rn 2017", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Nike", endDate: getDate(), images:["https://images.puma.net/images/369818/01/sv01/fnd/CHL/w/1000/h/1000/bg/255,255,255","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 9, winner: "Jamirogay Prezza", title: "2 Noches en el Delta", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Hotel del Delta", endDate: getDate(), images: ["https://www.ahstatic.com/photos/3167_ho_00_p_2048x1536.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 10, title: "Camastro King", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Colchones San Isidro", endDate:Date.now() / 1000+5, images: ["https://http2.mlstatic.com/camastro-king-size-sillon-reposera-reclinable-mod-dubai-ext-D_NQ_NP_690117-MLA31209070041_062019-F.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 11, title: "Anteojos Aviator", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Óptica Alemana", endDate: getDate(), images: ["https://i.linio.com/p/3636fa68a60b8087056733df51cd7175-product.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 12, title: "Matera Roja", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. \nEstamos probando la descripción al estilo lorem ipsum", brand: "De Mates", endDate: Date.now() / 1000+5, images: ["https://http2.mlstatic.com/matera-de-cuero-vacuno-D_NQ_NP_12938-MLA20069893007_032014-F.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 13, title: "Kit de Peluquería", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta.Estamos probando la descripción al estilo lorem ipsum", brand: "Peluca del pelado", endDate: Date.now() / 1000+5, images:["https://mlstaticquic-a.akamaihd.net/vinilo-decorativo-de-pared-barberia-peluqueria-estilista-D_NQ_NP_607185-MLU31725182692_082019-F.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 14, title: "Zapatillas Nike Rn 2017", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Nike", endDate: Date.now() / 1000+5, images:["https://images.puma.net/images/369818/01/sv01/fnd/CHL/w/1000/h/1000/bg/255,255,255","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 15, title: "2 Noches en el Delta", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Hotel del Delta", endDate: Date.now() / 1000+5, images: ["https://www.ahstatic.com/photos/3167_ho_00_p_2048x1536.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 16, title: "Camastro King", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Colchones San Isidro", endDate:Date.now() / 1000+5, images: ["https://http2.mlstatic.com/camastro-king-size-sillon-reposera-reclinable-mod-dubai-ext-D_NQ_NP_690117-MLA31209070041_062019-F.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},
    {id: 17, title: "Anteojos Aviator", description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum", brand: "Óptica Alemana", endDate: getDate(), images: ["https://i.linio.com/p/3636fa68a60b8087056733df51cd7175-product.jpg","https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]},*/
    ];

const getDraws = () => {
    const resp = [...sampleDraws()];
    resp.sort((a,b) => a.endDate - b.endDate).forEach( x => delete x.winner );
    return resp;
};

const getDraw = (id) => {
    return sampleDraws()[id]
};

const participate = (userId, drawId) => {
    return true;
};

const stopParticipating = (userId, drawId) => {
    return true;
};

module.exports = {
    getDraw,
    participate,
    stopParticipating,
    getDraws
};