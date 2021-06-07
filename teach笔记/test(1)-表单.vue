<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="province" label="省份" width="120"></el-table-column>
      <el-table-column prop="city" label="市区" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="日期" prop="date">
          <el-input v-model="ruleForm.date"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
		<el-form-item label="省份" prop="province">
          <el-input v-model="ruleForm.province"></el-input>
        </el-form-item>
		<el-form-item label="地区" prop="city">
          <el-input v-model="ruleForm.city"></el-input>
        </el-form-item>
		<el-form-item label="地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
		<el-form-item label="邮编" prop="zip">
          <el-input v-model="ruleForm.zip"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
		this.dialogVisible = true
		this.ruleForm.date = row.date;
		this.ruleForm.name = row.name;
		this.ruleForm.province = row.province;
		this.ruleForm.city = row.city;
		this.ruleForm.address = row.address;
		this.ruleForm.zip = row.zip;
    }
  },
  data() {
    return {
      ruleForm: {
        date: "",
        name: "",
        province: "",
        city: "",
        address: "",
        zip: ""
      },
      rules: {
        date: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        province: [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ],
        city: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        address: [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ],
        zip: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
      },
      dialogVisible: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>