
import firebaseInit from './../components/Authintication/Firebase/FirebaseInit/FirebaseInit';
import { getAuth, createUserWithEmailAndPassword,FacebookAuthProvider,updateProfile,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail,getIdToken,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useState, useEffect} from 'react';

firebaseInit()


    const useFirebase = ()=>{
        const [user,setUser] = useState({})
        const auth = getAuth();
        const [error,setError] = useState('')
        const [isLoading,setIsLoading] = useState(true)
        const googleProvider = new GoogleAuthProvider();
        const [admin,setAdmin] = useState(false)
        const facebookProvider = new FacebookAuthProvider();


        // register 
        const RegisterUser = (email,password,navigate,name,location) =>{
            setIsLoading(true)
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    
            // send name to firebaase after createion 
                        const newUser = {email,displayName:name}
                        setUser(newUser)
                        updateProfile(auth.currentUser, {
                            displayName: name
                          }).then(() => {  
                          }).catch((error) => {
                          });
            // send name to firebaase after createion 
                    saveUser(email,name,'POST')
                    navigate('/')
                    setError('') 
                    const destinatetion = location?.state?.from || '/'
                    navigate(destinatetion)
                })
                .catch((error) => {
                    setError(error.message)
                })
                .finally(()=>setIsLoading(false));;
        }
        // login 

        const loginUser = (email,password,location,navigate)=>{
            setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const destinatetion = location?.state?.from || '/'
                    navigate(destinatetion)
                   setError('')
                })
                .catch((error) => {
                    setError(error.message);
            })
            .finally(()=>setIsLoading(false));;
        }
        // state Change 
        useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                    getIdToken(user)
                    .then(idToken =>{
                        
                    })
                  } else {
                    setUser({})
                  }
              setIsLoading(false)
            });
            return ()=> unSubscribe;
        },[])

        //Logout
        const logout = ()=>{
            signOut(auth).then(() => {
                // Sign-out successful.
              }).catch((error) => {
                // An error happened.
              })
              .finally(()=>setIsLoading(false));;
        }

        // reset Email 
        const resetUserEmail = (email)=>{
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    setError('')
                })
                .catch((error) => {
                    setError(error.message);
            });
        }
        //reset User
        const saveUser = (email,displayName,method)=>{
            const user = {email,displayName}
                fetch('https://obscure-sierra-80533.herokuapp.com/usersCollection',{
                    method:method,
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(user)
                })
        }

        const googleSingIn = ()=>{
            signInWithPopup(auth, googleProvider)
                .then((result) => {
                    const user = result.user
                    saveUser(user.email,user.displayName,'PUT')
                    setError('')
                }).catch((error) => {
                    setError(error.message);
                });

        } 

        const facebookSingIn = ()=>{
            signInWithPopup(auth, facebookProvider)
                .then((result) => {
                    const user = result.user
                    saveUser(user.email,user.displayName,'PUT')
                    setError('')
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
        // ADMIN 
        useEffect(()=>{
            fetch(`https://obscure-sierra-80533.herokuapp.com/usersCollection/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
        },[user.email])


        return {
            user,
            loginUser,
            RegisterUser,
            logout,
            error,
            resetUserEmail,
            isLoading,
            googleSingIn,
            admin,
            facebookSingIn
        }
    }

export default useFirebase;