// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyB6Eg2Eg2jdXMdXK6cVD7SZTbdD2WzcM3Y',

  authDomain: 'todo-app-e94a7.firebaseapp.com',

  projectId: 'todo-app-e94a7',

  storageBucket: 'todo-app-e94a7.appspot.com',

  messagingSenderId: '271773488731',

  appId: '1:271773488731:web:c42316f51c2db70927d17e',

  measurementId: 'G-892TJR4PVN',
}

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
