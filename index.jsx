var React = require('react')
var Head = require('./parts/Head')
var Eyes = require('./parts/Eyes')
var Top = require('./parts/Top')
var Ears = require('./parts/Ears')
var Collar = require('./parts/Collar')


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


var RandomBotAvatar = React.createClass({

  layoutParts: function() {
    var viewBox = {
      minX: 0,
      minY: 0,
      width: 1000,
      height: 1000
    }

    var headWidth = getRandomInt(viewBox.width * 0.4, viewBox.width * 0.8)
    var headX = (viewBox.width - headWidth) / 2
    var headHeight = getRandomInt(viewBox.height * 0.4, viewBox.width * 0.8)
    var headY = (viewBox.height - headHeight) / 2
    var headDims = {
      width: headWidth,
      height: headHeight,
      x: headX,
      y: headY
    }

    var eyes = <Eyes/>
    var top = <Top/>
    var ears = <Ears/>
    var collar = <Collar/>

    return {
      viewBox: viewBox,
      viewBoxParam: [String(viewBox.minX), String(viewBox.minY), String(viewBox.width), String(viewBox.height)].join(' '),
      headDims: headDims,
      eyes: eyes,
      top: top,
      ears: ears,
      collar: collar
    }
  },

  render: function() {
    var layout = this.layoutParts()
    return (
      <svg
        viewBox={layout.viewBoxParam}
        {...this.props}>

        {/* placeholder background */}
        <rect x="0" y="0" width="1000" height="1000" fill="#CCCCCC"/>

        <Head {...layout.headDims}/>
        {layout.eyes}
        {layout.top}
        {layout.ears}
        {layout.collar}
        {this.props.children}
      </svg>
    )
  }


})

module.exports = RandomBotAvatar
