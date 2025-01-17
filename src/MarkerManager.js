import { extendAdvancedMarkerElement } from "./marker-extensions.js";

class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = new Map();
        extendAdvancedMarkerElement();
    }

    addMarker(position, options = {}) {
        const { uuid, ...markerOptions } = options;
        let currentUUID;
        if(!uuid) {
            currentUUID = crypto.randomUUID();
        } else {
            currentUUID = uuid;
        }
        const marker = new google.maps.marker.AdvancedMarkerElement({
            position,
            map: this.map,
            ...markerOptions,
        });
        this.markers.set(currentUUID, marker);
        return marker;
    }

    getMarker(uuid) {
        return this.markers.get(uuid);
    }

    showMarkers() {
        this.markers.forEach(marker => marker.setMap(this.map));
    }

    hideMarkers() {
        this.markers.forEach(marker => marker.setMap(null));
    }

    setAllLabels(state) {
        this.markers.forEach((marker) => {
            marker.toggleLabel(state);
        });
    }

    clearMarkers() {
        this.hideMarkers();
        this.markers.forEach(marker => google.maps.event.clearInstanceListeners(marker));
        this.markers = new Map();
    }
}

export default MarkerManager;
