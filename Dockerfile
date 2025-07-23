# ใช้ Node.js เวอร์ชั่น 16 เป็น base image
FROM node:16

# สร้างและกำหนด working directory ภายใน container
WORKDIR /usr/src/app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมดในโปรเจกต์
COPY . .

# Build aplication
RUN npm run build

# เปิด port 3000
EXPOSE 3000

# รันแอปพลิเคชัน
CMD [ "npm", "start" ]