<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <div>{{item.name}}:{{item.content}}<button @click="comments(index)">回复</button></div>
          <div class="comments-2" v-for="(comments, commentsIndex) in item.comments" :key="commentsIndex">
            {{comments.name}}:{{comments.content}}
          </div>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {name: '小红', content: '留言', comments: []},
        {name: '张三', content: '留言', comments: []},
        {name: '小红', content: '留言', comments: []},
        {name: '小红', content: '留言', comments: []},
        {name: '小红', content: '留言', comments: []},
        {name: '小红', content: '留言', comments: []},
        {name: '小红', content: '留言', comments: []},
      ],
      temp: 1,
    }
  },
  methods: {
    comments(index) {
      console.log('调用api接口');
      let commentsArr = this.data[index].comments;
      let commentsObj = {name: '李四', content: `留言${this.temp++}`}
      commentsArr.push(commentsObj);
      this.$set(this.data[index], 'comments', commentsArr)
    }
  }
}
</script>

<style>
.comments-2 {
  text-indent: 1em;
}
</style>