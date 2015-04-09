var React = require('react')


var Ears = React.createClass({
  render: function() {
    // return (
    //   <g>
    //     {/*left*/}
    //     <path d="M55.899,236.792c-19.031,0-34.462,11.012-34.462,24.592v79.98c0,13.581,15.431,24.606,34.462,24.606"/>
    //     {/*right*/}
    //     <path d="M443.425,236.792c19.027,0,34.459,11.012,34.459,24.592v79.98c0,13.581-15.432,24.606-34.459,24.606"/>
    //   </g>
    // )
    return (
      <g>
        {/*left*/}
        <rect x={this.props.leftX} y={this.props.leftY} width={30} height={50}/>
        {/*right*/}
        <rect x={this.props.rightX} y={this.props.rightY} width={30} height={50}/>
      </g>
    )
  }
})

module.exports = Ears
