<!-- eslint-disable vue/html-indent -->
<template>
  <div>
    <div class="flex justify-center">
      <div>
        <p class="mt-5">webtopo-svg-edit-pro demo演示页面</p>
      </div>
    </div>
    <div class="flex mt-10px justify-center">
      <el-popover placement="bottom" title="说明" :width="200" trigger="hover" :content="item.title"
        v-for="item in button_list" :key="item.name">
        <template #reference>
          <el-button type="primary" link :title="item.title" @click="item.onClick" style="height: 20px">{{ item.name
          }}</el-button>
        </template>
      </el-popover>
    </div>
    <div class="flex justify-center mt-80px">
      <el-card class="w-1/2">
        <template #header>
          <div class="card-header">
            <span>提示</span>
          </div>
        </template>
        <div class="flex justify-center">
          webtopo-svg-edit-pro插件版可免费使用，当前demo下载地址<a class="mx-2 hover:text-blue-400" href="https://github.com/yaolunmao/webtopo-pro-lib-demo"
            target="_blank">https://github.com/yaolunmao/webtopo-pro-lib-demo</a>
        </div>
      </el-card>
    </div>
    <div class="w-[calc(100%)] h-40px bottom-el-footer absolute bottom-10px">
      <bottom-panel></bottom-panel>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ElButton, ElPopover, ElCard } from 'element-plus';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import BottomPanel from '../components/bottom-panel/index.vue';
const router = useRouter();
const button_list: IButtonList[] = reactive([
  {
    name: '编辑器页面',
    title: '基础功能之编辑器页面',
    onClick: () => {
      router.push({
        name: 'edit',
        params: {}
      });
    }
  },
  {
    name: '编辑器(加载已有数据)',
    title: '模拟从数据库加载数据，编辑已有数据',
    onClick: () => {
      router.push({
        name: 'edit-load',
        params: {}
      });
    }
  },
  {
    name: '自定义左侧组件库',
    title: '用自己的组件库替换现有组件库，一般是插件方式集成到自己项目时使用',
    onClick: () => {
      router.push({
        name: 'custom-toolbar',
        params: {}
      });
    }
  },
  {
    name: '加载远程组件',
    title: '如果您的项目需要从服务器加载svg文件，可以使用此功能',
    onClick: () => {
      router.push({
        name: 'append-toolbar',
        params: {}
      });
    }
  },
  {
    name: '加载保存好的页面',
    title: '模拟从数据库加载数据，预览画好的页面',
    onClick: () => {
      router.push({
        name: 'preview-load',
        params: {}
      });
    }
  },
  {
    name: '设置节点属性',
    title: '从插件外部设置节点属性',
    onClick: () => {
      router.push({
        name: 'set-node-attr',
        params: {}
      });
    }
  },
  {
    name: '设备绑定',
    title: '使用编辑器自带设备绑定功能',
    onClick: () => {
      router.push({
        name: 'device-bind',
        params: {}
      });
    }
  },
  {
    name: '自定义设备绑定',
    title: '如果自带的设备绑定满足不了需求，可以使用插槽自己设计绑定页面，选中组件后查看右侧绑定选项卡，观察变化',
    onClick: () => {
      router.push({
        name: 'device-bind-custom',
        params: {}
      });
    }
  },
  {
    name: '组件事件',
    title: '自定义组件可以触发的事件，绘制好图像后请在预览页查看事件调用结果',
    onClick: () => {
      router.push({
        name: 'custom-event',
        params: {}
      });
    }
  }
]);
interface IButtonList {
  name: string;
  title: string;
  onClick: () => void;
}
</script>
<style scoped>
.bottom-el-footer {
  box-shadow: 0px -1px 0px 0px #dfcfcf;
}
</style>
  