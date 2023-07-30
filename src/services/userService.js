import * as httpRequest from '~/utils/httpRequest';

export const getSuggestedUser = async (page, perPage) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getFollowingUsers = async (page) => {
    try {
        const res = await httpRequest.get('me/followings', {
            headers: {
                Authorization: `Bearer ${process.env.REACT_AUTH_TOKEN}`,
            },
            params: {
                page: page,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
