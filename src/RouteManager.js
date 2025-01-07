class RouteManager {
    constructor(map) {
        this.map = map;
        this.routes = [];
    }

    addRoute(path, options = {}) {
        const route = new google.maps.Polyline({
            path,
            map: this.map,
            ...options,
        });
        this.routes.push(route);
        return route;
    }

    showRoutes() {
        this.routes.forEach(route => route.setMap(this.map));
    }

    hideRoutes() {
        this.routes.forEach(route => route.setMap(null));
    }

    clearRoutes() {
        this.hideRoutes();
        this.routes = [];
    }
}

export default RouteManager;