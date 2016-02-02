import axios from 'axios';

/**
* Get repos
*/
function getRepos (username) {
    return axios.get(`https://api.github.com/users/${username}/repos`);
}

/**
* Get user info
*/
function getUserInfo (username) {
    //$ is to evaluate - part of es6
    return axios.get(`https://api.github.com/users/${username}`);
}

export default function getGithubInfo(username) {
      return axios.all([getRepos(username),getUserInfo(username)])
      // The array function doesn't create an other scope
      // the => () means that we want to return an object as {} is not specified
      .then((array) => ({repos: array[0].data,bio: array[1].data}))
  }
