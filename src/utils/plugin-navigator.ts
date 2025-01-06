import { BasePlugin, Earth } from 'dde-earth'
import { Compass, ZoomControl } from 'cesium-extends'

export class NavigatorPlugin extends BasePlugin {
  name = 'Navigator'
  compass!: Compass
  zoomControl!: ZoomControl
  protected declare _earth: Earth
  public get earth(): Earth {
    return this._earth
  }
  public set earth(value: Earth) {
    this._earth = value
  }

  init(_earth: Earth): this {
    this.earth = _earth
    this._init(this.earth)
    this.compass = new Compass(this.earth.viewer)
    this.zoomControl = new ZoomControl(this.earth.viewer)
    return this
  }

  destroy(): void {
    this.zoomControl.destroy()
    this.compass.destroy()
  }
}