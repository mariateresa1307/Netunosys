import { STATUS } from "../helpers/constantsRedux";
import { GET } from "../services/ditto.services";

const succes = (data) => ({
  type: STATUS.SUCCESS,
  data,
});

export const getAction = () => {
  return (dispatch) => {
    GET().then(
      (response) => {
        dispatch(succes(response.data));
      },
      (error) => {
        console.log(error);
      }
    );
  };
};
