var React = require('react')

var Head = require('./parts/heads/Head')
var Head2 = require('./parts/heads/Head2')

var Eyes = require('./parts/eyes/Eyes')
var Eyes2 = require('./parts/eyes/Eyes2')

var Top = require('./parts/Top')
var Ears = require('./parts/Ears')
var Collar = require('./parts/Collar')
var getRandomVars = require('./utils')
var d3 = require('d3')


var RandomBotAvatar = React.createClass({

  debug: false,

  calcHead: function(R, scale, viewBox) {

    var rWidth = R[5],
        rHeight = R[13]


    // head width: 40 - 80% of container size
    scale.range([viewBox.width * 0.4, viewBox.width * 0.8])
    var headWidth = scale(rWidth)
    var headX = (viewBox.width - headWidth) / 2

    // head height: 40 - 80% of container size
    scale.range([viewBox.height * 0.4, viewBox.height * 0.8])
    var headHeight = scale(rHeight)
    var headY = (viewBox.height - headHeight) / 2

    return  {
      width: headWidth,
      height: headHeight,
      x: headX,
      y: headY,
      // top 50%
      eyeZone: {
        x: headX + headWidth * 0.05,
        width: headWidth * 0.9,
        y: headY,
        height: headHeight * 0.5
      }
    }
  },

  calcEyes: function(R, scale, headDims) {

    /* calc eyes */
    var rRadius = R[8],
        rHorizontalOffset = R[7]
    var eyeContainer = headDims.eyeZone

    //size - eyezone with margin
    var narrowest = Math.min(eyeContainer.width/2, eyeContainer.height)
    scale.range([(narrowest * 0.05), (narrowest * 0.95)])
    var eyesRadiusLeft = scale(rRadius)
    var eyesRadiusRight = scale(rRadius)

    //position - randomize within available space considering eye size
    var oneContainerWidth = ((eyeContainer.width) / 2)
    var availWidth = oneContainerWidth - (eyesRadiusLeft * 2)

    scale.range([(0 - availWidth/2), availWidth/2])

    var eyesLeftX = eyeContainer.x + (oneContainerWidth/2) +  scale(rHorizontalOffset)
    var eyesRightX = (eyeContainer.x + eyeContainer.width) - (oneContainerWidth/2) - scale(rHorizontalOffset)

    var eyesLeftY = headDims.y + (headDims.height * 0.25)
    var eyesRightY = headDims.y + (headDims.height * 0.25)


    return {
      leftX: eyesLeftX,
      leftY: eyesLeftY,
      leftRadius: eyesRadiusLeft,
      rightX: eyesRightX,
      rightY: eyesRightY,
      rightRadius: eyesRadiusRight
    }
  },

  calcTop: function(R, scale, headDims) {
    var antennaHeight = 40
    return {
      x: headDims.x + (headDims.width/2),
      y: headDims.y - antennaHeight,
      height: antennaHeight
    }
  },

  calcEars: function(R, scale, headDims) {
    var width = 30
    return {
        leftX: headDims.x - width,
        leftY: headDims.y + (headDims.height * 0.4),
        rightX: headDims.x + headDims.width,
        rightY: headDims.y + (headDims.height * 0.4),
    }
  },

  calcCollar: function(R, scale, headDims) {

    var rHeight = R[17],
        rWidth = R[4]

    var availHeight = 1000 - (headDims.y + headDims.height)
    scale.range([availHeight * 0.2, availHeight])
    var height = scale(rHeight)
    scale.range([10, 990])
    var width = scale(rWidth)

    return {
        x: 500 - width/2 ,
        y: headDims.y + headDims.height + 10,
        height: height,
        width: width
    }
  },

  layoutParts: function(rnd) {

    var viewBox = {
      minX: 0,
      minY: 0,
      width: 1000,
      height: 1000
    }


    var seed = 'domo arigato'
    var input = String(rnd) + seed
    var R = getRandomVars(input)
    var scale = d3.scale.linear().domain([0, 99])

    var heads = [Head, Head2]
    var eyes = [Eyes, Eyes2]
    scale.rangeRound([0, heads.length-1])
    var headComponent = heads[scale(R[15])]
    var eyeComponent = eyes[scale(R[2])]


    var headDims = this.calcHead(R, scale, viewBox)
    var eyesDims = this.calcEyes(R, scale, headDims)
    var topDims = this.calcTop(R, scale, headDims)
    var earsDims = this.calcEars(R, scale, headDims)
    var collarDims = this.calcCollar(R, scale, headDims)


    console.log('HEAD', headDims)
    console.log('EYES', eyesDims)
    // console.log('TOP', topDims)
    // console.log('EARS', earsDims)
    // console.log('COLLAR', collarDims)


    return {
      viewBox: viewBox,
      viewBoxParam: [String(viewBox.minX), String(viewBox.minY), String(viewBox.width), String(viewBox.height)].join(' '),
      headDims: headDims,
      eyesDims: eyesDims,
      topDims: topDims,
      earsDims: earsDims,
      collarDims: collarDims,
      headComponent: headComponent,
      eyeComponent: eyeComponent
    }
  },

  render: function() {
    var layout = this.layoutParts(this.props.seed)
    var debugEyeZone = (this.debug ? <rect {...layout.headDims.eyeZone} fill="#008888"/> : '')
    console.log(debugEyeZone)
    return (
      <svg
        viewBox={layout.viewBoxParam}
        {...this.props}>

        {/* placeholder background */}
        <rect x="0" y="0" width="1000" height="1000" fill="#CCCCCC"/>

        <layout.headComponent {...layout.headDims}/>

        <layout.eyeComponent fill="#0000FF" {...layout.eyesDims}/>
        <Top {...layout.topDims}/>
        <Ears {...layout.earsDims}/>
        <Collar {...layout.collarDims}/>

      </svg>
    )
  }


})

module.exports = RandomBotAvatar
