var React = require('react')

var Head = React.createClass({

  propTypes: {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    x: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
  },

  render: function() {
    return <rect {...this.props} fill="#8800FF"/>
  }
})

module.exports = Head
