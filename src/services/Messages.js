import Axios from "axios";
import constants from "../configs/constants";

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
    return data.friends;
  } catch (err) {
    console.log("err", err);
    return [];
  }
}

async function getMessages(userId, friendId) {
  try {
    const { data } = await Axios.get(
      `${constants.server_url}/messages/${userId}/${friendId}`
    );
    console.log("data", data);
    return data;
  } catch (err) {
    console.log("err", err);
    return [];
  }
}

async function sendMessage(userId, friendId, body) {
  try {
    const { data } = await Axios.post(`${constants.server_url}/messages`, {
      body: body,
      sender: userId,
      receiver: friendId,
    });
    return data;
  } catch (err) {
    return false;
  }
}

export default {
  sendMessage,
  addFriend,
  getFriends,
  getMessages,
};
