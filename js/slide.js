export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.previnteDefault();
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  onMove(event) {}

  onEnd(event) {
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }
  addSlideEvent() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  bindEvent() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  } //Bind é para que o 'this' faça referência ao objeto anterior ( Obj PAI )

  init() {
    this.addSlideEvent();
    return this;
  }
}
