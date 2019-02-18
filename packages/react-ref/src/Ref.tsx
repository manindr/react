import * as PropTypes from 'prop-types'
import * as React from 'react'
import { isForwardRef } from 'react-is'

import RefFindNode from './RefFindNode'
import RefForward from './RefForward'

export interface RefProps {
  children?: React.ReactElement<any>
  /**
   * Called when a child component will be mounted or updated.
   *
   * @param {HTMLElement} node - Referred node.
   */
  innerRef?: React.Ref<any>
}

const Ref: React.FC<RefProps> = props => {
  const { children, innerRef } = props

  const child = React.Children.only(children)
  const ElementType = isForwardRef(child) ? RefForward : RefFindNode

  return <ElementType innerRef={innerRef}>{child}</ElementType>
}

Ref.displayName = 'Ref'
Ref.propTypes = {
  children: PropTypes.element.isRequired,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]) as PropTypes.Requireable<any>,
}

export default Ref
