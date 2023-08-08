import apiUrls from "../constants/apiUrls";
import { useDispatch } from "react-redux";
import { getSentiment } from "../view/pages/HomePage/dailySentimentSlice";
import axios from "axios";

const baseUrl = "http://ec2-13-58-190-71.us-east-2.compute.amazonaws.com/";

const useCoinActions = () => {
  const dispatch = useDispatch();

  const predictionListing = (params) => {
    axios
      .get(baseUrl + apiUrls.Top_Stock_Sentiment)
      .then((response) => {
        // Handle response
        const data = response.data.data;
        console.log(data, 6666666);

        if (data) dispatch(getSentiment(data));
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  };

  return { predictionListing };
};
export { useCoinActions };
