var Activity = /** @class */ (function () {
    function Activity(name, icon) {
        this.name = name;
        this.icon = icon;
    }
    return Activity;
}());
var activityList = [
    new Activity("Food", "utensils"),
    new Activity("Coffee", "coffee"),
    new Activity("Drinks", "beer"),
    new Activity("Football", "football-ball"),
    new Activity("Soccer", "futbol"),
    new Activity("Chess", "chess"),
    new Activity("Hockey", "hockey-puck"),
    new Activity("Reading", "book-open"),
    new Activity("Bird Watching", "crow")
];
for (var _i = 0, activityList_1 = activityList; _i < activityList_1.length; _i++) {
    var a = activityList_1[_i];
    //create parent node
    var node = document.createElement('li');
    node.className += "list-group-item";
    //create icon node
    var icon = document.createElement('i');
    icon.className += 'fas fa-' + a.icon;
    //create text node
    var textNode = document.createTextNode(a.name);
    node.appendChild(icon);
    node.appendChild(textNode);
    document.getElementById('activity_list').appendChild(node);
}
