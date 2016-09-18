# meteor image asset generator (including 9 patch png for android splash screens)

## Setup

- Clone this repository.
- Open the repository in the command line and run `npm install`

```
git clone https://github.com/cestca/meteor-assets9
cd meteor-assets9
npm install
```

## Environmental Dependencies

This project requires `imagemagick`.

#### Linux

```
sudo apt-get install imagemagick imagemagick-doc
```

#### macOS

Install [homebrew](http://brew.sh/) and then:

```
brew install imagemagick
```

#### Windows

http://www.imagemagick.org/script/binary-releases.php#windows

### Note

This repository has been updated for usage with Meteor v1.3.

If `meteor --version` is less than `1.3`:

```
git pull --tags
git checkout v0.0.2
``` 

## Usage

1. Generate an icon at 1024x1024 and place it in `assets/icon.png`.

2. Generate a splash screen at 2208x2208 and place it in `assets/splash.png`.

3. Run `node meteor-assets`.

4. Copy the `assets` directory to your app: `cp -R assets /path/to/my/app`.

5. Add the console output to your `mobile-config.js`

Sizes thanks to https://github.com/meteor/meteor/blob/release-1.4/tools/cordova/builder.js

## Notes

- This will crop splashes horizontally centered and vertically centered.
- This generates [9 patch](https://developer.android.com/guide/topics/graphics/2d-graphics.html#nine-patch) images for Android.

## Contributing

- Thanks to [Ipender](https://github.com/lpender/meteor-assets)
- It wouldn't be so bad to turn this into a proper CLI node package.
