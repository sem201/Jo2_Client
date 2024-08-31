import { useNavigate } from "react-router-dom";
import { APISERVER } from "./Apiserver";

export const useReissueToken = () => {
  const navigate = useNavigate();

  const getReissueToken = (setToken) => {
    APISERVER.get('/api/v1/auth/refresh-token',{headers: {
        refreshToken: localStorage.getItem("refreshToken"),
      }})
      .then((res) => {
        const accessToken = res.data.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
        // navigate(`${route}`);
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.status === 403) {
          alert("로그인이 필요합니다.");
          localStorage.clear();
          navigate("/");
        }
      });
  };

  return { getReissueToken };
};
