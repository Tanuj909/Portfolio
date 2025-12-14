import axiosInstance from "../api/axiosInstance";
import { CONTACT_API } from "../api/endPoints";

export const sendContactInfo = async (data) => {

    return axiosInstance.post(CONTACT_API.SEND_MESSAGE,data)

}