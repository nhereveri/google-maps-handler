import MarkerManager from "./MarkerManager";
import RouteManager from "./RouteManager";
import IconManager from "./IconManager";

export default class GoogleMapsHandler {
    constructor(map, options = {}) {
        if (window.google && google.maps && map instanceof google.maps.Map) {
            this.map = map;
            this.markerManager = new MarkerManager(map);
            this.routeManager = new RouteManager(map);
            this.iconManager = new IconManager();
            if (options.useDefaultIcons) {
                IconManager.registerDefaultIcons(this.iconManager);
            }
        } else {
            throw new Error("A Google Maps instance must be provided.");
        }
    }

    addMarker(position, options) {
        const { iconId, scale, ...markerOptions } = options;

        if (iconId) {
            const markerContent = document.createElement("div");
            markerContent.innerHTML = iconId ? this.iconManager.getIcon(iconId, scale) : options.content || "";
            markerContent.style.marginBottom = '-50%'; // set anchor in the center of the content
            markerOptions.content = markerContent;
        }

        const finalMarkerOptions = {
            position,
            map: this.map,
            ...markerOptions
        };

        return this.markerManager.addMarker(position, finalMarkerOptions);
    }

    showMarkers() {
        this.markerManager.showMarkers();
    }

    hideMarkers() {
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

    getIconManager() {
        return this.iconManager;
    }
}