/**
 * Created by cpf on 2017/2/7.
 */

angular.module('myApp',[])
    .controller('mainCtrl',function($scope){
        $scope.userdata = {};

        $scope.submitForm = function(){
            console.log($scope.userdata);
            if($scope.singUpForm.$invalid)
                alert('请检查您的信息');
            else
                alert('提交成功！');
        }
    })

    .directive('compare',function(){
        var o = {};
        o.strict = 'AE';
        o.scope = {
            orgText: '=compare'
        };
        o.require = 'ngModel';
        o.link = function(sco, ele, att, ctrl){
            ctrl.$validators.compare = function(val){
                return val == sco.orgText;
            };

            sco.$watch('orgText', function(){
                ctrl.$validate();
            })
        };
        return o;
    });