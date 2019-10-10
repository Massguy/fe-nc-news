import axios from 'axios'

const baseURL = 'https://be-nc-news-stefin.herokuapp.com/api'

export const getAllArticles = ({ slug, sort_by }) => {
  return axios.get(`${baseURL}/articles`, {
    params: {
      topic: slug,
      sort: sort_by
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
  return axios.patch(`${baseURL}/articles/${id}`, {
    incVotes: vote
  })
    .then(response => {
      return response.data.updateVote
    })
}



export const getAllTopics = () => {
  return axios.get(`${baseURL}/topics`)
}