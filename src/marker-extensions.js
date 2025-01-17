/**
 * Extends the prototype of `google.maps.marker.AdvancedMarkerElement` by adding 
 * the ability to show or hide a label (text) on each marker.
 *
 * When this method is called, a new `toggleLabel` function is defined in the 
 * prototype of `AdvancedMarkerElement`. This function either creates a label 
 * element (if it doesn't already exist) or toggles its opacity based on 
 * the provided state.
 *
 * @function extendAdvancedMarkerElement
 * @param {any} iconManager - (Optional) An icon manager or any object that 
 *   might be used for marker icon configuration. In this example, it is not 
 *   directly utilized, but it could be helpful for setting up multiple icon 
 *   styles or configurations.
 *
 * @example
 * // Usage in your main application code:
 * import { extendAdvancedMarkerElement } from './marker-utils.js';
 *
 * // Before creating or manipulating AdvancedMarkerElement instances, 
 * // be sure to run the extension:
 * extendAdvancedMarkerElement(iconManager);
 *
 * // Then, when instantiating an AdvancedMarkerElement on your map:
 * const marker = new google.maps.marker.AdvancedMarkerElement({
 *   map,
 *   position: { lat: 40.7128, lng: -74.0060 },
 *   title: "New York"
 * });
 *
 * // Show the label:
 * marker.toggleLabel(true);
 * // Hide the label:
 * marker.toggleLabel(false);
 */
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

            this.labelElement.style.opacity = state ? "1" : "0";
        };
    }
}
