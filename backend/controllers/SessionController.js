const connection = require('../database/connection');


module.exports  = {
    async create(request, response) {
        const {id } = request.body;
        
        //const ong_id = request.headers.authorization;
        //console.log(ong_id);

        const ong = await connection('ong')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({ erro: 'No ONG found with this ID.'});
        }
        return response.json(ong); 
    }
};
