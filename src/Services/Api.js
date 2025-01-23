import axios from 'axios';

const ApiService = {
    fetchUsers: async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }
};

export default ApiService;

