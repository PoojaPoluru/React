import axios from 'axios';

/*var id='Client_id';
var secret='Client_secret';
var params='?client_id' + id+ '&client_secret=' + sec;*/

function getProfile(username){
    return axios.get('https:/github.com/users'+username)
        .then(function(user){
            return user.data;
        });
}
function getRepos(username){
    return axios.get('https://github.com/users'+username+'/repos'+'&per_page=100')
}

function getStarCount(repos){
    var initial_value=0;
    var reducer=function(count,repo){
        return count+repo.stargazers_count;
    };
    return repos.data.reduce(reducer,initial_value)
}

function calculateScore(profile,repos){
    var followers=profile.followers;
    var totalStars=getStarCount(repos);
    return (followers*3)+totalStars;

}

function handleError(error){
    console.warn(error);
    return null;
}

export default {
    fetchPopularRepos:function(language){
        var encodedURI=window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories')

       return axios.get(encodedURI)
           .then(function(response){
               return response.data.items;

           });
    }
};






















/*module.exports={
    fetchPopularRepos:function(language){
        var encodedURI=window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

        return axios.get(encodedURI)
            .then(function(response){
                return response.data.items;
            });
    }
}*/