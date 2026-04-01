import { getJSON, BASE_URL } from ".";

const URL = `${BASE_URL}/posts`

/*
* Posts API manages all post-related operations.
*/
const PostsAPI = {
    readAll() {
        return getJSON(`${URL}?_sort=-createdAt`)
    },

    readOne(id) {
        return getJSON(`${URL}/${id}`)
    }
}
export default PostsAPI