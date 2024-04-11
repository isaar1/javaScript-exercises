function createCard(title, channelName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewsString
    if (views < 1000) {
        viewsString = views;
    }
    else if (views > 1000000) {
        viewsString = views / 1000000 + "M";
    }
    else {
        viewsString = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${channelName} . ${viewsString} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to JavaScript | Sigma Web Dev video #2", "CodeWithHarry", 50000, 6, "12:10", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to NodeJS | Sigma Web Dev video #3", "CodeWithHarry", 360000, 5, "12:02", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Figma | Sigma Web Dev video #4", "CodeWithHarry", 860000, 4, "55:59", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

