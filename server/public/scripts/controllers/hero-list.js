app.controller('HeroListController', ['$http', function($http){
    console.log('Hero List Controller loaded');

    var self = this;
    self.newHero = {};
    self.heroList = [];

    getHeroes();

    function getHeroes(){
      $http.get('/heroes').then(function(response){
        console.log('response: ', response.data);
        self.heroList = response.data;
      });
    }

    self.addHero = function(){
      console.log(self.newHero);
      $http.post('/heroes', self.newHero).then(function(response) {
        self.newHero = {};
        getHeroes();
      });
    }

    self.deleteHero = function(){
      console.log(self.newHero);
      $http.delete('/heroes', self.newHero).then(function(response){
        getHeroes();
      })
    }



}]);
