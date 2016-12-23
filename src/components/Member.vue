<template>
  <div class="container">
    <img class="image" :src="'https://ywc14.ywc.in.th/backend/' + image.replace('uploads/', '')" />
    <div class="name">{{ name }}</div>
    <button class="button" @click="$emit('vote')">โหวต</div>
  </div>
</template>

<script>
export default {
  props: ['name', 'image', 'facebook']
}
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  width: 100%;
  padding: 1rem;
  height: 100px;

  background: #fff;

  z-index: 1000;
}
.image {
  margin: 0 1rem 0 0;
  border-radius: 3px;
  width: 64px;
}

.name {
  font-size: 1.5rem;
  font-weight: lighter;
}

.button {
  margin-left: auto;

  outline: 0;
  border: 0;
  border-radius: 6px;
  padding: .5rem .8rem;

  font-size: 1rem;
  color: #fff;

  background: #4d5d9d;
}
</style>
