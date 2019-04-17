第一步:在main.js或者组件页面中引入DatetimePicker

```
第一步:在main.js或者组件页面中引入DatetimePicker

import {DatetimePicker}from  "mint-ui"
Vue.component(DatetimePicker.name, DatetimePicker);

```

第二步:在.vue的文件下使用

```
HTML部分
  <label for="date" class="left">航班号日期</label>
  <input type="text"  @click="openPicker" id="date" v-model="dateTime" placeholder="航班号日期" >
                <mt-datetime-picker
                  ref="picker"
                  type="date"
                  v-model="pickerValue"
                  year-format="{value} 年"
                  month-format="{value} 月"
                  date-format="{value} 日"
                  @confirm="handleConfirm">
                </mt-datetime-picker>
                
JS部分   

	import formatTime from '@/utils/formatTime'
	
    data () {
    return {
    // startDate: new Date(new Date().getTime() - 3600 * 1000 * 24),
			// endDate: new Date(new Date().getTime() + 3600 * 1000 * 24 * 2),
      picker : '',
      pickerValue: '',
      dateTime: ''
    }
  },
  methods: {
    openPicker() {
      this.$refs.picker.open()
    },
    handleConfirm(val) {
      this.dateTime = val.toLocaleDateString()
      console.log(val)
    },


```

