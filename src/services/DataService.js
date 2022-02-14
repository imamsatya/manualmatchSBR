import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/imamsatya/testdb',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  maxContentLength: Infinity,
  maxBodyLength: Infinity
})


export default {
 
  getData1() {
    return apiClient.get('/data1')
  },
  getData2() {
    return apiClient.get('/data2')
  },
  getData3() {
    return apiClient.get('/data3')
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