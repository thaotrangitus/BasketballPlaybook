$(function () {
    var data = [
        { Id: 1, Name: "Ball Handling" },
        { Id: 2, Name: "Passing" },
        { Id: 3, Name: "Shooting" },
        { Id: 4, Name: "Rebounding" },
        { Id: 5, Name: "Transition" },
        { Id: 6, Name: "Defense" },
        { Id: 7, Name: "Team offense" },
        { Id: 8, Name: "Team Defense" },
    ];

    var viewModel = {
        //data
        tags: ko.observableArray(data),
        tagToAdd: ko.observable(""),

        //behavior
        addTag: function () {
            this.tags.push({ Name: this.tagToAdd() });
            this.tagToAdd("");
        },

        selectTag: function () {
            console.log("inside selectTag");
            viewModel.selectTag(this);
        }
    };

    ko.applyBindings(viewModel);

    $(".tag-delete").click(function () {
        var itemToRemove = ko.dataFor(this);//this is refering to the Dome element that we're databindings  to.
        viewModel.tags.remove(itemToRemove);
    });
});