import MarkerManager from "./MarkerManager";
import IconManager from "./IconManager";
import { extendAdvancedMarkerElement } from "./marker-extensions.js";

export default class GoogleMapsHandler {
    constructor(map, options = {}) {
        extendAdvancedMarkerElement();
        if (window.google && google.maps && map instanceof google.maps.Map) {
            this.map = map;
            this.markerManager = new MarkerManager(map);
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
            markerContent.className = 'marker-content';
            markerOptions.content = markerContent;
        }

        const finalMarkerOptions = {
            position,
            map: this.map,
            ...markerOptions
        };

        const marker = this.markerManager.addMarker(position, finalMarkerOptions);
        marker.toggleLabel(false);
        return marker;
    }

    setAllLabels(state) {
        this.markerManager.setAllLabels(state);
    }

    showMarkers() {
        this.markerManager.showMarkers();
    }

    hideMarkers() {
        this.markerManager.hideMarkers();
    }

    clearMarkers() {
        this.markerManager.clearMarkers();
    }

    getIconManager() {
        return this.iconManager;
    }
}
