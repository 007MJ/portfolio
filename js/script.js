const route = (even) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    "/pages/" : "/",
    "/about-me" : "/pages/about.html",
    "/contact-me" : "/pages/contact-me.html",
    "/projects" : "/pages/projects.html",
    404 : "/pages/404.html",
}

const handleLocation  = () => {
    const path = window.location.pathname;
    let getPath = ""
    if ((path in routes) == false)
        getPath = routes[404];
    else
        getPath = routes[path];
    console.log(getPath, 1111);
    return getPath;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();