

<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" label-position="left">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
          <el-option lable="Income" value="INCOME"></el-option>
          <el-option lable="Outcome" value="OUTCOME"></el-option>
        </ElSelect>
      </ElFormItem>
      <el-form-item label="Comments" prop="comment">
        <el-input v-model="formData.comments"/>
      </el-form-item>
      <el-form-item label="Value" prop="value">
        <el-input v-model.number="formData.value"/>
      </el-form-item>
      <el-button @click="onSubmit"  type='primary'  >Submit</el-button>
    </ElForm>
  </ElCard>
</template>

<script>
import { mapActions } from 'vuex';


export default  {


  name: 'Form',
  data: () => ({
    formData: {
      type: '',
      comments: '',
      value: ''
    },
    rules: {
      type: [
        {required: true, message: 'Введите значение', trigger: 'blur'},
      ],
      comments: [{
        required: true, message: 'Введите значение', trigger: 'blur'
      }],
      value: [
        { required: true, message: 'Введите значение', trigger: 'change'},
        { type: 'number', message: 'Должно быть число', trigger: 'change'}
      ]
    }
  }),


methods: {
  ...mapActions('data', ['onFormSubmit']),


    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.onFormSubmit(this.formData);
          // this.$emit("submitForm", {...this.formData});
          this.$refs.addItemForm.resetFields();

        }
      });
    }
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}

</style>