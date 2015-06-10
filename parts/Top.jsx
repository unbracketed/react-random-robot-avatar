var React = require('react')


var Top = React.createClass({
  render: function() {
    // return (
    //   <path d="M287.276,41.737c0-20.776-16.845-37.617-37.617-37.617c-20.771,0-37.616,16.841-37.616,37.617   c0,15.354,9.214,28.547,22.411,34.396l-8.922,88.896h15.244h18.605h15.244l-8.96-89.299   C278.423,69.713,287.276,56.784,287.276,41.737z"/>
    // )
    return (
      <g>
        <rect x={this.props.x} y={this.props.y} width="10" height={this.props.height}/>
        <circle cx={this.props.x + 5} cy={this.props.y - this.props.height + 20} r={this.props.height/2}/>
      </g>
    )
  }
})

module.exports = Top
