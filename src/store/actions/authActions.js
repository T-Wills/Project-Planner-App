import firebase from "../../config/fbConfig";

export const signIn = credentials => {
  return async (dispatch, getState) => {
    //const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(error => {
        dispatch({ type: "LOGIN_ERROR", error });
      });
  };
};

export const signOut = () => {
  return async (dispatch, getState) => {
    //const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirestore }) => {
    //const firebase = getFirebase();
    const db = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return db
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          })
          .then(() => {
            dispatch({ type: "SIGNUP_SUCCESS" });
          })
          .catch(error => {
            dispatch({ type: "SIGNUP_ERROR", error });
          });
      });
  };
};

/* firestore
      .collection("users")
      .doc(cred.user.uid)
      .set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(error => {
        dispatch({ type: "SIGNUP_ERROR", error });
      }); */

//.doc(res.user.uid)
