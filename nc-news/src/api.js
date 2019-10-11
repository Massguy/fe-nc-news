import axios from 'axios'

const baseURL = 'https://be-nc-news-stefin.herokuapp.com/api'

export const getAllArticles = ({ slug, sort_by, author, order }) => {
  return axios.get(`${baseURL}/articles`, {
    params: {
      topic: slug,
      sort_by: sort_by,
      order: order,
      author: author
    }
  })
}

export const getSingleArticle = (id) => {
  return axios.get(`${baseURL}/articles/${id}`)
    .then(response => {
      return response.data.article
    })
}

export const getCommentByArticleid = (id) => {
  return axios.get(`${baseURL}/articles/${id}/comments`)
    .then(response => {
      return response.data.comments
    })
}

export const updateArticleVote = (vote, id) => {
  console.log(id)
  return axios.patch(`${baseURL}/articles/${id}`, {
    inc_votes: vote
  })
    .then(response => {
      return response.data.updateVote
    }).catch(console.dir)
}

export const updateCommentVote = (vote, id) => {
  return axios.patch(`${baseURL}/articles/${id}/comments`, {
    inc_votes: vote
  })
    .then(response => {
      return response.data.updateVote
    })
}

export const postComment = (id, comment) => {
  return axios.post(`${baseURL}/articles/${id}/comments`, comment)
    .then(response => {
      return response.data.comment[0]
    })
}

export const getAllTopics = () => {
  return axios.get(`${baseURL}/topics`)
}

