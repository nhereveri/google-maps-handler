# Google Maps Handler

Google Maps Handler is a JavaScript library that simplifies the management of markers and routes on Google Maps. It allows you to group, hide, show, and customize markers with ease.

---

## Features

- **Multiple Handlers**: Create multiple marker managers for a single map instance.
- **Marker Customization**: Use options like `iconId` to apply SVG icons or other properties.
- **Icon Manager**: Manage and reuse SVG icons by ID. Use custom HTML or SVG for markers.

## Build

You need NodeJS v22+.

```sh
git clone https://github.com/nhereveri/google-maps-handler.git
cd google-maps-handler
npm i
npm run build
```

## Usage

- Include the meta tag in the document.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- Add the Google Maps JS API library. Modify GET parameters as you need. The `loading=async`, `libraries=marker` and `callback=initMap` are mandatory.
```html
<script src="https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap&loading=async&libraries=marker&region=CL&language=es" async defer></script>
```

- Add this JS library.
```html
<script src="dist/google-maps-handler.min.js" defer></script>
```

- Check your CSS reset to avoid box-sizing rules other than:

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.googleMapContainer {
  box-sizing: initial;
}
```

- Create a container tag, like a `<div>`, to use in you app.
```html
<div id="mapContainer" class="googleMapContainer"></div>
```

- Implement a map and any amount of handlers to you app inside a `<script>` tag.
```javascript
function initMap() {
    const map = new google.maps.Map(document.getElementById("mapContainer"), {
        zoom: 20,
        center: { lat: -36.787019, lng: -73.090661 },
        mapId: 'MAP_ID',
        renderingType: google.maps.RenderingType.VECTOR,
        mapTypeControl: false,
    });

    const handler1 = new GoogleMapsHandler(map);
    handler1.addMarker({ lat: -36.787019, lng: -73.090661 }, { title: "Marker 1" });

    const handler2 = new GoogleMapsHandler(map);
    handler2.addMarker({ lat: -36.787019, lng: -73.089661 }, { title: "Marker 2" });
    handler2.addMarker({ lat: -36.787019, lng: -73.091661 }, { title: "Marker 3" });
    
    setTimeout(() => {
        handler2.hideMarkers();
    }, 5000);
}
```