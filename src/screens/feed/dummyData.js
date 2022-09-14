import { faker } from '@faker-js/faker';

let arr = [];
//  Order Status = 0 = notRecieved, 1 = preparing, 2 = dispatched,
//                 3 = Recieved, 4 = completed.

for (let i = 0; i < 20; i++) {
    arr.push({
        postId: faker.datatype.uuid(),
        creationTime: faker.date.recent(),
        postImage: faker.image.imageUrl(300, null, 'food', true),
        postStatus: faker.datatype.number({ min: 0, max: 3 }),
    });
}

var postsArr = arr;

export const feedData = {
    feedArr: postsArr,
    status: 'Success',
    message: 'successfully Fetched',
};

export function getPostsFromOffsetId(id = 0, limit = 1) {
    let tempArr = [];
    var tempIndex = null;
    // In case of id = 0/null it will give from the start of arr i.e 0
    switch (id) {
        case 0:
            tempIndex = 0;
            break;
        default:
            tempIndex = postsArr.findIndex(v => v.orderId === id);
            break;
    }

    let endingIndex = tempIndex + limit;

    if (endingIndex >= postsArr.length - 1) {
        return {
            status: 'error',
            message: '⚠️ There are no more orders!',
        };
    }

    for (let index = tempIndex; index <= endingIndex; index++) {
        tempArr.push(postsArr[index]);
    }

    return {
        orders: tempArr,
        status: 'success',
        message: 'successfully Fetched',
    };
}
