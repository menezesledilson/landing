# Use uma imagem oficial do nginx como imagem base
FROM nginx:alpine 

# Copie os arquivos HTML para o diretório HTML do nginx
COPY landing-page-fsmsss /usr/share/nginx/html

# Exponha a porta 80
 EXPOSE 80 

# Inicie o nginx quando o contêiner iniciar
 CMD [ "nginx" , "-g" , "daemon off;" ]