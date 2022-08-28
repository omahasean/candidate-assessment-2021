<template>
  <div>
    <h1>{{ this.exercise.name }}</h1>
    <card class="exercises">
      <student-list :exerciseId="this.exercise.id" />
    </card>
  </div>
</template>
<script>
import Card from '@/components/ui/Card';
import ExerciseService from '../services/ExerciseService';
import StudentList from './StudentList.vue';

export default {
  data() {
    return {
      exercise: {},
    };
  },
  async created() {
    console.log(this.$route.params);
    const exerciseService = new ExerciseService();
    this.exercise = await exerciseService.searchExerciseById(
      this.$route.params.id
    );
    console.log(this.exercise);
  },
  components: { Card, StudentList },
};
</script>

<style scoped>
.exercises {
  width: 100%;
}
</style>
