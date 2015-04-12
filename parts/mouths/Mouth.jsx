var React = require('react')

var Mouth = React.createClass({

  propTypes: {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    x: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
  },

  render: function() {
    console.log('mouth', this.props)
    return <rect {...this.props} fill="#999999"/>
  }
})

module.exports = Mouth
