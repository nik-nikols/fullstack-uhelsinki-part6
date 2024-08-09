import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const createNew = async (content) => {
    const newItem = {
        content: content,
        votes: 0
    };

    const response = await axios.post(baseUrl, newItem);
    return response.data;
};

const updateItem = async (item) => {
    const response = await axios.put(`${baseUrl}/${item.id}`, item);
    return response.data;
};

export default {
    getAll,
    createNew,
    updateItem
};