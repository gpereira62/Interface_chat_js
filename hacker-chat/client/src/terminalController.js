import ComponentsBuilder from "./components.js"

export default class TerminalController {
  constructor() {}

  #onInputReceived(eventEmitter) {
    return function () {
      const message = this.getValue()
      console.log(message)
      this.clearValue()
    }
  }

  async initializeTable(eventEmitter) {
    const components = new ComponentsBuilder()
      .setScreen({ title: 'HackerChat - Erick Wendel' })
      .setLayoutComponent()
      .setInputComponent(this.#onInputReceived(eventEmitter))
      .setChatComponent()
      .build()

      components.input.focus()
      components.screen.render()
  }
}