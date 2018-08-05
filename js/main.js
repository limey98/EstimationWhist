requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min",
        ko: "//cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-debug"
    }
});

require(["jquery", "ko", "player"], function ($, ko, player)
{
    var vm = {
        players: ko.observableArray([
            player(true, "Player 1"),
            player(false, "Player 2")
        ])
    };

    vm.deletePlayer = function(player)
    {

    }

    ko.applyBindings(vm);
});