import axios from 'axios'

// const apiClient = axios.create({
//   baseURL: 'https://my-json-server.typicode.com/imamsatya/testdb2',
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   },
//   maxContentLength: Infinity,
//   maxBodyLength: Infinity
// })
// https://matcha-dev.bps.go.id/matcha-backend
const apiClientSbr = axios.create({
  // baseURL: process.env.BACKEND_URL,
  baseURL: "https://matcha-dev.bps.go.id/matcha-backend",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  maxContentLength: Infinity,
  maxBodyLength: Infinity
})


export default {
//  getDummySBR(){
//   return apiClient.get('/dataSBR')
//  },
//   getData1() {
//     return apiClient.get('/data1')
//   },
//   getData2() {
//     return apiClient.get('/data2')
//   },
//   getData3() {
//     return apiClient.get('/data3')
//   },

// getDataSBR($id){
//   return apiClientSbr.get('/assessment-backend/api/assessment?user='+$id)
// },

// getPetugas(){
//   return apiClientSbr.get('/assessment-backend/api/petugas')
// },
// postDataSBR($data){
//   return apiClientSbr.post('/assessment-backend/api/assessment', $data)
// },

//Authentication
  login(authData){
    return apiClientSbr.post('/api/login', authData)
  }, 
  getCurrentUser(){
    return apiClientSbr.get('/api/users/current')
  },

//User
addNewUser($data){
  return apiClientSbr.post('/api/users', $data)
},

//Assessment
  getDataAssessment($idKegiatan, $idUser){
 
    return apiClientSbr.get('/api/kegiatan/'+$idKegiatan+'/assessment/users/'+$idUser)
  },
  postDataAssessment($data, $idKegiatan, $idUser){
    return apiClientSbr.post('/api/kegiatan/'+$idKegiatan+'/assessment/users/'+$idUser, $data)
  },

  //Get Kegiatan Aktif
  getKegiatanActiveMatching(){
    return apiClientSbr.get('/api/kegiatan?type=matching&status=active')
  },
  getKegiatanActiveAssessment(){
    return apiClientSbr.get('/api/kegiatan?type=assessment&status=active')
  },
  getKegiatanActiveMatchingAssessment($tipeKegiatan){
    return apiClientSbr.get('/api/kegiatan?type='+$tipeKegiatan+'&status=active')
  },

//Matching
  getDataMatching($id_kegiatan, $idUser){
    return apiClientSbr.get('/api/kegiatan/'+$id_kegiatan+'/matching/users/'+$idUser)
  },
  postDataMatching($id_kegiatan, $idUser, $data){
    return apiClientSbr.post('/api/kegiatan/'+$id_kegiatan+'/matching/users/'+$idUser, $data)
  },


  getAllUsers(){
    return apiClientSbr.get('/api/users')
  },
  getUsers(){
    return apiClientSbr.get('/api/users?role=user')
  },
  getKegiatanActive(){
    return apiClientSbr.get('/api/kegiatan?status=active')
  },
  getKegiatanData($id){
    return apiClientSbr.get('/api/kegiatan/'+$id+'/dashboard/admin')
  },
  getKegiatanDataUser($id){
    return apiClientSbr.get('/api/users/'+$id+'/dashboard')
  },



  //Kegiatan
  getAllKegiatan(){
    return apiClientSbr.get('/api/kegiatan')
  },
  postKegiatan($data){
    return apiClientSbr.post('/api/kegiatan', $data)
  },
  updateKegiatan($id, $data){
    return apiClientSbr.put('/api/kegiatan/'+$id, $data)
  },
  deleteKegiatan($id, $data){
    return apiClientSbr.delete('/api/kegiatan/'+$id, $data)

  },

  //Alokasi
  // getUsersKegiatanMatching($id){
  //   return apiClientSbr.get('matcha-backend/api/kegiatan/'+$id+'/matching/alokasi')
  // },
  // submitAlokasiMatching($id, $data){
  //   return apiClientSbr.post('matcha-backend/api/kegiatan/'+$id+'/matching/alokasi', $data)
  // },
  // getUsersKegiatanAssessment($id){
  //   return apiClientSbr.get('matcha-backend/api/kegiatan/'+$id+'/assessment/alokasi')
  // },
  // submitAlokasiAssessment($id, $data){
  //   return apiClientSbr.post('matcha-backend/api/kegiatan/'+$id+'/assessment/alokasi', $data)
  // },
  // deleteAlokasiMatching($idKegiatan, $idUser){
  //   return apiClientSbr.delete('matcha-backend/api/kegiatan/'+$idKegiatan+'/matching/alokasi/users/'+$idUser)
  // },

  //Alokasi Efisien
  getUsersKegiatan($id, $tipeAlokasi){
    return apiClientSbr.get('/api/kegiatan/'+$id+'/'+$tipeAlokasi+'/alokasi')
  },
  submitAlokasi($id, $tipeAlokasi, $data){
    return apiClientSbr.post('/api/kegiatan/'+$id+'/'+$tipeAlokasi+'/alokasi', $data)
  },
  deleteAlokasi($idKegiatan, $tipeAlokasi, $idUser){
    return apiClientSbr.delete('/api/kegiatan/'+$idKegiatan+'/'+$tipeAlokasi+'/alokasi/users/'+$idUser)
  }


}


// "data1": [
//   {
//     "id": 1,
//     "var1": "value 1",
//     "var2": "value 2",
//     "var3": "value 3",
//     "var4": "value 4",
//     "var5": "value 5",
//     "var6": "value 6",
//     "var7": "value 7",
//     "var8": "value 8",
//     "var9": "value 9",
//     "var10": "value 10",
//     "var11": "value 11",
//     "var12": "value 12",
//     "var13": "value 13",
//     "var14": "value 14",
//     "var15": "value 15",
//     "var16": "value 16",
//     "var17": "value 17",
//     "var18": "value 18",
//     "var19": "value 19",
//     "var20": "value 20",
//   }
// ],
// "data2": [
//   {
//     "id": 2,
//     "var1": "value 1",
//     "var2": "value 2",
//     "var3": "value 3",
//     "var4": "value 4",
//     "var5": "value 5",
//     "var6": "value 6",
//     "var7": "value 7",
//     "var8": "value 8",
//     "var9": "value 9",
//     "var10": "value 10",
//     "var11": "value 11",
//     "var12": "value 12",
//     "var13": "value 13",
//     "var14": "value 14",
//     "var15": "value 15",
//     "var16": "value 16",
//     "var17": "value 17",
//     "var18": "value 18",
//     "var19": "value 19",
//     "var20": "value 20",
//   }
// ],
//  "data3": [
//   {
//     "id": 2,
//     "var1": "value 1",
//     "var2": "value 2",
//     "var3": "value 3",
//     "var4": "value 4",
//     "var5": "value 5",
//     "var6": "value 6",
//     "var7": "value 7",
//     "var8": "value 8",
//     "var9": "value 9",
//     "var10": "value 10",
//     "var11": "value 11",
//     "var12": "value 12",
//     "var13": "value 13",
//     "var14": "value 14",
//     "var15": "value 15",
//     "var16": "value 16",
//     "var17": "value 17",
//     "var18": "value 18",
//     "var19": "value 19",
//     "var20": "value 20",
//   }
// ]