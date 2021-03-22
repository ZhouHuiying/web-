<template>
  <div>
    <button @click="up">升序</button> <button @click="down">降序</button> <button @click="back">复原</button>
    <ul>
      <li v-for="item in tableData" :key="item.id">
        这个学生叫{{item.name}},他今年{{item.age}}岁了！
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stateData: [
        {name: '张三', age: 18, id: 1},
        {name: '张四', age: 12, id: 2},
        {name: '李四', age: 20, id: 3},
        {name: '王五', age: 18, id: 4},
        {name: '赵六', age: 18, id: 5},
        {name: '大白', age: 20, id: 6},
        {name: '小红', age: 10, id: 7},
      ],
      tableData: [],
    }
  },
  created() {
    this.back();
  },
  methods: {
    up() {
      this.tableData.sort((a, b) => {return a.age - b.age})
    },
    down() {
      this.tableData.sort((a, b) => {return b.age - a.age})
    },
    back() {
      this.tableData = JSON.parse(JSON.stringify(this.stateData));
    }
  }
}
</script>

<style>

</style>