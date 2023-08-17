import * as httpRequest from '~/utils/httpRequest';

export const getSuggestedUsers = async ({ page, perPage }) => {
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

export const getFollowingUsers = async ({ page, accessToken }) => {
    try {
        const res = await httpRequest.get('me/followings', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
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

export const followAnUser = async ({ userId, accessToken }) => {
    try {
        return await httpRequest.post(`users/${userId}/follow`, [], {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export const unfollowAnUser = async ({ userId, accessToken }) => {
    try {
        return await httpRequest.post(`users/${userId}/unfollow`, [], {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export const getUserProfile = async ({ nickname, accessToken }) => {
    try {
        const res = await httpRequest.get(`users/@${nickname}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
