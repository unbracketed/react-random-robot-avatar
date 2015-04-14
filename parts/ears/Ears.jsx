var React = require('react')


var Ears = React.createClass({
    // return (
    //   <g>
    //     {/*left*/}
    //     <path d="M55.899,236.792c-19.031,0-34.462,11.012-34.462,24.592v79.98c0,13.581,15.431,24.606,34.462,24.606"/>
    //     {/*right*/}
    //     <path d="M443.425,236.792c19.027,0,34.459,11.012,34.459,24.592v79.98c0,13.581-15.432,24.606-34.459,24.606"/>
    //   </g>
    // )
  drawPolygon: function (orient, constraints) {
    console.log('Ears.drawPolygon', ...constraints)

    var {x, y, width, height, scale, R} = constraints

    var yScale = scale.range([0, height])

    if (orient === 'left') {

      var p1 = [x + width, y - yScale(R[15])]

      var xScale = scale.range([x - width, x])

      var p2 = [xScale(R[16]), y - yScale(R[14])]
      var p3 = [xScale(R[5]), y + yScale(R[1])]
      var p4 = [x + width, y + yScale(R[12])]

      points = [p1, p2, p3, p4]

    } else {
      var p1 = [x + width, y - yScale(R[15])]

      var xScale = scale.range([x, x+width])

      var p2 = [xScale(R[16]), y - yScale(R[14])]
      var p3 = [xScale(R[5]), y + yScale(R[1])]
      var p4 = [x + width, y + yScale(R[12])]

      points = [p1, p2, p3, p4]

    }

    //console.log(points)
    var strCoords = []
    for (var i=0; i<points.length; i++){
      strCoords.push(String(points[i][0]) + ',' + String(points[i][1]))
    }
    return strCoords.join(' ')
  },


  render: function() {

    var leftConstraints = {
      x: this.props.leftX,
      y: this.props.leftY,
      width: this.props.width,
      height: this.props.height,
      R: this.props.R,
      scale: this.props.scale
    }
    var rightConstraints = {
      x: this.props.rightX,
      y: this.props.rightY,
      width: this.props.width,
      height: this.props.height,
      R: this.props.R,
      scale: this.props.scale
    }
    var leftCoords = this.drawPolygon('left', ...leftConstraints)
    var rightCoords = this.drawPolygon('right', ...rightConstraints)
    return (
      <g>
        {/*left*/}
        <polygon points={leftCoords} />


        {/*right*/}
        <polygon points={rightCoords} />

      </g>
    )
  }
})

module.exports = Ears
