function isUsernameError(username) {
  // Verifie si la taille de username est OK
  if (username.length >= 5 && username.length <= 20) {
    // Renvoie 'false' si le username est OK, et aucun message
    return { message: null, value: false };
  }
  // Sinon la fonction renvoie 'true' avec un message d'erreur pour indiquer l'erreur'
  return {
    message: "Le nom d'utilisateur doit contenir 5 à 20 caractères.",
    value: true,
  };
}

function isEmailError(email) {
  if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(email)) {
    return { message: null, value: false };
  }
  return {
    message:
      "Format de l'adresse mail invalide. (Exemple valide : wiki@wilder.fr)",
    value: true,
  };
}

function isPasswordError(password) {
  if (
    /^(?=(?:[^a-z]*[a-z]){2})(?=(?:[^A-Z]*[A-Z]){2})(?=(?:\D*\d){2})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password
    )
  ) {
    return { message: null, value: false };
  }
  return {
    message:
      "Le mot de passe doit contenir 8 à 15 caractères avec au minimun : une majuscule, une minuscule, un chiffre et un caractère spéciale (@ $ ! % * ? &).",
    value: true,
  };
}

function isPassMatchError(password, passconf) {
  if (password === passconf && passconf !== "") {
    return { message: null, value: false };
  }
  return {
    message:
      "Les mots de passes ne correspondent pas, veuillez entrer des mots de passes identiques.",
    value: true,
  };
}

export { isUsernameError, isEmailError, isPasswordError, isPassMatchError };
