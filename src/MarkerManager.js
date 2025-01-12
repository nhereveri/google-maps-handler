class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = [];
    }

    addMarker(position, options = {}) {
        const marker = new google.maps.marker.AdvancedMarkerElement({
            position,
            map: this.map,
            ...options,
        });
        this.markers.push(marker);
        return marker;
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
        this.markers = [];
    }
}

export default MarkerManager;