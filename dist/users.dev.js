"use strict";

var users = [];

var addUser = function addUser(_ref) {
  var id = _ref.id,
      username = _ref.username,
      room = _ref.room;
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase(); // Validate the data

  if (!username || !room) {
    return {
      error: 'Username and room are required!'
    };
  } // Check for existing user


  var existingUser = users.find(function (user) {
    return user.room === room && user.username === username;
  }); // Validate username

  if (existingUser) {
    return {
      error: 'Username is in use!'
    };
  } // Store user


  var user = {
    id: id,
    username: username,
    room: room
  };
  users.push(user);
  return {
    user: user
  };
};

var removeUser = function removeUser(id) {
  var index = users.findIndex(function (user) {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

var getUser = function getUser(id) {
  return users.find(function (user) {
    return user.id === id;
  });
};

var getUsersInRoom = function getUsersInRoom(room) {
  room = room.trim().toLowerCase();
  return users.filter(function (user) {
    return user.room === room;
  });
};

addUser({
  id: 1,
  username: "manav",
  room: "new"
}); // console.log(getUser(1))
// console.log(getUsersInRoom("new"))

module.exports = {
  addUser: addUser,
  removeUser: removeUser,
  getUser: getUser,
  getUsersInRoom: getUsersInRoom
};