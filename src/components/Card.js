import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-name">{this.props.name}</div>
        <div className="card-description">{this.props.description}</div>
        {this.props.type === 'Minion' && (
          <div className="card-footer">
            <div className="card-attack">{this.props.attack}</div>
            <div className="card-health">{this.props.health}</div>
          </div>
        )}
      </div>
    )
  }
}

Card.defaultProps = {
  type: 'Minion'
}

Card.propTypes = {
  type: PropTypes.oneOf(['Minion', 'Spell']).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attack: PropTypes.number.isRequired,
  health: PropTypes.number.isRequired,
}

export default Card
