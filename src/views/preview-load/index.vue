<template>
  <webtopo-svg-preview-pro :data-model="data_model" :canvas-drag="true"></webtopo-svg-preview-pro>
</template>
<script setup lang="ts">
import { WebtopoSvgPreviewPro  } from 'webtopo-svg-edit-pro';
import 'webtopo-svg-edit-pro/dist/style.css';

  import { ref } from 'vue';
  //假装我是接口返回的
  const data_model = ref<any>({
    layout_center: {
      x: -25,
      y: -20
    },
    config: {
      background_color: '#000000',
      scale: 1,
      position_center: {
        x: -333,
        y: -113
      },
      svg_position_center: {
        x: 50,
        y: 50
      },
      grid: false
    },
    done_json: [
      {
        id: 'straight-linewxnHhUFhes',
        x: 486,
        y: 119,
        client: {
          x: 486,
          y: 119
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 50,
          y: 50,
          width: 0,
          height: 0
        },
        point_coordinate: {
          tl: {
            x: 222.5,
            y: 118
          },
          tc: {
            x: 486,
            y: 118
          },
          tr: {
            x: 749.5,
            y: 118
          },
          l: {
            x: 222.5,
            y: 119
          },
          r: {
            x: 749.5,
            y: 119
          },
          bl: {
            x: 222.5,
            y: 120
          },
          bc: {
            x: 486,
            y: 120
          },
          br: {
            x: 749.5,
            y: 120
          }
        },
        temp: {
          x: 486,
          y: 119
        },
        name: 'connection_line',
        title: '连接线',
        type: 'ConnectionLine',
        config: {
          can_zoom: false,
          have_anchor: false,
          actual_rect: false
        },
        display: true,
        props: {
          stroke: {
            title: '线条颜色',
            type: 'Color',
            val: '#ff0000'
          },
          'stroke-width': {
            title: '线条宽度',
            type: 'InputNumber',
            val: 2
          },
          point_position: {
            title: '点坐标',
            type: 'JsonEdit',
            val: [
              {
                x: 50,
                y: 50
              },
              {
                x: 577,
                y: 52
              }
            ]
          }
        },
        animations: {
          type: {
            title: '动画类型',
            type: 'Select',
            val: 'Electricity',
            options: [
              {
                label: '无',
                value: 'None'
              },
              {
                label: '电流',
                value: 'Electricity'
              },
              {
                label: '轨迹',
                value: 'Track'
              },
              {
                label: '水珠',
                value: 'WaterDrop'
              }
            ]
          },
          dur: {
            title: '持续时间',
            type: 'InputNumber',
            val: 20
          },
          repeatCount: {
            title: '循环次数',
            type: 'Input',
            val: 'indefinite',
            disabled: true
          },
          color: {
            title: '颜色',
            type: 'Color',
            val: '#0a7ae2'
          },
          reverse: {
            title: '反转动画',
            type: 'Switch',
            val: false
          },
          play: {
            title: '动画播放',
            type: 'Switch',
            val: true
          }
        },
        bind_anchors: {
          start: null,
          end: null
        }
      },
      {
        id: 'straight-linezk5rUtejwW',
        x: 494,
        y: 170,
        client: {
          x: 494,
          y: 170
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 50,
          y: 50,
          width: 0,
          height: 0
        },
        point_coordinate: {
          tl: {
            x: 238,
            y: 168.5
          },
          tc: {
            x: 494,
            y: 168.5
          },
          tr: {
            x: 750,
            y: 168.5
          },
          l: {
            x: 238,
            y: 170
          },
          r: {
            x: 750,
            y: 170
          },
          bl: {
            x: 238,
            y: 171.5
          },
          bc: {
            x: 494,
            y: 171.5
          },
          br: {
            x: 750,
            y: 171.5
          }
        },
        temp: {
          x: 494,
          y: 170
        },
        name: 'connection_line',
        title: '连接线',
        type: 'ConnectionLine',
        config: {
          can_zoom: false,
          have_anchor: false,
          actual_rect: false
        },
        display: true,
        props: {
          stroke: {
            title: '线条颜色',
            type: 'Color',
            val: '#ff0000'
          },
          'stroke-width': {
            title: '线条宽度',
            type: 'InputNumber',
            val: 2
          },
          point_position: {
            title: '点坐标',
            type: 'JsonEdit',
            val: [
              {
                x: 50,
                y: 50
              },
              {
                x: 562,
                y: 53
              }
            ]
          }
        },
        animations: {
          type: {
            title: '动画类型',
            type: 'Select',
            val: 'Track',
            options: [
              {
                label: '无',
                value: 'None'
              },
              {
                label: '电流',
                value: 'Electricity'
              },
              {
                label: '轨迹',
                value: 'Track'
              },
              {
                label: '水珠',
                value: 'WaterDrop'
              }
            ]
          },
          dur: {
            title: '持续时间',
            type: 'InputNumber',
            val: 20
          },
          repeatCount: {
            title: '循环次数',
            type: 'Input',
            val: 'indefinite',
            disabled: true
          },
          color: {
            title: '颜色',
            type: 'Color',
            val: '#0a7ae2'
          },
          reverse: {
            title: '反转动画',
            type: 'Switch',
            val: false
          },
          play: {
            title: '动画播放',
            type: 'Switch',
            val: true
          }
        },
        bind_anchors: {
          start: null,
          end: null
        }
      },
      {
        id: 'straight-lineEYoBxzV4Ti',
        x: 484,
        y: 231,
        client: {
          x: 484,
          y: 231
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 50,
          y: 50,
          width: 0,
          height: 0
        },
        point_coordinate: {
          tl: {
            x: 228.5,
            y: 230
          },
          tc: {
            x: 484,
            y: 230
          },
          tr: {
            x: 739.5,
            y: 230
          },
          l: {
            x: 228.5,
            y: 231
          },
          r: {
            x: 739.5,
            y: 231
          },
          bl: {
            x: 228.5,
            y: 232
          },
          bc: {
            x: 484,
            y: 232
          },
          br: {
            x: 739.5,
            y: 232
          }
        },
        temp: {
          x: 484,
          y: 231
        },
        name: 'connection_line',
        title: '连接线',
        type: 'ConnectionLine',
        config: {
          can_zoom: false,
          have_anchor: false,
          actual_rect: false
        },
        display: true,
        props: {
          stroke: {
            title: '线条颜色',
            type: 'Color',
            val: '#ff0000'
          },
          'stroke-width': {
            title: '线条宽度',
            type: 'InputNumber',
            val: 6
          },
          point_position: {
            title: '点坐标',
            type: 'JsonEdit',
            val: [
              {
                x: 50,
                y: 50
              },
              {
                x: 561,
                y: 48
              }
            ]
          }
        },
        animations: {
          type: {
            title: '动画类型',
            type: 'Select',
            val: 'WaterDrop',
            options: [
              {
                label: '无',
                value: 'None'
              },
              {
                label: '电流',
                value: 'Electricity'
              },
              {
                label: '轨迹',
                value: 'Track'
              },
              {
                label: '水珠',
                value: 'WaterDrop'
              }
            ]
          },
          dur: {
            title: '持续时间',
            type: 'InputNumber',
            val: 20
          },
          repeatCount: {
            title: '循环次数',
            type: 'Input',
            val: 'indefinite',
            disabled: true
          },
          color: {
            title: '颜色',
            type: 'Color',
            val: '#0a7ae2'
          },
          reverse: {
            title: '反转动画',
            type: 'Switch',
            val: false
          },
          play: {
            title: '动画播放',
            type: 'Switch',
            val: true
          }
        },
        bind_anchors: {
          start: null,
          end: null
        }
      },
      {
        id: 'alternatorLhOqEkzoqr',
        x: 404,
        y: 324,
        client: {
          x: 404,
          y: 324
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 22.916664123535156,
          y: 22.91666603088379,
          width: 54.16667175292969,
          height: 54.166664123535156
        },
        point_coordinate: {
          tl: {
            x: 376.91666412353516,
            y: 296.9166679382324
          },
          tc: {
            x: 404,
            y: 296.9166679382324
          },
          tr: {
            x: 431.08333587646484,
            y: 296.9166679382324
          },
          l: {
            x: 376.91666412353516,
            y: 324
          },
          r: {
            x: 431.08333587646484,
            y: 324
          },
          bl: {
            x: 376.91666412353516,
            y: 351.0833320617676
          },
          bc: {
            x: 404,
            y: 351.0833320617676
          },
          br: {
            x: 431.08333587646484,
            y: 351.0833320617676
          }
        },
        temp: {
          x: 404,
          y: 324
        },
        name: 'alternator',
        title: '发电机',
        type: 'File',
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        display: true,
        props: {
          fill: {
            title: '填充色',
            type: 'Color',
            val: '#00ff00'
          }
        },
        common_animations: {
          val: 'fadeInLeft',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'repeat-1'
        }
      },
      {
        id: 'traction-transformer1jEV4PvIsk',
        x: 468,
        y: 321,
        client: {
          x: 468,
          y: 321
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 35.416664123535156,
          y: 22.916667938232422,
          width: 26.858333587646484,
          height: 54.16874313354492
        },
        point_coordinate: {
          tl: {
            x: 454.57083320617676,
            y: 293.91562843322754
          },
          tc: {
            x: 468,
            y: 293.91562843322754
          },
          tr: {
            x: 481.42916679382324,
            y: 293.91562843322754
          },
          l: {
            x: 454.57083320617676,
            y: 321
          },
          r: {
            x: 481.42916679382324,
            y: 321
          },
          bl: {
            x: 454.57083320617676,
            y: 348.08437156677246
          },
          bc: {
            x: 468,
            y: 348.08437156677246
          },
          br: {
            x: 481.42916679382324,
            y: 348.08437156677246
          }
        },
        temp: {
          x: 468,
          y: 321
        },
        name: 'traction-transformer',
        title: '牵引变',
        type: 'File',
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        display: true,
        props: {
          fill: {
            title: '填充色',
            type: 'Color',
            val: '#ff0000'
          }
        },
        common_animations: {
          val: 'rotateInDownLeft',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'repeat-1'
        }
      },
      {
        id: 'parallel-compensatortgD0czbuKX',
        x: 612,
        y: 312,
        client: {
          x: 612,
          y: 312
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 25,
          y: 0,
          width: 56.25000762939453,
          height: 100
        },
        point_coordinate: {
          tl: {
            x: 583.8749961853027,
            y: 262
          },
          tc: {
            x: 612,
            y: 262
          },
          tr: {
            x: 640.1250038146973,
            y: 262
          },
          l: {
            x: 583.8749961853027,
            y: 312
          },
          r: {
            x: 640.1250038146973,
            y: 312
          },
          bl: {
            x: 583.8749961853027,
            y: 362
          },
          bc: {
            x: 612,
            y: 362
          },
          br: {
            x: 640.1250038146973,
            y: 362
          }
        },
        temp: {
          x: 612,
          y: 312
        },
        name: 'parallel-compensator',
        title: '并联补偿器',
        type: 'File',
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        display: true,
        props: {
          fill: {
            title: '填充色',
            type: 'Color',
            val: '#ff0000'
          }
        },
        common_animations: {
          val: '',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        }
      },
      {
        id: 'ac-lineK3Q68Jqjt6',
        x: 772,
        y: 336,
        client: {
          x: 772,
          y: 336
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 6.25,
          y: 0,
          width: 87.5,
          height: 100
        },
        point_coordinate: {
          tl: {
            x: 728.25,
            y: 286
          },
          tc: {
            x: 772,
            y: 286
          },
          tr: {
            x: 815.75,
            y: 286
          },
          l: {
            x: 728.25,
            y: 336
          },
          r: {
            x: 815.75,
            y: 336
          },
          bl: {
            x: 728.25,
            y: 386
          },
          bc: {
            x: 772,
            y: 386
          },
          br: {
            x: 815.75,
            y: 386
          }
        },
        temp: {
          x: 772,
          y: 336
        },
        name: 'ac-line',
        title: '交流线路',
        type: 'File',
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        display: true,
        props: {
          fill: {
            title: '填充色',
            type: 'Color',
            val: '#00ff00'
          }
        },
        common_animations: {
          val: '',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        }
      },
      {
        id: 'isolating-switchYKZLVgmyX2',
        x: 474,
        y: 436,
        client: {
          x: 474,
          y: 436
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 17.135759353637695,
          y: 0,
          width: 70.36424255371094,
          height: 100
        },
        point_coordinate: {
          tl: {
            x: 438.81787872314453,
            y: 386
          },
          tc: {
            x: 474,
            y: 386
          },
          tr: {
            x: 509.18212127685547,
            y: 386
          },
          l: {
            x: 438.81787872314453,
            y: 436
          },
          r: {
            x: 509.18212127685547,
            y: 436
          },
          bl: {
            x: 438.81787872314453,
            y: 486
          },
          bc: {
            x: 474,
            y: 486
          },
          br: {
            x: 509.18212127685547,
            y: 486
          }
        },
        temp: {
          x: 474,
          y: 436
        },
        name: 'isolating-switch',
        title: '隔离开关',
        type: 'File',
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        display: true,
        props: {
          fill: {
            title: '填充色',
            type: 'Color',
            val: '#ff0000'
          }
        },
        common_animations: {
          val: '',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        }
      },
      {
        id: 'series-capacitorGTw8ZD4dm6',
        x: 659.0588226318359,
        y: 451.4140625,
        client: {
          x: 665,
          y: 455
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 2.941176414489746,
          y: 2.941176414489746,
          width: 94.11764526367188,
          height: 94.11764526367188
        },
        point_coordinate: {
          tl: {
            x: 612,
            y: 404.35523986816406
          },
          tc: {
            x: 659.0588226318359,
            y: 404.35523986816406
          },
          tr: {
            x: 706.1176452636719,
            y: 404.35523986816406
          },
          l: {
            x: 612,
            y: 451.4140625
          },
          r: {
            x: 706.1176452636719,
            y: 451.4140625
          },
          bl: {
            x: 612,
            y: 498.47288513183594
          },
          bc: {
            x: 659.0588226318359,
            y: 498.47288513183594
          },
          br: {
            x: 706.1176452636719,
            y: 498.47288513183594
          }
        },
        temp: {
          x: 659.0588226318359,
          y: 451.4140625
        },
        name: 'series-capacitor',
        title: '串联电容器',
        type: 'File',
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        display: true,
        props: {
          fill: {
            title: '填充色',
            type: 'Color',
            val: '#ff0000'
          }
        },
        common_animations: {
          val: 'fadeInLeftBig',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'repeat-1'
        }
      },
      {
        id: 'grounding-gateYYL2qTvf1w',
        x: 864,
        y: 480,
        client: {
          x: 864,
          y: 480
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 8.86875057220459,
          y: 0,
          width: 72.3812484741211,
          height: 93.75
        },
        point_coordinate: {
          tl: {
            x: 827.8093757629395,
            y: 433.125
          },
          tc: {
            x: 864,
            y: 433.125
          },
          tr: {
            x: 900.1906242370605,
            y: 433.125
          },
          l: {
            x: 827.8093757629395,
            y: 480
          },
          r: {
            x: 900.1906242370605,
            y: 480
          },
          bl: {
            x: 827.8093757629395,
            y: 526.875
          },
          bc: {
            x: 864,
            y: 526.875
          },
          br: {
            x: 900.1906242370605,
            y: 526.875
          }
        },
        temp: {
          x: 864,
          y: 480
        },
        name: 'grounding-gate',
        title: '接地闸门',
        type: 'File',
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        display: true,
        props: {
          fill: {
            title: '填充色',
            type: 'Color',
            val: '#cccccc'
          }
        },
        common_animations: {
          val: 'rotateInDownRight',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'repeat-1'
        }
      },
      {
        id: 'resistance0CN5gDYCq5',
        x: 1028,
        y: 427,
        client: {
          x: 1028,
          y: 427
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 37.109375,
          y: 25.390625,
          width: 25.390625,
          height: 48.828125
        },
        point_coordinate: {
          tl: {
            x: 1015.3046875,
            y: 402.5859375
          },
          tc: {
            x: 1028,
            y: 402.5859375
          },
          tr: {
            x: 1040.6953125,
            y: 402.5859375
          },
          l: {
            x: 1015.3046875,
            y: 427
          },
          r: {
            x: 1040.6953125,
            y: 427
          },
          bl: {
            x: 1015.3046875,
            y: 451.4140625
          },
          bc: {
            x: 1028,
            y: 451.4140625
          },
          br: {
            x: 1040.6953125,
            y: 451.4140625
          }
        },
        temp: {
          x: 1028,
          y: 427
        },
        name: 'resistance',
        title: '电阻',
        type: 'File',
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        display: true,
        props: {
          stroke: {
            title: '填充色',
            type: 'Color',
            val: '#ff0000'
          }
        },
        common_animations: {
          val: '',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        }
      },
      {
        id: 'circuit-breaker-voltageMYLits9NjI',
        x: 545,
        y: 580,
        client: {
          x: 545,
          y: 580
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 27.83203125,
          y: 22.914583206176758,
          width: 42.95295715332031,
          height: 67.37604522705078
        },
        point_coordinate: {
          tl: {
            x: 523.5235214233398,
            y: 546.3119773864746
          },
          tc: {
            x: 545,
            y: 546.3119773864746
          },
          tr: {
            x: 566.4764785766602,
            y: 546.3119773864746
          },
          l: {
            x: 523.5235214233398,
            y: 580
          },
          r: {
            x: 566.4764785766602,
            y: 580
          },
          bl: {
            x: 523.5235214233398,
            y: 613.6880226135254
          },
          bc: {
            x: 545,
            y: 613.6880226135254
          },
          br: {
            x: 566.4764785766602,
            y: 613.6880226135254
          }
        },
        temp: {
          x: 545,
          y: 580
        },
        name: 'circuit-breaker-voltage',
        title: 'A牌断路器',
        tag: 'circuit-breaker-voltage',
        type: 'CustomSvg',
        display: true,
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        props: {
          voltage: {
            title: '电压值',
            type: 'Input',
            val: '0'
          }
        },
        state: {
          OnOff: {
            title: '开关',
            default: false,
            props: {
              fill: {
                openVal: '#00ff00',
                closeVal: '#ff0000'
              }
            }
          }
        },
        common_animations: {
          val: '',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        }
      },
      {
        id: 'circuit-breakerpyxRQfntHR',
        x: 666,
        y: 582,
        client: {
          x: 666,
          y: 582
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 23.1640625,
          y: 19.375,
          width: 61.201171875,
          height: 64.033203125
        },
        point_coordinate: {
          tl: {
            x: 635.3994140625,
            y: 549.9833984375
          },
          tc: {
            x: 666,
            y: 549.9833984375
          },
          tr: {
            x: 696.6005859375,
            y: 549.9833984375
          },
          l: {
            x: 635.3994140625,
            y: 582
          },
          r: {
            x: 696.6005859375,
            y: 582
          },
          bl: {
            x: 635.3994140625,
            y: 614.0166015625
          },
          bc: {
            x: 666,
            y: 614.0166015625
          },
          br: {
            x: 696.6005859375,
            y: 614.0166015625
          }
        },
        temp: {
          x: 666,
          y: 582
        },
        name: 'circuit-breaker',
        title: 'B牌断路器',
        type: 'File',
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        display: true,
        props: {},
        state: {
          OnOff: {
            title: '开关',
            default: false,
            props: {
              fill: {
                openVal: '#00ff00',
                closeVal: '#ff0000'
              },
              'fill-opacity': {
                openVal: '0',
                closeVal: '1'
              }
            }
          }
        },
        event: {
          click: {
            title: '点击',
            val: "      console.log('测试打印当前组件json',$svg_item_info);\n      //执行callBack函数\n      $svgEventCallBack('回调类型',$svg_item_info.id,'测试回调订阅')\n      ",
            type: 'None'
          }
        },
        common_animations: {
          val: 'bounceInUp',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'repeat-1'
        }
      },
      {
        id: 'reservoirmCQ2fQbGSf',
        x: 356,
        y: 169,
        client: {
          x: 356,
          y: 169
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 8.310546875,
          y: 12.607422828674316,
          width: 83.37890625,
          height: 76.37694549560547
        },
        point_coordinate: {
          tl: {
            x: 314.310546875,
            y: 130.81152725219727
          },
          tc: {
            x: 356,
            y: 130.81152725219727
          },
          tr: {
            x: 397.689453125,
            y: 130.81152725219727
          },
          l: {
            x: 314.310546875,
            y: 169
          },
          r: {
            x: 397.689453125,
            y: 169
          },
          bl: {
            x: 314.310546875,
            y: 207.18847274780273
          },
          bc: {
            x: 356,
            y: 207.18847274780273
          },
          br: {
            x: 397.689453125,
            y: 207.18847274780273
          }
        },
        temp: {
          x: 356,
          y: 169
        },
        name: 'reservoir',
        title: '蓄水池',
        type: 'File',
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        display: true,
        props: {
          fill: {
            title: '水流颜色',
            type: 'Color',
            val: '#37cfe7'
          },
          stroke: {
            title: '边框颜色',
            type: 'Color',
            val: '#000'
          }
        },
        common_animations: {
          val: '',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        }
      },
      {
        id: 'pie-chartsYCn762Y2Zu',
        x: 1268.3749961853027,
        y: 455,
        client: {
          x: 1271,
          y: 456.5
        },
        scale_x: 3.7,
        scale_y: 0.9875,
        rotate: 0,
        actual_bound: {
          x: 0,
          y: -150,
          width: 100,
          height: 400
        },
        point_coordinate: {
          tl: {
            x: 583.8749961853027,
            y: 257.5
          },
          tc: {
            x: 1268.3749961853027,
            y: 257.5
          },
          tr: {
            x: 1952.8749961853027,
            y: 257.5
          },
          l: {
            x: 583.8749961853027,
            y: 455
          },
          r: {
            x: 1952.8749961853027,
            y: 455
          },
          bl: {
            x: 583.8749961853027,
            y: 652.5
          },
          bc: {
            x: 1268.3749961853027,
            y: 652.5
          },
          br: {
            x: 1952.8749961853027,
            y: 652.5
          }
        },
        temp: {
          x: 1126,
          y: 450.5
        },
        name: 'pie-charts',
        tag: 'pie-charts',
        title: '饼图',
        type: 'Vue',
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        display: true,
        props: {
          title: {
            title: '标题',
            type: 'Input',
            val: '默认标题'
          },
          seriesName: {
            title: '详情',
            type: 'Input',
            val: '详情标题'
          },
          seriesData: {
            title: 'legendData',
            type: 'JsonEdit',
            val: [
              {
                value: 1048,
                name: '办公楼A'
              },
              {
                value: 735,
                name: '办公楼B'
              },
              {
                value: 580,
                name: '保安室'
              },
              {
                value: 484,
                name: '地下车库'
              },
              {
                value: 300,
                name: '食堂'
              }
            ]
          }
        },
        common_animations: {
          val: '',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        }
      },
      {
        id: 'status-indicationgWfBkpSvth',
        x: 921,
        y: 291.9166679382324,
        client: {
          x: 921,
          y: 282
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 45,
          y: 45,
          width: 10,
          height: 10
        },
        point_coordinate: {
          tl: {
            x: 916,
            y: 286.9166679382324
          },
          tc: {
            x: 921,
            y: 286.9166679382324
          },
          tr: {
            x: 926,
            y: 286.9166679382324
          },
          l: {
            x: 916,
            y: 291.9166679382324
          },
          r: {
            x: 926,
            y: 291.9166679382324
          },
          bl: {
            x: 916,
            y: 296.9166679382324
          },
          bc: {
            x: 921,
            y: 296.9166679382324
          },
          br: {
            x: 926,
            y: 296.9166679382324
          }
        },
        temp: {
          x: 921,
          y: 291.9166679382324
        },
        name: 'status-indication',
        title: '状态指示器',
        tag: 'status-indication',
        type: 'CustomSvg',
        display: true,
        config: {
          can_zoom: true,
          have_anchor: false,
          actual_rect: true
        },
        props: {
          size: {
            title: '大小',
            type: 'InputNumber',
            val: 5
          },
          state: {
            title: '连接状态',
            type: 'Switch',
            val: false
          }
        },
        common_animations: {
          val: 'flash',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        }
      },
      {
        id: 'custom-svg-texts4HNVvxeDn',
        x: 1068.1109867095947,
        y: 161.5,
        client: {
          x: 1073.6005859375,
          y: 166
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          x: 49.20000076293945,
          y: 39,
          width: 31,
          height: 20
        },
        point_coordinate: {
          tl: {
            x: 1040.6947612762451,
            y: 151.60644817352295
          },
          tc: {
            x: 1068.1109867095947,
            y: 151.60644817352295
          },
          tr: {
            x: 1095.5272121429443,
            y: 151.60644817352295
          },
          l: {
            x: 1040.6947612762451,
            y: 161.5
          },
          r: {
            x: 1095.5272121429443,
            y: 161.5
          },
          bl: {
            x: 1040.6947612762451,
            y: 171.39355182647705
          },
          bc: {
            x: 1068.1109867095947,
            y: 171.39355182647705
          },
          br: {
            x: 1095.5272121429443,
            y: 171.39355182647705
          }
        },
        temp: {
          x: 696.6005859375,
          y: 95
        },
        name: 'custom-svg-text',
        title: '文字',
        tag: 'custom-svg-text',
        type: 'CustomSvg',
        display: true,
        config: {
          can_zoom: true,
          have_anchor: true,
          actual_rect: true
        },
        props: {
          text: {
            title: '文字内容',
            type: 'Input',
            val: 'pro预览'
          },
          fontFamily: {
            title: '字体',
            type: 'Select',
            val: 'Microsoft YaHei',
            options: [
              {
                value: 'Microsoft YaHei',
                label: '微软雅黑'
              },
              {
                value: 'NSimSun',
                label: '新宋体'
              }
            ]
          },
          fontSize: {
            title: '文字大小',
            type: 'InputNumber',
            val: 15
          },
          fill: {
            title: '文字颜色',
            type: 'Color',
            val: '#FFF200FF'
          }
        },
        common_animations: {
          val: 'bounce',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        }
      }
    ],
    thumbnail: ''
  });
</script>
