const {rand} = require("../../utils");
const {PAGE_SIZE} = require("../../constants");
const {getUnfinishedDraws} = require("../../models/draw");
const {newDraw, getFinished: _getFinished} = require("../../models/draw");
const {findById: _findById} = require("../../models/draw");


const getDate = () => {
  return Date.now() + rand(5 *1000, 10 *1000);
};

const sampleDraws = () => [
  {
    winner: "5e5bd5a4aba8eb3ba18e4e69",
    title: "Matera Roja",
    description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. \nEstamos probando la descripción al estilo lorem ipsum",
    brand: "5e5bab9096f270c94efdf3f3",
    end_date: getDate(),
    images: ["https://http2.mlstatic.com/matera-de-cuero-vacuno-D_NQ_NP_12938-MLA20069893007_032014-F.jpg", "https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]
  },
  {
    winner: "5e5bd5a4aba8eb3ba18e4e69",
    title: "Kit de Peluquería",
    description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta.Estamos probando la descripción al estilo lorem ipsum",
    brand: "5e5bab9996f270c94efdf3f4",
    end_date: getDate(),
    images: ["https://mlstaticquic-a.akamaihd.net/vinilo-decorativo-de-pared-barberia-peluqueria-estilista-D_NQ_NP_607185-MLU31725182692_082019-F.jpg", "https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]
  },
  {
    winner: "5e5bd5a4aba8eb3ba18e4e69",
    title: "Zapatillas Nike Rn 2017",
    description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum",
    brand: "5e5baba096f270c94efdf3f5",
    end_date: getDate(),
    images: ["https://images.puma.net/images/369818/01/sv01/fnd/CHL/w/1000/h/1000/bg/255,255,255", "https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]
  },
  {
    winner: "5e5bd5a4aba8eb3ba18e4e69",
    title: "2 Noches en el Delta",
    description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum",
    brand: "5e5baba596f270c94efdf3f6",
    end_date: getDate(),
    images: ["https://www.ahstatic.com/photos/3167_ho_00_p_2048x1536.jpg", "https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]
  },
  {
    winner: "5e5bd5a4aba8eb3ba18e4e69",
    title: "Camastro King",
    description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum",
    brand: "5e5babac96f270c94efdf3f7",
    end_date: getDate(),
    images: ["https://http2.mlstatic.com/camastro-king-size-sillon-reposera-reclinable-mod-dubai-ext-D_NQ_NP_690117-MLA31209070041_062019-F.jpg", "https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]
  },
  {
    winner: "5e5bd5a4aba8eb3ba18e4e69",
    title: "Anteojos Aviator",
    description: "Este artefacto cuenta con un palo de color azul y además cabra muy cheta. Estamos probando la descripción al estilo lorem ipsum",
    brand: "5e5babb596f270c94efdf3f8",
    end_date: getDate(),
    images: ["https://i.linio.com/p/3636fa68a60b8087056733df51cd7175-product.jpg", "https://cdn.webshopapp.com/shops/263001/files/287759514/image.jpg", "https://dafitistaticar-a.akamaihd.net/p/ay-not-dead-6921-052142-1-product.jpg"]
  },
];

const randomDraws = async () => {
  return await sampleDraws().forEach(async x => {
    return await newDraw(x);
  });
};
//randomDraws();

const getDraws = (page=0) => getUnfinishedDraws(page * PAGE_SIZE, PAGE_SIZE + (page * PAGE_SIZE));

const findById = (id) => _findById(id);

const getFinished = (page=0) => _getFinished(page * PAGE_SIZE, PAGE_SIZE + (page * PAGE_SIZE));

const getWinner = (drawId) => _findById(drawId).then(x => x.winner);

module.exports = {
  findById,
  getDraws,
  getFinished,
  getWinner
};