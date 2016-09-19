# Cordova / Meteor icons and splash screens generator (including 9 patch png for Android splash screens)

## Install

```
npm install -g assets9
```

## Usage

1. Create an icon at 1024x1024 and name it `icon.png`.

2. Create a splash screen at 2208x2208 and name it `splash.png`. Place your logo / brand in a 1200x1200 square centered in that splash screen.

3. Run `assets9` where these two files are.

4. (Meteor) Add the console output to your `mobile-config.js`

Sizes thanks to https://github.com/meteor/meteor/blob/release-1.4/tools/cordova/builder.js

## Notes

- For Meteor >= 1.3 and Cordova
- This will crop splash screen horizontally centered and vertically centered.
- This generates [9 patch](https://developer.android.com/guide/topics/graphics/2d-graphics.html#nine-patch) splash screens for Android.

## Credits

- Thanks to [Ipender](https://github.com/lpender/meteor-assets) for the inspiration
- Thanks to [Sharp](https://github.com/lovell/sharp) for the image manipulation library with external dependancies included

## License

MIT