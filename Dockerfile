# Étape 1 : Utiliser une image de base Nginx
FROM nginx:alpine

# Étape 2 : Copier les fichiers de l'application dans le répertoire par défaut de Nginx
COPY . /usr/share/nginx/html

# Étape 3 : Exposer le port 80
EXPOSE 80

# Étape 4 : Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
