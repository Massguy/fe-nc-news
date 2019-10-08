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