# Usa un'immagine di Node.js
FROM node:18

# Imposta la directory di lavoro
WORKDIR /app

# Copia il package.json e il package-lock.json (se presente)
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto del codice sorgente
COPY . .

# Espone la porta utilizzata da React
EXPOSE 3000

# Comando predefinito per avviare il server di sviluppo React
CMD ["npm", "start"]
