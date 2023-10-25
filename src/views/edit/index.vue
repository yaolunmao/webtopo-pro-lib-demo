<template>
  <div>
    <webtopo-svg-edit-pro @on-return="onReturn" @on-preview="onPreview" @on-save="onSave"></webtopo-svg-edit-pro>
    <el-dialog v-model="dialog_visiable" :fullscreen="true" destroy-on-close>
      <preview :preview-data="preview_data"></preview>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import type { IDataModel, IDeviceInfo } from '../../types';
import { ref, unref } from 'vue';
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
</script>