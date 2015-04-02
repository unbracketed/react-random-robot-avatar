var React = require('react');

var Eyes = React.createClass({

  render: function() {
    return (
      <g fill="#FFFFFF">
        {/* left eye */}
        <circle cx="300" cy="300" r="100" />
        {/* right eye */}
        <circle cx="700" cy="300" r="100" />
      </g>
    );
  }

});

module.exports = Eyes;
