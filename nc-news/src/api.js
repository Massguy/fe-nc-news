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
  }).catch(error => {
    console.log(error)
  });
}

export const getSingleArticle = (id) => {
  return axios.get(`${baseURL}/articles/${id}`)
    .then(response => {
      return response.data.article
    }).catch(error => {
      console.log(error)
    });
}

export const getCommentByArticleid = (id) => {
  return axios.get(`${baseURL}/articles/${id}/comments`)
    .then(response => {
      return response.data.comments
    }).catch(error => {
      console.log(error)
    });
}

export const updateArticleVote = (vote, id) => {
  console.log(id)
  return axios.patch(`${baseURL}/articles/${id}`, {
    inc_votes: vote
  })
    .then(response => {
      return response.data.updateVote
    }).catch(error => {
      console.log(error)
    });
}

export const updateCommentVote = (vote, id) => {
  return axios.patch(`${baseURL}/articles/${id}/comments`, {
    inc_votes: vote
  })
    .then(response => {
      return response.data.updateVote
    }).catch(error => {
      console.log(error)
    });
}

export const postComment = (id, body) => {
  return axios.post(`${baseURL}/articles/${id}/comments`, body)
    .then(response => {

      return response.data.comment

    }).catch(error => {
      console.log(error)
    });
}
export const deleteComment = (comment_id) => {
  return axios.delete(`${baseURL}/comments/${comment_id}`)
}
export const getAllTopics = () => {
  return axios.get(`${baseURL}/topics`)
    .catch(error => {
      console.log(error)
    });
}

export const getUsers = () => {
  return axios.get(`${baseURL}/users`).catch(error => {
    console.log(error)
  });
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