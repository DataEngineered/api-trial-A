const axios = require('axios');

exports.getByUserById = async (req, res) => {
    try {
        const {id} = req.params;

        const response = await axios.get(`http://localhost:4000/users/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
}