(function () {
    angular.module("classifieds", ['ngStorage'])
        .controller("classifiedsctrl", function ($scope, $http, $localStorage) {


            $scope.currentUser = {};
            $scope.loggedUser = {
                "id": "0",
                "user": "Shashank Parikh",
                "img": "img_url"
            }
            $scope.details = [
                {
                    "id": "12",
                    "user": "Ryan Smith",
                    "img": "https://randomuser.me/api/portraits/women/16.jpg",
                    "messages": [
                        {
                            "id": 0,
                            "text": "Hi, Mamatha. How are you?",
                            "created": "Fri, 14 Jul 2017 09:56:37 GMT",
                            "createdBy": 0
                        },
                        {
                            "id": 0,
                            "text": "Hello, Ryan Smith. I'm Fine",
                            "created": "Fri, 15 Jul 2017 09:56:37 GMT",
                            "createdBy": 12
                        }
                    ]
                },
                {
                    "id": "2",
                    "user": "Bertha	Keller",
                    "img": "https://randomuser.me/api/portraits/women/73.jpg",
                    "messages": [

                    ]
                },
                {
                    "id": "3",
                    "user": "Marian	Harris",
                    "img": "https://randomuser.me/api/portraits/women/12.jpg",
                    "messages": [
                    ]
                },
                {
                    "id": "4",
                    "user": "Chester Dixon",
                    "img": "https://randomuser.me/api/portraits/women/66.jpg",
                    "messages": [

                    ]
                }

            ];

            //Calling the API through HTTP.

            //  $scope.loadingAPI = function(){          
            // $http.get('http://demo4842709.mockable.io/users').then(response =>{
            // console.log(response)
            // },
            // then(response =>{
            //     console.log(response)
            // }))
            //  }();

            //Initial Loading
            $scope.intialLoding = function () {
                $scope.messages = [];
                // console.log(typeof localStorage.getItem('message_array'));
                if (localStorage.getItem('message_array') == null) {
                    for (let i = 0; i < $scope.details.length; i++) {
                        if ($scope.details[i].messages.length != 0) {
                            for (let j = 0; j < $scope.details[i].messages.length; j++) {
                                $scope.messages.push($scope.details[i].messages[j]);
                            }
                        }
                    }
                    localStorage.setItem('message_array', JSON.stringify($scope.messages));
                } else {
                    console.log("inside else");
                    $scope.messages = JSON.parse(localStorage.getItem('message_array'));
                }

            }();


            // function for selecting the user to see the chat window for the user
            $scope.selectCurrentUser = function (user) {
                $scope.currentUser = user;
                console.log($scope.currentUser);
            };

            // function for pushing the data by logged user.
            $scope.sendContent = function (message) {
                // console.log($scope.details)
                document.getElementById('messageText').value = "";
                //$scope.messages.push({id:});
                console.log($scope.messages.text);
                if ($scope.details.id != $scope.messages[0].createdBy)
                    $scope.messages.push({ 'id': $scope.currentUser.id, 'text': message, 'created': new Date(), 'createdBy': $scope.loggedUser.id });
                console.log($scope.messages);
                localStorage.setItem("message_array", JSON.stringify($scope.messages));

            };

        });



})();

