import { initHome } from "./pages/home";
import "./components/book-view";
import "./components/searchForm";
const routes = [
  {
    path: /\/search/,
    component: initHome,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    console.log("el handle Route recibio una nueva ruta y es", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        container.firstChild?.remove();
        const pageHome = document.createElement("home-page");
        container.appendChild(pageHome);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/search");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
}
