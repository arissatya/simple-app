import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonAlert, IonGrid, IonLabel, IonRow, IonCol, IonItem, IonInput, IonButton, IonIcon } from '@ionic/react';
import { enterOutline, personAdd } from "ionicons/icons"
import { loginUser, registerUser } from '../config/firebase'
import LoginRegister from '../components/LoginRegister'
import './LoginPageStyle.css'

const LoginPage: React.FC = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false)
  const [userType, setUserType] = useState<'login' | 'register'>('login')

  const login = async () => {
    const res = await loginUser(email, password)
    console.log(`${res ? 'login success' : 'login failed'}`)
    if (!res) { setError(true) }
    else {history.push('/home')}
  }

  const register = async () => {
    if (password === confirmPassword) {
      const res = await registerUser(email, password)
      console.log(`${res ? 'login success' : 'login failed'}`)
      if (!res) { setError(true) }
    } else {
      setError(true)
    }
  }

  const clearError = () => {
    setError(false)
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const userInputTypeHandler = (type: 'login' | 'register') => {
    setUserType(type)
  }

  return (
    <React.Fragment>
      <IonAlert isOpen={!!error} message="check input email or password" buttons={[{ text: "okay", handler: clearError }]} />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <b>Hello App</b>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTitle className="ion-text-center">
                  welcome!
                </IonTitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <LoginRegister selectedVal={userType} onSelectedVal={userInputTypeHandler} />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">email</IonLabel>
                  <IonInput
                    pattern="email"
                    type="email"
                    value={email}
                    onIonChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                    id="resetEmail"
                    required
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">password</IonLabel>
                  <IonInput
                    pattern="password"
                    type="password"
                    value={password}
                    onIonChange={(e) => setPassword((e.target as HTMLInputElement).value)}
                    id="resetEmail"
                    required
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            {
              userType === 'register' &&
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">confirm password</IonLabel>
                    <IonInput
                      pattern="password"
                      type="password"
                      value={confirmPassword}
                      onIonChange={(e) => setConfirmPassword((e.target as HTMLInputElement).value)}
                      id="resetEmail"
                      required
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
            }
            {
              userType === 'login' &&
              <IonRow>
                <IonCol className="ion-text-center">
                  <IonButton onClick={login}>
                    <IonIcon slot="start" icon={enterOutline} />
              login
            </IonButton>
                </IonCol>
              </IonRow>
            }
            {
              userType === 'register' &&
              <IonRow>
                <IonCol className="ion-text-center">
                  <IonButton onClick={register}>
                    <IonIcon slot="start" icon={personAdd} />
              register
            </IonButton>
                </IonCol>
              </IonRow>
            }
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default LoginPage;
