import React from 'react'
import firebase from 'firebase';
import LoginSenha from './LoginSenha';

const emailSenha = () => {
const buttonSignUp = document.querySelector('button[name=signup]');
const buttonSignIn = document.querySelector('button[name=signin]');

const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password');

const firebaseAuth = firebase.auth();

buttonSignUp.addEventListener('click', ()=> {
    firebaseAuth.createUserWithEmailAndPassword(inputEmail.value , inputPassword.value);
    then(result => {
        alert('Conta criada com sucesso');
        console.log(result);
        const user = result.user;
        user.sendEmailVerification().then (r => {
            alert('Um email de confirmação foi enviado');
        }).catch ( err => {
            'Houve um erro'
        })
    }) .catch(err => {
        alert('Houve um erro ao criar a conta');
        console.log(err);
    })


});

buttonSignIn.addEventListener('click', ()=>{
    firebaseAuth.signInWithEmailAndPassword(inputEmail.value , inputPassword.value);
    then (result => {
        console.log(result);
    }) .catch ( err => {
        console.error(err);
    })
})
}
export default emailSenha;