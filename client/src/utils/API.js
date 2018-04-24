import axios from "axios";

export default {
    createUser:function(userdata){
        return axios.post("/api/newUser", userdata)
    },

    deleteUser: function (id) {
        return axios.delete('api/user/'+id)
    },

    updateUser: function (data) {
        return axios.put('/api/user', data)
    },

    createDog: function (dogdata) {
        return axios.post('/api/dog', dogdata)
    },
    deleteDog: function (id) {
        return axios.delete('/api/dog/'+id)
    },
    updateDog: function (dogdata) {
        return axios.put('api/dog', dogdata)
    }
}