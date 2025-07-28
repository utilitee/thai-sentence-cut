````markdown
# การตัดข้อความภาษาไทยโดยไม่นับสระลอยและวรรณยุกต์ (API)

โปรเจกต์นี้คือ API สำหรับการตัดข้อความภาษาไทยตามความยาวที่กำหนด โดยจะไม่นับสระลอยและวรรณยุกต์บางตัว ทำให้การคำนวณความยาวเหมาะสมกับการแสดงผลมากขึ้น

## การใช้งานผ่าน Docker

**1. Build Docker Image:**
```bash
docker build -t thai-sentence-cut-api .
````

**2. Run Docker Container:**

```bash
docker run -p 3000:3000 -d thai-sentence-cut-api
```

เมื่อ container ทำงานแล้ว API จะพร้อมใช้งานที่ `http://localhost:3000`

-----

## API Endpoints

### 1\. `/length`

นับความยาวของข้อความภาษาไทย (ไม่นับสระลอยและวรรณยุกต์)

  * **Method:** `POST`
  * **Body (JSON):**
    ```json
    {
      "text": "ข้อความภาษาไทย"
    }
    ```
  * **Response (JSON):**
    ```json
    {
      "length": 15
    }
    ```

### 2\. `/split`

ตัดข้อความและ trả về เป็น Array ของข้อความ

  * **Method:** `POST`
  * **Body (JSON):**
    ```json
    {
      "text": "ประโยคยาวๆ ที่ใช้ทดสอบการตัดคำ",
      "maxLength": 10
    }
    ```
  * **Response (JSON):**
    ```json
    {
      "result": [
        "ประโยคยาวๆ ",
        "ที่ใช้ทดสอบ",
        "การตัดคำ"
      ]
    }
    ```

### 3\. `/split-and-break`

ตัดข้อความเป็นข้อความเดียว (single text) โดยคั่นแต่ละส่วนด้วย `\n` (ขึ้นบรรทัดใหม่)

  * **Method:** `POST`
  * **Body (JSON):**
    ```json
    {
      "text": "ประโยคยาวๆ ที่ใช้ทดสอบการตัดคำทุกๆ 10 ตัวอักษร",
      "maxLength": 10
    }
    ```
  * **Response (Text):**
    ```
    ประโยคยาวๆ
    ที่ใช้ทดสอบ
    การตัดคำทุกๆ
    10 ตัวอักษร
    ```

-----

## Dependency

  * [wordcut](https://www.npmjs.com/package/wordcut)
  * [express](https://www.npmjs.com/package/express)

<!-- end list -->

```
```
