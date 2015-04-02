var React = require('react')
var Head = require('./parts/Head')
var Eyes = require('./parts/Eyes')
var Top = require('./parts/Top')
var Ears = require('./parts/Ears')
var Collar = require('./parts/Collar')


var RandomBotAvatar = React.createClass({

  layoutParts: function() {
    var viewBox = {
      minX: 0,
      minY: 0,
      width: 1000,
      height: 1000
    }

    var head = <Head/>
    var eyes = <Eyes/>
    var top = <Top/>
    var ears = <Ears/>
    var collar = <Collar/>

    return {
      viewBox: viewBox,
      viewBoxParam: [String(viewBox.minX), String(viewBox.minY), String(viewBox.width), String(viewBox.height)].join(' '),
      head: head,
      eyes: eyes,
      top: top,
      ears: ears,
      collar: collar
    }
  },

  render: function() {
    var layout = this.layoutParts()
    return (
      <svg
        viewBox={layout.viewBoxParam}
        {...this.props}>
        {layout.head}
        {layout.eyes}
        {layout.top}
        {layout.ears}
        {layout.collar}
        {this.props.children}
      </svg>
    )
  }


})

module.exports = RandomBotAvatar
