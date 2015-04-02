var React = require('react')

var Head = React.createClass({

  propTypes: {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
  },
  
  render: function() {
    return <rect {...this.props}/>
  }
})

module.exports = Head
