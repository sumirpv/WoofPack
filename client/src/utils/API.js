import axios from "axios";

export default {
    createUser:function(data){
        return axios.post("/api/user", userdata)
    },

    deleteUser: function (id) {
        return axios.delete('api/user/'+id)
    },

    updateUser: function (data) {
        return axios.put('/api/user', data)
    },

    createDog: function (data) {
        return axios.post('/api/dog', dogdata)
    },
    deleteDog: function (id) {
        return axios.delete('/api/dog/'+id)
    },
    updateDog: function (data) {
        return axios.put('api/dog', dogdata)
    }


}