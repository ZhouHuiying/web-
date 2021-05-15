<template>
  <div v-loading="loading">
    <div class="right">
      <div class="content">
        <el-tabs v-model="activeName">
          <el-tab-pane label="配件" name="1" />
          <el-tab-pane label="产品" name="2" />
          <el-tab-pane label="技术成果" name="3" />
          <el-tab-pane label="需求" name="101" />
          <el-tab-pane label="创新" name="-1">
            <div class="innoOut">
              <div class="top flex">
                <div
                  :class=" 'tab '+(active === 11 ? 'active' : '') "
                  @click="() => {active = 11}">专家创新
                </div>
                <div
                  :class="'tab '+(active === 12 ? 'active' : '')"
                  @click="
                    () => {active = 12}" >企业创新
                </div>
                <div
                  :class="'tab '+(active === 13 ? 'active' : '')"
                  @click=" () => { active = 13;}"> 行业创新
                </div>
                <div
                  :class="'tab '+(active === 14 ? 'active' : '')"
                  @click=" () => { active = 14;}"> 场景创新
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="服务" name="-2">
              <div class="serOut">
                <div class="top flex">
                  <div
                    :class=" 'tab '+(active === 21 ? 'active' : '') "
                    @click="() => {active = 21}">知识产权
                  </div>
                  <div
                    :class=" 'tab '+(active === 22 ? 'active' : '') "
                    @click="() => {active = 22}">工业互联网
                  </div>
                  <div
                    :class=" 'tab '+(active === 23 ? 'active' : '') "
                    @click="() => {active = 23}">企业信息化
                  </div>
                  <div
                    :class=" 'tab '+(active === 24 ? 'active' : '') "
                    @click="() => {active = 24}">生产自动化
                  </div>
                  <div
                    :class=" 'tab '+(active === 25 ? 'active' : '') "
                    @click="() => {active = 25}">专家资源
                  </div>
                </div>
              </div>
            </el-tab-pane>
        </el-tabs>
        <div v-if="parseInt(activeName)>0" class="partOut">
          <pagination-page ref="pagination" :page-change="pageChange">
            <div
              class="partList flex"
              v-for="item of partList"
              :key="item.id">
              <div class="flex" @click="(item.productList)" style="cursor: pointer;width: calc(100% - 80px)">
                <div class="image">
                  <img :src="item.productList.images" />
                </div>
                <div class="rightContent">
                  <div class="top flex">
                    <div class="title">{{ item.productList.name }}</div>
                  </div>
                  <div class="price">￥{{ item.productList.price }}</div>
                </div>
              </div>
              <div class="star" @click="star(item.productList.id)">
                取消收藏
              </div>
            </div>
          </pagination-page>
        </div>
        <div v-if="parseInt(activeName)===-1" class="innoOut">
          <pagination-page ref="pagination2" :page-change="pageChange">
            <div
              class="innoList flex"
              v-for="item of innoList"
              :key="item.id"
            >
              <div class="flex" @click="toArticleDetail(item.articleList)" style="cursor: pointer;width: calc(100% - 80px)">
                <div class="image">
                  <img :src="item.articleList.headImg" />
                </div>
                <div class="right">
                  <div class="top flex">
                    <div class="title">{{ item.articleList.title }}</div>
                  </div>
                  <div class="star" @click="star1(item.articleList.id)">
                    取消收藏
                  </div>
                </div>
              </div>
            </div>
          </pagination-page>
        </div>
        <div v-if="parseInt(activeName)===-2" class="serOut">
          <pagination-page ref="pagination3" :page-change="eChange">
          <div
            class="knowList flex"
            v-for="item of knowList"
            :key="item.id"
          >
            <div class="flex" @click="detail(item.articleList)" style="cursor: pointer;width: calc(100% - 80px)">
              <div class="image">
                <img :src="item.articleList.headImg" />
              </div>
              <div class="right">
                <div class="top flex">
                  <div class="title">{{ item.articleList.title }}</div>
                </div>
                <div class="star" @click="star1(item.articleList.id)">
                  取消收藏
                </div>
              </div>
            </div>
          </div>
          </pagination-page>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, set , watch } from '@vue/composition-api';
import { CollectionDel, CollectionList } from '@/dao/collection';
import { Message } from 'element-ui';
import {router} from '@/main';
import {useLoading} from 'web-toolkit/src/service/index';
import {toProductDetail, toArticleDetail} from '@/utils';
export default {
  setup() {
    const loading = ref<any>(false);
    const sks = ref<any>();
    const partList = ref<any>([]);
    const innoList = ref<any>([]);
    const knowList = ref<any>([]);
    const active = ref<any>();
    const page = ref<number>(1);
    const activeName = ref<any>('1');
    const pagination = ref<any>();
    const pagination2 = ref<any>();
    const pagination3 = ref<any>();

    watch(active, useLoading(loading, async function() {
      const sks = active.value;
      switch (sks) {
        case 11:
        case 12:
        case 13:
        case 14:
          await pagination2.value.pageChangeHandle(1);
          break;
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
          await pagination3.value.pageChangeHandle(1);
          break;
      }
    }));

    watch(activeName, useLoading(loading, async function() {
      const sks = parseInt(activeName.value);
      if (sks > 0 ) {
        await pagination.value.pageChangeHandle(1);
      } else if (sks === -1) {
        active.value = 11;
      } else if (sks === -2) {
        active.value = 21;
      }
    }));
    
    //当页码变化时会触发pageChange函数，调用接口重新查询数据；
    async function pageChange(page: any) {
      let data = {}as any;
      const type = parseInt(activeName.value);
      await useLoading(loading, async function() {
        if (type > 0) {
          data = await CollectionList({
            targetType: 2,
            type,
            page,
          });
          partList.value = data.data;
        } else if (type === -1) {
          data = await CollectionList({
            targetType: 1,
            type: active.value,
          });
          innoList.value = data.data;
        } else if (type === -2) {
          data = await CollectionList({
            targetType: 1,
            type: active.value,
          });
          knowList.value = data.data;
        }
      })();
      return {
        pageCount: data.totalPage,
        data: data.data,
      };
    }

    onMounted(useLoading(loading, async () => {
      await pagination.value.pageChangeHandle(1);
      page.value = 1;
    }));
    return {
      toProductDetail: useLoading(loading, toProductDetail),
      toArticleDetail: useLoading(loading, toArticleDetail),
      loading, pageChange, sks,
      pagination, pagination2, pagination3, partList,
      active, innoList, knowList,
      activeName,
      onMounted,

    };
  },
};
</script>
<style scoped lang="scss">
  .right {
    width: 97%;
    background-color: #fff;
    margin: 0 auto 0 20px;
    .content {
      width: 96%;
      margin: 20px auto 0;

      .partOut {
        .partList {
          height: 90px;
          border: 1px solid rgba(238, 238, 238, 1);
          margin-bottom: 20px;

          .image {
            img {
              width: 120px;
              height: 90px;
            }
          }

          .rightContent {
            margin-left: 8px;

            .top {
              position: relative;
              .title {
                margin-top: 5px;
                font-size: 14px;
                font-weight: 500;
                color: rgba(46, 51, 57, 1);
              }
              .image1 {
                position: absolute;
                margin-top: 5px;
                margin-left: 770px;

                .see {
                  font-size: 12px;
                  font-weight: 400;
                  color: rgba(103, 109, 116, 1);
                  margin-left: 3px;
                }
              }
            }

            .price {
              font-size: 20px;
              font-weight: bold;
              color: rgba(245, 110, 63, 1);
              margin-top: 8px;
            }
          }

          .star {
            color: #ffffff;
            cursor: pointer;
            text-align: center;
            width: 72px;
            height: 22px;
            margin-left: auto;
            margin-top: 20px;
            background: rgba(245, 110, 63, 1);
            border-radius: 2px;
          }
        }

        .page {
          display: flex;
          justify-content: center;
          margin: 60px auto 0;
          padding-bottom: 100px;
        }
      }

      .innoOut {
        .innoList {
          height: 90px;
          border: 1px solid rgba(238, 238, 238, 1);
          margin-bottom: 20px;

          .image {
            img {
              width: 120px;
              height: 90px;
            }
          }

          .rightContent {
            margin-left: 8px;

            .top {
              position: relative;

              .title {
                margin-top: 5px;
                font-size: 14px;
                font-weight: 500;
                color: rgba(46, 51, 57, 1);
              }

              .image1 {
                position: absolute;
                margin-top: 5px;
                margin-left: 770px;

                .see {
                  font-size: 12px;
                  font-weight: 400;
                  color: rgba(103, 109, 116, 1);
                  margin-left: 3px;
                }
              }
            }

            .price {
              font-size: 20px;
              font-weight: bold;
              color: rgba(245, 110, 63, 1);
              margin-top: 8px;
            }
          }

          .star {
            color: #ffffff;
            cursor: pointer;
            text-align: center;
            width: 72px;
            height: 22px;
            margin-left: auto;
            margin-top: 20px;
            background: rgba(245, 110, 63, 1);
            border-radius: 2px;
          }
        }
        .top {
          .tab {
            cursor: pointer;
            width: 80px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            border-radius: 2px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(46, 51, 57, 1);
          }

          .active {
            color: #fff;
            background: rgba(25, 142, 248, 1);
          }
        }
      }

      .serOut {
        .knowList {
          height: 90px;
          border: 1px solid rgba(238, 238, 238, 1);
          margin-bottom: 20px;

          .image {
            img {
              width: 120px;
              height: 90px;
            }
          }

          .rightContent {
            margin-left: 8px;

            .top {
              position: relative;

              .title {
                margin-top: 5px;
                font-size: 14px;
                font-weight: 500;
                color: rgba(46, 51, 57, 1);
              }

              .image1 {
                position: absolute;
                margin-top: 5px;
                margin-left: 770px;

                .see {
                  font-size: 12px;
                  font-weight: 400;
                  color: rgba(103, 109, 116, 1);
                  margin-left: 3px;
                }
              }
            }

            .price {
              font-size: 20px;
              font-weight: bold;
              color: rgba(245, 110, 63, 1);
              margin-top: 8px;
            }
          }

          .star {
            color: #ffffff;
            cursor: pointer;
            text-align: center;
            width: 72px;
            height: 22px;
            margin-left: auto;
            margin-top: 20px;
            background: rgba(245, 110, 63, 1);
            border-radius: 2px;
          }
        }
        .top {
          .tab {
            cursor: pointer;
            width: 80px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            border-radius: 2px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(46, 51, 57, 1);
          }

          .active {
            color: #fff;
            background: rgba(25, 142, 248, 1);
          }
        }
      }
    }
  }
</style>







