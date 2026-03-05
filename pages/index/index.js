var interpolation = require('../../utils/interpolation')

Page({
  data: {
    speed: '',
    power: '',
    result: null,
  },

  onSpeedInput: function (e) {
    this.setData({ speed: e.detail.value })
  },

  onPowerInput: function (e) {
    this.setData({ power: e.detail.value })
  },

  onQuery: function () {
    var speed = parseFloat(this.data.speed)
    var power = parseFloat(this.data.power)

    if (isNaN(speed) || speed <= 0) {
      this.setData({ result: { error: '请输入有效的转速值' } })
      return
    }
    if (isNaN(power) || power <= 0) {
      this.setData({ result: { error: '请输入有效的功率值' } })
      return
    }

    var result = interpolation.queryEfficiency(speed, power)
    this.setData({ result: result })
  },
})
