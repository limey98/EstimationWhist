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
        players: ko.observableArray(),
        playing: ko.observable(false)
    };

    vm.addPlayer = function()
    {
        vm.players.push(player(false, "Player " + (vm.players().length + 1), vm));
    }

    vm.deletePlayer = function(player)
    {
        if (vm.players().length == 2)
            return;

        if (player.dealer())
        {
            vm.players()[vm.players.indexOf(player) + 1].dealer(true);
        }

        vm.players.remove(player);
    }

    vm.playerUp = function(player)
    {
        var idx = vm.players.indexOf(player);

        if (idx == 0)
            return;

        vm.players.remove(player);
        vm.players.splice(idx - 1, 0, player);
    }

    vm.playerDown = function (player)
    {
        var idx = vm.players.indexOf(player);

        if (idx == vm.players().length - 1)
            return;

        vm.players.remove(player);
        vm.players.splice(idx + 1, 0, player);
    }

    vm.getSuit = function(idx)
    {
        switch (idx)
        {
            case 0:
                return "Trump: &spades;";
            case 1:
                return "Trump: &hearts;";
            case 2:
                return "Trump: &clubs;";
            case 3:
                return "Trump: &diams;";
            default:
                return "No Trump";
        }
    }

    vm.players.push(player(true, "Player 1", vm));
    vm.players.push(player(false, "Player 2", vm));

    ko.applyBindings(vm);

    window.ko = ko;
});