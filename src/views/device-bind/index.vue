<template>
  <div>
    <webtopo-svg-edit-pro @on-return="onReturn" @on-preview="onPreview" @on-save="onSave" @on-device-bind="onDeviceBind"
      :device-info="deviceInfo"></webtopo-svg-edit-pro>
    <el-dialog v-model="dialog_visiable" :fullscreen="true" destroy-on-close>
      <preview :preview-data="preview_data"></preview>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import type { IDataModel, IDeviceInfo } from '../../types';
import { reactive, ref, unref } from 'vue';
import { useRouter } from 'vue-router';
import { WebtopoSvgEditPro } from 'webtopo-svg-edit-pro';
import 'webtopo-svg-edit-pro/dist/style.css';
import { ElDialog } from 'element-plus';
import Preview from '../preview/index.vue';
const router = useRouter();
const preview_data = ref();
const dialog_visiable = ref(false);
const onReturn = () => {
  console.log('点击了返回按钮');
  router.go(-1);
};
const onPreview = (data_model: IDataModel) => {
  preview_data.value = unref(data_model);
  dialog_visiable.value = true;
};
const onSave = (data_model: IDataModel) => {
  console.log('点击了保存按钮，可以在此处将图存到数据库', data_model);
};
const onDeviceBind = (type: number, data: any) => {
  console.log('触发了设备绑定', type, data);
  if (type == 1) {
    //在这里将设备id和节点id绑定到一起，可以存到数据库
    //--假如我已经存到数据库了 接下来更新页面绑定状态
    deviceInfo.bind_device_list.push({
      bind_node_id: data.bind_node_id,
      bind_node_prop: data.bind_node_prop,
      device_id: data.device_id,
      device_prop: data.device_prop
    })
  }
  else {
    //在这里将设备id和节点id进行解绑，可以存到数据库
    //--假如我已经存到数据库了 接下来更新页面绑定状态
    const index= deviceInfo.bind_device_list.findIndex((item: any) => {
      return item.bind_node_id == data.bind_node_id &&
        item.bind_node_prop == data.bind_node_prop &&
        item.device_id == data.device_id &&
        item.device_prop == data.device_prop
    });
    if(index !== -1){
      deviceInfo.bind_device_list.splice(index,1)
    }

  }
};
// 把所有设备和已经绑定的设备传递给编辑器
const deviceInfo = reactive<IDeviceInfo>({
  device_list: [
    {
      id: '1',
      name: 'a牌-测试001设备',
      prop_list: [
        {
          label: '电压值',
          value: 'voltage'
        },
        {
          label: '开关状态',
          value: 'onOff'
        }
      ]
    },
    {
      id: '2',
      name: 'a牌-测试002设备',
      prop_list: [
        {
          label: '电压值',
          value: 'voltage'
        },
        {
          label: '开关状态',
          value: 'onOff'
        }
      ]
    },
    {
      id: '3',
      name: 'a牌-测试003设备',
      prop_list: [
        {
          label: '电压值',
          value: 'voltage'
        },
        {
          label: '开关状态',
          value: 'onOff'
        }
      ]
    },
    {
      id: '4',
      name: 'a牌-测试004设备',
      prop_list: [
        {
          label: '电压值',
          value: 'voltage'
        },
        {
          label: '开关状态',
          value: 'onOff'
        }
      ]
    },
    {
      id: '5',
      name: 'a牌-测试005设备',
      prop_list: [
        {
          label: '电压值',
          value: 'voltage'
        },
        {
          label: '开关状态',
          value: 'onOff'
        }
      ]
    },
    {
      id: '6',
      name: 'b牌-测试001设备',
      prop_list: [
        {
          label: '开关状态',
          value: 'onOff'
        }
      ]
    },
    {
      id: '7',
      name: 'b牌-测试002设备',
      prop_list: [
        {
          label: '开关状态',
          value: 'onOff'
        }
      ]
    },
    {
      id: '8',
      name: 'b牌-测试003设备',
      prop_list: [
        {
          label: '开关状态',
          value: 'onOff'
        }
      ]
    },
    {
      id: '9',
      name: 'b牌-测试004设备',
      prop_list: [
        {
          label: '开关状态',
          value: 'onOff'
        }
      ]
    },
    {
      id: '10',
      name: 'b牌-测试005设备',
      prop_list: [
        {
          label: '开关状态',
          value: 'onOff'
        }
      ]
    }
  ],
  bind_device_list: [
    {
      bind_node_id: 'el-buttontEsyfrJMBa',
      bind_node_prop: 'props.plain.default',
      device_id: '1',
      device_prop: 'onOff'
    }
  ]
});
</script>