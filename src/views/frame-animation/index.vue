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
      "id": "custom-svg-textFD25gzFMme",
      "x": 257,
      "y": 474,
      "client": {
        "x": 257,
        "y": 474
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
          "x": 241.5,
          "y": 464
        },
        "tc": {
          "x": 257,
          "y": 464
        },
        "tr": {
          "x": 272.5,
          "y": 464
        },
        "l": {
          "x": 241.5,
          "y": 474
        },
        "r": {
          "x": 272.5,
          "y": 474
        },
        "bl": {
          "x": 241.5,
          "y": 484
        },
        "bc": {
          "x": 257,
          "y": 484
        },
        "br": {
          "x": 272.5,
          "y": 484
        }
      },
      "temp": {
        "x": 257,
        "y": 474
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
          "val": "文字"
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
        "select": 2,
        "info": [
          {
            "title": "新增帧",
            "data": {
              "id": "custom-svg-textFD25gzFMme",
              "x": 257,
              "y": 474,
              "client": {
                "x": 257,
                "y": 474
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
                  "x": 241.5,
                  "y": 464
                },
                "tc": {
                  "x": 257,
                  "y": 464
                },
                "tr": {
                  "x": 272.5,
                  "y": 464
                },
                "l": {
                  "x": 241.5,
                  "y": 474
                },
                "r": {
                  "x": 272.5,
                  "y": 474
                },
                "bl": {
                  "x": 241.5,
                  "y": 484
                },
                "bc": {
                  "x": 257,
                  "y": 484
                },
                "br": {
                  "x": 272.5,
                  "y": 484
                }
              },
              "temp": {
                "x": 257,
                "y": 474
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
                  "val": "这是第一帧"
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
              "event": {},
              "frame_animation": []
            }
          },
          {
            "title": "新增帧",
            "data": {
              "id": "custom-svg-textFD25gzFMme",
              "x": 257,
              "y": 474,
              "client": {
                "x": 257,
                "y": 474
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
                  "x": 241.5,
                  "y": 464
                },
                "tc": {
                  "x": 257,
                  "y": 464
                },
                "tr": {
                  "x": 272.5,
                  "y": 464
                },
                "l": {
                  "x": 241.5,
                  "y": 474
                },
                "r": {
                  "x": 272.5,
                  "y": 474
                },
                "bl": {
                  "x": 241.5,
                  "y": 484
                },
                "bc": {
                  "x": 257,
                  "y": 484
                },
                "br": {
                  "x": 272.5,
                  "y": 484
                }
              },
              "temp": {
                "x": 257,
                "y": 474
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
                  "val": "这是第二帧"
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
              "frame_animation": [],
              "event": {}
            }
          },
          {
            "title": "新增帧",
            "data": {
              "id": "custom-svg-textFD25gzFMme",
              "x": 257,
              "y": 474,
              "client": {
                "x": 257,
                "y": 474
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
                  "x": 241.5,
                  "y": 464
                },
                "tc": {
                  "x": 257,
                  "y": 464
                },
                "tr": {
                  "x": 272.5,
                  "y": 464
                },
                "l": {
                  "x": 241.5,
                  "y": 474
                },
                "r": {
                  "x": 272.5,
                  "y": 474
                },
                "bl": {
                  "x": 241.5,
                  "y": 484
                },
                "bc": {
                  "x": 257,
                  "y": 484
                },
                "br": {
                  "x": 272.5,
                  "y": 484
                }
              },
              "temp": {
                "x": 257,
                "y": 474
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
                  "val": "这是第三帧"
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
              "frame_animation": [],
              "event": {}
            }
          }
        ]
      }
    },
    {
      "id": "alternatorPqinYInKwF",
      "x": 856.0833358764648,
      "y": 474,
      "client": {
        "x": 856.0833358764648,
        "y": 468
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
          "x": 829,
          "y": 446.9166679382324
        },
        "tc": {
          "x": 856.0833358764648,
          "y": 446.9166679382324
        },
        "tr": {
          "x": 883.1666717529297,
          "y": 446.9166679382324
        },
        "l": {
          "x": 829,
          "y": 474
        },
        "r": {
          "x": 883.1666717529297,
          "y": 474
        },
        "bl": {
          "x": 829,
          "y": 501.0833320617676
        },
        "bc": {
          "x": 856.0833358764648,
          "y": 501.0833320617676
        },
        "br": {
          "x": 883.1666717529297,
          "y": 501.0833320617676
        }
      },
      "temp": {
        "x": 856.0833358764648,
        "y": 474
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
        "select": 1,
        "info": [
          {
            "title": "新增帧",
            "data": {
              "id": "alternatorPqinYInKwF",
              "x": 580.9166641235352,
              "y": 474,
              "client": {
                "x": 580.9166641235352,
                "y": 474
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
                  "x": 553.8333282470703,
                  "y": 446.9166679382324
                },
                "tc": {
                  "x": 580.9166641235352,
                  "y": 446.9166679382324
                },
                "tr": {
                  "x": 608,
                  "y": 446.9166679382324
                },
                "l": {
                  "x": 553.8333282470703,
                  "y": 474
                },
                "r": {
                  "x": 608,
                  "y": 474
                },
                "bl": {
                  "x": 553.8333282470703,
                  "y": 501.0833320617676
                },
                "bc": {
                  "x": 580.9166641235352,
                  "y": 501.0833320617676
                },
                "br": {
                  "x": 608,
                  "y": 501.0833320617676
                }
              },
              "temp": {
                "x": 580.9166641235352,
                "y": 474
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
              "id": "alternatorPqinYInKwF",
              "x": 753.0833358764648,
              "y": 484,
              "client": {
                "x": 753.0833358764648,
                "y": 479
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
                  "x": 726,
                  "y": 456.9166679382324
                },
                "tc": {
                  "x": 753.0833358764648,
                  "y": 456.9166679382324
                },
                "tr": {
                  "x": 780.1666717529297,
                  "y": 456.9166679382324
                },
                "l": {
                  "x": 726,
                  "y": 484
                },
                "r": {
                  "x": 780.1666717529297,
                  "y": 484
                },
                "bl": {
                  "x": 726,
                  "y": 511.0833320617676
                },
                "bc": {
                  "x": 753.0833358764648,
                  "y": 511.0833320617676
                },
                "br": {
                  "x": 780.1666717529297,
                  "y": 511.0833320617676
                }
              },
              "temp": {
                "x": 753.0833358764648,
                "y": 484
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
                  "val": "#FFF200"
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
              "id": "alternatorPqinYInKwF",
              "x": 856.0833358764648,
              "y": 474,
              "client": {
                "x": 856.0833358764648,
                "y": 468
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
                  "x": 829,
                  "y": 446.9166679382324
                },
                "tc": {
                  "x": 856.0833358764648,
                  "y": 446.9166679382324
                },
                "tr": {
                  "x": 883.1666717529297,
                  "y": 446.9166679382324
                },
                "l": {
                  "x": 829,
                  "y": 474
                },
                "r": {
                  "x": 883.1666717529297,
                  "y": 474
                },
                "bl": {
                  "x": 829,
                  "y": 501.0833320617676
                },
                "bc": {
                  "x": 856.0833358764648,
                  "y": 501.0833320617676
                },
                "br": {
                  "x": 883.1666717529297,
                  "y": 501.0833320617676
                }
              },
              "temp": {
                "x": 856.0833358764648,
                "y": 474
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
      "id": "straight-lineUYeXsQtRym",
      "x": 50,
      "y": 49,
      "client": {
        "x": 50,
        "y": 49
      },
      "scale_x": 1,
      "scale_y": 1,
      "rotate": 0,
      "actual_bound": {
        "x": 580.9166870117188,
        "y": 446.9166564941406,
        "width": 0,
        "height": 0
      },
      "point_coordinate": {
        "tl": {
          "x": -33.5,
          "y": -25
        },
        "tc": {
          "x": 50,
          "y": -25
        },
        "tr": {
          "x": 133.5,
          "y": -25
        },
        "l": {
          "x": -33.5,
          "y": 49
        },
        "r": {
          "x": 133.5,
          "y": 49
        },
        "bl": {
          "x": -33.5,
          "y": 123
        },
        "bc": {
          "x": 50,
          "y": 123
        },
        "br": {
          "x": 133.5,
          "y": 123
        }
      },
      "temp": {
        "x": 50,
        "y": 49
      },
      "name": "connection_line",
      "title": "连接线",
      "type": "ConnectionLine",
      "config": {
        "can_zoom": false,
        "have_anchor": false,
        "actual_rect": false
      },
      "display": true,
      "props": {
        "stroke": {
          "title": "线条颜色",
          "type": "Color",
          "val": "#ff0000"
        },
        "stroke-width": {
          "title": "线条宽度",
          "type": "InputNumber",
          "val": 2
        },
        "point_position": {
          "title": "点坐标",
          "type": "JsonEdit",
          "val": [
            {
              "x": 856.0833358764648,
              "y": 447.9166679382324
            },
            {
              "x": 747.9166641235352,
              "y": 298.9166679382324
            }
          ]
        },
        "marker-start": {
          "title": "起点箭头",
          "type": "Switch",
          "val": false
        },
        "marker-end": {
          "title": "终点箭头",
          "type": "Switch",
          "val": false
        }
      },
      "animations": {
        "type": {
          "title": "动画类型",
          "type": "Select",
          "val": "None",
          "options": [
            {
              "label": "无",
              "value": "None"
            },
            {
              "label": "电流",
              "value": "Electricity"
            },
            {
              "label": "轨迹",
              "value": "Track"
            },
            {
              "label": "水珠",
              "value": "WaterDrop"
            }
          ]
        },
        "dur": {
          "title": "持续时间",
          "type": "InputNumber",
          "val": 20
        },
        "repeatCount": {
          "title": "循环次数",
          "type": "Input",
          "val": "indefinite",
          "disabled": true
        },
        "color": {
          "title": "颜色",
          "type": "Color",
          "val": "#0a7ae2"
        },
        "reverse": {
          "title": "反转动画",
          "type": "Switch",
          "val": false
        },
        "play": {
          "title": "动画播放",
          "type": "Switch",
          "val": true
        }
      },
      "bind_anchors": {
        "start": {
          "type": "TopCenter",
          "target_id": "alternatorPqinYInKwF",
          "init": {
            "x": 856.0833358764648,
            "y": 447.9166679382324
          }
        },
        "end": null
      },
      "frame_animation": {
        "select": null,
        "info": [
          {
            "title": "新增帧",
            "data": {
              "id": "straight-lineUYeXsQtRym",
              "x": 50,
              "y": 49,
              "client": {
                "x": 50,
                "y": 49
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 580.9166870117188,
                "y": 446.9166564941406,
                "width": 0,
                "height": 0
              },
              "point_coordinate": {
                "tl": {
                  "x": -33.5,
                  "y": -25
                },
                "tc": {
                  "x": 50,
                  "y": -25
                },
                "tr": {
                  "x": 133.5,
                  "y": -25
                },
                "l": {
                  "x": -33.5,
                  "y": 49
                },
                "r": {
                  "x": 133.5,
                  "y": 49
                },
                "bl": {
                  "x": -33.5,
                  "y": 123
                },
                "bc": {
                  "x": 50,
                  "y": 123
                },
                "br": {
                  "x": 133.5,
                  "y": 123
                }
              },
              "temp": {
                "x": 50,
                "y": 49
              },
              "name": "connection_line",
              "title": "连接线",
              "type": "ConnectionLine",
              "config": {
                "can_zoom": false,
                "have_anchor": false,
                "actual_rect": false
              },
              "display": true,
              "props": {
                "stroke": {
                  "title": "线条颜色",
                  "type": "Color",
                  "val": "#ff0000"
                },
                "stroke-width": {
                  "title": "线条宽度",
                  "type": "InputNumber",
                  "val": 2
                },
                "point_position": {
                  "title": "点坐标",
                  "type": "JsonEdit",
                  "val": [
                    {
                      "x": 580.9166641235352,
                      "y": 446.9166679382324
                    },
                    {
                      "x": 747.9166641235352,
                      "y": 298.9166679382324
                    }
                  ]
                },
                "marker-start": {
                  "title": "起点箭头",
                  "type": "Switch",
                  "val": false
                },
                "marker-end": {
                  "title": "终点箭头",
                  "type": "Switch",
                  "val": false
                }
              },
              "animations": {
                "type": {
                  "title": "动画类型",
                  "type": "Select",
                  "val": "None",
                  "options": [
                    {
                      "label": "无",
                      "value": "None"
                    },
                    {
                      "label": "电流",
                      "value": "Electricity"
                    },
                    {
                      "label": "轨迹",
                      "value": "Track"
                    },
                    {
                      "label": "水珠",
                      "value": "WaterDrop"
                    }
                  ]
                },
                "dur": {
                  "title": "持续时间",
                  "type": "InputNumber",
                  "val": 20
                },
                "repeatCount": {
                  "title": "循环次数",
                  "type": "Input",
                  "val": "indefinite",
                  "disabled": true
                },
                "color": {
                  "title": "颜色",
                  "type": "Color",
                  "val": "#0a7ae2"
                },
                "reverse": {
                  "title": "反转动画",
                  "type": "Switch",
                  "val": false
                },
                "play": {
                  "title": "动画播放",
                  "type": "Switch",
                  "val": true
                }
              },
              "bind_anchors": {
                "start": null,
                "end": null
              },
              "event": {},
              "frame_animation": []
            }
          },
          {
            "title": "新增帧",
            "data": {
              "id": "straight-lineUYeXsQtRym",
              "x": 50,
              "y": 49,
              "client": {
                "x": 50,
                "y": 49
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 580.9166870117188,
                "y": 446.9166564941406,
                "width": 0,
                "height": 0
              },
              "point_coordinate": {
                "tl": {
                  "x": -33.5,
                  "y": -25
                },
                "tc": {
                  "x": 50,
                  "y": -25
                },
                "tr": {
                  "x": 133.5,
                  "y": -25
                },
                "l": {
                  "x": -33.5,
                  "y": 49
                },
                "r": {
                  "x": 133.5,
                  "y": 49
                },
                "bl": {
                  "x": -33.5,
                  "y": 123
                },
                "bc": {
                  "x": 50,
                  "y": 123
                },
                "br": {
                  "x": 133.5,
                  "y": 123
                }
              },
              "temp": {
                "x": 50,
                "y": 49
              },
              "name": "connection_line",
              "title": "连接线",
              "type": "ConnectionLine",
              "config": {
                "can_zoom": false,
                "have_anchor": false,
                "actual_rect": false
              },
              "display": true,
              "props": {
                "stroke": {
                  "title": "线条颜色",
                  "type": "Color",
                  "val": "#ff0000"
                },
                "stroke-width": {
                  "title": "线条宽度",
                  "type": "InputNumber",
                  "val": 2
                },
                "point_position": {
                  "title": "点坐标",
                  "type": "JsonEdit",
                  "val": [
                    {
                      "x": 749.0833358764648,
                      "y": 447.9166679382324
                    },
                    {
                      "x": 747.9166641235352,
                      "y": 298.9166679382324
                    }
                  ]
                },
                "marker-start": {
                  "title": "起点箭头",
                  "type": "Switch",
                  "val": false
                },
                "marker-end": {
                  "title": "终点箭头",
                  "type": "Switch",
                  "val": false
                }
              },
              "animations": {
                "type": {
                  "title": "动画类型",
                  "type": "Select",
                  "val": "None",
                  "options": [
                    {
                      "label": "无",
                      "value": "None"
                    },
                    {
                      "label": "电流",
                      "value": "Electricity"
                    },
                    {
                      "label": "轨迹",
                      "value": "Track"
                    },
                    {
                      "label": "水珠",
                      "value": "WaterDrop"
                    }
                  ]
                },
                "dur": {
                  "title": "持续时间",
                  "type": "InputNumber",
                  "val": 20
                },
                "repeatCount": {
                  "title": "循环次数",
                  "type": "Input",
                  "val": "indefinite",
                  "disabled": true
                },
                "color": {
                  "title": "颜色",
                  "type": "Color",
                  "val": "#0a7ae2"
                },
                "reverse": {
                  "title": "反转动画",
                  "type": "Switch",
                  "val": false
                },
                "play": {
                  "title": "动画播放",
                  "type": "Switch",
                  "val": true
                }
              },
              "bind_anchors": {
                "start": {
                  "type": "TopCenter",
                  "target_id": "alternatorPqinYInKwF",
                  "init": {
                    "x": 749.0833358764648,
                    "y": 447.9166679382324
                  }
                },
                "end": null
              },
              "frame_animation": [],
              "event": {}
            }
          },
          {
            "title": "新增帧",
            "data": {
              "id": "straight-lineUYeXsQtRym",
              "x": 50,
              "y": 49,
              "client": {
                "x": 50,
                "y": 49
              },
              "scale_x": 1,
              "scale_y": 1,
              "rotate": 0,
              "actual_bound": {
                "x": 580.9166870117188,
                "y": 446.9166564941406,
                "width": 0,
                "height": 0
              },
              "point_coordinate": {
                "tl": {
                  "x": -33.5,
                  "y": -25
                },
                "tc": {
                  "x": 50,
                  "y": -25
                },
                "tr": {
                  "x": 133.5,
                  "y": -25
                },
                "l": {
                  "x": -33.5,
                  "y": 49
                },
                "r": {
                  "x": 133.5,
                  "y": 49
                },
                "bl": {
                  "x": -33.5,
                  "y": 123
                },
                "bc": {
                  "x": 50,
                  "y": 123
                },
                "br": {
                  "x": 133.5,
                  "y": 123
                }
              },
              "temp": {
                "x": 50,
                "y": 49
              },
              "name": "connection_line",
              "title": "连接线",
              "type": "ConnectionLine",
              "config": {
                "can_zoom": false,
                "have_anchor": false,
                "actual_rect": false
              },
              "display": true,
              "props": {
                "stroke": {
                  "title": "线条颜色",
                  "type": "Color",
                  "val": "#ff0000"
                },
                "stroke-width": {
                  "title": "线条宽度",
                  "type": "InputNumber",
                  "val": 2
                },
                "point_position": {
                  "title": "点坐标",
                  "type": "JsonEdit",
                  "val": [
                    {
                      "x": 856.0833358764648,
                      "y": 447.9166679382324
                    },
                    {
                      "x": 747.9166641235352,
                      "y": 298.9166679382324
                    }
                  ]
                },
                "marker-start": {
                  "title": "起点箭头",
                  "type": "Switch",
                  "val": false
                },
                "marker-end": {
                  "title": "终点箭头",
                  "type": "Switch",
                  "val": false
                }
              },
              "animations": {
                "type": {
                  "title": "动画类型",
                  "type": "Select",
                  "val": "None",
                  "options": [
                    {
                      "label": "无",
                      "value": "None"
                    },
                    {
                      "label": "电流",
                      "value": "Electricity"
                    },
                    {
                      "label": "轨迹",
                      "value": "Track"
                    },
                    {
                      "label": "水珠",
                      "value": "WaterDrop"
                    }
                  ]
                },
                "dur": {
                  "title": "持续时间",
                  "type": "InputNumber",
                  "val": 20
                },
                "repeatCount": {
                  "title": "循环次数",
                  "type": "Input",
                  "val": "indefinite",
                  "disabled": true
                },
                "color": {
                  "title": "颜色",
                  "type": "Color",
                  "val": "#0a7ae2"
                },
                "reverse": {
                  "title": "反转动画",
                  "type": "Switch",
                  "val": false
                },
                "play": {
                  "title": "动画播放",
                  "type": "Switch",
                  "val": true
                }
              },
              "bind_anchors": {
                "start": {
                  "type": "TopCenter",
                  "target_id": "alternatorPqinYInKwF",
                  "init": {
                    "x": 856.0833358764648,
                    "y": 447.9166679382324
                  }
                },
                "end": null
              },
              "frame_animation": [],
              "event": {}
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
