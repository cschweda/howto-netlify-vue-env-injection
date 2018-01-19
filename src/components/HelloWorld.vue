<template>
  <div class="hello">
    <br>
    <br> Current environment:

    <strong>{{msg}}</strong>
    <br>
    <br>
    <br> Super secret API key:
    <strong>{{apiKey}}</strong>
  </div>
</template>

<script>
  console.log(process.env.API_KEY)
  export default {
    name: 'HelloWorld',
    mounted: function () {
      console.log(process.env.API_KEY)
    },
    data() {
      return {
        msg: process.env.NODE_ENV,
        apiKey: process.env.API_KEY
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>