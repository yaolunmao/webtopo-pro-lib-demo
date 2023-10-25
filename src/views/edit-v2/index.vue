<!-- eslint-disable @typescript-eslint/no-loss-of-precision -->
<template>
  <webtopo-svg-edit-pro @on-return="onReturn" @on-preview="onPreview" @on-save="onSave" @on-device-bind="onDeviceBind"
    :data-model="import_model" :device-info="load_device_info"></webtopo-svg-edit-pro>
</template>
<script setup lang="ts">
import { IDataModel } from '../../types';
import { onMounted, onUnmounted, ref } from 'vue';
import { WebtopoSvgEditPro } from 'webtopo-svg-edit-pro';
import 'webtopo-svg-edit-pro/dist/style.css';
const import_model = ref();
const load_device_info = ref();
const wujie_props = window.$wujie?.props;

const onReturn = () => {
  wujie_props.onReturn();
};
const onPreview = (data_model: IDataModel) => {
  wujie_props.onPreview(data_model);
};
const onSave = (data_model: IDataModel) => {
  wujie_props.onSave(data_model);
};
const onDeviceBind = (...args: any[]) => {
  wujie_props.onEditDeviceBind(...args);
};
onMounted(() => {
  window.$wujie?.bus.$on('onImportData', function (model: any, device_info: any) {
    import_model.value = model;
    load_device_info.value = device_info;
  });
  wujie_props.onEditMounted();
});
onUnmounted(() => {
  window.$wujie?.bus.$off('onImportData');
});
</script>
