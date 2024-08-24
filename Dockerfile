# Usa un'immagine di Node.js
FROM node:18

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file package.json e package-lock.json (o yarn.lock)
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto del codice sorgente
COPY . .

# Espone la porta utilizzata da Vite
EXPOSE 5174

# Comando predefinito per avviare il server di sviluppo Vite
CMD ["npm", "run", "dev"]
