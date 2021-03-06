import componentInfoContext from 'docs/src/utils/componentInfoContext'

const useComponentProps = (componentName: string) => {
  const info = componentInfoContext.byDisplayName[componentName]

  if (!info) {
    throw new Error(
      `We don't have definitions for "${componentName}". Please ensure those are generated by "gulp-docgen" plugin`,
    )
  }

  return info.props
}

export default useComponentProps
