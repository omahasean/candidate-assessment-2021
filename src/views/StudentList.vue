<template>
  <div>
    <div></div>
  </div>
</template>

<script>
// import StudentService from '../services/StudentService';

export default {
  data() {
    return {
      studentList: [],
    };
  },
  props: {
    exerciseId: Number,
  },

  //   async created() {
  //     const studentService = new StudentService();
  //     this.studentList = await studentService.searchScoresByLessonId(
  //       this.exerciseId
  //     );
  //   },
};
</script>

<style scoped>
.exercise {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #add8e6;
  width: 100%;
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
}

.exercise:hover {
  background-color: rgba(1, 141, 255, 0.1);
}
.stripe {
  background-color: #f5f5f5;
}
</style>
