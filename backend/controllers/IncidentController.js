const connection = require('../database/connection');

module.exports  = {

    async create(request,response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;
        console.log(title, description, value);
        //try {
            const id = await connection('incident').insert({
                title,
                description,
                value,
                ong_id
            });
            return response.json({id}); 
        //} catch (error) {
        //    response.status(401).json({ error: 'Error' });
        //}
    },

    async index(request, response) {
        const { page = 1 } = request.query;
        
        const [count] = await connection('incident').count();
        
        console.log(count);
        
        const incident = await connection('incident')
            .join('ong', 'ong_id', '=', 'incident.ong_id')
            .limit(5)
            .offset((page -1)*5)
            .select(['incident.*', 'ong.name', 'ong.email', 'ong.city', 'ong.uf' ]);

        response.header('X-Total-Count', count['count']);

        return response.json(incident);
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        //console.log(id);
        
        const incident = await connection('incident')
        .where('id',id).select('ong_id').first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not Permitted.' });
        }

        await connection('incident')
        .where('id',id).delete();
        
        return response.status(204).send();
    }
}