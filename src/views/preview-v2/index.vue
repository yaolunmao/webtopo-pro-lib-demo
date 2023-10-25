<template>
  <webtopo-svg-preview-pro ref="svgPreviewRef" :data-model="data_model" :canvas-drag="true"
    @on-event-call-back="onEventCallBack"></webtopo-svg-preview-pro>
</template>
<script setup lang="ts">
import { WebtopoSvgPreviewPro } from 'webtopo-svg-edit-pro';
import 'webtopo-svg-edit-pro/dist/style.css';
import { onMounted, onUnmounted, ref } from 'vue';
const svgPreviewRef = ref();
const data_model = ref<any>();
const wujie_props = window.$wujie?.props;
const onEventCallBack = (...args: any) => {
  wujie_props.onEventCallBack(...args);
};
onMounted(() => {
  window.$wujie?.bus.$on('onImportPreviewData', function (model: any) {
    data_model.value = model;
  });
  window.$wujie?.bus.$on('setNodeAttr', function (data: any) {
    svgPreviewRef.value.setNodeAttr(data);
  });
  window.$wujie?.bus.$on('setNodeAttrByID', function (data: any) {
    svgPreviewRef.value.setNodeAttrByID(...data);
  });
  wujie_props.onPreviewMounted();
});
onUnmounted(() => {
  window.$wujie?.bus.$off('onImportPreviewData');
  window.$wujie?.bus.$off('setNodeAttr');
  window.$wujie?.bus.$off('setNodeAttrByID');
});
</script>
