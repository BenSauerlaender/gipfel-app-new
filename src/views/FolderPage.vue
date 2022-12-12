<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
        <ion-buttons
          id="trigger-button"
          size="small"
          slot="end"
          class="ion-margin-end"
        >
          <ion-avatar slot="start" size="small">
            <img src="https://gravatar.com/avatar" />
          </ion-avatar>
        </ion-buttons>
        <ion-modal
          :breakpoints="[0.0, 0.4, 0.9]"
          :initialBreakpoint="0.4"
          trigger="trigger-button"
        >
          <ion-content>
            <ion-list>
              <ion-item>
                <ion-avatar slot="start">
                  <img src="https://gravatar.com/avatar/" />
                </ion-avatar>
                <ion-label>Alle</ion-label>
              </ion-item>
              <ion-item>
                <ion-avatar slot="start">
                  <img
                    src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                  />
                </ion-avatar>
                <ion-label>Kay</ion-label>
              </ion-item>
              <ion-item>
                <ion-avatar slot="start">
                  <img
                    src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                  />
                </ion-avatar>
                <ion-label>Ben</ion-label>
              </ion-item>
              <ion-item>
                <ion-avatar slot="start">
                  <img
                    src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                  />
                </ion-avatar>
                <ion-label>Hannah</ion-label>
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-modal>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <add-ascent-view v-if='$route.params.id === "Outbox"'/>
      <begehungen v-if='$route.params.id === "Favorites"'/>
      <gipfel v-if='$route.params.id === "Archived"'/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonModal,
  IonLabel,
  IonList,
  IonItem,
} from "@ionic/vue";
import AddAscentView from "./AddAscentView.vue";
import Begehungen from "./AddAscentView2.vue";
import Gipfel from "./AddAscentView3.vue";

export default defineComponent({
  name: "FolderPage",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonModal,
    IonLabel,
    IonList,
    IonItem,
    AddAscentView,
    Begehungen,
    Gipfel,
  },
});
</script>

<style scoped>
ion-avatar {
  width: 40px;
  height: 40px;
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
</style>
