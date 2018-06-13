class Activity {
    name: string;
    icon: string;
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
    }
}

let activityList = [
    new Activity("Food", "utensils"),
    new Activity("Coffee", "coffee"),
    new Activity("Drinks", "beer"),
    new Activity("Football", "football-ball"),
    new Activity("Soccer", "futbol"),
    new Activity("Chess", "chess"),
    new Activity("Hockey", "hockey-puck"),
    new Activity("Reading", "book-open"),
    new Activity("Bird Watching", "crow")
]

for (let a of activityList) {
    //create parent node
    let node = document.createElement('li');
    node.className += "list-group-item";

    //create icon node
    let icon = document.createElement('i');
    icon.className += 'fas fa-'+a.icon;

    //create text node
    let textNode = document.createTextNode(a.name);
    node.appendChild(icon);
    node.appendChild(textNode);
    document.getElementById('activity_list').appendChild(node);
}