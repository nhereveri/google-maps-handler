export function extendAdvancedMarkerElement(iconManager) {
    if (!("toggleLabel" in google.maps.marker.AdvancedMarkerElement.prototype)) {
        google.maps.marker.AdvancedMarkerElement.prototype.toggleLabel = function (state) {
            if (!this.labelElement) {
                const label = document.createElement("div");
                label.className = "marker-label";

                const text = document.createElement("span");
                text.className = "marker-label-text";
                text.textContent = this.title || "no title";
                label.appendChild(text);

                this.labelElement = label;
                this.content.appendChild(label);
            }

            this.labelElement.style.display = state ? "block" : "none";
        };
    }
}