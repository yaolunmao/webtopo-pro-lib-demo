<!-- eslint-disable @typescript-eslint/no-loss-of-precision -->
<template>
  <div>
    <webtopo-svg-edit-pro @on-return="onReturn" @on-preview="onPreview" @on-save="onSave"
      :data-model="import_model"></webtopo-svg-edit-pro>
    <el-dialog v-model="dialog_visiable" :fullscreen="true" destroy-on-close>
      <preview :preview-data="preview_data"></preview>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import type { IDataModel } from '../../types';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { WebtopoSvgEditPro } from 'webtopo-svg-edit-pro';
import 'webtopo-svg-edit-pro/dist/style.css';
import { ElDialog } from 'element-plus';
import Preview from '@/views/preview/index.vue';
//我是从数据库获取到的数据
const import_model = ref(
  JSON.stringify({
  "layout_center": {
    "x": 307,
    "y": -1
  },
  "config": {
    "background_color": "#000000",
    "scale": 1,
    "position_center": {
      "x": -333,
      "y": -113
    },
    "svg_position_center": {
      "x": 50,
      "y": 50
    },
    "grid": false,
    "grid_color": "#ebebeb",
    "ruler": false
  },
  "done_json": [
    {
      "id": "custom-svg-textm32AfbHJwC",
      "x": 568,
      "y": 133,
      "client": {
        "x": 568,
        "y": 133
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 49.20000076293945,
        "y": 39,
        "width": 31,
        "height": 20
      },
      "point_coordinate": {
        "tl": {
          "x": 500,
          "y": 123
        },
        "tc": {
          "x": 568,
          "y": 123
        },
        "tr": {
          "x": 636,
          "y": 123
        },
        "l": {
          "x": 500,
          "y": 133
        },
        "r": {
          "x": 636,
          "y": 133
        },
        "bl": {
          "x": 500,
          "y": 143
        },
        "bc": {
          "x": 568,
          "y": 143
        },
        "br": {
          "x": 636,
          "y": 143
        }
      },
      "temp": {
        "x": 916,
        "y": 132
      },
      "name": "custom-svg-text",
      "title": "文字",
      "tag": "custom-svg-text",
      "type": "CustomSvg",
      "display": true,
      "config": {
        "can_zoom": false,
        "have_anchor": false,
        "actual_rect": true
      },
      "props": {
        "text": {
          "title": "文字内容",
          "type": "Input",
          "val": "请点击预览查看效果"
        },
        "fontFamily": {
          "title": "字体",
          "type": "Select",
          "val": "Microsoft YaHei",
          "options": [
            {
              "value": "Microsoft YaHei",
              "label": "微软雅黑"
            },
            {
              "value": "NSimSun",
              "label": "新宋体"
            }
          ]
        },
        "fontSize": {
          "title": "文字大小",
          "type": "InputNumber",
          "val": 15
        },
        "fill": {
          "title": "文字颜色",
          "type": "Color",
          "val": "#FFF200FF"
        },
        "vertical": {
          "title": "竖排展示",
          "type": "Switch",
          "val": false
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      }
    },
    {
      "id": "custom-svg-textROZBc70VU6",
      "x": 34,
      "y": 218,
      "client": {
        "x": 30,
        "y": 218
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 49.20000076293945,
        "y": 39,
        "width": 31,
        "height": 20
      },
      "point_coordinate": {
        "tl": {
          "x": 18.899999618530273,
          "y": 208
        },
        "tc": {
          "x": 34,
          "y": 208
        },
        "tr": {
          "x": 49.10000038146973,
          "y": 208
        },
        "l": {
          "x": 18.899999618530273,
          "y": 218
        },
        "r": {
          "x": 49.10000038146973,
          "y": 218
        },
        "bl": {
          "x": 18.899999618530273,
          "y": 228
        },
        "bc": {
          "x": 34,
          "y": 228
        },
        "br": {
          "x": 49.10000038146973,
          "y": 228
        }
      },
      "temp": {
        "x": 34,
        "y": 218
      },
      "name": "custom-svg-text",
      "title": "文字",
      "tag": "custom-svg-text",
      "type": "CustomSvg",
      "display": true,
      "config": {
        "can_zoom": false,
        "have_anchor": false,
        "actual_rect": true
      },
      "props": {
        "text": {
          "title": "文字内容",
          "type": "Input",
          "val": "平滑"
        },
        "fontFamily": {
          "title": "字体",
          "type": "Select",
          "val": "Microsoft YaHei",
          "options": [
            {
              "value": "Microsoft YaHei",
              "label": "微软雅黑"
            },
            {
              "value": "NSimSun",
              "label": "新宋体"
            }
          ]
        },
        "fontSize": {
          "title": "文字大小",
          "type": "InputNumber",
          "val": 15
        },
        "fill": {
          "title": "文字颜色",
          "type": "Color",
          "val": "#FFF200FF"
        },
        "vertical": {
          "title": "竖排展示",
          "type": "Switch",
          "val": false
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      },
      "frame_animation": {
        "transition": true,
        "timing": "linear",
        "select": null,
        "info": []
      }
    },
    {
      "id": "custom-svg-textDRw0cpDdiw",
      "x": 34,
      "y": 294.8166664123535,
      "client": {
        "x": 36,
        "y": 277
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 49.20000076293945,
        "y": 39,
        "width": 31,
        "height": 20
      },
      "point_coordinate": {
        "tl": {
          "x": 3.8999996185302734,
          "y": 284.8166664123535
        },
        "tc": {
          "x": 34,
          "y": 284.8166664123535
        },
        "tr": {
          "x": 64.10000038146973,
          "y": 284.8166664123535
        },
        "l": {
          "x": 3.8999996185302734,
          "y": 294.8166664123535
        },
        "r": {
          "x": 64.10000038146973,
          "y": 294.8166664123535
        },
        "bl": {
          "x": 3.8999996185302734,
          "y": 304.8166664123535
        },
        "bc": {
          "x": 34,
          "y": 304.8166664123535
        },
        "br": {
          "x": 64.10000038146973,
          "y": 304.8166664123535
        }
      },
      "temp": {
        "x": 34,
        "y": 294.8166664123535
      },
      "name": "custom-svg-text",
      "title": "文字",
      "tag": "custom-svg-text",
      "type": "CustomSvg",
      "display": true,
      "config": {
        "can_zoom": false,
        "have_anchor": false,
        "actual_rect": true
      },
      "props": {
        "text": {
          "title": "文字内容",
          "type": "Input",
          "val": "匀速变慢"
        },
        "fontFamily": {
          "title": "字体",
          "type": "Select",
          "val": "Microsoft YaHei",
          "options": [
            {
              "value": "Microsoft YaHei",
              "label": "微软雅黑"
            },
            {
              "value": "NSimSun",
              "label": "新宋体"
            }
          ]
        },
        "fontSize": {
          "title": "文字大小",
          "type": "InputNumber",
          "val": 15
        },
        "fill": {
          "title": "文字颜色",
          "type": "Color",
          "val": "#FFF200FF"
        },
        "vertical": {
          "title": "竖排展示",
          "type": "Switch",
          "val": false
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      },
      "frame_animation": {
        "transition": true,
        "timing": "linear",
        "select": null,
        "info": []
      }
    },
    {
      "id": "custom-svg-textXhZXKFaTCw",
      "x": 34,
      "y": 371.63333282470705,
      "client": {
        "x": 33,
        "y": 350
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 49.20000076293945,
        "y": 39,
        "width": 31,
        "height": 20
      },
      "point_coordinate": {
        "tl": {
          "x": 18.09999942779541,
          "y": 361.63333282470705
        },
        "tc": {
          "x": 34,
          "y": 361.63333282470705
        },
        "tr": {
          "x": 49.90000057220459,
          "y": 361.63333282470705
        },
        "l": {
          "x": 18.09999942779541,
          "y": 371.63333282470705
        },
        "r": {
          "x": 49.90000057220459,
          "y": 371.63333282470705
        },
        "bl": {
          "x": 18.09999942779541,
          "y": 381.63333282470705
        },
        "bc": {
          "x": 34,
          "y": 381.63333282470705
        },
        "br": {
          "x": 49.90000057220459,
          "y": 381.63333282470705
        }
      },
      "temp": {
        "x": 34,
        "y": 371.63333282470705
      },
      "name": "custom-svg-text",
      "title": "文字",
      "tag": "custom-svg-text",
      "type": "CustomSvg",
      "display": true,
      "config": {
        "can_zoom": false,
        "have_anchor": false,
        "actual_rect": true
      },
      "props": {
        "text": {
          "title": "文字内容",
          "type": "Input",
          "val": "加速"
        },
        "fontFamily": {
          "title": "字体",
          "type": "Select",
          "val": "Microsoft YaHei",
          "options": [
            {
              "value": "Microsoft YaHei",
              "label": "微软雅黑"
            },
            {
              "value": "NSimSun",
              "label": "新宋体"
            }
          ]
        },
        "fontSize": {
          "title": "文字大小",
          "type": "InputNumber",
          "val": 15
        },
        "fill": {
          "title": "文字颜色",
          "type": "Color",
          "val": "#FFF200FF"
        },
        "vertical": {
          "title": "竖排展示",
          "type": "Switch",
          "val": false
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      }
    },
    {
      "id": "custom-svg-textAjAE36uBw7",
      "x": 34,
      "y": 448.4499992370605,
      "client": {
        "x": 34,
        "y": 419
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 49.20000076293945,
        "y": 39,
        "width": 31,
        "height": 20
      },
      "point_coordinate": {
        "tl": {
          "x": 18.5,
          "y": 438.4499992370605
        },
        "tc": {
          "x": 34,
          "y": 438.4499992370605
        },
        "tr": {
          "x": 49.5,
          "y": 438.4499992370605
        },
        "l": {
          "x": 18.5,
          "y": 448.4499992370605
        },
        "r": {
          "x": 49.5,
          "y": 448.4499992370605
        },
        "bl": {
          "x": 18.5,
          "y": 458.4499992370605
        },
        "bc": {
          "x": 34,
          "y": 458.4499992370605
        },
        "br": {
          "x": 49.5,
          "y": 458.4499992370605
        }
      },
      "temp": {
        "x": 34,
        "y": 448.4499992370605
      },
      "name": "custom-svg-text",
      "title": "文字",
      "tag": "custom-svg-text",
      "type": "CustomSvg",
      "display": true,
      "config": {
        "can_zoom": false,
        "have_anchor": false,
        "actual_rect": true
      },
      "props": {
        "text": {
          "title": "文字内容",
          "type": "Input",
          "val": "减速"
        },
        "fontFamily": {
          "title": "字体",
          "type": "Select",
          "val": "Microsoft YaHei",
          "options": [
            {
              "value": "Microsoft YaHei",
              "label": "微软雅黑"
            },
            {
              "value": "NSimSun",
              "label": "新宋体"
            }
          ]
        },
        "fontSize": {
          "title": "文字大小",
          "type": "InputNumber",
          "val": 15
        },
        "fill": {
          "title": "文字颜色",
          "type": "Color",
          "val": "#FFF200FF"
        },
        "vertical": {
          "title": "竖排展示",
          "type": "Switch",
          "val": false
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      }
    },
    {
      "id": "custom-svg-textlbJl0SMh7d",
      "x": 34,
      "y": 525.2666656494141,
      "client": {
        "x": 39,
        "y": 475
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 49.20000076293945,
        "y": 39,
        "width": 31,
        "height": 20
      },
      "point_coordinate": {
        "tl": {
          "x": 3.1000003814697266,
          "y": 515.2666656494141
        },
        "tc": {
          "x": 34,
          "y": 515.2666656494141
        },
        "tr": {
          "x": 64.89999961853027,
          "y": 515.2666656494141
        },
        "l": {
          "x": 3.1000003814697266,
          "y": 525.2666656494141
        },
        "r": {
          "x": 64.89999961853027,
          "y": 525.2666656494141
        },
        "bl": {
          "x": 3.1000003814697266,
          "y": 535.2666656494141
        },
        "bc": {
          "x": 34,
          "y": 535.2666656494141
        },
        "br": {
          "x": 64.89999961853027,
          "y": 535.2666656494141
        }
      },
      "temp": {
        "x": 34,
        "y": 525.2666656494141
      },
      "name": "custom-svg-text",
      "title": "文字",
      "tag": "custom-svg-text",
      "type": "CustomSvg",
      "display": true,
      "config": {
        "can_zoom": false,
        "have_anchor": false,
        "actual_rect": true
      },
      "props": {
        "text": {
          "title": "文字内容",
          "type": "Input",
          "val": "先加后减"
        },
        "fontFamily": {
          "title": "字体",
          "type": "Select",
          "val": "Microsoft YaHei",
          "options": [
            {
              "value": "Microsoft YaHei",
              "label": "微软雅黑"
            },
            {
              "value": "NSimSun",
              "label": "新宋体"
            }
          ]
        },
        "fontSize": {
          "title": "文字大小",
          "type": "InputNumber",
          "val": 15
        },
        "fill": {
          "title": "文字颜色",
          "type": "Color",
          "val": "#FFF200FF"
        },
        "vertical": {
          "title": "竖排展示",
          "type": "Switch",
          "val": false
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      }
    },
    {
      "id": "custom-svg-textc3sbzpDjUX",
      "x": 41.5,
      "y": 602.0833320617676,
      "client": {
        "x": 34.5,
        "y": 600.0833320617676
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 49.20000076293945,
        "y": 39,
        "width": 31,
        "height": 20
      },
      "point_coordinate": {
        "tl": {
          "x": 18.899999618530273,
          "y": 592.0833320617676
        },
        "tc": {
          "x": 41.5,
          "y": 592.0833320617676
        },
        "tr": {
          "x": 64.10000038146973,
          "y": 592.0833320617676
        },
        "l": {
          "x": 18.899999618530273,
          "y": 602.0833320617676
        },
        "r": {
          "x": 64.10000038146973,
          "y": 602.0833320617676
        },
        "bl": {
          "x": 18.899999618530273,
          "y": 612.0833320617676
        },
        "bc": {
          "x": 41.5,
          "y": 612.0833320617676
        },
        "br": {
          "x": 64.10000038146973,
          "y": 612.0833320617676
        }
      },
      "temp": {
        "x": 41.5,
        "y": 602.0833320617676
      },
      "name": "custom-svg-text",
      "title": "文字",
      "tag": "custom-svg-text",
      "type": "CustomSvg",
      "display": true,
      "config": {
        "can_zoom": false,
        "have_anchor": false,
        "actual_rect": true
      },
      "props": {
        "text": {
          "title": "文字内容",
          "type": "Input",
          "val": "无过渡"
        },
        "fontFamily": {
          "title": "字体",
          "type": "Select",
          "val": "Microsoft YaHei",
          "options": [
            {
              "value": "Microsoft YaHei",
              "label": "微软雅黑"
            },
            {
              "value": "NSimSun",
              "label": "新宋体"
            }
          ]
        },
        "fontSize": {
          "title": "文字大小",
          "type": "InputNumber",
          "val": 15
        },
        "fill": {
          "title": "文字颜色",
          "type": "Color",
          "val": "#FFF200FF"
        },
        "vertical": {
          "title": "竖排展示",
          "type": "Switch",
          "val": false
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      }
    },
    {
      "id": "alternator5hyv3tjnKP",
      "x": 224,
      "y": 229.54545454545456,
      "client": {
        "x": 224,
        "y": 202
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 22.916664123535156,
        "y": 22.91666603088379,
        "width": 54.16667175292969,
        "height": 54.166664123535156
      },
      "point_coordinate": {
        "tl": {
          "x": 196.91666412353516,
          "y": 202.46212248368698
        },
        "tc": {
          "x": 224,
          "y": 202.46212248368698
        },
        "tr": {
          "x": 251.08333587646484,
          "y": 202.46212248368698
        },
        "l": {
          "x": 196.91666412353516,
          "y": 229.54545454545456
        },
        "r": {
          "x": 251.08333587646484,
          "y": 229.54545454545456
        },
        "bl": {
          "x": 196.91666412353516,
          "y": 256.62878660722214
        },
        "bc": {
          "x": 224,
          "y": 256.62878660722214
        },
        "br": {
          "x": 251.08333587646484,
          "y": 256.62878660722214
        }
      },
      "temp": {
        "x": 224,
        "y": 229.54545454545456
      },
      "name": "alternator",
      "title": "发电机",
      "type": "File",
      "config": {
        "can_zoom": true,
        "have_anchor": true,
        "actual_rect": true
      },
      "display": true,
      "props": {
        "fill": {
          "title": "填充色",
          "type": "Color",
          "val": "#00ff00"
        }
      },
      "event": {
        "click": {
          "title": "点击",
          "val": "      console.log('测试打印当前组件json',$svg_item_info);\n      //执行callBack函数\n      $svgEventCallBack('回调类型',$svg_item_info.id,'测试回调订阅')\n      ",
          "type": "None"
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      },
      "frame_animation": {
        "transition": true,
        "timing": "linear",
        "select": 1,
        "info": [
          {
            "title": "新增帧",
            "data": {
              "id": "alternator5hyv3tjnKP",
              "x": 224,
              "y": 229.54545454545456,
              "client": {
                "x": 224,
                "y": 202
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 202.46212248368698
                },
                "tc": {
                  "x": 224,
                  "y": 202.46212248368698
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 202.46212248368698
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 229.54545454545456
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 229.54545454545456
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 256.62878660722214
                },
                "bc": {
                  "x": 224,
                  "y": 256.62878660722214
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 256.62878660722214
                }
              },
              "temp": {
                "x": 224,
                "y": 229.54545454545456
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          },
          {
            "title": "新增帧",
            "data": {
              "id": "alternator5hyv3tjnKP",
              "x": 1024,
              "y": 229.54545454545456,
              "client": {
                "x": 224,
                "y": 202
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 202.46212248368698
                },
                "tc": {
                  "x": 224,
                  "y": 202.46212248368698
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 202.46212248368698
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 229.54545454545456
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 229.54545454545456
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 256.62878660722214
                },
                "bc": {
                  "x": 224,
                  "y": 256.62878660722214
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 256.62878660722214
                }
              },
              "temp": {
                "x": 224,
                "y": 229.54545454545456
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          }
        ]
      }
    },
    {
      "id": "alternatorUaNUEzKHwk",
      "x": 224,
      "y": 300.6363636363636,
      "client": {
        "x": 219,
        "y": 264
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 22.916664123535156,
        "y": 22.91666603088379,
        "width": 54.16667175292969,
        "height": 54.166664123535156
      },
      "point_coordinate": {
        "tl": {
          "x": 196.91666412353516,
          "y": 273.55303157459605
        },
        "tc": {
          "x": 224,
          "y": 273.55303157459605
        },
        "tr": {
          "x": 251.08333587646484,
          "y": 273.55303157459605
        },
        "l": {
          "x": 196.91666412353516,
          "y": 300.6363636363636
        },
        "r": {
          "x": 251.08333587646484,
          "y": 300.6363636363636
        },
        "bl": {
          "x": 196.91666412353516,
          "y": 327.7196956981312
        },
        "bc": {
          "x": 224,
          "y": 327.7196956981312
        },
        "br": {
          "x": 251.08333587646484,
          "y": 327.7196956981312
        }
      },
      "temp": {
        "x": 224,
        "y": 300.6363636363636
      },
      "name": "alternator",
      "title": "发电机",
      "type": "File",
      "config": {
        "can_zoom": true,
        "have_anchor": true,
        "actual_rect": true
      },
      "display": true,
      "props": {
        "fill": {
          "title": "填充色",
          "type": "Color",
          "val": "#00ff00"
        }
      },
      "event": {
        "click": {
          "title": "点击",
          "val": "      console.log('测试打印当前组件json',$svg_item_info);\n      //执行callBack函数\n      $svgEventCallBack('回调类型',$svg_item_info.id,'测试回调订阅')\n      ",
          "type": "None"
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      },
      "frame_animation": {
        "transition": true,
        "timing": "ease",
        "select": 1,
        "info": [
          {
            "title": "新增帧",
            "data": {
              "id": "alternatorUaNUEzKHwk",
              "x": 224,
              "y": 300.6363636363636,
              "client": {
                "x": 219,
                "y": 264
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 273.55303157459605
                },
                "tc": {
                  "x": 224,
                  "y": 273.55303157459605
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 273.55303157459605
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 300.6363636363636
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 300.6363636363636
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 327.7196956981312
                },
                "bc": {
                  "x": 224,
                  "y": 327.7196956981312
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 327.7196956981312
                }
              },
              "temp": {
                "x": 224,
                "y": 300.6363636363636
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          },
          {
            "title": "新增帧",
            "data": {
              "id": "alternatorUaNUEzKHwk",
              "x": 1024,
              "y": 300.6363636363636,
              "client": {
                "x": 219,
                "y": 264
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 273.55303157459605
                },
                "tc": {
                  "x": 224,
                  "y": 273.55303157459605
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 273.55303157459605
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 300.6363636363636
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 300.6363636363636
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 327.7196956981312
                },
                "bc": {
                  "x": 224,
                  "y": 327.7196956981312
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 327.7196956981312
                }
              },
              "temp": {
                "x": 224,
                "y": 300.6363636363636
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          }
        ]
      }
    },
    {
      "id": "alternatorK3RtSLPW2Z",
      "x": 224,
      "y": 371.72727272727275,
      "client": {
        "x": 232,
        "y": 333
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 22.916664123535156,
        "y": 22.91666603088379,
        "width": 54.16667175292969,
        "height": 54.166664123535156
      },
      "point_coordinate": {
        "tl": {
          "x": 196.91666412353516,
          "y": 344.64394066550517
        },
        "tc": {
          "x": 224,
          "y": 344.64394066550517
        },
        "tr": {
          "x": 251.08333587646484,
          "y": 344.64394066550517
        },
        "l": {
          "x": 196.91666412353516,
          "y": 371.72727272727275
        },
        "r": {
          "x": 251.08333587646484,
          "y": 371.72727272727275
        },
        "bl": {
          "x": 196.91666412353516,
          "y": 398.8106047890403
        },
        "bc": {
          "x": 224,
          "y": 398.8106047890403
        },
        "br": {
          "x": 251.08333587646484,
          "y": 398.8106047890403
        }
      },
      "temp": {
        "x": 224,
        "y": 371.72727272727275
      },
      "name": "alternator",
      "title": "发电机",
      "type": "File",
      "config": {
        "can_zoom": true,
        "have_anchor": true,
        "actual_rect": true
      },
      "display": true,
      "props": {
        "fill": {
          "title": "填充色",
          "type": "Color",
          "val": "#00ff00"
        }
      },
      "event": {
        "click": {
          "title": "点击",
          "val": "      console.log('测试打印当前组件json',$svg_item_info);\n      //执行callBack函数\n      $svgEventCallBack('回调类型',$svg_item_info.id,'测试回调订阅')\n      ",
          "type": "None"
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      },
      "frame_animation": {
        "transition": true,
        "timing": "ease-in",
        "select": 1,
        "info": [
          {
            "title": "新增帧",
            "data": {
              "id": "alternatorK3RtSLPW2Z",
              "x": 224,
              "y": 371.72727272727275,
              "client": {
                "x": 232,
                "y": 333
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 344.64394066550517
                },
                "tc": {
                  "x": 224,
                  "y": 344.64394066550517
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 344.64394066550517
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 371.72727272727275
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 371.72727272727275
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 398.8106047890403
                },
                "bc": {
                  "x": 224,
                  "y": 398.8106047890403
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 398.8106047890403
                }
              },
              "temp": {
                "x": 224,
                "y": 371.72727272727275
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          },
          {
            "title": "新增帧",
            "data": {
              "id": "alternatorK3RtSLPW2Z",
              "x": 1024,
              "y": 371.72727272727275,
              "client": {
                "x": 232,
                "y": 333
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 344.64394066550517
                },
                "tc": {
                  "x": 224,
                  "y": 344.64394066550517
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 344.64394066550517
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 371.72727272727275
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 371.72727272727275
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 398.8106047890403
                },
                "bc": {
                  "x": 224,
                  "y": 398.8106047890403
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 398.8106047890403
                }
              },
              "temp": {
                "x": 224,
                "y": 371.72727272727275
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          }
        ]
      }
    },
    {
      "id": "alternatorqAbt0BIpdY",
      "x": 224,
      "y": 442.8181818181818,
      "client": {
        "x": 222,
        "y": 404
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 22.916664123535156,
        "y": 22.91666603088379,
        "width": 54.16667175292969,
        "height": 54.166664123535156
      },
      "point_coordinate": {
        "tl": {
          "x": 196.91666412353516,
          "y": 415.73484975641423
        },
        "tc": {
          "x": 224,
          "y": 415.73484975641423
        },
        "tr": {
          "x": 251.08333587646484,
          "y": 415.73484975641423
        },
        "l": {
          "x": 196.91666412353516,
          "y": 442.8181818181818
        },
        "r": {
          "x": 251.08333587646484,
          "y": 442.8181818181818
        },
        "bl": {
          "x": 196.91666412353516,
          "y": 469.9015138799494
        },
        "bc": {
          "x": 224,
          "y": 469.9015138799494
        },
        "br": {
          "x": 251.08333587646484,
          "y": 469.9015138799494
        }
      },
      "temp": {
        "x": 224,
        "y": 442.8181818181818
      },
      "name": "alternator",
      "title": "发电机",
      "type": "File",
      "config": {
        "can_zoom": true,
        "have_anchor": true,
        "actual_rect": true
      },
      "display": true,
      "props": {
        "fill": {
          "title": "填充色",
          "type": "Color",
          "val": "#00ff00"
        }
      },
      "event": {
        "click": {
          "title": "点击",
          "val": "      console.log('测试打印当前组件json',$svg_item_info);\n      //执行callBack函数\n      $svgEventCallBack('回调类型',$svg_item_info.id,'测试回调订阅')\n      ",
          "type": "None"
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      },
      "frame_animation": {
        "transition": true,
        "timing": "ease-out",
        "select": 1,
        "info": [
          {
            "title": "新增帧",
            "data": {
              "id": "alternatorqAbt0BIpdY",
              "x": 224,
              "y": 442.8181818181818,
              "client": {
                "x": 222,
                "y": 404
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 415.73484975641423
                },
                "tc": {
                  "x": 224,
                  "y": 415.73484975641423
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 415.73484975641423
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 442.8181818181818
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 442.8181818181818
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 469.9015138799494
                },
                "bc": {
                  "x": 224,
                  "y": 469.9015138799494
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 469.9015138799494
                }
              },
              "temp": {
                "x": 224,
                "y": 442.8181818181818
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          },
          {
            "title": "新增帧",
            "data": {
              "id": "alternatorqAbt0BIpdY",
              "x": 1024,
              "y": 442.8181818181818,
              "client": {
                "x": 222,
                "y": 404
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 415.73484975641423
                },
                "tc": {
                  "x": 224,
                  "y": 415.73484975641423
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 415.73484975641423
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 442.8181818181818
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 442.8181818181818
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 469.9015138799494
                },
                "bc": {
                  "x": 224,
                  "y": 469.9015138799494
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 469.9015138799494
                }
              },
              "temp": {
                "x": 224,
                "y": 442.8181818181818
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          }
        ]
      }
    },
    {
      "id": "alternatorYjcacBqGSj",
      "x": 224,
      "y": 513.909090909091,
      "client": {
        "x": 224,
        "y": 472
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 22.916664123535156,
        "y": 22.91666603088379,
        "width": 54.16667175292969,
        "height": 54.166664123535156
      },
      "point_coordinate": {
        "tl": {
          "x": 196.91666412353516,
          "y": 486.8257588473234
        },
        "tc": {
          "x": 224,
          "y": 486.8257588473234
        },
        "tr": {
          "x": 251.08333587646484,
          "y": 486.8257588473234
        },
        "l": {
          "x": 196.91666412353516,
          "y": 513.909090909091
        },
        "r": {
          "x": 251.08333587646484,
          "y": 513.909090909091
        },
        "bl": {
          "x": 196.91666412353516,
          "y": 540.9924229708586
        },
        "bc": {
          "x": 224,
          "y": 540.9924229708586
        },
        "br": {
          "x": 251.08333587646484,
          "y": 540.9924229708586
        }
      },
      "temp": {
        "x": 224,
        "y": 513.909090909091
      },
      "name": "alternator",
      "title": "发电机",
      "type": "File",
      "config": {
        "can_zoom": true,
        "have_anchor": true,
        "actual_rect": true
      },
      "display": true,
      "props": {
        "fill": {
          "title": "填充色",
          "type": "Color",
          "val": "#00ff00"
        }
      },
      "event": {
        "click": {
          "title": "点击",
          "val": "      console.log('测试打印当前组件json',$svg_item_info);\n      //执行callBack函数\n      $svgEventCallBack('回调类型',$svg_item_info.id,'测试回调订阅')\n      ",
          "type": "None"
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      },
      "frame_animation": {
        "transition": true,
        "timing": "ease-in-out",
        "select": 1,
        "info": [
          {
            "title": "新增帧",
            "data": {
              "id": "alternatorYjcacBqGSj",
              "x": 224,
              "y": 513.909090909091,
              "client": {
                "x": 224,
                "y": 472
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 486.8257588473234
                },
                "tc": {
                  "x": 224,
                  "y": 486.8257588473234
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 486.8257588473234
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 513.909090909091
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 513.909090909091
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 540.9924229708586
                },
                "bc": {
                  "x": 224,
                  "y": 540.9924229708586
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 540.9924229708586
                }
              },
              "temp": {
                "x": 224,
                "y": 513.909090909091
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          },
          {
            "title": "新增帧",
            "data": {
              "id": "alternatorYjcacBqGSj",
              "x": 1024,
              "y": 513.909090909091,
              "client": {
                "x": 224,
                "y": 472
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 486.8257588473234
                },
                "tc": {
                  "x": 224,
                  "y": 486.8257588473234
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 486.8257588473234
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 513.909090909091
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 513.909090909091
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 540.9924229708586
                },
                "bc": {
                  "x": 224,
                  "y": 540.9924229708586
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 540.9924229708586
                }
              },
              "temp": {
                "x": 224,
                "y": 513.909090909091
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          }
        ]
      }
    },
    {
      "id": "alternatorBewgkIT4Jm",
      "x": 224,
      "y": 585,
      "client": {
        "x": 226,
        "y": 580
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 22.916664123535156,
        "y": 22.91666603088379,
        "width": 54.16667175292969,
        "height": 54.166664123535156
      },
      "point_coordinate": {
        "tl": {
          "x": 196.91666412353516,
          "y": 557.9166679382324
        },
        "tc": {
          "x": 224,
          "y": 557.9166679382324
        },
        "tr": {
          "x": 251.08333587646484,
          "y": 557.9166679382324
        },
        "l": {
          "x": 196.91666412353516,
          "y": 585
        },
        "r": {
          "x": 251.08333587646484,
          "y": 585
        },
        "bl": {
          "x": 196.91666412353516,
          "y": 612.0833320617676
        },
        "bc": {
          "x": 224,
          "y": 612.0833320617676
        },
        "br": {
          "x": 251.08333587646484,
          "y": 612.0833320617676
        }
      },
      "temp": {
        "x": 224,
        "y": 585
      },
      "name": "alternator",
      "title": "发电机",
      "type": "File",
      "config": {
        "can_zoom": true,
        "have_anchor": true,
        "actual_rect": true
      },
      "display": true,
      "props": {
        "fill": {
          "title": "填充色",
          "type": "Color",
          "val": "#00ff00"
        }
      },
      "event": {
        "click": {
          "title": "点击",
          "val": "      console.log('测试打印当前组件json',$svg_item_info);\n      //执行callBack函数\n      $svgEventCallBack('回调类型',$svg_item_info.id,'测试回调订阅')\n      ",
          "type": "None"
        }
      },
      "common_animations": {
        "val": "",
        "delay": "delay-0s",
        "speed": "slow",
        "repeat": "infinite"
      },
      "frame_animation": {
        "transition": false,
        "timing": "linear",
        "select": 1,
        "info": [
          {
            "title": "新增帧",
            "data": {
              "id": "alternatorBewgkIT4Jm",
              "x": 224,
              "y": 585,
              "client": {
                "x": 226,
                "y": 580
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 557.9166679382324
                },
                "tc": {
                  "x": 224,
                  "y": 557.9166679382324
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 557.9166679382324
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 585
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 585
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 612.0833320617676
                },
                "bc": {
                  "x": 224,
                  "y": 612.0833320617676
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 612.0833320617676
                }
              },
              "temp": {
                "x": 224,
                "y": 585
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          },
          {
            "title": "新增帧",
            "data": {
              "id": "alternatorBewgkIT4Jm",
              "x": 1024,
              "y": 585,
              "client": {
                "x": 226,
                "y": 580
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 22.916664123535156,
                "y": 22.91666603088379,
                "width": 54.16667175292969,
                "height": 54.166664123535156
              },
              "point_coordinate": {
                "tl": {
                  "x": 196.91666412353516,
                  "y": 557.9166679382324
                },
                "tc": {
                  "x": 224,
                  "y": 557.9166679382324
                },
                "tr": {
                  "x": 251.08333587646484,
                  "y": 557.9166679382324
                },
                "l": {
                  "x": 196.91666412353516,
                  "y": 585
                },
                "r": {
                  "x": 251.08333587646484,
                  "y": 585
                },
                "bl": {
                  "x": 196.91666412353516,
                  "y": 612.0833320617676
                },
                "bc": {
                  "x": 224,
                  "y": 612.0833320617676
                },
                "br": {
                  "x": 251.08333587646484,
                  "y": 612.0833320617676
                }
              },
              "temp": {
                "x": 224,
                "y": 585
              },
              "name": "alternator",
              "title": "发电机",
              "type": "File",
              "config": {
                "can_zoom": true,
                "have_anchor": true,
                "actual_rect": true
              },
              "display": true,
              "props": {
                "fill": {
                  "title": "填充色",
                  "type": "Color",
                  "val": "#00ff00"
                }
              },
              "event": {},
              "common_animations": {
                "val": "",
                "delay": "delay-0s",
                "speed": "slow",
                "repeat": "infinite"
              },
              "frame_animation": []
            }
          }
        ]
      }
    }
  ],
  "thumbnail": ""
})
);
const router = useRouter();
const dialog_visiable = ref(false);
const preview_data = ref();
const onPreview = (data_model: IDataModel) => {
  preview_data.value = data_model;
  dialog_visiable.value = true;
};
const onReturn = () => {
  console.log('点击了返回按钮');
  router.go(-1);
};
const onSave = (data_model: IDataModel) => {
  console.log('点击了保存按钮，可以在此处将图存到数据库', data_model);
};
</script>
