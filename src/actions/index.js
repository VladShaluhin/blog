import axios from  'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = `?key=ZAIR1985`

export const FETCH_POSTS = 'FETCH_POSTS';


export const fetchPosts = () => ({
    type: FETCH_POSTS,
    payload: axios.get(`${ROOT_URL}/posts${API_KEY}`)
});


export const CREATE_POST = 'CREATE_POST';

export const createPost = (values, callback) => ({
    type: CREATE_POST,
    payload: axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(res => {
        callback();
    })
});



export const FETCH_POST =  'FETCH_POST';

export const fetchPost =  id => ({
    type: FETCH_POST,
    payload: axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
})