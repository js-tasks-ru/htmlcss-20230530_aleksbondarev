module.exports = {
  syntax: 'postcss-scss',
  map: { inline: true },
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-map-get'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano'),
  ],
}
