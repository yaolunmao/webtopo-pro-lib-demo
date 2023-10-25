<template>
  <webtopo-svg-preview-pro ref="svgPreviewRef" :data-model="data_model" :canvas-drag="true"
    @on-event-call-back="onEventCallBack"></webtopo-svg-preview-pro>
</template>
<script setup lang="ts">
import { WebtopoSvgPreviewPro  } from 'webtopo-svg-edit-pro';
import 'webtopo-svg-edit-pro/dist/style.css';
import type { IDataModel } from '../../types';
import { type PropType, ref, unref } from 'vue';
import { useRoute } from 'vue-router';
const props = defineProps({
  previewData: {
    type: Object as PropType<IDataModel | null>,
    default: null
  }
});
const route = useRoute();
const svgPreviewRef = ref<InstanceType<typeof WebtopoSvgPreviewPro>>();
const data_model = ref<IDataModel | null>(null);
const onEventCallBack = (type: string, svg_item_id: string,...args: any[]) => {
  console.log(`触发了回调事件:回调类型:${type},触发的节点id:${svg_item_id},其他回调参数:${args}`);
};
if (props.previewData) {
  data_model.value = unref(props.previewData);
} else if (route.params.data_model) {
  data_model.value = JSON.parse(route.params.data_model as string);
}
</script>