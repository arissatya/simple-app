import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react'
import React from 'react'

const LoginRegister: React.FC<{ selectedVal: 'login' | 'register'; onSelectedVal: (value: 'login' | 'register') => void }> = props => {
  const LoginRegisterValHandler = (event: CustomEvent) => {
    props.onSelectedVal(event.detail.value)
  }

  return (
    <IonSegment value={props.selectedVal} onIonChange={LoginRegisterValHandler}>
      <IonSegmentButton value="login">
        <IonLabel>
          LOGIN
        </IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="register">
        <IonLabel>
          REGISTER
        </IonLabel>
      </IonSegmentButton>
    </IonSegment>
  )
}

export default LoginRegister