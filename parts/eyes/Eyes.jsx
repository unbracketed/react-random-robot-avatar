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

  render: function() {
    return (
      <g fill={this.props.fill}>
        {/* left eye */}
        <circle cx={this.props.leftX} cy={this.props.leftY} r={this.props.leftRadius} />
        {/* right eye */}
        <circle cx={this.props.rightX} cy={this.props.rightY} r={this.props.rightRadius} />
      </g>
    );
  }

});

module.exports = Eyes;
