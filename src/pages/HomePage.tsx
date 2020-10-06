import React, { useState } from 'react';
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonAlert, IonGrid, IonLabel, IonRow, IonCol, IonItem, IonInput, IonButton, IonIcon } from '@ionic/react';
import { exit } from "ionicons/icons"
import { useHistory } from 'react-router-dom'


const HomePage: React.FC = () => {
  const history = useHistory()

  const logout = () => {
    console.log('logoutt');
    history.push('/')
  }

  return (
    <React.Fragment>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonItem>
              <IonButton onClick={logout}>
                <IonIcon slot="start" icon={exit} />
                logout</IonButton>
            </IonItem>
            <IonTitle>
              <b>Welcome Home</b>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTitle className="ion-text-center">
                  <h1>Home Page Here!</h1>
                </IonTitle>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default HomePage;
