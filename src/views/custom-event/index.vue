<template>
    <div>
        <webtopo-svg-edit-pro @on-return="onReturn" @on-preview="onPreview" @on-save="onSave"
            :custom-tool-bar="setCustomToolBar"></webtopo-svg-edit-pro>
        <el-dialog v-model="dialog_visiable" :fullscreen="true" destroy-on-close>
            <preview :preview-data="preview_data"></preview>
        </el-dialog>
    </div>
</template>
<script setup lang="ts">
import { type IDataModel, type IConfigCenter, EDoneJsonType, EConfigItemPropsType, EConfigItemEventType } from '../../types';
import { ref, unref } from 'vue';
import { useRouter } from 'vue-router';
import { WebtopoSvgEditPro } from 'webtopo-svg-edit-pro';
import { ElDialog } from 'element-plus';
import 'webtopo-svg-edit-pro/dist/style.css';
import Preview from '../preview/index.vue';
//绘制好图像后请在预览页查看事件调用结果
const setCustomToolBar = ref<IConfigCenter>({
    自定义组件事件: [
        {
            groupType: 'svg',
            title: 'svg',
            list: [
                {
                    name: 't-logo',
                    title: 'click测试',
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
                    },
                    event: {
                        click: {
                            "title": "点击",
                            "val": "      \n      $svgElMessage.success(\"打开控制台查看输出结果\")\n      console.log('测试打印当前组件json',$svg_item_info);\n      //执行callBack函数\n      $svgEventCallBack('testClick',$svg_item_info.id,'测试回调订阅','测试多参数','还能传')\n      ",
                            "type": EConfigItemEventType.Custom
                        }
                    },
                }
            ]
        },
        {
            groupType: 'vue',
            title: 'vue组件',
            list: [
                {
                    name: 'el-button',
                    title: 'mouseover',
                    tag: 'el-button',
                    type: EDoneJsonType.Vue,
                    config: {
                        can_zoom: true,
                        have_anchor: true,
                        actual_rect: true
                    },
                    display: true,
                    props: {

                    },
                    tag_slot: '鼠标移入',
                    event: {
                        mouseover: {
                            "title": "鼠标移入",
                            "val": "      \n      $svgElMessage.success(\"打开控制台查看输出结果\")\n      console.log('测试打印当前组件json',$svg_item_info);\n      //执行callBack函数\n      $svgEventCallBack('testClick',$svg_item_info.id,'测试回调订阅','测试多参数','还能传')\n      ",
                            "type": EConfigItemEventType.Custom
                        }
                    },
                }
            ]
        }
    ]
});
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
  