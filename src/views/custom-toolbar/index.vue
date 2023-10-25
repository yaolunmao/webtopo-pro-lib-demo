<template>
  <webtopo-svg-edit-pro @on-return="onReturn" @on-preview="onPreview" @on-save="onSave"
    :custom-tool-bar="setCustomToolBar"></webtopo-svg-edit-pro>
</template>
<script setup lang="ts">
import { type IDataModel, type IConfigCenter, EDoneJsonType, EConfigItemPropsType } from '../../types';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { WebtopoSvgEditPro } from 'webtopo-svg-edit-pro';
import 'webtopo-svg-edit-pro/dist/style.css';
const setCustomToolBar = ref<IConfigCenter>({
  测试注入组件: [
    {
      groupType: 'element-ui',
      title: 'element-ui',
      list: [
        {
          name: 'el-button',
          tag: 'el-button',
          title: '按钮',
          type: EDoneJsonType.Vue,
          config: {
            can_zoom: true,
            have_anchor: true,
            actual_rect: true
          },
          display: true,
          props: {
            size: {
              title: '尺寸',
              type: EConfigItemPropsType.Select,
              val: 'default',
              options: [
                {
                  label: '大',
                  value: 'large'
                },
                {
                  label: '默认',
                  value: 'default'
                },
                {
                  label: '小',
                  value: 'small'
                }
              ]
            },
            type: {
              title: '类型',
              type: EConfigItemPropsType.Select,
              val: 'primary',
              options: [
                {
                  label: '主要按钮',
                  value: 'primary'
                },
                {
                  label: '成功按钮',
                  value: 'success'
                },
                {
                  label: '警告按钮',
                  value: 'warning'
                },
                {
                  label: '危险按钮',
                  value: 'danger'
                },
                {
                  label: '信息按钮',
                  value: 'info'
                }
              ]
            },
            plain: {
              title: '朴素按钮',
              type: EConfigItemPropsType.Switch,
              val: false
            },
            text: {
              title: '文字按钮',
              type: EConfigItemPropsType.Switch,
              val: false
            }
          },
          tag_slot: '按钮'
        }
      ]
    },
    {
      groupType: 'svg',
      title: 'svg',
      list: [
        {
          name: 't-logo',
          title: 't-logo',
          tag: 't-logo',
          type: EDoneJsonType.File,
          config: {
            can_zoom: true,
            have_anchor: true,
            actual_rect: true
          },
          display: true,
          props: {
            fill: {
              title: '底部颜色',
              type: EConfigItemPropsType.Color,
              val: "#00ff00"
            }
          }
        }
      ]
    }
  ]
});
const router = useRouter();
const onReturn = () => {
  console.log('点击了返回按钮');
  router.go(-1);
};
const onPreview = (data_model: IDataModel) => {
  router.push({
    name: 'preview',
    params: { data_model: JSON.stringify(data_model) }
  });
};
const onSave = (data_model: IDataModel) => {
  console.log('点击了保存按钮，可以在此处将图存到数据库', data_model);
};
</script>
