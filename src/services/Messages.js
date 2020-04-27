import Axios from "axios";
import constants from "../configs/constants";

function sendMessage(body, userId) {
  console.log(body, userId);
}

async function addFriend(userId, friendCode) {
  try {
    const { data } = await Axios.post(
      `${constants.server_url}/users/add-friend`,
      {
        userOne: userId,
        friendCode: friendCode,
      }
    );
    return data;
  } catch (err) {
    console.log("err", err);
    return false;
  }
}

async function getFriends(userId) {
  try {
    const { data } = await Axios.get(
      `${constants.server_url}/users/friends/${userId}`
    );
    console.log("data.friends", data.friends);
    return data.friends;
  } catch (err) {
    console.log("err", err);
    return [];
  }
}

export default {
  sendMessage,
  addFriend,
  getFriends,
};
