import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4MywidXNlcm5hbWUiOiJkZWViYXJpem8iLCJpYXQiOjE1NzE3MTE0MDQsImV4cCI6MTU3MjY2MTgwNH0.WsZEhAU-WfgVidMgg8cZLdP_Lune19Xv6kMLdk2A-Gc"
    }
  });
};

export default axiosWithAuth;
