import MarkerManager from "./MarkerManager";
import RouteManager from "./RouteManager";

export default class GoogleMapsHandler {
    constructor(map) {
        if (!map) {
            throw new Error("A Google Maps instance must be provided.");
        }
        this.map = map;
        this.markerManager = new MarkerManager(map);
        this.routeManager = new RouteManager(map);
    }

    // Métodos públicos
    addMarker(position, options) {
        return this.markerManager.addMarker(position, options);
    }

    playMarkers() {
        this.markerManager.showMarkers();
    }

    stopMarkers() {
        this.markerManager.hideMarkers();
    }

    addRoute(path, options) {
        return this.routeManager.addRoute(path, options);
    }

    showRoutes() {
        this.routeManager.showRoutes();
    }

    hideRoutes() {
        this.routeManager.hideRoutes();
    }
}