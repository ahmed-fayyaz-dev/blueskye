import { SERVER_URL } from 'src/appConstants';

export const deleteAccountConfig = (data, getState) => {
    const vId = getState().loginUserReducer.data?.crmStudentUser?.vid;

    return {
        method: 'post',
        url: `${SERVER_URL}Home/DeleteContact?UserID=${vId}`,
        headers: {
            'Content-Type': 'application/json',
        },
    };
};
