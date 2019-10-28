<template>
  <div>
    <table>
      <thead>
        <tr>
          <th align="left" colspan="1"></th>
          <th align="left" colspan="1">Name</th>
          <th align="left" colspan="1">Last listened to</th>
          <th align="left" colspan="1">Last active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(friend, index) in friends" :key="index">
          <td>
            <img :src="friend.url" />
          </td>
          <td>{{friend.name}}</td>
          <td>{{friend.songAndArtist}}</td>
          <td>{{friend.timeString}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
img {
  border-radius: 50%;
  max-height: 7vh;
}
th {
  width: 30%;
}
table {
  border-collapse: collapse;
}
thead {
  border-bottom: gray 1px solid;
}
tbody tr:hover {
  background-color: #D50059 !important;
}
</style>
<script>
export default {
  name: "friendsBrowser",
  data: function() {
    return {
      friends: [
        {
          url: "https://picsum.photos/200",
          name: "Friend One",
          songAndArtist: "Jesus is King",
          timeString: "Now"
        },
        {
          url: "https://picsum.photos/200",
          name: "Friend twooo",
          songAndArtist: "Jesus is King",
          timeString: "18 Hours Ago"
        },
        {
          url: "https://picsum.photos/200",
          name: "Friend tres",
          songAndArtist: "Jesus is King",
          timeString: "18 Hours Ago"
        }
      ]
    };
  }
};
</script>
