import * as customPropTypes from '@stardust-ui/react-proptypes'
import * as PropTypes from 'prop-types'
import * as React from 'react'

import handleRef from './handleRef'

export interface RefForwardProps {
  children: React.ReactElement<any>

  /**
   * Called when a child component will be mounted or updated.
   *
   * @param {HTMLElement} node - Referred node.
   */
  innerRef: React.Ref<any>
}

export default class RefForward extends React.Component<RefForwardProps> {
  static displayName = 'RefForward'

  static propTypes = {
    children: PropTypes.element.isRequired,
    innerRef: customPropTypes.ref.isRequired as PropTypes.Validator<React.Ref<any>>,
  }

  private handleRefOverride = (node: HTMLElement) => {
    const { children, innerRef } = this.props

    handleRef((children as React.ReactElement<any> & { ref: React.Ref<any> }).ref, node)
    handleRef(innerRef, node)
  }

  render() {
    const { children } = this.props

    return React.cloneElement(children, {
      ref: this.handleRefOverride,
    })
  }
}
