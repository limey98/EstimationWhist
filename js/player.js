define(["ko"], function(ko)
{
    return function(isDealer, name)
    {
        var self = {
            dealer: ko.observable(isDealer),
            name: ko.observable(name)
        };

        return self;
    }
});