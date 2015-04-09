var React = require('react')
var Head = require('./parts/Head')
var Eyes = require('./parts/Eyes')
var Top = require('./parts/Top')
var Ears = require('./parts/Ears')
var Collar = require('./parts/Collar')
var getRandomVars = require('./utils')
var d3 = require('d3')


/*
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
*/





var RandomBotAvatar = React.createClass({

  layoutParts: function() {

    var viewBox = {
      minX: 0,
      minY: 0,
      width: 1000,
      height: 1000
    }


    var seed = 'domo arigato'
    var input = seed + '#unbracketed'
    var R = getRandomVars(input)


    /*
      calc head
    */
    var rWidth = R[5],
        rHeight = R[13]

    var scale = d3.scale.linear().domain([0, 99])

    scale.range([viewBox.width * 0.4, viewBox.width * 0.8])
    var headWidth = scale(rWidth)
    var headX = (viewBox.width - headWidth) / 2

    scale.range([viewBox.height * 0.4, viewBox.height * 0.8])
    var headHeight = scale(rHeight)
    var headY = (viewBox.height - headHeight) / 2
    var headDims = {
      width: headWidth,
      height: headHeight,
      x: headX,
      y: headY
    }

    /* calc eyes */
    var eyesLeftX = headX + (headWidth * 0.25)
    var eyesRightX = headX + (headWidth * 0.75)

    var eyesLeftY = headY + (headHeight * 0.25)
    var eyesRightY = headY + (headHeight * 0.25)

    var eyesRadiusLeft = (headWidth / 2) * 0.25
    var eyesRadiusRight = (headWidth / 2) * 0.25

    var eyesDims = {
      leftX: eyesLeftX,
      leftY: eyesLeftY,
      leftRadius: eyesRadiusLeft,
      rightX: eyesRightX,
      rightY: eyesRightY,
      rightRadius: eyesRadiusRight
    }
    var eyes = <Eyes fill="#0000FF" {...eyesDims}/>



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
