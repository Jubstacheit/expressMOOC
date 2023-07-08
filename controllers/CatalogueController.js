const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class CatalogueController {
    constructor(data) {
        this.dataFile = `./data/${data}.json`;
    }

    async loadCatalog() {
        const data = await readFile(this.dataFile, 'utf8');
        return JSON.parse(data).produits;
    }

    async getDiscs() {
        const data = await this.loadCatalog();
        return data.map(disc => {
            return { id: disc.id, title: disc.title, band: disc.band, image: disc.image}
        })
    }
    /*getData() {
        return this.data;
    }*/
}

module.exports = CatalogueController;