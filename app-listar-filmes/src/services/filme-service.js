const axios = require('axios');
const { response } = require('express');

exports.listar = function listar(limit,fields) {

    return axios.get(process.env.API_FILMES+"?limit="+limit+"&fields="+fields).then(response => {
      return response;
    })
    .catch(function (error) {

    });
    
}


