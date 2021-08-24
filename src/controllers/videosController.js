const fakeUser = {
    userName : "chloe",
    loggedIn : true
};

const videos = [{
    title : "video #1",
    views : 1,
    rating : 3.5,
    like : 10,
    dislike : 2,
    comments : 100,
    createdAt : "2 minnutes ago",
    id : 1
},{
    title : "video #2",
    views : 58,
    rating : 3.5,
    like : 1,
    dislike : 2,
    comments : 100,
    createdAt : "2 minnutes ago",
    id : 2
},{
    title : "video #3",
    views : 100,
    rating : 3.5,
    like : 200,
    dislike : 2,
    comments : 100,
    createdAt : "2 minnutes ago",
    id : 3
}]

export const showLatestVideos = (req, res) => {
    return res.render("home", { pageTitle : "Home", fakeUser : fakeUser, videos : videos})
};

export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("watch", { pageTitle : `Watching ${video.title}`, video});
}

export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("edit", { pageTitle : `Editing ${video.title}`})
} 

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id -1].title = title;
    return res.redirect(`/videos/${id}`)
}

export const search = (req, res) => res.send("You can search a video.");

export const deleteVideo = (req, res) => {
    return res.send("Delete your video");
}

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle : "Upload video"})
}

export const postUpload = (req, res) => {
    const { title } = req.body;
    const newVideo = {
        title : title,
        views : 0,
        rating : 0,
        like : 0,
        dislike : 0,
        comments : 0,
        createdAt : "just now",
        id : videos.length + 1
    }
    videos.push(newVideo);
    return res.redirect(`/`);
}