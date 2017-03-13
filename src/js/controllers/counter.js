//import angular from 'angular';
var count = 0;

function LikeCounter ($scope) {
  console.log('test');

  $scope.count = count;
  $scope.s = 's';

  $scope.addLike = function () {
    console.log('like');
    count++;
    console.log(count);
    $scope.count = count;
    if(count === 1){
      $scope.s = '';
    }else{
      $scope.s = 's';
    }
  };

  $scope.minusLike = function () {
    console.log('like');
    count--;
    console.log(count);
    $scope.count = count;
    if(count === 1){
      $scope.s = '';
    }else{
      $scope.s = 's';
    }
  };
}

LikeCounter.$inject = ['$scope'];

export default LikeCounter;
