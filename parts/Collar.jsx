var React = require('react')

var Collar = React.createClass({
  render: function() {
    // return (
    //   <path d="M4.217,535.335v-42.143c0-5.475,4.435-9.923,9.923-9.923h471.044c5.483,0,9.918,4.448,9.918,9.923v42.143"/>
    // )

    return <rect x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height}/>
  }
})

module.exports = Collar
