<template>
  <ion-text color="dark">
    <ion-item-group>
     <ion-card v-for="i in 10" :key="i">
    <ion-card-header>
      <ion-card-subtitle class="ion-justify-content-between">
        Falkenstein
        <span class="ion-text-end ion-float-right">
        23.06.2019   
           </span>
      </ion-card-subtitle>
      <ion-card-title>Schusterweg</ion-card-title>
    </ion-card-header>
    <ion-card-content>
    <div class="ion-float-left">
        <ion-avatar  class="avatar">
          <img
            src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          />
        </ion-avatar>
        <ion-avatar class="avatar">
          <img
            src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          />
        </ion-avatar>
        <ion-avatar class="avatar">
          <img
            src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          />
        </ion-avatar>
        <ion-avatar class="avatar">
          <img
            src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          />
        </ion-avatar>
    </div>
    <div class="ion-float-right chipContainer">
          <ion-chip class="chip">
            <ion-label>Solo</ion-label>
          </ion-chip>
          <ion-chip class="chip">
          <ion-label>Teilversuch</ion-label>
          </ion-chip>
    </div>
    </ion-card-content>
     </ion-card>
    </ion-item-group>
  </ion-text>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonAvatar,
  IonLabel,
  IonText,
  IonItemGroup,
  IonChip,
} from "@ionic/vue";

export default defineComponent({
  name: "AddAscentView",
  components: {
    IonText,
    IonItemGroup,
    IonAvatar,
    IonChip,
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
