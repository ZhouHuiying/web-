<template>
  <div v-loading="loading">
    <slot />
    <kit-empty v-if="dataList.length===0" style="height: 500px">暂无内容</kit-empty>
    <el-pagination
      style="padding: 1.5rem 0 1rem 0;text-align: center;"
      layout="prev, pager, next, jumper, total"
      :current-page="currentPage"
      @current-change="pageChangeHandle"
      :page-count="pageCount"
    ></el-pagination>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, set} from '@vue/composition-api';
import {useLoading} from 'web-toolkit/src/service/use-decrator';
export default {
  props: {
    // 服务端分页处理函数(参数currentPage)，必须返回 {data, pageCount}
    pageChange: {
      type: Function,
      default: async () => {},
    },
  },
  setup(props: any) {
    const loading = ref<boolean>(false);
    const dataList = ref<any[]>([]);
    const pageCount = ref<number>(1);
    const currentPage = ref<number>(1);

    // 同时也作为外部触发
    async function pageChangeHandle(page: any) {
      currentPage.value = page;
      const data = await props.pageChange(page);
      dataList.value = data.data;
      pageCount.value = data.pageCount;
    }
    onMounted(useLoading(loading, async () => {

    }));
    return{
      loading, pageCount, currentPage, dataList,
      pageChangeHandle,
    };
  },
};
</script>
<style scoped lang="scss">

</style>
