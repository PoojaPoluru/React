import axios from 'axios';

var id='d9a55fb726c8eece7397';
var secret='ab518fcffec667ee2a7429b5dbd96329734b7ecc';
var params='?client_id=' + id+ '&client_secret=' + secret;

function getProfile(username){
    return axios.get('https://api.github.com/users/'+username+ params)
        .then(function(user){
            return user.data;
        });
}
function getRepos(username){
    return axios.get('https://api.github.com/users/' + username + '/repos'+ params +' &per_page=100')
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
    return (followers*4)+totalStars;

}

function handleError(error){
    console.warn(error);
    return null;
}

function getUserData(users){
    return axios.all([
        getProfile(users),
        getRepos(users)

    ]).then(function(data){
        var profile=data[0];
        var repos=data[1];
        return{
            profile:profile,
            score:calculateScore(profile,repos),
        }
    })
}

function sortUsers(users){
    return users.sort(function(a,b){
        return b.score-a.score;
    })
}




export default {
    Battle:function(users){
        return axios.all(users.map(getUserData))
            .then(sortUsers)
            .catch(handleError)
    },
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