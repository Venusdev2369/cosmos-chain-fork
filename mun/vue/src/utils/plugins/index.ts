import { App as Application, Component } from 'vue'

export const registerComponent = (
  instance: Application,
  component: Component
): void => {
  if (component) {
    instance.component(component.name || '', component)
  }
}

export const registerComponentProgrammatic = (
  instance: Application,
  property: string,
  component: Component
): void => {
  if (!instance.config.globalProperties.$test)
    instance.config.globalProperties.$test = {}
  instance.config.globalProperties.$test[property] = component
}
