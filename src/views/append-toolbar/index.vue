<template>
  <div>
    <webtopo-svg-edit-pro
      @on-return="onReturn"
      @on-preview="onPreview"
      @on-save="onSave"
      :append-toolbar="appendToolbar"
      :append-symbol="appendSymbol"
    ></webtopo-svg-edit-pro>
    <el-dialog v-model="dialog_visiable" :fullscreen="true" destroy-on-close>
      <preview :preview-data="preview_data"></preview>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
  import { EConfigItemPropsType, type IAppendSymbol,type IDataModel } from '../../types';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { WebtopoSvgEditPro } from 'webtopo-svg-edit-pro';
  import 'webtopo-svg-edit-pro/dist/style.css';
  import { ElDialog } from 'element-plus';
  import Preview from '@/views/preview/index.vue';
  const router = useRouter();
  const onReturn = () => {
    console.log('点击了返回按钮');
    router.go(-1);
  };
  const dialog_visiable = ref(false);
  const preview_data = ref();
  const onPreview = (data_model: IDataModel) => {
    preview_data.value = data_model;
    dialog_visiable.value = true;
  };
  const onSave = (data_model: IDataModel) => {
    console.log('点击了保存按钮，可以在此处将图存到数据库', data_model);
  };
  const appendToolbar = ref<any>({
    svg文件: [
      {
        groupType: 'stateless',
        title: '电力系统',
        list: [
          {
            name: 'test',
            title: '动态新增svg',
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
                type: EConfigItemPropsType.Color,
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
            },
            img: {
              width: 100,
              height: 100,
              url: 'http://testpro.yaolm.top/testimg.jpg'
            }
          },
          {
            name: 'testimg',
            title: '动态新增图片',
            type: 'Image',
            config: {
              can_zoom: true,
              have_anchor: true,
              actual_rect: true
            },
            display: true,
            props: {},
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
            },
            img: {
              width: 100,
              height: 100,
              url: 'http://testpro.yaolm.top/testimg.jpg'
            }
          }
        ]
      }
    ]
  });
  /**
   * 注意，开启此功能需要修改vite.config.ts文件将此项目开启运行时编译，
   * 还需要修改index.html，为动态添加的文件提供webtopo__svgedit__icons__dynamic__dom__载体
   */
  const appendSymbol = ref<IAppendSymbol[]>([
    {
      id: 'test',
      svg_url: 'http://testpro.yaolm.top/test.svg',
      width: '100',
      height: '100'
    }
  ]);
</script>
