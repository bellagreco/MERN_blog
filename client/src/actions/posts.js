import * as api from '../api'

//Action creators

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post);
        dispatch({ type: 'CREATE', payload: data });
        
    } catch (error) {
        console.log(error.message, "test"); 

    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: 'UPDATE', payload: data });
        
    } catch (error) {
        console.log(error.message, "test"); 

    }
}
