import { userApi } from "./api";

const errorHandler = (err) => {
    if (err.response) {
        // client received an error response (5xx, 4xx)
        if (err.response.status === 404) console.log('Request failed; API address not found!');
        if (err.response.status === 500) console.log('Internal server error!');
    } else if (err.request) {
        console.log('Client never received a response, or request never left');
    } else {
        console.log('Error: ', err);
    }
}

const userInfo = {
    fetchData: async () => {
        const result = await userApi
            .get('content')
            .catch(error => errorHandler(error));

        return result?.data;
    }
};

export default userInfo;

