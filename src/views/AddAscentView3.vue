<template>
  <ion-text color="dark">
  <ion-accordion-group>
    <ion-accordion value="first">
      <ion-item slot="header" color="light">
        <ion-label>Schrammsteine</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">
        Falkenstein
      </div>
    </ion-accordion>
    <ion-accordion value="second">
      <ion-item slot="header" color="light">
        <ion-label>Second Accordion</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">
        Second Content
      </div>
    </ion-accordion>
    <ion-accordion value="third">
      <ion-item slot="header" color="light">
        <ion-label>Third Accordion</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">
        Third Content
      </div>
    </ion-accordion>
  </ion-accordion-group>
  </ion-text>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonLabel,
  IonText,
} from "@ionic/vue";

export default defineComponent({
  name: "AddAscentView",
  components: {
    IonText,
    IonLabel,
  },
});
</script>

<style scoped>
ion-item-divider {
  margin-top: 10px;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.avatar {
  width: 24px;
  height: 24px;
  margin-left: 5px;
  display: inline-block;
}
.chip {
  font-size: 10px;
  height:24px;
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
}
.chipContainer {
  margin-bottom: 20px;
}
</style>
