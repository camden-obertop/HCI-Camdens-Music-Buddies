<template>
  <div>
    <table>
      <thead>
        <tr>
          <th colspan="1"></th>
          <th colspan="1">Name</th>
          <th colspan="1">Last listend to</th>
          <th colspan="1">Last active</th>
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
td {
  text-align: center;
}
th {
  width: 25%;
}
tbody tr:nth-child(odd) {
  background-color: lightgray;
}
table {
  border-collapse: collapse;
}
thead {
  border-bottom: gray 1px solid;
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
          songAndArtist: "Jesus is king - Kanye West",
          timeString: "Now"
        },
        {
          url: "https://picsum.photos/200",
          name: "Friend twooo",
          songAndArtist: "Jesus is king - Kanye West",
          timeString: "18 Hours Ago"
        },
        {
          url: "https://picsum.photos/200",
          name: "Friend tres",
          songAndArtist: "Jesus is king - Kanye West",
          timeString: "18 Hours Ago"
        }
      ]
    };
  }
};
</script>
