var axios = require('axios');

/**
* Get repos
*/
function getRepos (username) {
    return axios.get('https://api.github.com/users/' + username + '/repos');
}

/**
* Get user info
*/
function getUserInfo (username) {
    return axios.get('https://api.github.com/users/' + username);
}

/**
 * Helper function
 */
var helpers = {
    getGithubInfo: function (username) {
        return axios.all([
            getRepos(username),
            getUserInfo(username)
        ])
        .then(function (array) {
            return {
                // the first elem on the array is the user repos
                repos: array[0].data,
                bio: array[1].data
            }
        })
    }
}

// Export
module.exports = helpers;
