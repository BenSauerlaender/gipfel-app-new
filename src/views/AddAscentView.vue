<template>
  <ion-text color="dark">
    <ion-item-group>
      <ion-item-divider>
        <ion-label>Weg</ion-label>
      </ion-item-divider>
      <ion-item>
        <ion-label>Gebiet:</ion-label>
        <ion-chip>
          <ion-label>Gebiet der Steine</ion-label>
        </ion-chip>
      </ion-item>
      <ion-item>
        <ion-label>Gipfel:</ion-label>

        <ion-buttons id="trigger-gebiet" size="small" class="ion-margin-end">
          <ion-chip>
            <ion-label>auswählen</ion-label>
          </ion-chip></ion-buttons
        >
      </ion-item>
      <ion-item>
        <ion-label>Weg:</ion-label>

        <ion-buttons size="small" class="ion-margin-end">
          <ion-chip>
            <ion-label>auswählen</ion-label>
          </ion-chip></ion-buttons
        >
      </ion-item>
      <ion-item-divider>
        <ion-label>Seilgruppe</ion-label>
      </ion-item-divider>
      <ion-item>
        <ion-label>Vorstieg:</ion-label>

        <ion-chip>
          <ion-avatar>
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
          <ion-label>Kay</ion-label>
        </ion-chip>
      </ion-item>
      <ion-item>
        <ion-label>Weitere:</ion-label>

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
        <ion-avatar class="avatar">
          <img
            src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          />
        </ion-avatar>
      </ion-item>
    </ion-item-group>
  </ion-text>
  <ion-modal
    :breakpoints="[0.0, 0.4, 0.9]"
    :initialBreakpoint="0.4"
    trigger="trigger-gebiet"
  >
    <ion-content>
      <ion-searchbar></ion-searchbar>
      <ion-list> </ion-list>
    </ion-content>
  </ion-modal>
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
  IonSearchbar,
  IonText,
  IonItemGroup,
  IonChip,
  IonItemDivider,
} from "@ionic/vue";

export default defineComponent({
  name: "AddAscentView",
  components: {
    IonContent,
    IonSearchbar,
    IonList,
    IonModal,
    IonText,
    IonItemGroup,
    IonAvatar,
    IonItem,
    IonButtons,
    IonChip,
    IonLabel,
    IonItemDivider,
  },
});
</script>

<style scoped>
ion-item-divider {
  margin-top: 10px;
}
.avatar {
  width: 20px;
  height: 20px;
  margin-left: 5px;
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
