const routes = {
  404: {
    template: "/templates/404.html",
    title: "404",
    description: "Page not found",
  },
  "/": {
    template: "/templates/home.html",
    title: "Home",
    description: "This is the home page",
  },
  "/projects": {
    template: "/templates/projects.html",
    title: "Projects",
    description: "This is the projects page",
  },
  "/writings": {
    template: "/templates/writings.html",
    title: "Writings",
    description: "This is the writings page",
  },
};

const locationHandler = async () => {
  let location = window.location.hash.replace("#", "");
  if (location.length === 0) location = "/";

  const route = routes[location] || routes["404"];
  const html = await fetch(route.template).then((res) => res.text());

  document.getElementById("content").innerHTML = html;
  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

window.addEventListener("hashchange", locationHandler);
window.addEventListener("DOMContentLoaded", locationHandler);
