 <template>
	<div>
		<el-select v-model="nameChecked" multiple placeholder="请选择">
			<el-option
			v-for="item in nameOptions"
			:key="item.value"
			:label="item.label"
			:value="item.value">
			</el-option>
		</el-select>
		<el-select v-model="typeChecked" multiple placeholder="请选择">
			<el-option
			v-for="item in typeOptions"
			:key="item.value"
			:label="item.label"
			:value="item.value">
			</el-option>
		</el-select>
		<el-select v-model="statusChecked" multiple placeholder="请选择">
			<el-option
			v-for="item in statusOptions"
			:key="item.value"
			:label="item.label"
			:value="item.value">
			</el-option>
		</el-select>

		<el-table :data="showTableList" style="width: 100%">
			<el-table-column prop="name" label="姓名" width="180"> </el-table-column>
			<el-table-column prop="type" label="班次"> </el-table-column>
			<el-table-column prop="staus" label="状态">
				<template slot-scope="scope">
					{{scope.row.status ? '启用': '禁用'}}
				</template>
			</el-table-column>
		</el-table>
	</div>
	
</template>

  <script>
export default {
	data() {
		return {
			nameOptions: [{
				value: 'a',
				label: 'a'
				}, {
				value: 'b',
				label: 'b'
				}, {
				value: 'c',
				label: 'c'
			}],
			nameChecked: [],
			statusOptions: [{
				value:  true,
				label: '启用'
				}, {
				value: false,
				label: '禁用'
				}],
			statusChecked: [],
			typeOptions: [{
				value: '早班',
				label: '早班'
				}, {
				value: '中班',
				label: '中班'
				}, {
				value: '晚班',
				label: '晚班'
			}],
			typeChecked: [],
			tableData: [
				{
				
					name: ['a', 'b', 'c'],
					type: '早班',
					status: true,
				},
				{
				
					name: ['a', 'c'],
					type: '晚班',
					status: true,
				},
				{
				
					name: ['c'],
					type: '早班',
					status: false,
				},
				{
				
					name: ['b'],
					type: '早班',
					status: true,
				},
				{
				
					name: ['b'],
					type: '中班',
					status: true,
				},
			]
		};
	},
	computed: {
		showTableList() {
			let arr = []
			this.tableData.forEach(item => {
				if (this.nameChecked.length) {
					if ([...new Set([...item.name, ...this.nameChecked])].length  == 
					this.nameChecked.length + item.name.length) {
						return false
					}
				}
				if (this.typeChecked.length) {
					if (this.typeChecked.indexOf(item.type) == -1) {
						return false
					}
				}
				if (this.statusChecked.length) {
					if (this.statusChecked.indexOf(item.status) == -1) {
						return false
					}
				}
				arr.push(item)
			})
			return arr
		}
	}
};
</script>