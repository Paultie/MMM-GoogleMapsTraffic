# MMM-GoogleMapsTraffic

![Alt text](/img/mmm-googlemapstraffic.png "A preview of the MMM-GoogleMapsTraffic module.")

A module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) that displays a map, centered at provided coordinates, with Google Maps Traffic information.

## Using the module

To use this module, clone this repo to your `MagicMirror/modules/` directory.

`git clone https://github.com/vicmora/MMM-GoogleMapsTraffic.git`

And add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-GoogleMapsTraffic',
            config: {
                key: 'YOUR_KEY',
                lat: 37.8262306,
                lng: -122.2920096,
                zoom: 06,
                height: '300px',
                width: '300px'
            }
        }
    ]
}
```

## Configuration options

| Option    | Description
|---------- |-----------
| `key`     | *Required* Google api key. See below for help.
| `lat`     | *Required* Latitude used to center the map. See below for help. <br><br>**Type:** `float`
| `lng`     | *Required* Longitude used to center the map. See below for help. <br><br>**Type:** `float`
| `zoom`    | *Required* Zoom size in double digits. eg. 04, 11, 15 etc. See below for help. <br><br>**Type:** `float`
| `height`  | *Required* Height of the map. <br><br>**Type:** `string` (pixels)
| `width`   | *Required* Width of the map. <br><br>**Type:** `string` (pixels)

## Google API Key

Obtain an api at [Google Developer's page](https://developers.google.com/maps/documentation/javascript/).

## Coordinates

The easiest way to obtain latitude and longitude coordinates is via [Google Maps](https://maps.google.com). Type an address, location, or center the map where you'd like it centered. The coordinates will appear in the address bar as seen below.

![Alt text](/img/coordinates.png "Google Maps coordinates.")
