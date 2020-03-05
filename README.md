This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Voting App using Firebase

Step to get it up and running

1. run `npm install`

2. create a firebase config file in path `src/config/firebase.js`. Get the config from your firebase database dashboard settings

3. create a firebase collection like:

```json
{
 "collection": [
  "admin": {
    "admin": {
      "username": "string",
      "password": "string"
    }
  },
  "calon": {
    "default_key": {
      "calon_1_nama": "string",
      "calon_1_nim": "string",
      "calon_2_nim": "string",
      "calon_2_nim": "string",
      "foto_kampanye": "link_to_firebase_storage",
      "nomor_urut": "int",
      "perolehan_suara": "int",
      "tanggal_pendaftaran": "datetime",
    }
  },
  "mahasiswa": {
    "nim": {
      "fakultas": "string",
      "jurusan": "string",
      "memilih": "bool",
      "nama": "string"
    }
  },
]
}
```

4. look up routes at `App.js`

5. insert API bearer key on `src/components/pages/TatacaraPage.js @testVision`