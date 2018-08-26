define(["ko"], function(ko)
{
    return function(isDealer, name, vm)
    {
        var self = {
            dealer: ko.observable(isDealer),
            name: ko.observable(name)
        };

        self.setDealer = function()
        {
            if (self.dealer())
                return;


        }

        return self;
    }
});