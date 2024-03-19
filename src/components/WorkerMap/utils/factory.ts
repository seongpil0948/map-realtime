import { CircleConfig } from 'konva/lib/shapes/Circle'
import { Props } from '../props'
import { LineConfig } from 'konva/lib/shapes/Line'
import { RectConfig } from 'konva/lib/shapes/Rect'
import { TextConfig } from 'konva/lib/shapes/Text'

export default {
  konva: {
    circle: (): CircleConfig => ({
      x: 0,
      y: 0,
      radius: 1,
      fill: "red",
      stroke: "black",
      strokeWidth: 2,
    }),
    text: (): TextConfig => ({
      x: 0,
      y: 0,
      fontFamily: "Calibri",
      fontSize: 12,
      text: "",
      fill: "black",
    }),
    line: (): LineConfig => ({
      points: [],
      dash: [],
      stroke: "pink",
      strokeWidth: 5,
      tension: 0.5,
      lineCap: "round",
      lineJoin: "round",
    }),
    rect: (): RectConfig => ({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      fill: 'black',
      opacity: 0,
      cornerRadius: 2,
    })
  },
  vue: {
    props: (): Props => Object.freeze<Props>({
      canvasStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f0f0',
      },
    })
  }
}