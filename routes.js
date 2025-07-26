const routes = {
  404: {
    template: "/templates/404.html", // the html file to load dynamically
    title: "404", // the page title to show in the browser tab
    description: "Page not found", // the page meta description (for SEO / social media)
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

// this is the main function that handles route changes
const locationHandler = async () => {
  // get the current path from the URL hash (example: #/projects -> /projects)
  let location = window.location.hash.replace("#", "");
  // if no hash is presented fallback to the root path
  if (location.length === 0) location = "/";

  // checks if the route exists in the routes object. if not found, it falls back to 404 route
  const route = routes[location] || routes["404"];

  // fetches the HTML content of the given route's template file
  const html = await fetch(route.template).then((res) => res.text());

  // injects the loaded HTML into the #contennt element on the page
  document.getElementById("content").innerHTML = html;

  // dynamically updates the title and meta description
  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

// runs location handler when hash changes and page initially loads
window.addEventListener("hashchange", locationHandler);
window.addEventListener("DOMContentLoaded", locationHandler);
