<template>
  <div>
    <!-- 选中组件后查看右侧绑定选项卡，观察变化 -->
    <webtopo-svg-edit-pro @on-return="onReturn" @on-save="onSave">
      <template #deviceBind="{ item }">
        <el-button @click="customDeviceBind(item)">点击配置</el-button>
      </template>
    </webtopo-svg-edit-pro>
    <el-dialog v-model="dialog_visiable">
      <div>在这里可以自己写好设备列表页面，最终只要保证可以把节点的id和属性与设备的id和属性进行绑定就好，下面是选中节点的信息</div>
      <div>{{ node_info }}</div>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import type { IDataModel, IDeviceInfo } from '../../types';
import { reactive, ref, unref } from 'vue';
import { useRouter } from 'vue-router';
import { WebtopoSvgEditPro } from 'webtopo-svg-edit-pro';
import 'webtopo-svg-edit-pro/dist/style.css';
import { ElDialog, ElButton } from 'element-plus';
import Preview from '../preview/index.vue';
const router = useRouter();
const preview_data = ref();
const dialog_visiable = ref(false);
const node_info = ref();
const onReturn = () => {
  console.log('点击了返回按钮');
  router.go(-1);
};
const customDeviceBind = (item: IDataModel) => {
  node_info.value = item;
  dialog_visiable.value = true;
};
const onSave = (data_model: IDataModel) => {
  console.log('点击了保存按钮，可以在此处将图存到数据库', data_model);
};
</script>