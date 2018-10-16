import * as React from 'react'
import { isConformant } from 'test/specs/commonTests'

import { implementsShorthandProp } from '../../commonTests'
import { Button, RadioGroup, Input, Text, FormField } from '../../../../src/'
import { mountWithProvider } from '../../../utils'

const formFieldImplementsShorthandProp = implementsShorthandProp(FormField)

describe('FormField', () => {
  isConformant(FormField)
  formFieldImplementsShorthandProp('label', Text)
  formFieldImplementsShorthandProp('message', Text)

  it('renders the control provided in the controlType prop', () => {
    const controls = [Button, Input, 'input', RadioGroup]
    controls.forEach(control => {
      const formField = mountWithProvider(
        <FormField controlType={control} name="firstName" />,
      ).find('FormField')

      const controlElement = formField.find(control)
      expect(controlElement.length).toEqual(1)
    })
  })

  it('uses the control prop as a shorthand together with the controlType', () => {
    const controls = [Button, Input, 'input', RadioGroup]
    controls.forEach(control => {
      const formField = mountWithProvider(
        <FormField controlType={control} control={{ name: 'firstName' }} />,
      ).find('FormField')

      const controlElement = formField.find(control)
      expect(controlElement.first().props()).toMatchObject({ name: 'firstName' })
    })
  })
})