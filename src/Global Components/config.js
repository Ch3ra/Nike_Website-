export let config = {
    headers: {
     Authorization: localStorage.getItem("token"),
   },
 }

 export let baseURl = "https://ecommerce-backend-88p8.onrender.com/api/"