import axios from 'axios'

const baseURL = 'https://be-nc-news-stefin.herokuapp.com/api'

export const getAllArticles = ({ slug, sort_by, author, order, p }) => {
  return axios.get(`${baseURL}/articles`, {
    params: {
      topic: slug,
      sort_by: sort_by,
      order: order,
      author: author,
      p: p,
    }
  });
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

  return axios.patch(`${baseURL}/articles/${id}`, {
    inc_votes: vote
  })
    .then(response => {
      return response.data.updateVote
    })
}

export const updateCommentVote = (votes, comment_id) => {
  return axios.patch(`${baseURL}/comments/${comment_id}`, {
    inc_votes: votes
  })
    .then(response => {
      return response.data.updateVote
    })
}

export const postComment = (id, body) => {
  return axios.post(`${baseURL}/articles/${id}/comments`, body)
    .then(response => {

      return response.data.comment

    })
}
export const deleteComment = (comment_id) => {
  return axios.delete(`${baseURL}/comments/${comment_id}`)
}
export const getAllTopics = () => {
  return axios.get(`${baseURL}/topics`)

}

export const getUsers = () => {
  return axios.get(`${baseURL}/users`)
}

export const getUserByUsername = (username) => {
  return axios.get(`${baseURL}/users/${username}`).then(response => {
    return response.data.user
  });
}

export const postArticle = ({ title, body, author, slug }) => {
  return axios.post(`${baseURL}/articles`, {
    params: {
      topic: slug,
      body: body,
      author: author,
      title: title
    }
  }).then(response => {
    return response.data.article
  })
}