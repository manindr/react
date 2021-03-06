import { Accessibility } from '../../types'
import popupFocusTrapBehavior from '../Popup/popupFocusTrapBehavior'

/**
 * @description
 * Implements ARIA Dialog (Modal) design pattern.
 * Adds role='button' to 'trigger' component's part, if it is not focusable element and no role attribute provided.
 * Adds tabIndex='0' to 'trigger' component's part, if it is not tabbable element and no tabIndex attribute provided.
 *
 * @specification
 * Adds attribute 'aria-disabled=true' to 'trigger' component's part if 'disabled' property is true. Does not set the attribute otherwise.
 * Adds attribute 'aria-modal=true' to 'popup' component's part.
 * Adds attribute 'role=dialog' to 'popup' component's part.
 * Traps focus inside component.
 */
const dialogBehavior: Accessibility = (props: any) => {
  const behaviorData = popupFocusTrapBehavior(props)
  behaviorData.attributes.popup = {
    ...behaviorData.attributes.popup,
    role: 'dialog',
  }

  return behaviorData
}

export default dialogBehavior
