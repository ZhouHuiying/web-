<template>
  <div>
    <!-- <button @click="up">升序</button> <button @click="down">降序</button> <button @click="back">复原</button> -->
  
    <button v-for="(item, index) in partList" :key="item.number" @click="choose(index + 1)">{{item.name}}</button>
    
    <ul>
      <li v-for="item in tableData" :key="item.id">
        这个学生叫{{item.name}},他今年{{item.age}}岁了！它的type为{{item.type}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partList: [
        {name: 'type1', number: 1},
        {name: 'type2', number: 2},
        {name: 'type3', number: 3},
      ],
      stateData: [
        {name: '张三', age: 18, id: 1, type: 1},
        {name: '张四', age: 12, id: 2, type: 2},
        {name: '李四', age: 20, id: 3, type: 3},
        {name: '王五', age: 18, id: 4, type: 2},
        {name: '赵六', age: 18, id: 5, type: 3},
        {name: '大白', age: 20, id: 6, type: 1},
        {name: '小红', age: 1, id: 7, type: 1},
      ],
      tableData: [],
    }
  },
  created() {
    this.back();
  },
  methods: {
    choose(index) {
      this.tableData = this.stateData.filter(val => val.type == index);
    },
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