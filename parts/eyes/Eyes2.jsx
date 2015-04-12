var React = require('react');

var Eyes = React.createClass({

  propTypes: {
    leftX: React.PropTypes.number.isRequired,
    leftY: React.PropTypes.number.isRequired,
    leftRadius: React.PropTypes.number.isRequired,
    rightX: React.PropTypes.number.isRequired,
    rightY: React.PropTypes.number.isRequired,
    rightRadius: React.PropTypes.number.isRequired,
    fill: React.PropTypes.string
  },


  drawPolygon: function (x, y, width, height) {
    console.log('drawPolygon', x, y, width, height)
    points = [
      [x, y],
      [x + width/2, y + height*0.25],
      [x + width/2, y + height*0.75],
      [x, y + height],
      [x - width/2, y + height*0.75],
      [x - width/2, y + height*0.25]
    ]
    //console.log(points)
    var strCoords = []
    for (var i=0; i<points.length; i++){
      strCoords.push(String(points[i][0]) + ',' + String(points[i][1]))
    }
    return strCoords.join(' ')
  },


  render: function() {
    var w = h = this.props.leftRadius * 2
    var leftPolyPoints = this.drawPolygon(this.props.leftX, this.props.leftY, w, h)
    var rightPolyPoints = this.drawPolygon(this.props.rightX, this.props.rightY, w, h)

    return (
      <g fill={this.props.fill}>
        {/* left eye */}
        <polygon points={leftPolyPoints} fill="#FF0000"/>
        {/* right eye */}
        <polygon points={rightPolyPoints} fill="#FF0000"/>
      </g>
    );
  }

})

module.exports = Eyes
