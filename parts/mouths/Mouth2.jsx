var React = require('react')

var Mouth2 = React.createClass({

  propTypes: {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    x: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
  },

  render: function() {
    var numSections = 10
    var sections = []
    sectionWidth = this.props.width / numSections
    margin = sectionWidth * 0.1
    for (var i=0; i<numSections; i++) {
        sections.push({
          x: this.props.x + (sectionWidth * i),
          y: this.props.y,
          width: sectionWidth - margin,
          height: this.props.height
        })
    }

    return (
      <g>
        {sections.map(function(x,i) { return <rect key={i} {...x} fill="#999999"/> })}
      </g>
    )
  }
})

module.exports = Mouth2
