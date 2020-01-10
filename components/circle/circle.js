// components/circle/circle.js
Component({
  /**
   * 组件的属性列表
   */
  props: {
    canvasId: Number,
    width: 100,
    height: 100,
    backgroundColor: '#F3F3F3',
    foregroundColor: '#B4D66E',
    lineWidth: 5,
    progress: 100
  },

  didMount() {
    this.drawProgress()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 绘制进度
    drawProgress() {
      if (this.props.progress <= 30) {
        this.props.foregroundColor = '#ff0000'
      } else if (this.props.progress > 30 && this.props.progress < 50) {
        this.props.foregroundColor = '#FF783B'
      } else {
        this.props.foregroundColor = '#B4D66E'
      }
      // 背景色
      const backgroundCtx = my.createCanvasContext('backgroundCanvas' + this.props.canvasId)
      // 前景色
      const foregroundCtx = my.createCanvasContext('foregroundCanvas' + this.props.canvasId)


      // 绘制背景色
      backgroundCtx.setStrokeStyle(this.props.backgroundColor)
      backgroundCtx.setLineWidth(this.props.lineWidth)
      // 绘制圆
      backgroundCtx.arc(this.props.width / 2 + this.props.lineWidth / 2, this.props.height / 2 + this.props.lineWidth / 2, this.props.width / 2 - this.props.lineWidth, 0, 2 * Math.PI)
      backgroundCtx.stroke()

      // 绘制前景色
      foregroundCtx.setStrokeStyle(this.props.foregroundColor)
      foregroundCtx.setLineWidth(this.props.lineWidth)
      foregroundCtx.setLineCap('round')
      foregroundCtx.arc(this.props.width / 2 + this.props.lineWidth / 2, this.props.height / 2 + this.props.lineWidth / 2, this.props.width / 2 - this.props.lineWidth, -0.5 * Math.PI, (this.props.progress / 100) * 2 * Math.PI - 0.5 * Math.PI, false)
      foregroundCtx.stroke()

      // 绘制文字
      foregroundCtx.setFillStyle(this.props.foregroundColor)
      // foregroundCtx.setFontSize(12)
      const font_size = 12
      foregroundCtx.font = font_size + 'px Helvetica'
      // // 获取文字的宽度
      // const text_width = foregroundCtx.measureText(parseInt(this.props.progress)+'%').width
      // foregroundCtx.fillText(parseInt(this.props.progress)+'%',this.props.width / 2 - text_width / 2,this.props.height / 2 + font_size / 2)
      if (this.props.progress >= 99) {
        foregroundCtx.fillText(parseInt(this.props.progress) + '%', this.props.width / 2 - 13, this.props.height / 2 + 6)
      } else {
        foregroundCtx.fillText(parseInt(this.props.progress) + '%', this.props.width / 2 - 10, this.props.height / 2 + 6)
      }

      // 绘制
      backgroundCtx.draw()
      foregroundCtx.draw()
    }
  }
})
