<template>
  <div>
    <div
      class="exercise"
      :class="{ stripe: i % 2 === 0 }"
      v-for="(exercise, i) in exerciseList"
      :key="exercise.id"
    >
      <router-link
        :to="{
          name: 'ExerciseDetails',
          params: { name: exercise.name, id: exercise.id },
        }"
        >{{ exercise.name }}</router-link
      >
      <div>{{ computeAverages(exercise.studentScores) }}</div>
    </div>
  </div>
</template>

<script>
import ExerciseService from '@/services/ExerciseService';

export default {
  data() {
    return {
      exerciseList: [],
    };
  },
  methods: {
    computeAverages: function(studentScoreList) {
      console.log(studentScoreList);
      let total = 0;
      studentScoreList.forEach((student) => {
        if (student.score != null) {
          total += student.score;
        }
      });
      let average = (total / studentScoreList.length).toFixed(2);
      return average;
    },
  },
  async created() {
    const exerciseService = new ExerciseService();
    this.exerciseList = await exerciseService.getEmbeddedInfo('studentScores');
    console.log(this.exerciseList);
  },
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
