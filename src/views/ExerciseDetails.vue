<template>
  <div>
    <h1>{{ this.$route.params.name }}</h1>
    <card class="exercises">
      <student-list :exerciseId="this.$route.params.id" />
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
    const exerciseService = new ExerciseService();
    this.exercise = await exerciseService.searchExerciseById(
      this.$route.params.name
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
