export NODE_OPTIONS=--max_old_space_size=4096
cd /home/apps/cli
git pull
npm i
npm run build
#cp -r -f build/* /var/www/html