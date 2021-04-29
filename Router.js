class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  _matchRoutes(routeToMatch) {
    const matchedRoute = this.routes.find(
      (route) => route.path === routeToMatch
    );

    return matchedRoute;
  }

  loadRoute(route) {
    const matchedRoute = this._matchRoutes(route.path);

    history.pushState({}, "works", matchedRoute.path);

    document.getElementById("app").innerHTML = matchedRoute.template;
  }

  _loadInitialRoute() {
    const currentRoute = window.location.pathname;
    this.loadRoute({ path: currentRoute });
  }
}

export default Router;
