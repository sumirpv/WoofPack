import axios from "axios";

export default {
    createUser:function(formData){
        console.log("form data", formData)
        return axios.post("/api/newUser", formData)
    },

    deleteUser: function (id) {
        return axios.delete('api/user/'+id)
    },

    updateUser: function (data) {
        return axios.put('/api/user', data)
    },

    getUserData: function (id) {
        return axios.get('api/user/'+id)
    },

    createDog: function (dogdata) {
        return axios.post('/api/dog', dogdata)
    },
    deleteDog: function (id) {
        return axios.delete('/api/dog/'+id)
    },
    updateDog: function (dogdata) {
        return axios.put('api/dog', dogdata)
    },
    checkIfsession: function (){
        return axios.get("/api/session");
    },
    userLogin: function(user){
        return axios.post("/api/login", user); 
    }
}