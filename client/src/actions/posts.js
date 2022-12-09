import * as api from '../api';
import posts from '../reducers/posts';

// All the Actions

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();
        dispatch ({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }


}

export default posts;