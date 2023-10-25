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
    layout_center: {
      x: 0,
      y: 0
    },
    config: {
      background_color: '#fff',
      scale: 1,
      position_center: {
        x: -333,
        y: -113
      },
      svg_position_center: {
        x: 50,
        y: 50
      },
      grid: true,
      grid_color: '#ebebeb',
      ruler: true
    },
    done_json: [
      {
        id: 'alternatormG6S5J1Nkx',
        x: 458,
        y: 157,
        client: {
          x: 458,
          y: 157
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
            x: 430.91666412353516,
            y: 129.91666793823242
          },
          tc: {
            x: 458,
            y: 129.91666793823242
          },
          tr: {
            x: 485.08333587646484,
            y: 129.91666793823242
          },
          l: {
            x: 430.91666412353516,
            y: 157
          },
          r: {
            x: 485.08333587646484,
            y: 157
          },
          bl: {
            x: 430.91666412353516,
            y: 184.08333206176758
          },
          bc: {
            x: 458,
            y: 184.08333206176758
          },
          br: {
            x: 485.08333587646484,
            y: 184.08333206176758
          }
        },
        temp: {
          x: 485,
          y: 181
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
        event: {
          click: {
            title: '点击',
            val: "      console.log('测试打印当前组件json',$svg_item_info);\n      //执行callBack函数\n      $svgEventCallBack('回调类型',$svg_item_info.id,'测试回调订阅')\n      ",
            type: 'None'
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
        id: 'traction-transformerfjZhQwqGgt',
        x: 691,
        y: 372,
        client: {
          x: 691,
          y: 372
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
            x: 677.5708332061768,
            y: 344.91562843322754
          },
          tc: {
            x: 691,
            y: 344.91562843322754
          },
          tr: {
            x: 704.4291667938232,
            y: 344.91562843322754
          },
          l: {
            x: 677.5708332061768,
            y: 372
          },
          r: {
            x: 704.4291667938232,
            y: 372
          },
          bl: {
            x: 677.5708332061768,
            y: 399.08437156677246
          },
          bc: {
            x: 691,
            y: 399.08437156677246
          },
          br: {
            x: 704.4291667938232,
            y: 399.08437156677246
          }
        },
        temp: {
          x: 706,
          y: 262
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
        event: {
          click: {
            title: '点击',
            val: "      console.log('测试打印当前组件json',$svg_item_info);\n      //执行callBack函数\n      $svgEventCallBack('回调类型',$svg_item_info.id,'测试回调订阅')\n      ",
            type: 'None'
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
        id: 'straight-lineMBvDpO0uGt',
        x: 50,
        y: 50,
        client: {
          x: 512,
          y: 183
        },
        scale_x: 1,
        scale_y: 1,
        rotate: 0,
        actual_bound: {
          // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
          x: 512.0833129882812,
          y: 181,
          width: 0,
          height: 0
        },
        point_coordinate: {
          tl: {
            x: -48,
            y: 22.5
          },
          tc: {
            x: 50,
            y: 22.5
          },
          tr: {
            x: 148,
            y: 22.5
          },
          l: {
            x: -48,
            y: 50
          },
          r: {
            x: 148,
            y: 50
          },
          bl: {
            x: -48,
            y: 77.5
          },
          bc: {
            x: 50,
            y: 77.5
          },
          br: {
            x: 148,
            y: 77.5
          }
        },
        temp: {
          x: 512,
          y: 183
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
                x: 485.08333587646484,
                y: 157
              },
              {
                x: 691,
                y: 344.91562843322754
              }
            ]
          }
        },
        animations: {
          type: {
            title: '动画类型',
            type: 'Select',
            val: 'None',
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
          start: {
            type: 'Right',
            target_id: 'alternatormG6S5J1Nkx',
            init: {
              x: 485.08333587646484,
              y: 157
            }
          },
          end: {
            type: 'TopCenter',
            target_id: 'traction-transformerfjZhQwqGgt',
            init: {
              x: 691,
              y: 344.91562843322754
            }
          }
        }
      }
    ],
    thumbnail: ''
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
