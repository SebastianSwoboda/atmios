<template>
  <div>
    <h1 class="title">Galerie</h1>
    <carousel
      :perPage="1"
      :autoplay="true"
      :autoplayTimeout="3000"
      :autoplayHoverPause="true"
      :navigationClickTargetSize="20"
    >
      <slide class="center">
        <img 
        class="img1" 
        alt="Atmios Team Image" 
        src="../assets/atmios-team.jpeg" />
      </slide>
      <slide class="center">
        <img
          class="img2"
          alt="Atmios RTF Image"
          src="../assets/atmios-rtf-stand1.jpeg"
        />
      </slide>
      <slide class="center">
        <img
          class="img3"
          alt="Atmios RTF Image"
          src="../assets/atmios-rtf-stand2.jpeg"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Images",
  components: { Carousel, Slide }
};
</script>

<style scoped>
.img1 {
  height: auto;
  max-width: 750px;
  margin: auto auto;
  display: block;
}

@media screen and (max-width: 761px) {
  .img1 {
    height: auto;
    max-width: 100%;
    margin: auto auto;
    display: block;
  }
}
.img2 {
  width: auto;
  max-height: 650px;
  margin: auto auto;
  display: block;
}
.img3 {
  width: auto;
  max-height: 650px;
  margin: auto auto;
  display: block;
}

.center {
  display: flex;
  justify-content: center;
}

.title {
  text-align: center;
  font-size: 200%;
  margin-top: 20px;
}
</style>
