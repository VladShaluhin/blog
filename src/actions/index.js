import axios from  'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = `?key=ZAIR1985`

export const FETCH_POSTS = 'FETCH_POSTS';


export const fetchPosts = () => ({
    type: FETCH_POSTS,
    action: axios.get(`${ROOT_URL}/posts${API_KEY}`)
});