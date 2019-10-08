import axios from 'axios'

const baseURL = 'https://be-nc-news-stefin.herokuapp.com/api'

export const getAllArticles = () => {
  return axios.get(`${baseURL}/articles`)
}

export const getSingleArticle = (id) => {
  return axios.get(`${baseURL}/articles/${id}`)
    .then(response => {
      console.log(response)
      return response.data.article
    })
}

// export const patchVote = () => {
  
// }

export const getAllTopics = () => {
  return axios.get(`${baseURL}/topics`)
}

export const getArticlesByTopic = (slug) => {
  return axios.get(`${baseURL}/articles/topic?topic=${slug}`)
    .then(response => {
      return response
    })
}